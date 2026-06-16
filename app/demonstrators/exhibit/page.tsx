import Link from "next/link";
import { JumpArrows } from "@/app/components/JumpArrows";
import { SiteHeader } from "@/app/components/SiteHeader";

type CurvatureFilter = "all" | "synclastic" | "anticlastic" | "monoclastic";

type ObjectItem = {
  title: string;
  gif: string;
  slug: string;
  curvature: Exclude<CurvatureFilter, "all">;
  params: string[];
  position: string;
};

const filters: CurvatureFilter[] = [
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

const objects: ObjectItem[] = [
  {
    title: "MONTY",
    gif: "/gifs/mono-shaping.gif",
    slug: "mono",
    curvature: "monoclastic",
    params: ["type | monoclastic", "curvature | +0.018 mm-1", "size | 200x200 mm"],
    position: "lg:left-[1%] lg:top-[2%]",
  },
  {
    title: "SUSAN",
    gif: "/gifs/syn-vvribs-shaping.gif",
    slug: "syn_susan",
    curvature: "synclastic",
    params: ["type | synclastic", "curvature | +0.04 mm-1", "size | 200x200x12.5 mm"],
    position: "lg:left-[34%] lg:top-[20%]",
  },
  {
    title: "ANDY",
    gif: "/gifs/anti-edge-shaping.gif",
    slug: "anti_andy",
    curvature: "anticlastic",
    params: ["type | anticlastic", "curvature | -0.008mm-1, +0.01 mm-1", "size | 200x200x12.5 mm"],
    position: "lg:left-[48%] lg:top-[49%]",
  },
  {
    title: "CINDY",
    gif: "/gifs/syn-par-ribs-shaping.gif",
    slug: "syn_cindy",
    curvature: "synclastic",
    params: ["type | synclastic", "curvature | +0.008 mm-1", "size | 200x200x12.5 mm"],
    position: "lg:left-[10%] lg:top-[42%]",
  },
  {
    title: "ANDREW",
    gif: "/gifs/anti-par-ribs-shaping.gif",
    slug: "anti_andrew",
    curvature: "anticlastic",
    params: ["type | anticlastic", "curvature | -0.015mm-1, +0.003 mm-1", "size | 200x200x12.5 mm"],
    position: "lg:left-[69%] lg:top-[0%]",
  },
  {
    title: "CINTHIA",
    gif: "/gifs/cs-syn-shaping.gif",
    slug: "syn_cinthia",
    curvature: "synclastic",
    params: ["type | synclastic", "curvature | +0.004mm-1, +0.007 mm-1", "size | 200x200x13 mm"],
    position: "lg:left-[78%] lg:top-[34%]",
  },
];

export default async function ExhibitArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ curvature?: string }>;
}) {
  const params = await searchParams;
  const requestedFilter = params.curvature;
  const activeFilter = filters.includes(requestedFilter as CurvatureFilter)
    ? (requestedFilter as CurvatureFilter)
    : "all";

  const visibleObjects =
    activeFilter === "all"
      ? objects
      : objects.filter((object) => object.curvature === activeFilter);

  return (
    <main id="top" className="min-h-screen bg-white px-5 pb-8 pt-28 font-sans sm:px-8">
      <SiteHeader />
      <JumpArrows />

      <section className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-neutral-100 pb-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {filters.map((filter) => (
                <Link
                  key={filter}
                  href={
                    filter === "all"
                      ? "/gallery"
                      : `/gallery?curvature=${filter}`
                  }
                  className={`cursor-none text-[10px] uppercase tracking-[0.18em] transition ${
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
              href="/gallery/scroll"
              className="w-fit cursor-none text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition hover:text-orange-600"
            >
              scroll view
            </Link>
          </div>
        </div>

        <div className="relative mt-8 grid gap-x-12 gap-y-24 sm:grid-cols-2 lg:min-h-[980px] lg:flex-1 lg:grid-cols-none">
          {visibleObjects.map((object) => (
            <Link
              key={object.slug}
              href={`/project/${object.slug}`}
              className={`group z-10 cursor-none justify-self-center transition duration-500 hover:z-50 lg:absolute lg:w-64 xl:w-72 ${object.position}`}
            >
              <img
                src={object.gif}
                alt={`${object.title} shaping object`}
                className="mx-auto w-56 object-contain transition duration-500 group-hover:scale-105 sm:w-60 lg:w-full"
              />
              <p className="mt-3 text-center font-sans text-sm font-normal uppercase tracking-[0.18em] text-neutral-500 transition group-hover:text-orange-600">
                {object.title}
              </p>
              <div className="pointer-events-none mx-auto mt-3 min-h-12 w-64 max-w-[80vw] space-y-1 text-center text-[10px] font-light uppercase tracking-[0.14em] text-neutral-400 opacity-0 transition duration-300 group-hover:opacity-100 group-focus:opacity-100">
                {object.params.map((param) => (
                  <p key={param}>{param}</p>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </section>

      <div id="page-end" className="h-8" />
    </main>
  );
}
