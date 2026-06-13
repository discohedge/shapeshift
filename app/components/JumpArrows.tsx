export function JumpArrows({
  bottomHref = "#page-end",
}: {
  bottomHref?: string;
}) {
  return (
    <nav className="fixed right-1 top-1/2 z-[9100] hidden w-5 -translate-y-1/2 flex-col items-center gap-8 sm:right-2 md:flex">
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
