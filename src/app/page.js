"use client";

import { AreasOfInterest } from "./components/Desktop/AreasOfInterest";
import { Home_Section } from "./components/Desktop/Home_Section";
import { About } from "./components/Mobile/About";
import ContactMe from "./components/Mobile/ContactMe";
import { HomeSection } from "./components/Mobile/HomeSection";

export default function Home() {
  return (
    <main className="">
      {/* From Mobile */}
      <div className="bg-[#f4f0f0] relative -z-0 md:hidden">
        <HomeSection />
        <About />
        <AreasOfInterest />
        <ContactMe />
      </div>
      <div className="hidden md:block lg:snap_div">
        <Home_Section />
        <AreasOfInterest />
        <ContactMe />
      </div>
    </main>
  );
}
