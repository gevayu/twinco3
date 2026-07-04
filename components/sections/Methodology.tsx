/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import SolutionsCarousel from "./SolutionsCarousel";
import ExpertHub from "./ExpertHub";

const IMG = "/images/methodology";

/* Layered fill gradients pulled verbatim from Figma (blue #147bfe wash over black). */
const STEP_BG =
  "linear-gradient(-33.914deg, rgba(20,123,254,0.2) 2.4415%, rgba(0,0,0,0.2) 73.352%), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%)";
const BENEFIT_BG =
  "linear-gradient(-11.4959deg, rgba(20,123,254,0.2) 2.4415%, rgba(0,0,0,0.2) 73.352%), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%)";
const EDGE_SCRIM =
  "linear-gradient(180.053deg, rgba(0,0,0,0) 4.6386%, rgb(0,0,0) 87.545%)";

type Step = {
  n: string;
  icon: string;
  titleLines: string[];
  desc: string;
  blank: boolean;
};

const steps: Step[] = [
  {
    n: "1.",
    icon: "step1-travel-explore.svg",
    titleLines: ["Pinpoint the most", "urgent challenge"],
    desc: "We audit your existing workflows to isolate the exact, high-impact inefficiencies where AI can deliver immediate value.",
    blank: true,
  },
  {
    n: "2.",
    icon: "step2-architecture.svg",
    titleLines: ["Architect the", "blueprint"],
    desc: "We build a strategic, vendor-agnostic blueprint tailored to your organization’s unique process-driven data and operational structure.",
    blank: true,
  },
  {
    n: "3.",
    icon: "step3-hub.svg",
    titleLines: ["Design the", "ecosystem"],
    desc: "We engineer custom AI workflows and identify or develop the precise technical tools and capabilities required to drive the desired business outcomes.",
    blank: false,
  },
  {
    n: "4.",
    icon: "step4-groups.svg",
    // Non-breaking blank first line pushes "Lead" onto the 2nd line, aligning it with the 2-line titles.
    titleLines: [" ", "Lead"],
    desc: "We guide your teams through the transition with comprehensive support, ensuring seamless human-AI collaboration and measurable ROI.",
    blank: true,
  },
];

type Benefit = { icon: string; titleLines: string[]; desc: string };

const benefits: Benefit[] = [
  {
    icon: "benefit1-target.svg",
    titleLines: ["A Solution for Your Problem", "(Not Vice Versa)"],
    desc: "We never push a specific platform. We start with your business logic and integrate the exact technology needed to address inefficiencies.",
  },
  {
    icon: "benefit2-graph.svg",
    titleLines: ["Vendor - Agnostic", "Freedom"],
    desc: "We assemble and orchestrate the best available models and infrastructure, protecting your organization from vendor lock-in.",
  },
];

/* CaretRight — small blue chevron sat in a 16px box (positioned exactly as Figma node 123:356). */
function Caret() {
  return (
    <div className="relative hidden size-[16px] shrink-0 min-[1440px]:block">
      <div className="absolute inset-[18.75%_31.25%_18.75%_37.5%]">
        <div className="absolute inset-[-7.5%_-15%]">
          <img
            src={`${IMG}/caret-right-vector.svg`}
            alt=""
            className="block size-full max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className="group flex h-[400px] w-[302px] shrink-0 items-center overflow-hidden rounded-card p-[24px] transition duration-300 will-change-transform hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0px_14px_34px_0px_rgba(20,123,254,0.28)] max-sm:h-auto max-sm:w-full"
      style={{ backgroundImage: STEP_BG }}
    >
      <div className="flex h-full min-w-px flex-1 flex-col items-start justify-between">
        <p className="w-full text-[40px] font-medium leading-none text-white max-md:text-[28px]">
          {step.n}
        </p>
        <div className="flex w-full flex-col items-center gap-[24px]">
          <div className="flex w-full flex-col items-center gap-[24px]">
            <img
              src={`${IMG}/${step.icon}`}
              alt=""
              className="size-[60px] shrink-0 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="w-[222px] text-center text-title font-medium leading-[1.2] text-white">
              {step.titleLines.map((ln, i) => (
                <span key={i} className="block">
                  {ln.trim() === "" ? " " : ln}
                </span>
              ))}
            </p>
          </div>
          <img
            src={`${IMG}/step-divider.svg`}
            alt=""
            className="h-[2px] w-[100px] shrink-0"
          />
          <div className="w-full font-inter text-label font-normal leading-[1.3] text-white">
            <p>{step.desc}</p>
            {step.blank && <p aria-hidden>{"​"}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function MethodologyIntro() {
  return (
    <div className="relative flex w-full flex-col items-center gap-[80px]">
      {/* Header */}
      <div className="flex w-full flex-col items-center gap-[16px] text-center">
        <p className="w-full text-h1 font-bold leading-none text-gold">
          Our Methodology
        </p>
        <div className="w-full text-title text-white">
          <p className="font-normal leading-[1.2]">More than AI tools,</p>
          <p className="font-bold leading-[1.2]">we focus on the process.</p>
        </div>
      </div>

      {/* Four-step row with caret separators */}
      <div className="flex w-full flex-wrap items-center justify-center gap-[16px] min-[1440px]:flex-nowrap min-[1440px]:justify-between min-[1440px]:gap-0">
        {steps.map((s, i) => (
          <Fragment key={s.n}>
            <StepCard step={s} />
            {i < steps.length - 1 && <Caret />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function BenefitCard({ b }: { b: Benefit }) {
  return (
    <div
      className="group relative flex min-w-px flex-1 flex-col items-start overflow-hidden rounded-[8px] p-[24px] transition duration-300 will-change-transform hover:-translate-y-[6px] hover:scale-[1.02] hover:shadow-[0px_14px_34px_0px_rgba(20,123,254,0.28)]"
      style={{ backgroundImage: BENEFIT_BG }}
    >
      <div className="flex w-full flex-col items-start gap-[24px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <img
            src={`${IMG}/${b.icon}`}
            alt=""
            className="size-[40px] shrink-0 transition-transform duration-300 group-hover:scale-110"
          />
          <p className="w-full text-[36px] font-semibold leading-none text-white max-md:text-[28px]">
            {b.titleLines.map((ln, i) => (
              <span key={i} className="block">
                {ln}
              </span>
            ))}
          </p>
        </div>
        <p className="w-full font-inter text-body font-normal leading-[1.3] text-white">
          {b.desc}
        </p>
      </div>
    </div>
  );
}

function TwincoEdge() {
  return (
    <div className="relative flex w-full flex-col items-start gap-[60px]">
      {/* Decorative blurred teal ellipses (Figma nodes 123:390 / 123:391, exclusion blend) */}
      <div className="pointer-events-none absolute left-[389px] top-[-11px] flex h-[612.182px] w-[1172.443px] items-center justify-center mix-blend-exclusion">
        <div className="flex-none rotate-[4.77deg]">
          <div className="relative h-[519.666px] w-[1133.119px]">
            <div className="absolute inset-[-76.97%_-35.3%]">
              <img
                src={`${IMG}/edge-ellipse.svg`}
                alt=""
                className="block size-full max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-[-442px] top-[393px] flex h-[612.182px] w-[1172.443px] items-center justify-center mix-blend-exclusion">
        <div className="flex-none rotate-[4.77deg]">
          <div className="relative h-[519.666px] w-[1133.119px]">
            <div className="absolute inset-[-76.97%_-35.3%]">
              <img
                src={`${IMG}/edge-ellipse.svg`}
                alt=""
                className="block size-full max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="relative flex w-full flex-col items-center gap-[16px] text-center font-normal">
        <div className="w-full leading-none">
          <p className="text-h1 font-bold leading-none text-gold">
            The Twinco Edge
          </p>
          <p className="text-h1 leading-none text-white">
            Engineered for Measurable Impact.
          </p>
        </div>
        <p className="w-full text-title leading-[1.2] text-fog">
          Our foundational pillars ensure your AI ecosystem delivers verifiable
          business value from day one.
        </p>
      </div>

      {/* Full-bleed image with the two benefit cards laid over the bottom */}
      <div className="relative flex h-[680px] w-full flex-col items-center justify-end overflow-hidden rounded-card p-[24px] max-md:h-auto">
        {/* BG-CROP: verify vs Figma */}
        <img
          src={`${IMG}/twinco-edge.png`}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none rounded-card object-cover"
        />
        <div className="relative flex w-full flex-col items-center gap-[24px] md:flex-row">
          {/* Dark scrim that fades the image behind the cards */}
          <div
            className="pointer-events-none absolute left-1/2 top-[-20px] h-[286px] w-[1280px] max-w-none -translate-x-1/2 rounded-b-card backdrop-blur-[3px]"
            style={{ backgroundImage: EDGE_SCRIM }}
          />
          {benefits.map((b) => (
            <BenefitCard key={b.icon} b={b} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TailoredSolutions() {
  return (
    <div className="relative isolate flex w-full flex-col items-start gap-[60px]">
      {/* Decorative ChatGPT swirl — bound to this block so it stays behind Tailored Solutions
          no matter what sits above it (Figma node 123:338). */}
      <div className="pointer-events-none absolute left-[326px] top-[250px] -z-10 flex h-[1390.394px] w-[1434.231px] items-center justify-center max-lg:hidden">
        <div className="flex-none rotate-[138.18deg]">
          <div className="relative h-[720.383px] w-[1280px]">
            <img
              src={`${IMG}/chatgpt-bg.png`}
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[16px] text-center">
        <p className="w-full text-h1 font-bold leading-none text-gold">
          Tailored Solutions
        </p>
        <div className="w-full text-title text-white">
          <p className="font-normal leading-[1.2]">Enterprise Solutions</p>
          <p className="font-bold leading-[1.2]">Built for Scale</p>
        </div>
      </div>
      <SolutionsCarousel />
    </div>
  );
}

export default function Methodology() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Content is capped at 1440, but the decorative swirls bleed full-width (clipped only by the
          section) so the background keeps expanding on wider screens instead of stopping at 1440. */}
      <div className="relative mx-auto w-full max-w-[1440px]">
        {/* Decorative ChatGPT swirl backgrounds (Figma nodes 123:339 / 123:338) */}
        <div className="pointer-events-none absolute left-[-959px] top-[-337px] flex h-[1314.009px] w-[1643.14px] items-center justify-center">
          <div className="flex-none rotate-[-23.3deg]">
            <div className="relative h-[810.431px] w-[1440px]">
              {/* BG-CROP: verify vs Figma */}
              <img
                src={`${IMG}/chatgpt-bg.png`}
                alt=""
                className="absolute inset-0 size-full max-w-none object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>

        {/* Content column (1280px inside 80px gutters, 100px top/bottom, 160px section gaps) */}
        <div className="relative flex flex-col gap-[160px] px-[80px] py-[100px] max-md:px-[24px] max-sm:px-[16px] max-md:py-[48px] max-md:gap-[80px]">
          <MethodologyIntro />
          <TwincoEdge />
          <ExpertHub />
          <TailoredSolutions />
        </div>
      </div>
    </section>
  );
}
