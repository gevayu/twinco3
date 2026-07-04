/* Icon parts exported from Figma (node 123:283). The Figma icons are composed
   of layered vector fragments with exact insets; we reproduce that structure so
   the geometry matches 1:1. Colors are baked into the SVGs (red #FF3B30 X, blue
   #147BFE check/caret), so no Tailwind color class is needed on them. */

/** 32px filled red XCircle (Software Installation header). */
function XCircle32() {
  return (
    <div className="relative size-[32px] shrink-0" aria-hidden>
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/intro/vector-x32.svg" alt="" className="absolute inset-0 block size-full" />
      </div>
    </div>
  );
}

/** 32px filled blue CheckCircle (Organized Evolution header). */
function CheckCircle32() {
  return (
    <div className="relative size-[32px] shrink-0" aria-hidden>
      <div className="absolute inset-[9.38%_9.38%_9.37%_9.37%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/intro/check-32-vector.svg" alt="" className="absolute inset-0 block size-full" />
      </div>
    </div>
  );
}

/** 20px red outline XCircle (built from 2 stroke lines + circle). */
function XCircle20() {
  return (
    <div className="relative size-[20px] shrink-0" aria-hidden>
      <div className="absolute inset-[37.5%]">
        <div className="absolute inset-[-12.5%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro/vector1.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>
      <div className="absolute inset-[37.5%]">
        <div className="absolute inset-[-12.5%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro/vector2.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4.17%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro/vector3.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

/** 20px blue outline CheckCircle (built from check stroke + circle). */
function CheckCircle20() {
  return (
    <div className="relative size-[20px] shrink-0" aria-hidden>
      <div className="absolute inset-[40.63%_34.38%_37.5%_34.38%]">
        <div className="absolute inset-[-14.29%_-10%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro/vector6.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4.17%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro/vector7.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

/** 32px blue CaretRight separating the two cards. */
function CaretRight32() {
  return (
    <div className="relative size-[32px] shrink-0" aria-hidden>
      <div className="absolute inset-[18.75%_31.25%_18.75%_37.5%]">
        <div className="absolute inset-[-7.5%_-15%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/intro/caret-vector.svg" alt="" className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

/** A single labeled comparison bullet. */
function Issue({
  variant,
  label,
  full,
}: {
  variant: "x" | "check";
  label: string;
  full?: boolean;
}) {
  return (
    <div className={`flex items-end gap-[4px]${full ? " w-full" : ""}`}>
      {variant === "x" ? <XCircle20 /> : <CheckCircle20 />}
      <p className="font-inter text-label font-normal leading-[1.3] whitespace-nowrap text-black [word-break:break-word]">
        {label}
      </p>
    </div>
  );
}

export default function Intro() {
  return (
    <section className="w-full bg-surface">
      {/* Content capped at the 1440 desktop frame; Figma pads 80px all around
          and centers the 1105px content column. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-[80px] py-[80px] max-md:px-[24px] max-sm:px-[16px] max-md:py-[48px]">
        <div className="flex w-[1105px] max-w-full flex-col items-center gap-[60px] max-lg:w-full">
          {/* Heading + subheading */}
          <div className="flex w-full flex-col items-center gap-[16px] text-center [word-break:break-word]">
            <p className="text-glow w-full text-h1 font-normal leading-none text-navy">
              <span className="font-bold text-blue">Why does Twinco succeed</span>
              <span>{` where 95% of enterprise AI implementations fail?`}</span>
            </p>
            <div className="w-full text-title text-black">
              <p className="mb-0 font-normal leading-[1.2]">
                Because most companies treat AI as a software installation.
              </p>
              <p className="font-bold leading-[1.2] text-blue">
                We architect an organizational evolution.
              </p>
            </div>
          </div>

          {/* Comparison cards */}
          <div className="flex flex-wrap items-center justify-center gap-[24px]">
            {/* Software Installation card */}
            <div className="flex w-[420px] max-w-full shrink-0 flex-col items-center gap-[16px] overflow-hidden rounded-card border-[3px] border-solid border-sky bg-white p-[24px] transition duration-300 will-change-transform hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0px_16px_36px_rgba(2,27,121,0.15)] max-lg:w-full">
              <div className="flex w-full items-start gap-[8px]">
                <XCircle32 />
                <div className="flex w-[253px] flex-col items-start gap-[4px] leading-[1.3] [word-break:break-word]">
                  <p className="w-full text-title font-bold text-black">Software Installation</p>
                  <p className="w-full text-body font-normal text-ash">
                    Tech - first. Tool - focused. Disconnected.
                  </p>
                </div>
              </div>

              {/* BG-CROP: verify vs Figma */}
              <div className="relative h-[295px] w-[328px] shrink-0 overflow-hidden max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/intro/software-installation.png"
                  alt="Disconnected network of standalone software tools"
                  className="absolute inset-0 block size-full object-cover"
                />
              </div>

              <div className="flex w-full items-center gap-[36px] max-sm:flex-col max-sm:gap-[16px]">
                <div className="flex w-[176px] flex-col items-start gap-[16px]">
                  <Issue variant="x" label="Disconnected tools" />
                  <Issue variant="x" label="Fragmented workflows" full />
                </div>
                <div className="flex w-[114px] flex-col items-end gap-[16px]">
                  <Issue variant="x" label="Low adoption" full />
                  <Issue variant="x" label="Siloed teams" full />
                </div>
              </div>
            </div>

            <CaretRight32 />

            {/* Organized Evolution card (with decorative blurred ellipse behind) */}
            <div className="relative h-[487px] w-[420px] max-w-full shrink-0 max-lg:h-auto max-lg:w-full max-lg:overflow-hidden">
              <div className="absolute left-0 top-[4px] h-[479px] w-[420px]">
                <div className="absolute inset-[-41.75%_-47.62%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/intro/ellipse-blur.svg"
                    alt=""
                    aria-hidden
                    className="block size-full max-w-none"
                  />
                </div>
              </div>

              <div className="absolute left-0 top-0 flex w-[420px] flex-col items-center gap-[16px] overflow-hidden rounded-card border-[3px] border-solid border-sky bg-white p-[24px] transition duration-300 will-change-transform hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0px_16px_36px_rgba(2,27,121,0.15)] max-lg:static max-lg:w-full max-w-full">
                <div className="flex w-full items-start gap-[8px]">
                  <CheckCircle32 />
                  <div className="flex w-[253px] flex-col items-start gap-[4px] leading-[1.3] [word-break:break-word]">
                    <p className="w-full text-title font-bold text-black">Organized Evolution</p>
                    <p className="w-full text-body font-normal text-ash">
                      Human - led. AR - orchestrated. Aligned.
                    </p>
                  </div>
                </div>

                {/* BG-CROP: verify vs Figma */}
                <div className="relative h-[295px] w-[328px] shrink-0 overflow-hidden max-w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/intro/organized-evolution.png"
                    alt="AI orchestration layer connecting people, processes and tools"
                    className="absolute inset-0 block size-full object-cover"
                  />
                </div>

                <div className="flex w-[371px] items-center justify-between max-w-full max-sm:flex-col max-sm:items-start">
                  <div className="flex w-[176px] flex-col items-start gap-[16px]">
                    <Issue variant="check" label="Connected ecosystem" />
                    <Issue variant="check" label="End-to-end workflows" />
                  </div>
                  <div className="flex flex-col items-start gap-[16px]">
                    <Issue variant="check" label="Full adoption" />
                    <Issue variant="check" label="Real business value" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing fine print */}
          <div className="w-[670px] max-w-full whitespace-pre-wrap text-center font-inter text-black [word-break:break-word]">
            <p className="mb-0 text-label font-normal leading-[1.3]">
              {`Tools are just infrastructure. By focusing on your core processes and most urgent needs, we bridge the gap between technical deployment and real business value. We don't force implementation -  `}
            </p>
            <p className="text-label font-bold leading-[1.3]">
              we drive full adoption by the people who power your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
