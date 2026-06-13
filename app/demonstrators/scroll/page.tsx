import {
  ArchiveClient,
  CurvatureFilter,
  ObjectItem,
} from "@/app/demonstrators/ArchiveClient";

const objects: ObjectItem[] = [
  {
    title: "MONTY",
    gif: "/gifs/mono-shaping.gif",
    slug: "mono",
    curvature: "monoclastic",
    params: ["type | monoclastic", "curvature | +0.018 mm-1", "size | 200x200 mm"],
  },
  {
    title: "SUSAN",
    gif: "/gifs/syn-vvribs-shaping.gif",
    slug: "syn_susan",
    curvature: "synclastic",
    params: ["type | synclastic", "curvature | +0.04 mm-1", "size | 200x200x12.5 mm"],
  },
  {
    title: "ANDY",
    gif: "/gifs/anti-edge-shaping.gif",
    slug: "anti_andy",
    curvature: "anticlastic",
    params: ["type | anticlastic", "curvature | -0.008mm-1, +0.01 mm-1", "size | 200x200x12.5 mm"],
  },
  {
    title: "CINDY",
    gif: "/gifs/syn-par-ribs-shaping.gif",
    slug: "syn_cindy",
    curvature: "synclastic",
    params: ["type | synclastic", "curvature | +0.008 mm-1", "size | 200x200x12.5 mm"],
  },
  {
    title: "ANDREW",
    gif: "/gifs/anti-par-ribs-shaping.gif",
    slug: "anti_andrew",
    curvature: "anticlastic",
    params: ["type | anticlastic", "curvature | -0.015mm-1, +0.003 mm-1", "size | 200x200x12.5 mm"],
  },
  {
    title: "CINTHIA",
    gif: "/gifs/cs-syn-shaping.gif",
    slug: "syn_cinthia",
    curvature: "synclastic",
    params: ["type | synclastic", "curvature | +0.004mm-1, +0.007 mm-1", "size | 200x200x13 mm"],
  },
];

const validFilters: CurvatureFilter[] = [
  "all",
  "synclastic",
  "anticlastic",
  "monoclastic",
];

export default async function ScrollGalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ curvature?: string }>;
}) {
  const params = await searchParams;
  const requestedFilter = params.curvature;
  const activeFilter = validFilters.includes(requestedFilter as CurvatureFilter)
    ? (requestedFilter as CurvatureFilter)
    : "all";

  const visibleObjects =
    activeFilter === "all"
      ? objects
      : objects.filter((object) => object.curvature === activeFilter);

  return (
    <ArchiveClient
      objects={visibleObjects}
      activeFilter={activeFilter}
      basePath="/demonstrators/scroll"
      modeHref="/demonstrators"
      modeLabel="gallery view"
    />
  );
}
