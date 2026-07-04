/* eslint-disable @next/next/no-img-element */
import GetInspiredCard from "./GetInspiredCard";

export default function GetInspired() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[70px] px-[80px] py-[100px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
        {/* Decorative wave vector — bleeds beyond the 1440 frame, clipped by the section */}
        <div className="pointer-events-none absolute left-[-347.03px] top-[272px] z-0 h-[730px] w-[2080px]">
          <img src="/images/get-inspired/bg-vector.svg" alt="" className="block size-full" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex h-[134px] w-full flex-col items-center gap-[16px] text-center [word-break:break-word] max-lg:h-auto">
          <p className="text-h1 font-bold leading-none text-blue">Get Inspired</p>
          <div className="w-full text-title font-normal text-jet">
            <p className="leading-[1.2]">
              We mapped specific, real-world operational use cases to demonstrate how Twin-co
              transforms core functions{" "}
            </p>
            <p className="leading-[1.2]">
              across various sectors. Explore these different scenarios and get inspired by what we
              can build for you.
            </p>
          </div>
        </div>

        {/* Interactive dashboard card (3 tabs) */}
        <GetInspiredCard />

        {/* Explore button */}
        <a
          href="/inspiration"
          className="bg-brand-gradient relative z-10 flex h-[40px] w-[250px] items-center justify-center rounded-pill border border-solid border-steel py-[10px] pl-[24px] pr-[22px] text-button font-semibold text-white transition hover:brightness-110"
          style={{ ["--brand-angle" as string]: "123.784deg" }}
        >
          Explore More Scenarios
        </a>
      </div>
    </section>
  );
}
