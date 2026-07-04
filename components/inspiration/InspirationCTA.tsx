/* eslint-disable @next/next/no-img-element */

/**
 * Inspiration CTA — dark section (Figma node 123:2293). A variant of the
 * "Ready to plan" CTA: a top detail line, an italic+gold heading, a bold
 * subheading, and a "Schedule a Mapping Session" button, flanked by two
 * decorative glow ellipses. Reuses the methodology CTA's ellipse/calendar assets.
 */
const RTP = "/images/methodology-page/ready-to-plan";

export default function InspirationCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative mx-auto min-h-[632px] w-full max-w-[1440px] px-[80px] py-[100px] max-md:px-[24px]">
        {/* Decorative glow — right */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[818px] top-[47px] flex h-[396.491px] w-[759.354px] items-center justify-center mix-blend-exclusion"
        >
          <div className="flex-none rotate-[4.77deg]">
            <div className="relative h-[336.571px] w-[733.885px]">
              <div className="absolute inset-[-76.97%_-35.3%]">
                <img src={`${RTP}/ellipse-right.svg`} alt="" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center gap-[60px]">
          <div className="flex w-full flex-col items-center gap-[16px]">
            {/* Top detail */}
            <p className="w-[672px] max-w-full text-center text-title font-normal leading-[1.2] text-fog [word-break:break-word]">
              Didn&rsquo;t see your exact operational challenge on the list?
            </p>

            {/* Heading */}
            <div className="flex w-[511px] max-w-full flex-col items-start gap-[4px] [word-break:break-word]">
              <p className="w-full text-center text-h1 font-normal italic leading-none text-white">
                That&rsquo;s the power of
              </p>
              <p className="w-full text-center text-hero font-bold leading-none text-gold">
                Custom Architecture.
              </p>
            </div>

            {/* Subheading */}
            <div className="w-full text-center [word-break:break-word]">
              <p className="text-[36px] font-normal leading-[1.2] text-white max-md:text-[28px]">
                Let&rsquo;s map your unique bottlenecks and
              </p>
              <p className="text-[36px] font-bold leading-[1.2] text-white max-md:text-[28px]">
                engineer the precise AI workflow your team needs.
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href="#"
            data-book-cta
            className="bg-brand-gradient flex h-[40px] items-center justify-center gap-[10px] rounded-pill border border-solid border-steel py-[10px] pl-[24px] pr-[22px] text-button font-semibold text-white transition hover:brightness-110"
            style={{ ["--brand-angle" as string]: "126.845deg" }}
          >
            Schedule a Mapping Session
            <img src={`${RTP}/calendar-dots.svg`} alt="" className="size-[24px]" />
          </a>
        </div>

        {/* Decorative glow — left */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-371px] top-[120px] flex h-[353.198px] w-[676.441px] items-center justify-center mix-blend-exclusion"
        >
          <div className="flex-none rotate-[4.77deg]">
            <div className="relative h-[299.821px] w-[653.753px]">
              <div className="absolute inset-[-76.97%_-35.3%]">
                <img src={`${RTP}/ellipse-left.svg`} alt="" className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
