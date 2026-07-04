/** "GET INSPIRED HOME" dashboard card (Figma node 123:1477) — the report mockup instance. */
function GetInspiredHome() {
  return (
    <div
      className="relative z-10 flex w-[1024px] max-w-full flex-col items-center gap-[40px] overflow-hidden rounded-card p-[24px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.3)]"
      style={{
        // Sky Gradient: near-white pane with a blue tint sweeping the bottom-right corner
        backgroundImage:
          "linear-gradient(158.219deg, rgba(255,255,255,0.8) 84.106%, rgba(85,159,255,0.8) 108.12%, rgba(20,123,254,0.8) 116.12%)",
      }}
    >
      {/* Use Cases Nav */}
      <div className="flex flex-wrap items-center justify-center gap-[16px]">
        <div className="flex h-[40px] w-[238px] items-center justify-center rounded-pill bg-blue px-[24px] py-[10px]">
          <p className="text-button font-semibold leading-none text-white">
            The Financial Analyst Twin
          </p>
        </div>
        <button className="flex h-[40px] cursor-pointer items-center justify-center rounded-pill border border-solid border-[#e1e1e1] bg-white px-[24px] py-[10px] transition-colors hover:opacity-80">
          <p className="text-button font-semibold leading-none text-blue">
            The Customer Service Twin
          </p>
        </button>
        <button className="flex h-[40px] w-[238px] cursor-pointer items-center justify-center rounded-pill border border-solid border-[#e1e1e1] bg-white px-[24px] py-[10px] transition-colors hover:opacity-80">
          <p className="text-button font-semibold leading-none text-blue">
            The CISO Copilot
          </p>
        </button>
      </div>

      {/* Use Case 1 Details */}
      <div className="flex w-full flex-wrap items-center justify-between gap-y-[36px] max-lg:flex-col">
        {/* Left column — copy */}
        <div className="flex w-[465px] max-w-full flex-col items-start gap-[36px] max-lg:w-full">
          {/* Title */}
          <div className="w-full text-jet [word-break:break-word]">
            <p className="text-[44px] leading-[1.2] max-md:text-[28px]">The Financial</p>
            <p className="text-[44px] font-bold leading-[1.2] text-blue max-md:text-[28px]">Analyst Twin</p>
          </div>

          <div className="flex w-full flex-col items-start gap-[24px]">
            {/* The Challenge */}
            <div className="flex w-full flex-col items-start gap-[12px]">
              <p className="text-[20px] font-semibold leading-[1.2] text-jet">
                The Challenge:
              </p>
              <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
                Financial analysts waste hours manually aggregating and cross-referencing data
                across isolated systems and databases every month.
              </p>
            </div>

            {/* The Twin-based solution */}
            <div className="flex w-full flex-col items-start gap-[12px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/get-inspired/solution-icon.svg"
                  alt=""
                  className="h-[16px] w-[45.589px] shrink-0"
                />
                <p className="text-[20px] font-semibold leading-[1.2] text-jet">
                  The Twin-based solution:
                </p>
              </div>
              <p className="w-full font-inter text-label font-normal leading-[1.3] text-slate">
                Autonomously replicates your specific data collection method and reconciliation
                logic to generate comprehensive reports without human intervention.
              </p>
            </div>

            {/* The Impact — dark image-fill panel */}
            <div className="relative flex w-full flex-col items-start gap-[12px] overflow-hidden rounded-[8px] p-[16px]">
              {/* BG-CROP: verify vs Figma */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/get-inspired/impact-bg.jpg"
                alt=""
                className="pointer-events-none absolute inset-0 size-full rounded-[8px] object-cover"
              />
              <p className="relative text-[20px] font-semibold leading-[1.2] text-white">
                The Impact:
              </p>
              <p className="relative w-full font-inter text-label font-normal leading-[1.3] text-white">
                Eliminates manual cross-referencing errors and frees up critical hours for
                high-level strategic analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Right column — solution dashboard image */}
        <div className="relative h-[529px] w-[468px] max-w-full shrink-0 overflow-hidden rounded-[8px] max-lg:w-full max-md:h-[360px]">
          {/* BG-CROP: verify vs Figma */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/get-inspired/solution-dashboard.jpg"
            alt="Financial Analyst Twin dashboard mockup"
            className="pointer-events-none absolute inset-0 size-full rounded-[8px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function GetInspired() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[70px] px-[80px] py-[100px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
        {/* Decorative wave vector — bleeds beyond the 1440 frame, clipped by the section */}
        <div className="pointer-events-none absolute left-[-347.03px] top-[272px] z-0 h-[730px] w-[2080px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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

        {/* Dashboard card */}
        <GetInspiredHome />

        {/* Explore button */}
        <a
          href="#"
          className="bg-brand-gradient relative z-10 flex h-[40px] w-[250px] items-center justify-center rounded-pill border border-solid border-steel py-[10px] pl-[24px] pr-[22px] text-button font-semibold text-white transition hover:brightness-110"
          style={{ ["--brand-angle" as string]: "123.784deg" }}
        >
          Explore More Scenarios
        </a>
      </div>
    </section>
  );
}
