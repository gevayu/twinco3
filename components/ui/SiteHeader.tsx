"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Home", href: "/" },
  { label: "Our Methodology", href: "/methodology" },
  { label: "About Us", href: "/about" },
  { label: "Get Inspired", href: "/inspiration" },
];

/** TWINCO wordmark — 6 vector parts exported from Figma (node 123:252), positioned exactly. */
function Logo() {
  const parts = [
    { src: "/images/hero/logo-1.svg", inset: "22.97% 54.55% 0 7.01%" },
    { src: "/images/hero/logo-2.svg", inset: "1.41% 84.22% 5.61% 0" },
    { src: "/images/hero/logo-3.svg", inset: "0 52.93% 5.61% 41.69%" },
    { src: "/images/hero/logo-4.svg", inset: "21.55% 34.85% 5.61% 48.28%" },
    { src: "/images/hero/logo-5.svg", inset: "21.56% 17.72% 4.2% 66.36%" },
    { src: "/images/hero/logo-6.svg", inset: "21.56% 0 4.2% 83.49%" },
  ];
  return (
    <a href="/" className="relative h-[30px] w-[149.571px] shrink-0" aria-label="TWINCO">
      {parts.map((p, i) => (
        <span key={i} className="absolute block" style={{ inset: p.inset }}>
          <img src={p.src} alt="" className="block size-full" />
        </span>
      ))}
    </a>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Transparent while at the very top; picks up the blurred navy bar once scrolling starts. */
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu whenever the route changes. */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-white/10 bg-navy/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[80px] py-[24px] max-md:px-[24px] max-sm:px-[16px] max-sm:py-[16px]">
        <Logo />

        {/* Desktop nav */}
        <div className="flex items-center gap-x-[24px] text-body leading-none [word-break:break-word] max-lg:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                isActive(item.href)
                  ? "font-bold text-white transition-colors"
                  : "font-medium text-mute transition-colors hover:text-white"
              }
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          data-book-cta
          className="bg-brand-gradient flex h-[40px] w-[180px] items-center justify-center rounded-pill border border-solid border-steel px-[24px] py-[10px] text-button font-semibold text-white transition hover:brightness-110 max-lg:hidden"
        >
          Book a session
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="hidden size-[40px] shrink-0 items-center justify-center rounded-[10px] text-white transition hover:bg-white/10 max-lg:flex"
        >
          <span className="relative block h-[16px] w-[24px]">
            <span
              className={`absolute left-0 block h-[2px] w-full rounded bg-white transition-all duration-300 ${
                menuOpen ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-full rounded bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full rounded bg-white transition-all duration-300 ${
                menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <div
        className={`overflow-hidden border-white/10 bg-navy/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-stretch gap-[4px] px-[24px] pb-[24px] pt-[12px] max-sm:px-[16px]">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-[10px] px-[16px] py-[12px] text-body transition-colors ${
                isActive(item.href)
                  ? "bg-white/10 font-bold text-white"
                  : "font-medium text-mute hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            data-book-cta
            onClick={() => setMenuOpen(false)}
            className="bg-brand-gradient mt-[8px] flex h-[44px] items-center justify-center rounded-pill border border-solid border-steel text-button font-semibold text-white transition hover:brightness-110"
          >
            Book a session
          </button>
        </div>
      </div>
    </header>
  );
}
