/* eslint-disable @next/next/no-img-element */
const IMG = "/images/about/hero";

const navLinks = [
  { label: "Home", href: "/", active: false },
  { label: "Our Methodology", href: "/methodology", active: false },
  { label: "About Us", href: "/about", active: true },
  { label: "Get Inspired", href: "#", active: false },
];

/** Decorative blurred glow ellipse (exclusion blend), positioned exactly as Figma. */
function GlowEllipse({
  src,
  className,
  boxW,
  boxH,
  innerW,
  innerH,
}: {
  src: string;
  className: string;
  boxW: number;
  boxH: number;
  innerW: number;
  innerH: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute flex items-center justify-center mix-blend-exclusion ${className}`}
      style={{ width: boxW, height: boxH }}
    >
      <div className="flex-none rotate-[4.77deg]">
        <div className="relative" style={{ width: innerW, height: innerH }}>
          <div className="absolute inset-[-76.97%_-35.3%]">
            <img src={src} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start">
        {/* Navigation Bar */}
        <nav className="flex w-full items-center justify-between px-[80px] py-[40px] max-md:px-[24px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[16px]">
          <div className="relative h-[30px] w-[149.571px] shrink-0">
            <img
              src={`${IMG}/logo.svg`}
              alt="TWINCO"
              className="absolute inset-0 block size-full max-w-none"
            />
          </div>
          <div className="flex flex-wrap items-start gap-x-[24px] gap-y-0 text-body leading-none [word-break:break-word]">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={
                  l.active
                    ? "font-bold text-white transition-colors"
                    : "font-medium text-mute transition-colors hover:text-white"
                }
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#"
            className="bg-brand-gradient flex h-[40px] w-[180px] items-center justify-center rounded-pill border border-solid border-steel px-[24px] py-[10px] text-button font-semibold text-white transition hover:brightness-110"
          >
            Book a session
          </a>
        </nav>

        {/* Hero Body — centered tagline */}
        <div className="relative flex w-full items-center justify-center px-[80px] py-[90px] max-md:px-[24px] max-md:py-[48px]">
          <GlowEllipse
            src={`${IMG}/ellipse-1166.svg`}
            className="left-[759px] top-[-63px]"
            boxW={759.354}
            boxH={396.491}
            innerW={733.885}
            innerH={336.571}
          />

          <div className="relative flex flex-col items-center gap-[8px] text-center leading-none">
            <GlowEllipse
              src={`${IMG}/ellipse-1167.svg`}
              className="left-[-317px] top-[-95px]"
              boxW={676.441}
              boxH={353.198}
              innerW={653.753}
              innerH={299.821}
            />
            <div className="relative flex flex-col items-center gap-[8px]">
              <p className="bg-linear-to-b from-cream to-mist bg-clip-text text-title font-normal text-transparent">
                About Twin-Co
              </p>
              <p className="whitespace-nowrap text-h1 font-normal text-white">
                The Human Architects
              </p>
            </div>
            <p className="whitespace-nowrap text-hero font-bold text-gold">
              Behind the AI evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
