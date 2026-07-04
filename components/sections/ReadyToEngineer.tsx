"use client";

/**
 * Ready to Engineer — dark CTA section (Figma node 123:455).
 * Left: heading + subheading. Right: "Request an assessment" form card.
 * Form is non-functional UI (stub onSubmit preventDefault).
 */

const fields = [
  { id: "full-name", label: "Full Name", placeholder: "Full Name", type: "text", autoComplete: "name" },
  { id: "company", label: "Company", placeholder: "Company Name", type: "text", autoComplete: "organization" },
  { id: "email", label: "Email", placeholder: "Email", type: "email", autoComplete: "email" },
];

export default function ReadyToEngineer() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Inner content capped at the 1440 desktop frame, with the design's own padding */}
      <div className="relative mx-auto w-full max-w-[1440px] px-[158px] py-[100px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
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
                  src="/images/ready-to-engineer/ellipse-right.svg"
                  alt=""
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content row */}
        <div className="relative flex w-full flex-col items-start gap-[60px] lg:flex-row">
          {/* Left: heading */}
          <div className="flex w-[511px] max-w-full flex-col items-start gap-[16px] [word-break:break-word] max-lg:w-full">
            <div className="flex w-full flex-col items-start gap-[4px]">
              <p className="w-full text-h1 font-normal italic leading-none text-white">
                Ready to Engineer
              </p>
              <p className="w-full text-hero font-bold leading-none text-gold">
                Your AI Success?
              </p>
            </div>
            <p className="whitespace-nowrap text-title leading-[1.2] text-fog max-md:whitespace-normal">
              <span className="font-normal">Let’s set the target for </span>
              <span className="font-bold">your first quick win.</span>
            </p>
          </div>

          {/* Right: request-an-assessment form card */}
          <div
            className="flex w-[552px] max-w-full flex-col items-start gap-[24px] rounded-card p-[24px] max-lg:w-full"
            style={{
              backgroundImage:
                "linear-gradient(-21.6658deg, rgba(20, 123, 254, 0.2) 2.4415%, rgba(0, 0, 0, 0.2) 73.352%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)",
            }}
          >
            <p className="w-full text-[36px] font-normal leading-[normal] text-white max-md:text-[28px]">Request an assessment</p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full flex-col items-start gap-[32px]"
            >
              <div className="flex w-full flex-col items-start gap-[24px]">
                {fields.map((f) => (
                  <div key={f.id} className="flex w-full flex-col items-start gap-[8px]">
                    <label htmlFor={f.id} className="text-label font-medium leading-[normal] text-white">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      autoComplete={f.autoComplete}
                      className="w-full rounded-card bg-white/20 px-[12px] py-[8px] text-body font-normal leading-[normal] text-white transition placeholder:text-[#e9e9e9] focus:outline-none focus:ring-2 focus:ring-sky"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="flex h-[40px] w-full items-center justify-center rounded-pill border border-solid border-steel px-[24px] py-[10px] text-button font-semibold text-white transition hover:brightness-110"
                style={{
                  backgroundImage:
                    "linear-gradient(160.809deg, var(--color-navy) 1.0434%, var(--color-cyan) 149.94%)",
                }}
              >
                Request an assessment
              </button>
            </form>
          </div>
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
                  src="/images/ready-to-engineer/ellipse-left.svg"
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
