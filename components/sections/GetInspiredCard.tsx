"use client";
/* eslint-disable @next/next/no-img-element */
import { useAutoRotate } from "@/components/ui/useAutoRotate";

const IMG = "/images/get-inspired";

type Variant = {
  tab: string;
  title1: string;
  title2: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
};

/* The 5 home "Get Inspired" tab variants (Figma nodes 123:1476 + 175:2264). */
const variants: Variant[] = [
  {
    tab: "The Financial Analyst Twin",
    title1: "The Financial",
    title2: "Analyst Twin",
    challenge:
      "Financial analysts waste hours manually aggregating and cross-referencing data across isolated systems and databases every month.",
    solution:
      "Autonomously replicates your specific data collection method and reconciliation logic to generate comprehensive reports without human intervention.",
    impact:
      "Eliminates manual cross-referencing errors and frees up critical hours for high-level strategic analysis.",
    image: `${IMG}/solution-dashboard.jpg`,
  },
  {
    tab: "The Customer Service Twin",
    title1: "The Customer",
    title2: "Service Twin",
    challenge:
      "Representatives burn valuable time repeating identical scripts and workflows for routine inquiries.",
    solution:
      'Operates as a "shadow agent" that learns your exact service protocols and actual actions, autonomously resolving up to 80% of standard tickets using your brand\'s voice.',
    impact:
      "Redirects human empathy and judgment to where it matters most, handling complex, high-value customer interactions.",
    image: `${IMG}/customer-service-twin.jpg`,
  },
  {
    tab: "The CISO Copilot",
    title1: "The CISO",
    title2: "Copilot",
    challenge:
      "Security leaders are drowning in endless regulatory updates (ISO, NIST, DORA) and complex compliance logs, instead of focusing on security strategy.",
    solution:
      "Automatically process regulatory documents, conduct instant gap analysis against your systems, and generate simple, actionable work plans.",
    impact:
      "Transforms compliance from a manual burden into a continuous, automated safeguard, saving dozens of management hours monthly.",
    image: `${IMG}/ciso-copilot.jpg`,
  },
  {
    tab: "The Transaction Reconciliation Engine",
    title1: "The Transaction",
    title2: "Reconciliation Engine",
    challenge:
      "Discrepancies among banks, payment gateways, and accounting systems cause money to fall through the cracks, creating structural loopholes that result in financial losses.",
    solution:
      "A smart engine ingests and matches transaction data across all systems, bridging mismatched processing fees, currency fluctuations, time-sensitive transactions, and more.",
    impact:
      "Automatically verifies 99.5% of valid transactions, flagging only the 0.5% that require human review, achieving 100% coverage with zero lost revenue.",
    image: `${IMG}/transaction-reconciliation.jpg`,
  },
  {
    tab: "The Data Entry Twin",
    title1: "The Data",
    title2: "Entry Twin",
    challenge:
      "Finance departments process high volumes of invoices daily by manually opening emails and entering data into the ERP, a slow, repetitive, and highly error-prone workflow.",
    solution:
      "Automatically identifies the relevant fields across various incoming documents and seamlessly inputs the data directly into your target systems.",
    impact:
      "Delivers a 10x increase in processing speed with zero human error, allowing employees to transition from typists to managers who review and approve work.",
    image: `${IMG}/data-entry-twin.jpg`,
  },
];

export default function GetInspiredCard() {
  const { index: active, setIndex: setActive, hoverProps } = useAutoRotate(
    variants.length,
  );
  const v = variants[active];

  return (
    <div
      {...hoverProps}
      className="relative z-10 flex w-[1024px] max-w-full flex-col items-center gap-[40px] overflow-hidden rounded-card p-[24px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.3)]"
      style={{
        backgroundImage:
          "linear-gradient(158.219deg, rgba(255,255,255,0.8) 84.106%, rgba(85,159,255,0.8) 108.12%, rgba(20,123,254,0.8) 116.12%)",
      }}
    >
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-[16px]">
        {variants.map((item, i) => {
          const on = i === active;
          return (
            <button
              key={item.tab}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`flex h-[40px] cursor-pointer items-center justify-center rounded-pill px-[24px] py-[10px] text-button font-semibold leading-none transition-colors ${
                on
                  ? "bg-blue text-white"
                  : "border border-solid border-[#e1e1e1] bg-white text-blue hover:bg-blue/5"
              }`}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      {/* Details — crossfade on tab change */}
      <div
        key={active}
        className="flex w-full animate-fade-in flex-wrap items-center justify-between gap-y-[36px] max-lg:flex-col"
      >
        {/* Left — copy */}
        <div className="flex w-[465px] max-w-full flex-col items-start gap-[36px] max-lg:w-full">
          <div className="w-full text-jet [word-break:break-word]">
            <p className="text-[44px] leading-[1.2] max-md:text-[28px]">{v.title1}</p>
            <p className="text-[44px] font-bold leading-[1.2] text-blue max-md:text-[28px]">
              {v.title2}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[24px]">
            <div className="flex w-full flex-col items-start gap-[12px]">
              <p className="text-[20px] font-semibold leading-[1.2] text-jet">The Challenge:</p>
              <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
                {v.challenge}
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <div className="flex items-center gap-[8px]">
                <img
                  src={`${IMG}/solution-icon.svg`}
                  alt=""
                  className="h-[16px] w-[45.589px] shrink-0"
                />
                <p className="text-[20px] font-semibold leading-[1.2] text-jet">
                  The Twin-based solution:
                </p>
              </div>
              <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
                {v.solution}
              </p>
            </div>

            <div className="relative flex w-full flex-col items-start gap-[12px] overflow-hidden rounded-[8px] p-[16px]">
              <img
                src={`${IMG}/impact-bg.jpg`}
                alt=""
                className="pointer-events-none absolute inset-0 size-full rounded-[8px] object-cover"
              />
              <p className="relative text-[20px] font-semibold leading-[1.2] text-white">
                The Impact:
              </p>
              <p className="relative w-full font-inter text-label font-normal leading-[1.3] text-white">
                {v.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Right — dashboard image */}
        <div className="relative h-[529px] w-[468px] max-w-full shrink-0 overflow-hidden rounded-[8px] max-lg:w-full max-md:h-[360px]">
          <img
            src={v.image}
            alt={`${v.title1} ${v.title2} mockup`}
            className="pointer-events-none absolute inset-0 size-full rounded-[8px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
