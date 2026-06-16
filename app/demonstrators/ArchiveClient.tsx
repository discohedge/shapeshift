"use client";

import { useState } from "react";
import Link from "next/link";
import { JumpArrows } from "@/app/components/JumpArrows";
import { SiteHeader } from "@/app/components/SiteHeader";

export type CurvatureFilter = "all" | "synclastic" | "anticlastic" | "monoclastic";

export type ObjectItem = {
  title: string;
  gif: string;
  slug: string;
  curvature: Exclude<CurvatureFilter, "all">;
  params: string[];
};

const curvatureFilters: CurvatureFilter[] = [
  "monoclastic",
  "synclastic",
  "anticlastic",
  "all",
];

const filterLabels: Record<CurvatureFilter, string> = {
  all: "All Demonstrators",
  monoclastic: "Monoclastic",
  synclastic: "Synclastic",
  anticlastic: "Anticlastic",
};

export function ArchiveClient({
  objects,
  activeFilter,
  basePath = "/gallery/scroll",
  modeHref = "/gallery",
  modeLabel = "gallery view",
}: {
  objects: ObjectItem[];
  activeFilter: CurvatureFilter;
  basePath?: string;
  modeHref?: string;
  modeLabel?: string;
}) {
  const [activeItem, setActiveItem] = useState<ObjectItem | null>(null);

  return (
    <main id="top" className="min-h-screen bg-white px-5 py-28 font-sans sm:px-8 md:py-32">
      <SiteHeader />
      <JumpArrows />

      <section className="mx-auto mb-24 flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-4 border-b border-neutral-100 pb-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
          {curvatureFilters.map((filter) => (
            <Link
              key={filter}
              href={
                filter === "all"
                  ? basePath
                  : `${basePath}?curvature=${filter}`
              }
              className={`cursor-none font-sans text-[10px] uppercase tracking-[0.18em] transition ${
                activeFilter === filter
                  ? "text-orange-600"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {filterLabels[filter]}
            </Link>
          ))}
          </div>

          <Link
            href={modeHref}
            className="w-fit cursor-none text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition hover:text-orange-600"
          >
            {modeLabel}
          </Link>
        </div>

      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-32">
        {objects.map((object, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={object.slug}
              className={`flex w-full ${isLeft ? "justify-start" : "justify-center"}`}
            >
              <div
                className="group relative w-fit"
                onMouseEnter={() => setActiveItem(object)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <Link href={`/project/${object.slug}`} className="block cursor-none">
                  <img
                    src={object.gif}
                    alt={`${object.title} shaping object`}
                    className="block h-auto w-[200px] object-contain transition-transform duration-500 group-hover:scale-110 sm:w-[280px] md:w-[400px] lg:w-[500px]"
                  />
                </Link>

                {activeItem?.slug === object.slug && (
                  <div className="pointer-events-none absolute left-full top-1/2 ml-6 w-80 -translate-y-1/2 font-sans">
                    <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-orange-600">
                      {object.title}
                    </h2>

                    {object.params.map((param) => (
                      <p
                        key={param}
                        className="max-w-full text-xs font-light uppercase leading-relaxed tracking-[0.14em] text-neutral-500"
                      >
                        {param}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <div id="page-end" className="h-24" />
    </main>
  );
}
