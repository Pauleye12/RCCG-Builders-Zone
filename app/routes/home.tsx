import Navbar from "~/Components/Navbar";
import Hero from "~/Components/Hero";
import type { Route } from "./+types/home";
import Welcome from "~/Components/Welcome";
import AboutUs from "~/Components/AboutUs";
import LearnMore from "~/Components/CSR";
import LeadPastor from "~/Components/LeadPastor";
import Community from "~/Components/Community";
import CatchUp from "~/Components/CatchUp";
import Articles from "~/Components/Articles";
import Story from "~/Components/Story";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RCCG Builder's Zone" },
    { name: "description", content: "Welcome to RCCG Builders Zone" },
  ];
}

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Welcome />
      <AboutUs />
      <LearnMore />
      <LeadPastor />
      <Community />
      <CatchUp />
      <Articles />
      <Story />
    </div>
  );
}
