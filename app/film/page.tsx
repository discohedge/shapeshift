import { JumpArrows } from "@/app/components/JumpArrows";
import { SiteHeader } from "@/app/components/SiteHeader";

export default function FilmPage() {
  return (
    <main id="top" className="min-h-screen bg-white px-5 pb-8 pt-32 font-sans sm:px-8">
      <SiteHeader />
      <JumpArrows />

      <section className="mx-auto flex h-[calc(100vh-9rem)] max-w-7xl items-center">
        <iframe
          className="h-full w-full bg-neutral-100"
          src="https://www.youtube-nocookie.com/embed/f85nOMarXuI"
          title="Shape_Shift film"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>

      <div id="page-end" className="h-24" />
    </main>
  );
}
