/* eslint-disable @next/next/no-img-element */
const IMG = "/images/about/hero";

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
        {/* Nav now lives in the global sticky <SiteHeader>; top padding clears the fixed header. */}
        <div className="relative flex w-full items-center justify-center px-[80px] pb-[90px] pt-[140px] max-md:px-[24px] max-md:py-[48px] max-md:pt-[112px]">
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
