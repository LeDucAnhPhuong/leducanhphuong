import Hero from "@/components/module/Hero";
import About from "@/components/module/About";
import Projects from "@/components/module/Projects";
import Clients from "@/components/module/Skill";
import WorkExperience from "@/components/module/Experience";
import Contact from "@/components/module/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Me",
  description: "This is Le Duc Anh Phuong's home page portfolio",
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
