export function JumpArrows({
  bottomHref = "#page-end",
}: {
  bottomHref?: string;
}) {
  return (
    <nav className="fixed bottom-5 right-4 z-[9100] flex w-5 flex-col items-center gap-5 sm:right-6 md:bottom-auto md:right-1 md:top-1/2 md:-translate-y-1/2 md:gap-8 lg:right-2">
      <a
        href="#top"
        aria-label="Jump to top"
        className="flex h-5 w-5 cursor-none items-center justify-center text-center font-sans text-sm font-light leading-none text-neutral-300 transition hover:text-orange-600"
      >
        ↑
      </a>
      <a
        href={bottomHref}
        aria-label="Jump to bottom"
        className="flex h-5 w-5 cursor-none items-center justify-center text-center font-sans text-sm font-light leading-none text-neutral-300 transition hover:text-orange-600"
      >
        ↓
      </a>
    </nav>
  );
}
