/**
 * Ready to Plan — dark CTA section (Figma node 123:637), Our Methodology page.
 * Centered heading + subheading + detail line + "Schedule a Meeting" pill button,
 * flanked by two decorative blurred glow ellipses. Structurally mirrors the home
 * ReadyToEngineer section with centered content.
 */
export default function ReadyToPlan() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Inner content capped at the 1440 desktop frame, with the design's own padding */}
      <div className="relative mx-auto min-h-[632px] w-full max-w-[1440px] px-[80px] py-[100px] max-md:px-[24px] max-sm:px-[16px] max-md:py-[48px]">
        {/* Decorative blurred ellipse glow — right. Blurred SVG kept at Figma's
            negative inset so the soft blur padding renders, not a crop. BG-CROP: verify vs Figma */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[818px] top-[47px] flex h-[396.491px] w-[759.354px] items-center justify-center mix-blend-exclusion"
        >
          <div className="flex-none rotate-[4.77deg]">
            <div className="relative h-[336.571px] w-[733.885px]">
              <div className="absolute inset-[-76.97%_-35.3%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/methodology-page/ready-to-plan/ellipse-right.svg"
                  alt=""
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content column */}
        <div className="relative flex w-full flex-col items-center gap-[60px]">
          <div className="flex w-full flex-col items-center gap-[16px]">
            {/* Heading */}
            <div className="flex w-[511px] max-w-full flex-col items-start gap-[4px] [word-break:break-word]">
              <p className="w-full text-center text-h1 font-normal italic leading-none text-white">
                Ready to plan
              </p>
              <p className="w-full text-center text-hero font-bold leading-none text-gold">
                Your Success?
              </p>
            </div>

            {/* Bold subheading */}
            <div className="w-full text-center [word-break:break-word]">
              <p className="text-[36px] font-normal leading-[1.2] text-white max-md:text-[28px]">
                {`Your organization doesn't need another generic tool;`}
              </p>
              <p className="text-[36px] font-bold leading-[1.2] text-white max-md:text-[28px]">
                it needs a tailored architecture.
              </p>
            </div>

            {/* Detail line */}
            <p className="w-[672px] max-w-full text-center text-title font-normal leading-[1.2] text-fog [word-break:break-word]">
              Let’s map your operational bottlenecks and build a secure, high-ROI AI
              workflow that actually works for your teams.
            </p>
          </div>

          {/* Schedule a Meeting button */}
          <a
            href="#"
            className="bg-brand-gradient flex h-[40px] items-center justify-center gap-[10px] rounded-pill border border-solid border-steel py-[10px] pl-[24px] pr-[22px] text-button font-semibold text-white transition hover:brightness-110"
            style={{ ["--brand-angle" as string]: "120.374deg" }}
          >
            Schedule a Meeting
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/methodology-page/ready-to-plan/calendar-dots.svg"
              alt=""
              className="size-[24px]"
            />
          </a>
        </div>

        {/* Decorative blurred ellipse glow — left. Blurred SVG kept at Figma's
            negative inset so the soft blur padding renders, not a crop. BG-CROP: verify vs Figma */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-371px] top-[120px] flex h-[353.198px] w-[676.441px] items-center justify-center mix-blend-exclusion"
        >
          <div className="flex-none rotate-[4.77deg]">
            <div className="relative h-[299.821px] w-[653.753px]">
              <div className="absolute inset-[-76.97%_-35.3%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/methodology-page/ready-to-plan/ellipse-left.svg"
                  alt=""
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
