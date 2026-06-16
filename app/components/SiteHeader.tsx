import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/film", label: "Film" },
  { href: "/acknowledgements", label: "Acknowledgements" },
];

export function SiteHeader() {
  return (
    <div className="fixed left-0 top-0 z-[9000] w-full bg-white px-5 py-5 sm:px-8 lg:px-12">
      <SiteNav />
    </div>
  );
}

export function SiteNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-sans text-[10px] uppercase tracking-[0.18em] text-neutral-400">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="cursor-none transition hover:text-orange-600"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
