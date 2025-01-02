import Hero from "@/components/module/Hero";
import About from "@/components/module/About";
import Projects from "@/components/module/Projects";
import Clients from "@/components/module/Clients";
import WorkExperience from "@/components/module/Experience";
import Contact from "@/components/module/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home page",
  description: "This is Phuong's portfolio",
};
export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
    </main>
  );
}
