"use client";
/* eslint-disable @next/next/no-img-element */
import { useAutoRotate } from "@/components/ui/useAutoRotate";

const IMG = "/images/methodology";
const SOLUTIONS_BG =
  "linear-gradient(-14.0061deg, rgba(20,123,254,0.2) 2.4415%, rgba(0,0,0,0.2) 73.352%), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%)";

type Slide = {
  title1: string;
  title2: string;
  description: string;
  image: string;
};

/* Tailored Solutions carousel — 5 slides (Figma node 123:1557). */
const slides: Slide[] = [
  {
    title1: "Operational Excellence",
    title2: "Our digital twin",
    description:
      "Deploy a comprehensive digital replica of your high-performing operational workflows to automate multi-step execution, reduce human error, and scale team capability.",
    image: `${IMG}/solutions/slide-1.png`,
  },
  {
    title1: "Finance & Revenue Protection,",
    title2: "Transaction Control",
    description:
      "Audit and monitor your financial data streams in real time to detect cross-platform anomalies, close process gaps, and block hidden revenue leakage.",
    image: `${IMG}/solutions/slide-2.png`,
  },
  {
    title1: "Administration &",
    title2: "Workflows Automation",
    description:
      "Streamline repetitive administrative tasks, corporate knowledge management, and cross-departmental workflows to eliminate operational friction.",
    image: `${IMG}/solutions/slide-3.png`,
  },
  {
    title1: "Supply Chain &",
    title2: "Logistics Optimization",
    description:
      "Integrate predictive AI infrastructure to synchronize inventory control, vendor tracking, and resource allocation with live market demand.",
    image: `${IMG}/solutions/slide-4.png`,
  },
  {
    title1: "AI-IT Governance",
    title2: "& Security",
    description:
      "Secure your AI ecosystem with dedicated data privacy guardrails, rigorous regulatory compliance, and non-human identity (NHI) permission management.",
    image: `${IMG}/solutions/slide-5.png`,
  },
];

export default function SolutionsCarousel() {
  const { index: i, setIndex: setI, hoverProps } = useAutoRotate(slides.length);
  const s = slides[i];
  const go = (n: number) => setI((prev) => (prev + n + slides.length) % slides.length);

  return (
    <div
      {...hoverProps}
      className="flex w-full flex-col items-start overflow-hidden rounded-card p-[24px]"
      style={{ backgroundImage: SOLUTIONS_BG }}
    >
      <div className="flex w-full flex-col items-center justify-between gap-[40px] min-[1240px]:flex-row min-[1240px]:items-stretch min-[1240px]:gap-0">
        {/* Left copy column */}
        <div className="flex w-full flex-col items-start justify-between gap-[32px] min-[1240px]:h-[581px] min-[1240px]:w-[420px] min-[1240px]:gap-0">
          {/* Description — crossfades on slide change */}
          <div
            key={i}
            className="flex w-full animate-fade-in flex-col items-start gap-[32px] text-white"
          >
            <div className="w-full [word-break:break-word]">
              <p className="text-[44px] font-normal leading-[1.2] max-md:text-[28px]">
                {s.title1}
              </p>
              <p className="text-[44px] font-bold leading-[1.2] text-gold max-md:text-[28px]">
                {s.title2}
              </p>
            </div>
            <p className="w-full font-inter text-body font-normal leading-[1.3]">
              {s.description}
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center gap-[16px]">
            <button
              type="button"
              aria-label="Previous solution"
              onClick={() => go(-1)}
              className="shrink-0 cursor-pointer"
            >
              <img
                src={`${IMG}/expand-more-3.svg`}
                alt=""
                className="size-[32px] rotate-90 transition hover:brightness-110"
              />
            </button>
            <div className="flex items-center gap-[8px]">
              {slides.map((_, d) => (
                <button
                  key={d}
                  type="button"
                  aria-label={`Go to solution ${d + 1}`}
                  aria-current={d === i}
                  onClick={() => setI(d)}
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    d === i
                      ? "h-[10px] w-[26px] bg-blue"
                      : "size-[10px] bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next solution"
              onClick={() => go(1)}
              className="shrink-0 cursor-pointer"
            >
              <img
                src={`${IMG}/expand-more-4.svg`}
                alt=""
                className="size-[32px] -rotate-90 transition hover:brightness-110"
              />
            </button>
          </div>
        </div>

        {/* Right image — crossfades on slide change */}
        <div className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-[8px] bg-[#0a1230] min-[1240px]:h-[581px] min-[1240px]:w-[700px]">
          <img
            key={i}
            src={s.image}
            alt={`${s.title1} ${s.title2}`}
            className="absolute inset-0 size-full animate-fade-in object-cover"
          />
        </div>
      </div>
    </div>
  );
}
