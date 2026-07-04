/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

const IMG = "/images/expert-hub";

/* Layered fill gradients pulled verbatim from Figma (node 175:2133) — blue #147bfe wash over black. */
const CARD_BG =
  "linear-gradient(-48.44255621deg, rgba(20,123,254,0.2) 2.4415%, rgba(0,0,0,0.2) 73.352%), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%)";
const HUB_BG =
  "linear-gradient(-43.6135316deg, rgba(20,123,254,0.2) 2.4415%, rgba(0,0,0,0.2) 73.352%), linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%)";

/* Shared card chrome: gold border, cyan glow, subtle grow-on-hover. */
const CARD_CHROME =
  "shrink-0 overflow-clip rounded-[32px] border-2 border-[#fad282] p-[16px] shadow-[0px_2px_15px_0px_rgba(184,250,255,0.8)] transition duration-300 will-change-transform hover:-translate-y-[6px] hover:scale-[1.03] hover:border-white hover:shadow-[0px_10px_30px_0px_rgba(184,250,255,0.95)]";

type Step = { n: string; icon: string; titleLines: string[]; desc: string };

/* Steps 1-3 and 5-6 (step 4 "Expert Hub" is the special taller card, rendered separately). */
const stepsA: Step[] = [
  {
    n: "1",
    icon: "seal-warning.svg",
    titleLines: ["YOUR", "CHALLENGE"],
    desc: "You bring the business need or pain point",
  },
  {
    n: "2",
    icon: "magnifying-glass.svg",
    titleLines: ["DISCOVERY & MAPPING"],
    desc: "We analyze and map your current state",
  },
  {
    n: "3",
    icon: "file-text.svg",
    titleLines: ["SOLUTION BLUEPRINT"],
    // "nd" typo preserved verbatim from the Figma source.
    desc: "We design the optimal solution nd implementation plan",
  },
];

const stepsB: Step[] = [
  {
    n: "5",
    icon: "rocket-launch.svg",
    // Soft hyphen: renders "IMPLEMENTA-TION" only when the narrow card forces the break.
    titleLines: ["IMPLEMENTA­TION"],
    desc: "Our experts implement and drive results",
  },
  {
    n: "6",
    icon: "chart-bar.svg",
    titleLines: ["OUTCOME & VALUE"],
    // "achive" typo preserved verbatim from the Figma source.
    desc: "You achive measurable business impact",
  },
];

/* One expert-type label + its dot (widths mirror Figma to reproduce line wrapping). */
const experts: { label: string; w: string }[] = [
  { label: "AI / ML Experts", w: "51px" },
  { label: "Data Experts", w: "auto" },
  { label: "Integration Experts", w: "65px" },
  { label: "Industry Experts", w: "52px" },
  { label: "Automation Experts", w: "69px" },
  { label: "Security Experts", w: "50px" },
  { label: "PMO / Project Experts", w: "81px" },
  { label: "Change Mgmt Experts", w: "82px" },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className={`group flex h-[400px] w-[180px] items-center ${CARD_CHROME}`}
      style={{ backgroundImage: CARD_BG }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-[32px]">
        <p className="w-full text-center text-[50px] font-medium leading-none text-white">
          {step.n}
        </p>
        <div className="flex w-full flex-col items-center gap-[16px] text-white [word-break:break-word]">
          <p className="w-full text-center text-[26px] font-bold leading-[1.2]">
            {step.titleLines.map((ln, i) => (
              <span key={i} className="block">
                {ln}
              </span>
            ))}
          </p>
          <p className="w-full font-inter text-[14px] font-normal leading-[1.3]">
            {step.desc}
          </p>
        </div>
        <img
          src={`${IMG}/${step.icon}`}
          alt=""
          className="size-[50px] shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

function ExpertItem({ label, w }: { label: string; w: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-[4px]">
      <p
        className="text-center font-inter text-[12px] font-normal leading-[1.3] text-white [word-break:break-word]"
        style={{ width: w }}
      >
        {label}
      </p>
      <img src={`${IMG}/dot.svg`} alt="" className="size-[6px] shrink-0" />
    </div>
  );
}

function HubCard() {
  return (
    <div
      className={`group flex h-[488px] w-[260px] items-center ${CARD_CHROME}`}
      style={{ backgroundImage: HUB_BG }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-[32px]">
        <p className="w-full text-center text-[50px] font-medium leading-none text-white">
          4
        </p>
        <div className="flex w-full flex-col items-center gap-[16px] text-white [word-break:break-word]">
          <p className="w-full text-center text-[26px] font-bold leading-[1.2]">
            EXPERT HUB
          </p>
          <p className="w-full font-inter text-[14px] font-normal leading-[1.3]">
            We assemble the right team from our network of experts
          </p>
        </div>

        {/* Tailored expert network */}
        <div className="flex w-[228px] flex-col items-center gap-[12px]">
          <div className="flex w-[87px] flex-col items-center gap-[4px]">
            <div className="flex size-[70px] items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
              <img
                src={`${IMG}/users-three.svg`}
                alt=""
                className="size-[50px] shrink-0"
              />
            </div>
            <p className="w-full text-center font-inter text-[14px] font-semibold leading-[1.3] text-gold">
              Tailored Expert Team
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[12px]">
            <div className="flex w-full items-center justify-between">
              {experts.slice(0, 3).map((e) => (
                <ExpertItem key={e.label} label={e.label} w={e.w} />
              ))}
            </div>
            <div className="flex w-full items-center justify-between">
              {experts.slice(3, 6).map((e) => (
                <ExpertItem key={e.label} label={e.label} w={e.w} />
              ))}
            </div>
            <div className="flex w-full items-center justify-center gap-[28px]">
              {experts.slice(6, 8).map((e) => (
                <ExpertItem key={e.label} label={e.label} w={e.w} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex w-[190px] shrink-0 flex-col items-start gap-[16px] [word-break:break-word]">
      <p className="w-full text-[20px] font-bold leading-[1.2] text-gold">{title}</p>
      <p className="w-full font-inter text-[14px] font-normal leading-[1.3] text-white">
        {desc}
      </p>
    </div>
  );
}

function StatDivider() {
  return (
    <div className="flex h-[69px] w-0 shrink-0 items-center justify-center max-lg:hidden">
      <img
        src={`${IMG}/divider.svg`}
        alt=""
        className="h-px w-[69px] max-w-none -rotate-90 opacity-60"
      />
    </div>
  );
}

const stats: { title: string; desc: string }[] = [
  { title: "VAST NETWORK", desc: "Top-tier experts across technologies and industries" },
  { title: "QUALITY ASSURED", desc: "Rigorous vetting for proven expertise" },
  { title: "PRECISE MATCH", desc: "Right experts for your unique need" },
  { title: "END-TO-END SUPPORT", desc: "We stay with you from plan to impact" },
  { title: "MEASURABLE IMPACT", desc: "Delivering real results that drive your business" },
];

export default function ExpertHub() {
  return (
    <div className="relative flex w-full flex-col gap-[60px]">
      {/* Header */}
      <div className="flex w-full items-center justify-between gap-[40px] max-lg:flex-col max-lg:items-start">
        <div className="flex shrink-0 flex-col items-start gap-[16px]">
          <img
            src={`${IMG}/network-node.svg`}
            alt=""
            className="size-[40px] shrink-0"
          />
          <div className="flex flex-col gap-[4px] leading-none [word-break:break-word]">
            <p className="text-[36px] font-bold leading-none text-gold">
              The Expert Hub:
            </p>
            <p className="text-[32px] font-normal leading-none text-white">
              One Partner. Endless Expertise.
            </p>
          </div>
        </div>
        <p className="w-[671px] max-w-full font-inter text-[16px] font-normal leading-[1.3] text-white [word-break:break-word]">
          Real-world AI deployment doesn’t fail for lack of talent. It fails when the wrong
          expertise is forced onto the problem. No single consultant and no internal IT team holds
          every specialized discipline a true implementation demands. Instead of stretching
          generalists across complex architectures they were never trained for, we do the exact
          opposite. We blueprint your specific solution, then draw the precise, top-tier
          specialists required to execute it, assembling a single, highly accountable team built
          entirely around your business need.
        </p>
      </div>

      {/* Six-step process row */}
      <div className="relative flex w-full flex-wrap items-end justify-center gap-[24px] min-[1440px]:flex-nowrap min-[1440px]:justify-between">
        {/* Decorative teal glow ellipse (exclusion blend) — desktop only */}
        <div className="pointer-events-none absolute left-[322px] top-[-129px] hidden h-[361.212px] w-[691.788px] items-center justify-center mix-blend-exclusion min-[1440px]:flex">
          <div className="flex-none rotate-[4.77deg]">
            <div className="relative h-[306.624px] w-[668.585px]">
              <div className="absolute inset-[-76.97%_-35.3%]">
                <img
                  src={`${IMG}/glow-ellipse.svg`}
                  alt=""
                  className="block size-full max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        {stepsA.map((s) => (
          <StepCard key={s.n} step={s} />
        ))}
        <HubCard />
        {stepsB.map((s) => (
          <StepCard key={s.n} step={s} />
        ))}
      </div>

      {/* Bottom stats row */}
      <div className="flex w-full items-center justify-between gap-[24px] max-lg:flex-wrap max-lg:justify-center max-lg:gap-y-[32px]">
        {stats.map((st, i) => (
          <Fragment key={st.title}>
            <Stat title={st.title} desc={st.desc} />
            {i < stats.length - 1 && <StatDivider />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
