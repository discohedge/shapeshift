"use client";

import { useState } from "react";
import Link from "next/link";
import { JumpArrows } from "@/app/components/JumpArrows";
import { SiteHeader } from "@/app/components/SiteHeader";

type ProjectImage = {
  default: string;
  hover?: string;
  process?: boolean;
  placement?: "fabrication" | "shapeChange";
  caption?: string;
  fullWidth?: boolean;
};

type Project = {
  title: string;
  description: string;
  parameters: {
    design: string[];
    fabrication: string[];
    evaluation: string[];
  };
  images: ProjectImage[];
};

type SectionKey = "design" | "fabrication" | "evaluation";
type ZoomHandler = (src: string, alt: string) => void;

function canUseImageZoom() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function isGif(src: string) {
  return src.toLowerCase().endsWith(".gif");
}

const parameterHeadings = new Set([
  "ACTIVE GEOMETRY",
  "RESTRICTIVE GEOMETRY",
  "PRINTING",
  "ACTUATION",
]);

function ParameterLine({ text }: { text: string }) {
  const isHeading = parameterHeadings.has(text.trim().toUpperCase());

  return (
    <p
      className={
        isHeading
          ? "pt-3 font-semibold uppercase tracking-[0.14em] text-neutral-700"
          : ""
      }
    >
      {text}
    </p>
  );
}

function ZoomableImage({
  src,
  alt,
  className,
  onZoom,
}: {
  src: string;
  alt: string;
  className: string;
  onZoom: ZoomHandler;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (canUseImageZoom()) {
          onZoom(src, alt);
        }
      }}
      className="block w-full cursor-none"
      aria-label={`Zoom ${alt}`}
    >
      <img src={src} alt={alt} className={className} />
    </button>
  );
}

function ImagePair({
  image,
  title,
  labels,
  showTitle = true,
  onZoom,
}: {
  image: ProjectImage;
  title: string;
  labels: [string, string];
  showTitle?: boolean;
  onZoom: ZoomHandler;
}) {
  if (!image.hover) {
    return null;
  }

  return (
    <figure className="space-y-4">
      {showTitle && (
        <p className="text-xs uppercase tracking-[0.18em] text-orange-600">
          {title}
        </p>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-3">
          <ZoomableImage
            src={image.default}
            alt={`${title} ${labels[0]}`}
            className="w-full object-contain"
            onZoom={onZoom}
          />
          <p className="text-center text-[10px] uppercase tracking-[0.18em] text-neutral-400">
            {labels[0]}
          </p>
        </div>
        <div className="space-y-3">
          <ZoomableImage
            src={image.hover}
            alt={`${title} ${labels[1]}`}
            className="w-full object-contain"
            onZoom={onZoom}
          />
          <p className="text-center text-[10px] uppercase tracking-[0.18em] text-neutral-400">
            {labels[1]}
          </p>
        </div>
      </div>
    </figure>
  );
}

function BeforeAfterSwipe({
  image,
  onZoom,
}: {
  image?: ProjectImage;
  onZoom: ZoomHandler;
}) {
  const [position, setPosition] = useState(50);

  if (!image?.hover) {
    return null;
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => {
          if (canUseImageZoom()) {
            onZoom(image.hover ?? image.default, "Actuated state");
          }
        }}
        className="relative block w-full cursor-none overflow-hidden"
        aria-label="Zoom main shaping image"
      >
        <img
          src={image.default}
          alt="Printed state"
          className="block w-full object-contain"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={image.hover}
            alt="Actuated state"
            className="h-full w-auto max-w-none object-contain"
            style={{ width: `${position === 0 ? 100 : 10000 / position}%` }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-sky-300/45"
          style={{ left: `${position}%` }}
        />
      </button>
      <div className="space-y-2">
        <p className="text-center text-[10px] uppercase tracking-[0.18em] text-neutral-400">
          Swipe to reveal
        </p>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Compare printed and actuated states"
          className="compare-slider w-full cursor-none"
        />
      </div>
      <div className="flex justify-between text-[10px] uppercase tracking-[0.18em] text-neutral-400">
        <span>Printed</span>
        <span>Actuated</span>
      </div>
    </div>
  );
}

function RestrictionLogics({
  sideGraphics,
  restrictiveDesign,
  projectTitle,
  onZoom,
}: {
  sideGraphics: ProjectImage[];
  restrictiveDesign?: ProjectImage;
  projectTitle: string;
  onZoom: ZoomHandler;
}) {
  const columns = [
    {
      label: "Side A",
      graphic: sideGraphics[0],
      print: restrictiveDesign?.default,
    },
    {
      label: "Side B",
      graphic: sideGraphics[1],
      print: restrictiveDesign?.hover,
    },
  ];

  return (
    <div className="space-y-5">
      <p className="text-xs uppercase tracking-[0.18em] text-orange-600">
        Design of Restrictive Geometry
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {columns.map((column) => (
          <div key={column.label} className="space-y-5">
            {column.graphic && (
              <ZoomableImage
                src={column.graphic.default}
                alt={`${projectTitle} ${column.label} print graphic`}
                className="w-full object-contain"
                onZoom={onZoom}
              />
            )}
            {column.print && (
              <ZoomableImage
                src={column.print}
                alt={`${projectTitle} ${column.label} restrictive line pattern`}
                className="w-full object-contain"
                onZoom={onZoom}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectClient({ project }: { project: Project }) {
  const [open, setOpen] = useState<SectionKey | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const toggle = (key: SectionKey) => {
    setOpen(open === key ? null : key);
  };

  const sections = [
    {
      key: "design",
      label: "Design Parameters",
      data: project.parameters?.design ?? [],
    },
    {
      key: "fabrication",
      label: "Fabrication Parameters",
      data: project.parameters?.fabrication ?? [],
    },
    {
      key: "evaluation",
      label: "Evaluation Criteria",
      data: project.parameters?.evaluation ?? [],
    },
  ] as const;

  const processImages = project.images.filter((img) => img.process);
  const galleryImages = project.images.filter((img) => !img.process);
  const pairedImages = galleryImages.filter((img) => img.hover);
  const restrictiveDesign = pairedImages[0];
  const shapingPairs = pairedImages.slice(1);
  const mainShapingPair = shapingPairs[0];
  const otherViews = shapingPairs.slice(1);
  const fabricationMedia = galleryImages.filter(
    (img) =>
      !img.hover &&
      (isGif(img.default) || img.placement === "fabrication") &&
      img.placement !== "shapeChange",
  );
  const shapeChangeMedia = galleryImages.filter(
    (img) => !img.hover && img.placement === "shapeChange",
  );
  const studyImages = galleryImages.filter(
    (img) =>
      !img.hover &&
      !isGif(img.default) &&
      img.placement !== "fabrication" &&
      img.placement !== "shapeChange",
  );

  return (
    <main id="top" className="min-h-screen bg-white px-5 py-32 font-sans sm:px-8 md:py-40 lg:px-12">
      <SiteHeader />
      <JumpArrows />

      <div className="grid max-w-7xl grid-cols-1 gap-16 pr-8 lg:grid-cols-4">
        <aside className="h-fit text-neutral-500 lg:sticky lg:top-32 lg:col-span-1">
          <h1 className="-mt-12 mb-8 text-5xl font-medium text-orange-600/75">
            {project.title}
          </h1>

          {sections.map((section) => (
            <div key={section.key} className="border-b border-neutral-100 py-4">
              <button
                onClick={() => toggle(section.key)}
                className="w-full text-left text-xs font-light uppercase tracking-[0.16em] text-neutral-500 transition hover:text-neutral-900"
              >
                {section.label}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === section.key ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-1 text-xs font-light leading-relaxed text-neutral-500">
                  {section.data.map((p) => (
                    <ParameterLine key={p} text={p} />
                  ))}
                </div>
              </div>
            </div>
          ))}

        </aside>

        <section className="space-y-24 lg:col-span-3">
          {mainShapingPair && (
            <BeforeAfterSwipe
              image={mainShapingPair}
              onZoom={(src, alt) => setZoomedImage({ src, alt })}
            />
          )}

          {fabricationMedia.length > 0 && (
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-600">
                Fabrication
              </p>
              {fabricationMedia.map((image) => (
                <ZoomableImage
                  key={image.default}
                  src={image.default}
                  alt={`${project.title} fabrication process`}
                  className="mx-auto max-h-[70vh] w-full object-contain"
                  onZoom={(src, alt) => setZoomedImage({ src, alt })}
                />
              ))}
            </div>
          )}

          {(processImages.length > 0 || restrictiveDesign) && (
            <RestrictionLogics
              sideGraphics={processImages}
              restrictiveDesign={restrictiveDesign}
              projectTitle={project.title}
              onZoom={(src, alt) => setZoomedImage({ src, alt })}
            />
          )}

          {(otherViews.length > 0 || shapeChangeMedia.length > 0) && (
            <div className="space-y-10">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-600">
                Shape Change
              </p>
              <div className="space-y-16">
                {otherViews.map((image, index) => (
                  <ImagePair
                    key={image.default}
                    image={image}
                    title={`View ${index + 1}`}
                    labels={["Printed", "Actuated"]}
                    showTitle={false}
                    onZoom={(src, alt) => setZoomedImage({ src, alt })}
                  />
                ))}
                {shapeChangeMedia.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2">
                    {shapeChangeMedia.map((image, index) => (
                      <figure
                        key={image.default}
                        className={`space-y-3 ${image.fullWidth ? "md:col-span-2" : ""}`}
                      >
                        <ZoomableImage
                          src={image.default}
                          alt={`${project.title} shape change image ${index + 1}`}
                          className={`mx-auto w-full object-contain ${
                            image.fullWidth ? "max-h-[70vh]" : ""
                          }`}
                          onZoom={(src, alt) => setZoomedImage({ src, alt })}
                        />
                        {image.caption && (
                          <figcaption className="text-center text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {studyImages.length > 0 && (
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-600">
                Studies
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {studyImages.map((image, index) => (
                  <figure key={image.default} className="space-y-3">
                    <ZoomableImage
                      src={image.default}
                      alt={`${project.title} study image ${index + 1}`}
                      className="w-full object-contain"
                      onZoom={(src, alt) => setZoomedImage({ src, alt })}
                    />
                    {image.caption && (
                      <figcaption className="text-center text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      {zoomedImage && (
        <button
          type="button"
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-[9998] flex cursor-none items-center justify-center bg-white/95 p-6"
          aria-label="Close zoomed image"
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[90vh] max-w-[92vw] object-contain"
          />
          <span className="absolute right-6 top-6 font-sans text-xs uppercase tracking-[0.18em] text-neutral-400">
            Close
          </span>
        </button>
      )}

      <Link
        href="/gallery"
        className="mx-auto mt-24 block max-w-7xl cursor-none pr-8 text-right text-xs uppercase tracking-[0.18em] text-orange-600 transition hover:text-neutral-900"
      >
        ← Back to Gallery
      </Link>

      <div id="page-end" className="h-24" />
    </main>
  );
}
