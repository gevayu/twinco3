const nav = [
  { label: "Home", href: "/", active: true },
  { label: "Our Methodology", href: "/methodology", active: false },
  { label: "About Us", href: "/about", active: false },
  { label: "Get Inspired", href: "/inspiration", active: false },
];

const metrics = [
  { value: "95%", label: "fail without adoption" },
  { value: "4 Step", label: "methodology" },
  { value: "0", label: "vendor lock-in" },
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
    <div className="relative h-[30px] w-[149.571px] shrink-0" aria-label="TWINCO">
      {parts.map((p, i) => (
        <div key={i} className="absolute" style={{ inset: p.inset }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} alt="" className="block size-full" />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex h-[800px] w-full flex-col items-start overflow-hidden bg-navy max-lg:h-auto max-lg:min-h-[560px]">
      {/* Wavy glowing background. The Figma fill-transform in design_context
          mistranslates to CSS, so we match the Figma screenshot visually:
          zoom in and anchor to the right so the wave sweeps the center-right
          and the tagline area stays clear. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-navy"
        style={{
          backgroundImage: "url(/images/hero/hero-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "165% auto",
          backgroundPosition: "82% 30%",
        }}
      />

      {/* Content, capped at the 1440 desktop frame */}
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-[80px] py-[40px] max-md:px-[24px] max-sm:px-[16px] max-sm:flex-wrap max-sm:justify-center max-sm:gap-[16px]">
          <Logo />
          <div className="flex flex-wrap items-start gap-x-[24px] gap-y-0 text-body leading-none [word-break:break-word]">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  item.active
                    ? "font-bold text-white transition-colors"
                    : "font-medium text-mute transition-colors hover:text-white"
                }
              >
                {item.label}
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
        <div className="flex w-full flex-col items-start gap-[128px] px-[80px] pb-[104px] pt-[110px] max-md:px-[24px] max-sm:px-[16px] max-md:gap-[64px]">
          {/* Main Tagline */}
          <div className="flex w-[511px] max-w-full flex-col items-start gap-[16px] leading-none [word-break:break-word] max-lg:w-full">
            <div className="flex flex-col items-start gap-[8px]">
              <p className="text-glow bg-linear-to-b from-cream to-mist bg-clip-text text-title font-normal text-transparent">
                Architects of Enterprise AI Adoption
              </p>
              <p className="text-hero font-normal italic text-white">
                Where 95% of businesses fail,
              </p>
            </div>
            <p className="text-display font-bold text-gold">WE SUCCEED.</p>
          </div>

          {/* Hero Buttons + Metrics */}
          <div className="flex w-full items-center justify-between gap-[24px] max-lg:flex-col max-lg:items-center max-lg:gap-[32px]">
            <a
              href="#"
              className="bg-brand-gradient flex h-[40px] items-center justify-center gap-[10px] rounded-pill border border-solid border-steel py-[10px] pl-[24px] pr-[22px] text-button font-semibold text-white transition hover:brightness-110 max-w-full"
              style={{ ["--brand-angle" as string]: "132.383deg" }}
            >
              Schedule a Solution Mapping Session
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero/calendar-dots.svg" alt="" className="size-[24px]" />
            </a>

            <div className="flex items-center gap-[24px] max-sm:flex-wrap max-sm:justify-center">
              {metrics.map((m, i) => (
                <div key={m.value} className="flex items-center gap-[24px]">
                  {/* Divider: solid white 1px line, 50px tall (matches divider.svg stroke) */}
                  {i > 0 && <span className="h-[50px] w-px shrink-0 bg-white" aria-hidden />}
                  <div className="flex w-[132px] flex-col items-center gap-[8px] text-center">
                    <p className="text-metric font-normal leading-none text-white">
                      {m.value}
                    </p>
                    <p className="text-body font-medium leading-none text-silver">
                      {m.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
