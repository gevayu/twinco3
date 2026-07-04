/* eslint-disable @next/next/no-img-element */
const IMG = "/images/methodology-page/stages";

/* Left-anchored dark scrim over each card image (verbatim from Figma). */
const CARD_OVERLAY =
  "linear-gradient(-89.89518701494524deg, rgba(0,0,0,0) 32.319%, rgb(0,0,0) 81.99%)";

type Stage = {
  n: number;
  title: string;
  subtitle: string;
  image: string;
  howWeDoIt: string;
  deliverable: string;
  edge: string;
};

const stages: Stage[] = [
  {
    n: 1,
    title: "Pinpoint the Catalyst Challenge",
    subtitle:
      "Identify and prioritize the organizational bottlenecks that offer the highest financial return on investment, and pick the one spot where we will start implementing our solutions.",
    image: `${IMG}/stage-1.png`,
    howWeDoIt:
      "Before writing a single line of code, we analyze your operations to find where manual repetitions, system latency, or transactional glitches are causing significant financial losses. We work with management and operational teams, monitor day-to-day operations using advanced technology, and analyze data to pinpoint the most painful challenges.",
    deliverable:
      "A clear, prioritized roadmap of AI use cases tailored to your specific business goals.",
    edge: "We do not deploy AI for the sake of innovation. We only target and solve pain points that will tangibly save or generate money for your enterprise.",
  },
  {
    n: 2,
    title: "Architect Blueprint",
    subtitle:
      "Map the exact human workflow to generate a unique, functional process data layer.",
    image: `${IMG}/stage-2.png`,
    howWeDoIt:
      "We track actual employee workflows by monitoring system logs, screen interactions, and decision-making steps to understand exactly how your organization operates. This allows us to map the precise path a human takes to complete a complex task.",
    deliverable:
      'A comprehensive architectural blueprint and a proprietary "process database" that organizations simply do not have.',
    edge: "Most implementations fail because they plug AI into static databases. We train the AI directly on your operational processes, ensuring the technology fits your actual workflow perfectly.",
  },
  {
    n: 3,
    title: "Design Ecosystem",
    subtitle:
      "Build and integrate a unified, secure AI environment tailored to your needs and workflow.",
    image: `${IMG}/stage-3.png`,
    howWeDoIt:
      "We leverage our Expert Hub to assemble the right mix of AI vendors and technologies, creating a seamless process and eliminating the chaos of disconnected applications. We then wrap this ecosystem in a robust GRC (Governance, Risk, and Compliance) platform to manage access and prevent security breaches.",
    deliverable:
      "A fully integrated, enterprise-grade AI solution operating within a secure, dedicated AI-IT infrastructure.",
    edge: "We solve the critical enterprise AI security gap. While others leave you with vulnerable, disjointed tools, we provide centralized identity management that safely supports multiple AI agents per employee",
  },
  {
    n: 4,
    title: "Lead Adoption",
    subtitle:
      "Drive seamless organizational integration while empowering your human workforce.",
    image: `${IMG}/stage-4.png`,
    howWeDoIt:
      "We oversee the rollout, provide ongoing maintenance, and help with the adoption of the new system, ensuring the AI performs automated, repetitive tasks perfectly. What requires human judgment remains with your employees, positioning the AI as a powerful co-pilot.",
    deliverable:
      "A fully operational, continuously optimized AI workflow seamlessly adopted by your team.",
    edge: "We believe in efficiency, not replacement. Our philosophy ensures that AI empowers your employees to become upgraded versions of themselves, focusing on high-value tasks while the system handles the rest.",
  },
];

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex w-full flex-col items-start gap-[16px]">
      <p className="w-full text-title font-bold leading-none text-gold">{label}</p>
      <p className="w-full font-inter text-body font-normal leading-[1.3] text-white">
        {body}
      </p>
    </div>
  );
}

function StageCard({ s }: { s: Stage }) {
  return (
    <div className="group relative flex h-[700px] w-[1280px] max-w-full shrink-0 flex-col items-start justify-center overflow-hidden rounded-card transition-[transform,box-shadow] duration-500 will-change-transform hover:-translate-y-[4px] hover:shadow-[0px_24px_50px_rgba(0,0,0,0.3)] max-md:h-auto max-md:min-h-[700px]">
      {/* Full-bleed background photo */}
      <img
        src={s.image}
        alt=""
        className="pointer-events-none absolute inset-0 size-full max-w-none rounded-card object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Content with the left dark scrim over the image */}
      <div
        className="relative flex h-[700px] w-[1280px] max-w-full flex-col items-start justify-center gap-[16px] overflow-clip rounded-l-card p-[24px] max-md:h-auto max-md:min-h-[700px]"
        style={{ backgroundImage: CARD_OVERLAY }}
      >
        <div className="flex w-[510px] max-w-full flex-col items-start gap-[12px] [word-break:break-word] max-lg:w-full">
          <ol
            className="block w-full list-decimal text-[36px] font-bold leading-none text-gold max-md:text-[28px]"
            start={s.n}
          >
            <li className="ms-[54px]">
              <span className="leading-none">{s.title}</span>
            </li>
          </ol>
          <p className="w-full text-[20px] font-medium leading-[1.2] text-white">
            {s.subtitle}
          </p>
        </div>

        {/* Gold divider (exact stroke #FFDE8A, 1px) */}
        <div className="h-px w-[510px] max-w-full bg-gold max-lg:w-full" />

        <div className="flex w-[510px] max-w-full flex-col items-start gap-[24px] [word-break:break-word] max-lg:w-full">
          <Block label="How We Do It:" body={s.howWeDoIt} />
          <Block label="The Deliverable:" body={s.deliverable} />
          <div className="flex w-full flex-col items-start gap-[16px] rounded-[4px] border-[0.5px] border-solid border-gold p-[16px]">
            <p className="w-full text-title font-bold leading-none text-gold">
              The Twin-Co Edge:
            </p>
            <p className="w-full font-inter text-body font-normal leading-[1.3] text-white">
              {s.edge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MethodologyStages() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div className="relative mx-auto w-full max-w-[1440px] p-[80px] max-md:p-[24px]">
        {/* Decorative translucent 3D ribbon-wave — full-bleed so it fills any screen width. */}
        <div className="pointer-events-none absolute left-1/2 top-[1px] h-[731px] w-screen -translate-x-1/2 overflow-hidden">
          <img
            src={`${IMG}/ribbon.png`}
            alt=""
            className="size-full max-w-none object-cover"
          />
        </div>

        <div className="relative flex flex-col items-center gap-[90px]">
          {/* Heading */}
          <div className="text-glow w-full text-center">
            <p className="text-h1 font-bold leading-none text-blue">Four stages,</p>
            <p className="text-h1 font-normal leading-none text-navy">one outcome.</p>
          </div>

          {stages.map((s) => (
            <StageCard key={s.n} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
