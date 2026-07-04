"use client";
/* eslint-disable @next/next/no-img-element */
import { useAutoRotate } from "@/components/ui/useAutoRotate";
import { useCases } from "./useCases";

const SHARED = "/images/inspiration/shared";

/* Signature card gradient (white → blue), verbatim from Figma. */
const CARD_BG =
  "linear-gradient(154.9626906842122deg, rgb(255,255,255) 84.106%, rgb(85,159,255) 108.12%, rgb(20,123,254) 116.12%)";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="whitespace-nowrap text-[20px] font-semibold leading-[1.2] text-jet">
      {children}
    </p>
  );
}

export default function UseCaseExplorer() {
  const { index: active, setIndex: setActive, hoverProps } = useAutoRotate(
    useCases.length,
  );
  const uc = useCases[active];

  return (
    <div
      {...hoverProps}
      className="flex h-[825px] w-[1100px] max-w-full items-start gap-[16px] overflow-clip rounded-card p-[16px] max-lg:flex-col max-lg:h-auto"
      style={{ backgroundImage: CARD_BG }}
    >
      {/* Sidebar — use-case selector */}
      <div className="flex h-full w-[402px] max-w-full shrink-0 flex-col items-start justify-between rounded-[16px] bg-[#fafafa] p-[16px] max-lg:w-full max-lg:h-auto max-lg:gap-[12px]">
        {useCases.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`flex h-[50px] w-full cursor-pointer items-center justify-between rounded-pill px-[24px] py-[10px] transition ${
                on
                  ? "bg-blue"
                  : "border border-solid border-[#e1e1e1] bg-white hover:border-blue"
              }`}
            >
              <span
                className={`whitespace-nowrap text-center text-button font-semibold leading-none ${
                  on ? "text-white" : "text-[#5e5e5e]"
                }`}
              >
                {c.useCase}
              </span>
              <img
                src={`${SHARED}/${on ? "caret-active" : "caret-inactive"}.svg`}
                alt=""
                className="size-[18px] shrink-0"
              />
            </button>
          );
        })}
      </div>

      {/* Main content — crossfades when the active use case changes */}
      <div
        key={active}
        className="flex min-w-px flex-1 flex-col items-start gap-[16px] animate-fade-in"
      >
        <div className="flex w-full flex-col items-start gap-[8px]">
          <div className="h-[288px] w-full overflow-hidden rounded-[16px]">
            <img
              src={uc.image}
              alt=""
              className="size-full max-w-none object-cover"
            />
          </div>
          <p className="w-full text-[44px] leading-[1.2] [word-break:break-word] max-md:text-[28px]">
            <span className="font-normal text-navy">{uc.title1} </span>
            <span className="font-bold text-blue">{uc.title2}</span>
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[24px]">
          <div className="flex w-full flex-col items-start gap-[12px]">
            <Label>Ideal For:</Label>
            <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
              {uc.idealFor}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[12px]">
            <Label>The Challenge:</Label>
            <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
              {uc.challenge}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[12px]">
            <div className="flex items-center gap-[8px]">
              <img
                src={`${SHARED}/solution-logo.svg`}
                alt=""
                className="h-[16px] w-[45.589px] shrink-0"
              />
              <Label>The Twin-co solution:</Label>
            </div>
            <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
              {uc.solution}
            </p>
          </div>

          <div className="relative flex w-full flex-col items-start gap-[12px] overflow-hidden rounded-[8px] p-[16px]">
            <img
              src={`${SHARED}/impact-bg.png`}
              alt=""
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
            />
            <p className="relative whitespace-nowrap text-[20px] font-semibold leading-[1.2] text-white">
              The Impact:
            </p>
            <p className="relative w-full font-inter text-label font-normal leading-[1.3] text-white">
              {uc.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
