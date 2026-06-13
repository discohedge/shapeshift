"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const natureStatements = [
  "Nature adapts continuously to its environment.",
  "Pinecones open and close in response to moisture due to anisotropic fiber structures.",
  "4D printing translates these biological principles into self-shaping surfaces with embedded material intelligence.",
  "From hygroscopic cellulose-based filament, objects are printed flat and transform autonomously over time.",
];

const terms = [
  {
    label: "MULTI-STEP",
    accent: "M",
    rest: "ULTI-STEP",
    text: "3D prints can be reoriented for material deposition on its multiple faces. This allows shape-changing behaviors in different directions, enabling more complex forms.",
    media: "/images/andy/anti_andy.gif",
  },
  {
    label: "SECTIONAL",
    accent: "S",
    rest: "ECTIONAL",
    text: "Porous gyroid geometries enable larger, lighter, stronger structures that respond quickly to moisture.",
    media: "/gifs/gyroid.gif",
  },
  {
    label: "4D PRINTING",
    accent: "4D P",
    rest: "RINTING",
    text: "The object is not finished when it leaves the printer. Its final form develops through material response over time.",
    media: "/gifs/mono-shaping.gif",
  },
];

function HeroSection() {
  const [waterProgress, setWaterProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateWater = () => {
      const holdDistance = 180;
      const wipeDistance = 900;
      const progress = Math.min(
        Math.max((window.scrollY - holdDistance) / wipeDistance, 0),
        1,
      );

      setWaterProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateWater);
    };

    updateWater();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-between overflow-hidden bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div
          className="absolute -inset-x-1 -top-2 h-[calc(100%+1rem)] bg-sky-100"
          style={{ transform: `translateY(${waterProgress * 100}%)` }}
        />

        <header className="relative z-10 flex flex-col gap-3 py-4 text-xs uppercase tracking-[0.18em] text-neutral-400 md:flex-row md:justify-between">
          <p>Shape_Shift</p>
          <p>Digital Thesis Exhibit</p>
          <p>ITECH 2025</p>
        </header>

        <div className="relative z-10 flex flex-1 items-center justify-center py-16 text-center">
          <div>
            <h1 className="font-pixel-grid text-[clamp(5.75rem,24vw,20rem)] font-normal uppercase leading-[0.78] tracking-normal">
              <span className="text-sky-200 mix-blend-multiply">MS4DP</span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-orange-600">
              Multi-Step Sectional 4D Printing
            </p>
          </div>
        </div>

        <p className="relative z-10 pb-4 text-center text-xs uppercase tracking-[0.18em] text-white">
          Scroll
        </p>
      </div>
    </section>
  );
}

function NatureSection() {
  return (
    <section className="scroll-nature-stage relative h-[600vh]">
      <div className="sticky top-0 flex h-screen flex-col bg-white">
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-white px-5 sm:px-8">
          <img
            src="/gifs/Pine.gif"
            alt="Pinecone opening and closing in response to moisture"
            className="h-full max-h-full w-full max-w-6xl object-contain object-center"
          />
          <div className="scroll-nature-overlay absolute inset-0 bg-white" />

          <div className="absolute inset-x-5 top-1/2 mx-auto max-w-4xl -translate-y-1/2 text-center sm:inset-x-8">
            {natureStatements.map((statement, index) => (
              <p
                key={statement}
                className={`scroll-nature-text scroll-nature-text-${index} absolute inset-x-0 top-1/2 -translate-y-1/2 text-[clamp(1.35rem,2.8vw,2.9rem)] font-light leading-[1.45] tracking-normal text-neutral-950`}
              >
                {statement}
              </p>
            ))}
          </div>
        </div>

        <p className="px-5 py-4 text-center text-xs font-light leading-relaxed text-neutral-500 sm:px-8">
          Video courtesy the Morphing Matter Lab at Carnegie Mellon University,
          GIF by Brandon Echter. Source:{" "}
          <Link
            href="https://www.sciencefriday.com/articles/no-assembly-hardware-required/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none text-orange-600 transition hover:text-neutral-900"
          >
            Science Friday
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function LimitationSection() {
  return (
    <section className="scroll-limitation-stage relative h-[360vh] px-5 sm:px-8 lg:px-12">
      <div className="sticky top-0 flex h-screen items-start justify-center pt-20 md:pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          <p className="scroll-limitation-text mx-auto max-w-5xl text-center text-[clamp(1.35rem,2.8vw,2.9rem)] font-light leading-[1.45] tracking-normal text-neutral-950">
            This has been used for weather-responsive shading systems that require no additional energy or mechanisms to operate.
          </p>

          <div className="scroll-solargate-images grid gap-5 md:grid-cols-2">
            <img
              src="/images/home/SolarGate_Open.jpg"
              alt="SolarGate open state"
              className="h-[30vh] w-full object-cover md:h-[46vh]"
            />
            <img
              src="/images/home/SolarGate_Closed.jpg"
              alt="SolarGate closed state"
              className="h-[30vh] w-full object-cover md:h-[46vh]"
            />
          </div>

          <p className="scroll-solargate-images mx-auto max-w-3xl text-center text-xs font-light leading-relaxed text-neutral-500">
            Weather-responsive shading system in open and closed states.
            Developed by the Institute for Computational Design and Construction
            (ICD), University of Stuttgart. Photographs © ICD/IntCDC University
            of Stuttgart. Source:{" "}
            <Link
              href="https://www.icd.uni-stuttgart.de/projects/solar-gate/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-none text-orange-600 transition hover:text-neutral-900"
            >
              Solar Gate Project
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function BreakdownIntro() {
  return (
    <section className="scroll-intro-stage relative h-[280vh] px-5 text-center sm:px-8 lg:px-12">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <p className="scroll-intro-question mx-auto max-w-4xl text-[clamp(1.35rem,2.8vw,2.9rem)] font-light italic leading-[1.45] tracking-normal text-neutral-400">
          But could shape change extend beyond the surface?
        </p>
        <p className="scroll-intro-answer absolute mx-auto max-w-4xl text-[clamp(1.35rem,2.8vw,2.9rem)] font-light leading-[1.45] tracking-normal text-neutral-950">
          <span className="text-orange-600">MS4DP</span> explores one possible answer.
        </p>
      </div>
    </section>
  );
}

function TermItem({
  term,
  index,
}: {
  term: (typeof terms)[number];
  index: number;
}) {
  return (
    <div className="space-y-5">
      <h2
        className={`scroll-term-title scroll-term-title-${index} origin-left font-pixel-grid text-[clamp(2.5rem,6vw,6rem)] font-normal uppercase leading-[0.86] tracking-normal`}
      >
        <span className="text-orange-600">{term.accent}</span>
        {term.rest}
      </h2>
      <p
        className={`scroll-term-description scroll-term-description-${index} max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-xl`}
      >
        {term.text}
      </p>
    </div>
  );
}

function BreakdownSection() {
  return (
    <section className="scroll-term-stage relative h-[900vh] px-5 sm:px-8 lg:px-12">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="grid w-full items-center gap-8 md:grid-cols-2 lg:gap-10">
          <div className="flex min-w-0 flex-col gap-10">
            {terms.map((term, index) => (
              <TermItem key={term.label} term={term} index={index} />
            ))}
          </div>

          <div className="relative h-[28vh] min-h-0 sm:h-[34vh] lg:h-[72vh]">
            {terms.map((term, index) => (
              <div
                key={term.label}
                className={`scroll-term-media scroll-term-media-${index} absolute inset-0 flex items-center justify-center`}
              >
                <img
                  src={term.media}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContributionSection() {
  return (
    <section className="scroll-contribution-stage relative h-[380vh] px-5 sm:px-8 lg:px-12">
      <div className="sticky top-0 flex h-screen items-start justify-center pt-20 md:pt-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-24 text-center md:gap-32">
        <p className="scroll-contribution-text mx-auto max-w-4xl font-sans text-[clamp(1.2rem,2.4vw,2.5rem)] font-light leading-[1.45] tracking-normal text-neutral-950">
          From adaptive facades to programmable formwork, MS4DP opens new
          possibilities for architecture that responds, adapts, and transforms
          alongside its environment.
        </p>

        <div className="scroll-contribution-image flex h-[44vh] w-full items-center justify-center bg-neutral-100 font-sans text-xs uppercase tracking-[0.18em] text-neutral-400 md:h-[62vh]">
          Placeholder image
        </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section
      id="archive"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8 lg:px-12"
    >
      <img
        src="/gifs/breathing.gif"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/60" />
      <Link
        href="/demonstrators"
        className="relative inline-flex items-center justify-center border border-orange-600 bg-transparent px-10 py-5 font-sans text-base font-medium uppercase tracking-[0.16em] text-orange-600 backdrop-blur-sm transition hover:bg-orange-600 hover:text-white"
      >
        Enter The Gallery
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top" className="bg-white text-neutral-950">
      <nav className="fixed right-5 top-1/2 z-[9000] flex -translate-y-1/2 flex-col items-center gap-10 sm:right-8 lg:right-12">
        <a
          href="#top"
          aria-label="Jump to top"
          className="jump-top font-sans text-sm font-light leading-none text-transparent transition"
        >
          ↑
        </a>
        <a
          href="#archive"
          aria-label="Jump to demonstrators"
          className="jump-bottom font-sans text-sm font-light leading-none text-transparent transition"
        >
          ↓
        </a>
      </nav>

      <HeroSection />

      <div className="h-[70vh] bg-white" />
      <NatureSection />
      <LimitationSection />
      <BreakdownIntro />
      <BreakdownSection />
      <ContributionSection />
      <div className="h-[55vh] bg-white" />
      <ArchiveSection />

    </main>
  );
}
