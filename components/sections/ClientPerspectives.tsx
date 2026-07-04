"use client";
/* eslint-disable @next/next/no-img-element */
import { useAutoRotate } from "@/components/ui/useAutoRotate";

const IMG = "/images/client-perspectives";

type Testimonial = { quote: string; name: string; role: string; photo: string };

const testimonials: Testimonial[] = [
  {
    quote:
      "What sets Twinco apart is adoption. The digital twin was live in weeks, and our people trusted it because it mirrored how they already worked.",
    name: "Thomas K.",
    role: "Head of Operations · International Gaming Co.",
    photo: `${IMG}/thomas.jpg`,
  },
  {
    quote:
      "As a security lead, I was buried in compliance. The custom copilot acts as a tireless auditor. It changed how we manage regulatory risk.",
    name: "Lena Brandt",
    role: "Head of Security, healthcare network",
    photo: `${IMG}/lena.jpg`,
  },
  {
    quote:
      "The 'Customer Service Twin' handled 75% of our Tier 1 tickets in week two. It mirrors our brand voice and freed up our agents.",
    name: "Daniel Stern",
    role: "Customer Success Director, FinTech company",
    photo: `${IMG}/daniel.jpg`,
  },
  {
    quote:
      "Twin-Co didn't just sell us a tool; they completely re-architected our transaction flows. We saw a return on investment within the first 45 days.",
    name: "Maya Adler",
    role: "VP of Operations, global gaming enterprise",
    photo: `${IMG}/maya.jpg`,
  },
];

export default function ClientPerspectives() {
  const { index, setIndex, hoverProps } = useAutoRotate(testimonials.length);
  const t = testimonials[index];
  const go = (n: number) =>
    setIndex((p) => (p + n + testimonials.length) % testimonials.length);

  return (
    <section className="w-full overflow-hidden bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-[80px] py-[100px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
        <div className="relative flex w-[1280px] max-w-full flex-col items-center gap-[50px] rounded-card p-[24px] max-lg:w-full max-md:gap-[32px] max-md:p-0">
          {/* Header (123:438 / 123:440) */}
          <div className="w-full">
            <div className="text-glow w-full leading-none [word-break:break-word]">
              <p className="text-h1 font-bold leading-none text-blue">Engineered Success:</p>
              <p className="text-h1 font-normal leading-none text-navy">Client Perspectives</p>
            </div>
          </div>

          {/* Testimonial carousel card — sky gradient fill */}
          <div
            {...hoverProps}
            className="relative flex min-h-[500px] w-[1280px] max-w-full flex-col items-center justify-center gap-[40px] overflow-hidden rounded-card border-[10px] border-solid border-white bg-[linear-gradient(180deg,#96c4ff_0%,#dcebfc_100%)] px-[80px] py-[56px] transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-[4px] hover:shadow-[0px_20px_44px_rgba(2,27,121,0.18)] max-lg:min-h-0 max-md:gap-[28px] max-md:px-[20px] max-md:py-[32px]"
          >
            {/* Content — crossfades on testimonial change */}
            <div
              key={index}
              className="flex w-full max-w-[840px] animate-fade-in flex-col items-center gap-[32px] text-center [word-break:break-word] max-md:gap-[24px]"
            >
              {/* MW mark */}
              <img
                src={`${IMG}/logo-mark.svg`}
                alt=""
                className="block h-[60px] w-[170.959px] shrink-0 max-md:h-[44px] max-md:w-[125px]"
              />

              <p className="font-inter text-title font-normal leading-[1.4] text-black max-md:text-[18px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="flex flex-col items-center gap-[12px]">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="size-[88px] shrink-0 rounded-full border-[3px] border-white object-cover shadow-[0px_6px_16px_rgba(2,27,121,0.25)] max-md:size-[72px]"
                />
                <div className="flex flex-col items-center gap-[4px]">
                  <p className="text-[20px] font-semibold leading-[1.2] text-jet">{t.name}</p>
                  <p className="font-inter text-label font-normal leading-[1.3] text-slate">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls — prev / dots / next */}
            <div className="flex items-center gap-[16px]">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center transition hover:brightness-110"
              >
                <span className="block size-[36px] rotate-90">
                  <img src={`${IMG}/nav-left.svg`} alt="" className="block size-full" />
                </span>
              </button>

              <div className="flex items-center gap-[8px]">
                {testimonials.map((item, d) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Go to testimonial ${d + 1}`}
                    aria-current={d === index}
                    onClick={() => setIndex(d)}
                    className={`cursor-pointer rounded-full transition-all duration-300 ${
                      d === index
                        ? "h-[10px] w-[26px] bg-blue"
                        : "size-[10px] bg-navy/20 hover:bg-navy/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center transition hover:brightness-110"
              >
                <span className="block size-[36px] -rotate-90">
                  <img src={`${IMG}/nav-right.svg`} alt="" className="block size-full" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
