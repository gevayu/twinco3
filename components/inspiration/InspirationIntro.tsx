/* eslint-disable @next/next/no-img-element */
import UseCaseExplorer from "./UseCaseExplorer";

/** Intro section (Figma node 123:2289): decorative vector + "Get Inspired" heading + the interactive use-case card. */
export default function InspirationIntro() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div className="relative mx-auto w-full max-w-[1440px] px-[80px] py-[90px] max-md:px-[24px] max-md:py-[48px]">
        {/* Decorative background curve */}
        <img
          src="/images/inspiration/shared/intro-vector.svg"
          alt=""
          className="pointer-events-none absolute left-[-531px] top-[95px] h-[839.385px] w-[2391.671px] max-w-none"
        />

        <div className="relative flex flex-col items-center gap-[70px]">
          <h1 className="w-[1280px] max-w-full text-center text-h1 font-bold leading-none text-blue">
            Get Inspired
          </h1>
          <UseCaseExplorer />
        </div>
      </div>
    </section>
  );
}
