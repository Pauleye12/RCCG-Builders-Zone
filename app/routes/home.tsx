import Navbar from "~/Components/Navbar";
import Hero from "~/Components/Hero";
import type { Route } from "./+types/home";
import Welcome from "~/Components/Welcome";
import AboutUs from "~/Components/AboutUs";

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
    </div>
  );
}
