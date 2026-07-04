const exploreLinks = [
  "Methodology",
  "The Edge",
  "Use Cases",
  "Case Studies",
  "Client Perspectives",
];

const contactLinks: { label: string; href?: string; book?: boolean }[] = [
  { label: "Book a session", book: true },
  { label: "Request an assessment", book: true },
  { label: "Contact", book: true },
  { label: "hello@twinco.ai", href: "mailto:hello@twinco.ai" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility", href: "/accessibility" },
];

/** Twinco "Slogan" wordmark — 6 vector parts exported from Figma (node 123:494), positioned exactly. */
function Slogan() {
  const parts = [
    { src: "/images/footer/slogan-1.svg", inset: "22.97% 54.55% 0 7.01%" },
    { src: "/images/footer/slogan-2.svg", inset: "1.41% 84.22% 5.61% 0" },
    { src: "/images/footer/slogan-3.svg", inset: "0 52.93% 5.61% 41.69%" },
    { src: "/images/footer/slogan-4.svg", inset: "21.55% 34.85% 5.61% 48.28%" },
    { src: "/images/footer/slogan-5.svg", inset: "21.56% 17.72% 4.2% 66.36%" },
    { src: "/images/footer/slogan-6.svg", inset: "21.56% 0 4.2% 83.49%" },
  ];
  return (
    <div className="relative h-[50px] w-[249.286px] shrink-0" aria-label="Twinco">
      {parts.map((p, i) => (
        <div key={i} className="absolute" style={{ inset: p.inset }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.src} alt="" className="block size-full" />
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-[80px] py-[70px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
        {/* Decorative wave vector (node 123:530) — placed at its exact Figma
            coordinates within the 1440 frame; overflow clips the right side. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/footer/decoration-wave.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[692px] top-[4px] h-[369px] w-[1051.397px] max-w-none"
        />

        {/* Footer Content */}
        <div className="relative flex w-full flex-col items-start gap-[50px]">
          {/* Footer Links */}
          <div className="flex w-full items-start gap-[150px] max-lg:flex-col max-lg:gap-[32px]">
            {/* Company Summary */}
            <div className="flex w-[388px] flex-col items-start gap-[16px] max-lg:w-full">
              <div className="flex flex-col items-start gap-[12px]">
                <div className="flex items-center">
                  <Slogan />
                </div>
                <p className="text-[20px] leading-[32.5px] text-white [word-break:break-word]">
                  <span className="font-normal">Where AI agents</span>
                  <span className="font-medium"> </span>
                  <span className="font-semibold">work as one.</span>
                </p>
              </div>
              <p className="text-body font-normal leading-[1.3] text-white/55 [word-break:break-word]">
                Architects of enterprise AI adoption. We find the workflow that
                costs you, fix it, and lead the adoption that makes it stick.
              </p>
            </div>

            {/* Explore + Get in touch — kept side by side as two columns, incl. on mobile */}
            <div className="flex items-start gap-[150px] max-lg:w-full max-lg:gap-[48px] max-sm:gap-[24px]">
            {/* Explore */}
            <div className="flex w-[119px] flex-col items-start gap-[16px] [word-break:break-word]">
              <p className="text-title font-semibold leading-[24px] text-gold">
                Explore
              </p>
              <div className="flex flex-col items-start gap-[16px] text-body font-normal leading-[24px] text-white">
                {exploreLinks.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="w-full transition-opacity hover:opacity-80"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Get in touch */}
            <div className="flex w-[147px] flex-col items-start gap-[16px] [word-break:break-word]">
              <p className="text-title font-semibold leading-[24px] text-gold">
                Get in touch
              </p>
              <div className="flex flex-col items-start gap-[16px] text-body font-normal leading-[24px] text-white">
                {contactLinks.map((item) =>
                  item.book ? (
                    <button
                      key={item.label}
                      type="button"
                      data-book-cta
                      className="cursor-pointer whitespace-nowrap text-left transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="whitespace-nowrap transition-opacity hover:opacity-80"
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex h-[49px] w-full items-center justify-between pt-[28px] max-md:h-auto max-md:flex-col max-md:items-center max-md:gap-[16px] max-md:text-center">
            <p className="whitespace-nowrap text-label font-normal leading-[20px] text-white/55">
              © 2026 Twinco. All rights reserved.
            </p>

            <div className="flex items-center gap-[12px] text-label font-normal leading-[20px]">
              {legalLinks.map((item, i) => (
                <div key={item.label} className="flex items-center gap-[12px]">
                  {i > 0 && (
                    <span className="text-white/25" aria-hidden>
                      |
                    </span>
                  )}
                  <a
                    href={item.href}
                    className="whitespace-nowrap text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="whitespace-nowrap text-right text-label font-normal leading-[20px] text-white/55 transition-colors hover:text-white"
            >
              Designed with Bold-Move
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
