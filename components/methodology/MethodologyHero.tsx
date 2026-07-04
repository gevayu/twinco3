/* eslint-disable @next/next/no-img-element */
const IMG = "/images/methodology-page/hero";

const navLinks = [
  { label: "Home", href: "/", active: false },
  { label: "Our Methodology", href: "/methodology", active: true },
  { label: "About Us", href: "#", active: false },
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

export default function MethodologyHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start">
        {/* Navigation Bar */}
        <nav className="flex w-full items-center justify-between px-[80px] py-[40px] max-md:px-[24px] max-sm:px-[16px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[16px]">
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

        {/* Hero Body */}
        <div className="relative flex w-full items-center justify-center gap-[87px] px-[80px] py-[90px] max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-[32px] max-md:px-[24px] max-sm:px-[16px] max-md:py-[48px]">
          <GlowEllipse
            src={`${IMG}/ellipse-1166.svg`}
            className="left-[759px] top-[-63px]"
            boxW={759.354}
            boxH={396.491}
            innerW={733.885}
            innerH={336.571}
          />

          {/* Left column */}
          <div className="relative flex w-[450px] shrink-0 flex-col items-start gap-[60px] max-lg:w-full max-lg:items-center">
            <div className="relative flex w-full flex-col items-start gap-[8px]">
              <GlowEllipse
                src={`${IMG}/ellipse-1167.svg`}
                className="left-[-317px] top-[-95px]"
                boxW={676.441}
                boxH={353.198}
                innerW={653.753}
                innerH={299.821}
              />

              <div className="relative flex w-full flex-col items-start gap-[8px]">
                <p className="w-full bg-linear-to-b from-cream to-mist bg-clip-text text-title font-normal leading-none text-transparent">
                  The Twin-Co Way
                </p>
                <div className="w-full text-h1 leading-none text-white">
                  <p className="mb-0 leading-none">Our methodology</p>
                  <p className="leading-none">for architecting</p>
                </div>
              </div>
              <div className="w-full text-hero font-bold leading-none text-gold">
                <p className="mb-0 leading-none">enterprise</p>
                <p className="leading-none">AI evolution</p>
              </div>
            </div>

            <a
              href="#"
              className="bg-brand-gradient flex h-[40px] w-[330px] max-w-full items-center justify-center gap-[10px] rounded-pill border border-solid border-steel py-[10px] pl-[24px] pr-[22px] text-button font-semibold text-white transition hover:brightness-110"
              style={{ ["--brand-angle" as string]: "131.449deg" }}
            >
              Schedule a Meeting
              <img src={`${IMG}/calendar-dots.svg`} alt="" className="size-[24px]" />
            </a>
          </div>

          {/* Right body paragraph */}
          <div className="relative w-[601px] shrink-0 text-[20px] font-normal leading-[1.2] text-fog max-lg:w-full min-w-0">
            <p className="mb-0 leading-[1.2]">
              Enterprise leaders often purchase new AI tools and only then search
              for an organizational problem to solve. This backward approach is
              precisely why 95% of AI implementations fail.
            </p>
            <p className="mb-0 leading-[1.2]">&#8203;</p>
            <p className="leading-[1.2]">
              At Twin-Co, we reverse this paradigm. We don&apos;t sell
              off-the-shelf software; we provide an end-to-end consulting and
              implementation process. By mapping your unique human workflows and
              organizational processes, we prioritize where to start to achieve
              maximum impact in minimum time and with the least resistance,
              ensuring your AI investment translates into measurable, secure, and
              scalable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
