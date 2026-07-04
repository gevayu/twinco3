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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-navy/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[80px] py-[24px] max-md:px-[24px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[12px] max-sm:px-[16px] max-sm:py-[16px]">
        <Logo />
        <div className="flex flex-wrap items-center gap-x-[24px] gap-y-0 text-body leading-none [word-break:break-word]">
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
          className="bg-brand-gradient flex h-[40px] w-[180px] items-center justify-center rounded-pill border border-solid border-steel px-[24px] py-[10px] text-button font-semibold text-white transition hover:brightness-110 max-sm:w-auto"
        >
          Book a session
        </button>
      </nav>
    </header>
  );
}
