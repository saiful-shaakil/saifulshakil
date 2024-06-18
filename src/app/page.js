"use client";

import { AreasOfInterest } from "./components/AreasOfInterest";
import { Certifications } from "./components/Certifications";
import ContactMe from "./components/ContactMe";
import { Home_Section } from "./components/Home_Section";

export default function Home() {
  return (
    <main className="">
      {/* From Mobile */}
      {/* <div className="bg-[#f4f0f0] relative -z-0 md:hidden">
        <HomeSection />
        <About />
        <AreasOfInterest />
        <Projects />
        <Certifications />
        <ContactMe />
      </div> */}
      <div className="lg:snap_div">
        <Home_Section />
        <AreasOfInterest />
        <Certifications />
        <ContactMe />
      </div>
    </main>
  );
}
