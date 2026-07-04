/* eslint-disable @next/next/no-img-element */

/**
 * "Our story" — mirrors the home CaseStudies layout: a white rounded card with a
 * centered two-line heading, a body text column, and a 3D-ribbon image (About node 123:715).
 */
export default function OurStory() {
  return (
    <section className="w-full bg-surface px-[80px] py-[100px] max-md:px-[24px] max-md:py-[48px]">
      <div className="group mx-auto flex w-[1280px] max-w-full flex-col items-start gap-[50px] rounded-card bg-white p-[24px] drop-shadow-[0px_8px_6px_rgba(0,0,0,0.1)] transition-[transform,filter] duration-300 will-change-transform hover:-translate-y-[4px] hover:drop-shadow-[0px_18px_20px_rgba(0,0,0,0.15)]">
        {/* Heading */}
        <div className="text-glow flex w-full flex-col items-center text-center">
          <p className="text-h1 font-bold leading-none text-blue">Our story starts</p>
          <p className="text-h1 font-normal leading-none text-navy">
            with identifying the missing link
          </p>
        </div>

        {/* Body text + image */}
        <div className="flex w-[1232px] max-w-full flex-wrap items-end justify-between gap-y-[32px] max-lg:flex-col max-lg:items-center max-lg:gap-[32px]">
          <div className="w-[551px] max-w-full font-inter text-body font-medium leading-[1.3] text-navy [word-break:break-word] min-w-0 max-lg:w-full">
            <p className="mb-0">
              Twin-Co was born from a single, recurring observation in the tech
              industry: the market is rapidly shifting from{" "}
              <span className="font-bold">&ldquo;AI Hype&rdquo;</span> to the
              demand for <span className="font-bold">&ldquo;AI ROI&rdquo;</span>{" "}
              yet the vast majority of enterprise AI initiatives still stall or
              fail completely.
            </p>
            <p className="mb-0">&#8203;</p>
            <p className="mb-0">
              Through deep industry discussions and firsthand experience, our
              founders realized that these failures rarely stem from weak AI
              models. They fail because the organization&apos;s operational
              reality was never captured. Companies were buying sophisticated AI
              tools without understanding the underlying human workflows, intent,
              and daily friction points.
            </p>
            <p className="mb-0">&#8203;</p>
            <p>
              We realized that{" "}
              <span className="font-bold">
                AI cannot automate what it does not understand.
              </span>{" "}
              To bridge this gap, we built Twin-Co. Our mission is to engineer the
              &ldquo;Practical Layer,&rdquo; a behavioral and operational
              intelligence foundation that sits between humans and machines,
              processes, or data, ensuring that before a single agent is deployed,
              the enterprise is truly ready to scale.
            </p>
          </div>

          <div className="h-[614px] w-[669px] max-w-full shrink-0 overflow-hidden rounded-[16px] max-md:h-[360px] max-md:w-full">
            <img
              src="/images/about/story/story-ribbon.png"
              alt=""
              className="size-full max-w-none object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
