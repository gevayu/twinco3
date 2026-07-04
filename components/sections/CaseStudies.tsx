export default function CaseStudies() {
  return (
    <section className="w-full bg-surface">
      {/* Content, capped at the 1440 desktop frame */}
      <div className="mx-auto w-full max-w-[1440px] px-[80px] py-[100px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
        {/* White case-studies card */}
        <div className="flex w-full flex-col items-start gap-[50px] rounded-card bg-white p-[24px] drop-shadow-[0px_8px_6px_rgba(0,0,0,0.1)] transition-[transform,filter] duration-300 will-change-transform hover:-translate-y-[4px] hover:drop-shadow-[0px_18px_20px_rgba(0,0,0,0.15)]">
          {/* Header */}
          <div className="flex w-full flex-col items-center">
            <div className="text-glow w-full text-center leading-none text-navy [word-break:break-word]">
              <p className="mb-0 text-h1 leading-none">
                <span className="font-bold text-blue">Architecture in Action:</span>{" "}
              </p>
              <p className="text-h1 font-normal leading-none">Case Studies</p>
            </div>
          </div>

          {/* Detail: text column + case-study image */}
          <div className="flex w-full flex-wrap items-end justify-between gap-y-[32px] max-lg:flex-col max-lg:items-center">
            {/* Case Study 1 — Gaming Company */}
            <div className="flex w-[551px] max-w-full shrink-0 flex-col items-start gap-[32px] max-lg:w-full">
              <div className="flex w-full items-center justify-center bg-white/90">
                <div className="font-inter w-[551px] font-medium text-navy [word-break:break-word] max-lg:w-full">
                  <p className="mb-0 text-body leading-[1.3]">
                    An international gaming company experienced a critical synchronization gap among real-time in-game systems, fast payment gateways, and delayed bank updates. This latency created structural loopholes, allowing users to exploit premium features without actual payment, resulting in significant ongoing financial losses.
                  </p>
                  <p className="mb-0 text-body leading-[1.3]">{"​"}</p>
                  <p className="mb-0 font-sans text-title font-bold leading-[1.2]">
                    We didn&apos;t just patch the system; we engineered a custom AI workflow that mapped user behavior patterns and closed the financial loophole in real-time.{" "}
                  </p>
                  <p className="mb-0 text-body leading-[1.3]">{"​"}</p>
                  <p className="mb-0 text-body leading-[1.3]">
                    By deploying an intelligent engine that simultaneously ingests data from banks, payment gateways, and accounting software, our algorithm automatically reconciles transactions in real time, even across mismatched processing fees and currency fluctuations.
                  </p>
                  <p className="mb-0 text-body leading-[1.3]">{"​"}</p>
                  <p className="mb-0 text-body leading-[1.3]">
                    <span className="font-bold">The result</span>
                    <span>{" wasn't just a plugged hole. It was a fully armored, secure, and trustworthy transaction-processing system."}</span>
                  </p>
                  <p className="mb-0 text-body leading-[1.3]">
                    We immediately stopped the revenue leakage and transformed a critical vulnerability into a secure, frictionless flow that drove a rapid surge in verified purchase volume per user.
                  </p>
                  <p className="mb-0 text-body leading-[1.3]">{"​"}</p>
                  <p className="text-body leading-[1.3]">
                    This challenge is just one example. Our knowledge hub features deep-dive case studies across multiple industries, along with strategic insights and professional guides to drive successful AI adoption in large-scale enterprises.
                  </p>
                </div>
              </div>

              {/* Explore link */}
              <a
                href="#"
                className="flex h-[40px] w-[372px] shrink-0 items-center justify-center rounded-pill border border-solid border-steel px-[24px] py-[10px] text-button font-semibold text-white transition hover:brightness-110 max-sm:w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(154.753deg, #021b79 1.0434%, #68e8ff 149.94%)",
                }}
              >
                <span className="whitespace-nowrap text-center leading-none">
                  Explore Case Studies &amp; Insights
                </span>
              </a>
            </div>

            {/* Case Study Image (3D glass cube) */}
            <div className="relative h-[614px] w-[669px] max-w-full shrink-0 overflow-hidden rounded-[16px] max-lg:w-full max-md:h-[360px]">
              {/* BG-CROP: verify vs Figma. Figma renders this fill as a centered,
                  uniform cover-scale of the 4096x4096 square source to 118.76% of
                  the container width (~794.5px square, offsets symmetric). We keep
                  object-cover and add a centered zoom of 1.1876 (=118.76%) so the
                  cube matches Figma's size instead of the ~19%-smaller plain cover. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/case-studies/case-study-cube.png"
                alt="3D glass cube case-study illustration"
                className="size-full object-cover"
                style={{ transform: "scale(1.1876)", transformOrigin: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
