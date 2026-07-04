export default function ClientPerspectives() {
  return (
    <section className="w-full overflow-hidden bg-surface">
      {/* Outer frame capped at the 1440 desktop width, matching Hero */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-[80px] py-[100px] max-md:px-[24px] max-md:py-[48px] max-sm:px-[16px]">
        {/* Content container (Figma 123:437) — relative so the person photo can overlap */}
        <div className="relative flex w-[1280px] max-w-full flex-col items-center gap-[50px] rounded-card p-[24px] max-lg:w-full">
          {/* Header (123:438 / 123:440) */}
          <div className="w-full">
            <div className="text-glow w-full leading-none [word-break:break-word]">
              <p className="text-h1 font-bold leading-none text-blue">Engineered Success:</p>
              <p className="text-h1 font-normal leading-none text-navy">Client Perspectives</p>
            </div>
          </div>

          {/* Testimonial card (123:441) — sky gradient fill (Figma "Sky Gradient" returned empty; stops eyeballed from screenshot) */}
          <div
            className="flex h-[500px] w-[1280px] max-w-full flex-col items-start justify-center overflow-hidden rounded-card border-[10px] border-solid border-white p-[32px] bg-[linear-gradient(180deg,#96c4ff_0%,#dcebfc_100%)] transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-[4px] hover:shadow-[0px_20px_44px_rgba(2,27,121,0.18)] max-lg:h-auto max-lg:w-full"
          >
            {/* Testimonial container (123:442) */}
            <div className="flex w-[760px] max-w-full flex-col items-start gap-[68px] max-lg:w-full">
              {/* MW mark (123:443) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/client-perspectives/logo-mark.svg"
                alt=""
                className="block h-[60px] w-[170.959px] shrink-0"
              />

              {/* Testimonial text (123:444) */}
              <div className="flex w-full flex-col items-start gap-[24px] [word-break:break-word]">
                <p className="font-inter text-title font-normal leading-[1.3] text-black">
                  {`"What sets Twinco apart is adoption. The digital twin was live in weeks, and our people trusted it because it mirrored how they already worked."`}
                </p>

                {/* Customer info (123:446) */}
                <div className="flex w-[305px] max-w-full flex-col items-start gap-[8px]">
                  <p className="w-full text-[20px] font-semibold leading-[1.2] text-jet">
                    Thomas K.
                  </p>
                  <p className="font-inter w-full text-label font-normal leading-[1.3] text-slate">
                    Head of Operations · International Gaming Co.
                  </p>
                </div>
              </div>

              {/* Carousel controls (123:449) — down-chevron buttons rotated to point left / right */}
              <div className="flex items-center gap-[24px]">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="flex size-[36px] shrink-0 items-center justify-center transition hover:brightness-110"
                >
                  <span className="block size-[36px] rotate-90">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/client-perspectives/nav-left.svg"
                      alt=""
                      className="block size-full"
                    />
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="flex size-[36px] shrink-0 items-center justify-center transition hover:brightness-110"
                >
                  <span className="block size-[36px] -rotate-90">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/client-perspectives/nav-right.svg"
                      alt=""
                      className="block size-full"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Person photo (123:454) — transparent cutout overlapping the card, poking above it.
              Figma renders the image fill with oversized percentage transforms; instead the
              image sits on its fixed-size container with object-cover. */}
          <div className="pointer-events-none absolute left-[744.48px] top-[63px] h-[631px] w-[511.521px] overflow-hidden max-lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/client-perspectives/person.png"
              alt="Thomas K., Head of Operations at International Gaming Co."
              className="h-full w-full object-cover object-center"
            />
            {/* BG-CROP: verify vs Figma */}
          </div>
        </div>
      </div>
    </section>
  );
}
