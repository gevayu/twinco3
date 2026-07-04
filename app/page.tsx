import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Methodology from "@/components/sections/Methodology";
import GetInspired from "@/components/sections/GetInspired";
import CaseStudies from "@/components/sections/CaseStudies";
import ClientPerspectives from "@/components/sections/ClientPerspectives";
import ReadyToEngineer from "@/components/sections/ReadyToEngineer";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main>
      <div id="sec-hero">
        <Hero />
      </div>
      <Reveal>
        <div id="sec-intro">
          <Intro />
        </div>
      </Reveal>
      <Reveal>
        <div id="sec-methodology">
          <Methodology />
        </div>
      </Reveal>
      <Reveal>
        <div id="sec-get-inspired">
          <GetInspired />
        </div>
      </Reveal>
      <Reveal>
        <div id="sec-case-studies">
          <CaseStudies />
        </div>
      </Reveal>
      <Reveal>
        <div id="sec-client-perspectives">
          <ClientPerspectives />
        </div>
      </Reveal>
      <Reveal>
        <div id="sec-ready-to-engineer">
          <ReadyToEngineer />
        </div>
      </Reveal>
      <div id="sec-footer">
        <Footer />
      </div>
    </main>
  );
}
