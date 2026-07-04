/* eslint-disable @next/next/no-img-element */
const IMG = "/images/inspiration/hero";

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

export default function InspirationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start">
        {/* Nav now lives in the global sticky <SiteHeader>; top padding clears the fixed header. */}
        <div className="relative flex w-full items-center justify-center gap-[87px] px-[80px] pb-[90px] pt-[140px] max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-[32px] max-md:px-[24px] max-md:py-[48px] max-md:pt-[112px]">
          <GlowEllipse
            src={`${IMG}/ellipse-1166.svg`}
            className="left-[759px] top-[-63px]"
            boxW={759.354}
            boxH={396.491}
            innerW={733.885}
            innerH={336.571}
          />

          {/* Left column */}
          <div className="relative flex w-[450px] shrink-0 flex-col items-start max-lg:w-full max-lg:items-center">
            <div className="relative flex w-full flex-col items-start gap-[8px]">
              <GlowEllipse
                src={`${IMG}/ellipse-1167.svg`}
                className="left-[-317px] top-[-95px]"
                boxW={676.441}
                boxH={353.198}
                innerW={653.753}
                innerH={299.821}
              />
              <div className="relative flex w-full flex-col items-start gap-[8px] leading-none">
                <p className="w-full bg-linear-to-b from-cream to-mist bg-clip-text text-title font-normal text-transparent">
                  Get Inspired
                </p>
                <p className="w-full text-h1 font-normal text-white">
                  Beyond the Trend:
                </p>
              </div>
              <p className="w-full text-hero font-bold leading-none text-gold">
                Envisioning Productive AI Potential
              </p>
            </div>
          </div>

          {/* Right body paragraph */}
          <div className="relative w-[601px] shrink-0 text-[20px] font-normal leading-[1.2] text-fog max-lg:w-full max-w-full">
            <p className="mb-0 leading-[1.2]">
              In a market overwhelmed by generic AI tools, gimmicks, and
              short-term trends, enterprise leaders often struggle to distinguish
              real operational value from technological noise.
            </p>
            <p className="mb-0 leading-[1.2]">&#8203;</p>
            <p className="mb-0 leading-[1.2]">
              To provide clarity and inspiration, we&rsquo;ve broken down specific
              examples of Digital Twins and Virtual Workers that Twin-Co has
              engineered or can develop to integrate seamlessly with your human
              workforce.
            </p>
            <p className="mb-0 leading-[1.2]">&#8203;</p>
            <p className="mb-0 leading-[1.2]">
              While the Digital Twin model is just one of many architectural
              frameworks we deploy, these scenarios are designed to spark your
              imagination.
            </p>
            <p className="mb-0 leading-[1.2]">&#8203;</p>
            <p className="mb-0 leading-[1.2]">
              We present them not as a restrictive catalog of off-the-shelf
              products, but as inspiration to show you exactly how targeted AI
              deployment can solve complex, everyday bottlenecks across your
              business.
            </p>
            <p className="mb-0 leading-[1.2]">&#8203;</p>
            <p className="font-semibold leading-[1.2]">
              Explore these use cases to better understand the versatility of our
              solutions and discover the true impact Twin-Co can deliver for your
              unique workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
