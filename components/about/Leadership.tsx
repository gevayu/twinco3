/* eslint-disable @next/next/no-img-element */

type Leader = {
  name: string;
  title: string;
  photo: string;
  bio: string;
};

const IMG = "/images/about/leadership";

const leaders: Leader[] = [
  {
    name: "Chen Assa (Bennun)",
    title: "CEO",
    photo: `${IMG}/chen.png`,
    bio: "A strategic leader with extensive experience across the financial and technology sectors. Chen specializes in leading growth initiatives, building strategic partnerships, and shaping global go-to-market strategies spanning payments, digital identity, and emerging technologies. Her leadership bridges the gap between complex AI innovation and clear, sustainable commercial value.",
  },
  {
    name: "Moshe Abayev",
    title: "VP R&D",
    photo: `${IMG}/moshe.png`,
    bio: "With over 15 years of deep expertise in Data Management and in the last few years in Generative AI, Moshe is the architect behind our technological vision. Holding an M.Sc. in Financial Mathematics and a background in Neuroscience research, he has successfully led multi-region R&D teams to high-profile exits, including ObserveIT (acquired by Proofpoint) and Ayehu. Moshe ensures our solutions deliver scalable, data-driven value.",
  },
  {
    name: "Zion Osmo",
    title: "Active Chairman & Business Development",
    photo: `${IMG}/zion.png`,
    bio: "Bringing over 25 years of experience in global markets, Zion bridges the gap between private tech companies and public capital. He specializes in leading complex M&A transactions, advising on IPO processes, and establishing strategic international joint ventures across Israel, Europe, Latin America, and APAC. He ensures Twin-Co and its clients scale into market leaders.",
  },
  {
    name: "Adrian Bresca",
    title: "VP Finance",
    photo: `${IMG}/adrian.png`,
    bio: "A senior financial leader and investment strategist with over 25 years of experience in global financial markets and corporate banking. Adrian has managed high-net-worth portfolios in the top range and led complex credit and financing transactions for corporate clients. He provides the strategic financial oversight required to ensure our AI implementations deliver true, risk-managed ROI.",
  },
];

function LeaderCard({ l }: { l: Leader }) {
  return (
    <div className="flex w-[628px] max-w-full flex-col items-start gap-[24px] overflow-clip rounded-card bg-white px-[24px] py-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[6px] hover:shadow-[0px_16px_36px_rgba(2,27,121,0.15)] max-lg:w-full">
      <div className="flex items-center gap-[24px] max-sm:flex-col max-sm:items-start">
        {/* Portrait on the sky→mist gradient */}
        <div className="flex h-[260px] w-[200px] shrink-0 items-end justify-center overflow-clip rounded-[8px] bg-linear-to-b from-sky to-mist">
          <img
            src={l.photo}
            alt={l.name}
            className="pointer-events-none size-full max-w-none object-cover"
          />
        </div>
        <div className="flex w-[284px] max-w-full flex-col items-start gap-[24px] min-w-0 max-sm:w-full">
          <div className="flex w-full flex-col items-start gap-[8px] leading-[1.2] [word-break:break-word]">
            <p className="w-full text-[36px] font-bold text-navy max-md:text-[24px]">{l.name}</p>
            <p className="w-full text-[28px] font-normal text-blue max-md:text-[24px]">{l.title}</p>
          </div>
          <div className="h-px w-[100px] bg-blue" />
        </div>
      </div>
      <p className="w-full font-inter text-label font-normal leading-[1.4] text-black [word-break:break-word]">
        {l.bio}
      </p>
    </div>
  );
}

export default function Leadership() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      <div className="relative mx-auto w-full max-w-[1440px] p-[80px] max-md:p-[24px]">
        {/* Translucent 3D ribbon-wave behind the cards */}
        <div className="pointer-events-none absolute left-0 top-[491px] h-[731px] w-[1440px] max-w-full overflow-hidden">
          <img
            src="/images/methodology-page/stages/ribbon.png"
            alt=""
            className="size-full max-w-none object-cover"
          />
        </div>

        <div className="relative flex flex-col items-center gap-[90px]">
          {/* Heading + intro */}
          <div className="flex w-full flex-col items-center gap-[16px]">
            <div className="text-glow w-full text-center">
              <p className="text-h1 font-bold leading-none text-blue">
                Meet the Leadership
              </p>
              <p className="text-h1 font-normal leading-none text-navy">
                of Twin-Co
              </p>
            </div>
            <p className="w-full text-center text-title leading-[1.2]">
              <span className="text-navy">Led by Experience.</span>{" "}
              <span className="font-bold text-blue">Built for Enterprise.</span>
            </p>
            <p className="w-[1048px] max-w-full text-center text-[20px] font-normal leading-[1.3] text-jet [word-break:break-word]">
              Twin-Co is not a standard early-stage startup. We are a team of
              seasoned executives, technologists, and financial strategists with
              decades of combined experience in driving growth, managing 10
              figures portfolios, and leading tech companies to high-impact exits.
              We understand enterprise risk, financial structures, and large-scale
              IT architecture because we&rsquo;ve built and managed them ourselves.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="flex w-[1280px] max-w-full flex-col items-start gap-[24px]">
            <div className="flex w-full flex-wrap items-stretch gap-[24px]">
              <LeaderCard l={leaders[0]} />
              <LeaderCard l={leaders[1]} />
            </div>
            <div className="flex w-full flex-wrap items-stretch gap-[24px]">
              <LeaderCard l={leaders[2]} />
              <LeaderCard l={leaders[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
