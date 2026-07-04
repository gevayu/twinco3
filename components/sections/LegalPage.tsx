import Footer from "@/components/sections/Footer";

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <main>
      <section className="relative w-full bg-surface">
        <div className="mx-auto w-full max-w-[900px] px-[80px] pb-[100px] pt-[140px] max-md:px-[24px] max-md:pt-[112px]">
          <h1 className="text-h1 font-bold leading-none text-navy">{title}</h1>
          <p className="mt-[12px] font-inter text-label text-ash">
            Last updated: {updated}
          </p>

          <div className="mt-[48px] flex flex-col gap-[40px]">
            {sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-[16px]">
                <h2 className="text-title font-bold text-navy">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-inter text-body font-normal leading-[1.6] text-slate"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
