"use client";
import { useState } from "react";
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });
import Button from "@/components/ui/Button";
import Image from "next/image";

import grid1 from "@img/assets/grid1.png";
import grid2 from "@img/assets/grid2.png";
import grid3 from "@img/assets/grid3.png";
import grid4 from "@img/assets/grid4.png";
import { useTheme } from "next-themes";
import { Check, Copy } from "lucide-react";
import dynamic from "next/dynamic";
import { toast } from "sonner";
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { resolvedTheme: theme } = useTheme();
  const handleCopy = () => {
    navigator?.clipboard?.writeText("leducanhphuong@gmail.com");
    setHasCopied(true);
    toast.success("Copy successful! 🎉");
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 space-y-10" id="about">
      <p className="head-text">About me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src={grid1}
              alt="grid-1"
              className={`w-full ${theme === "dark" && "grayscale-[100%]"} transition-all duration-700 sm:h-[276px] h-fit object-contain`}
              width={400}
              height={400}
            />

            <div>
              <p className="grid-headtext">Hi, I’m Le Duc Anh Phuong</p>
              <p className="grid-subtext">
                With 1 years of experience, I have honed my skills in frontend
                dev, creating dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src={grid2}
              alt="grid-2"
              width={400}
              height={400}
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl={
                  theme === "dark"
                    ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
                    : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                }
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Rjieka, Croatia",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Rjieka, Croatia and open to remote work
                worldwide.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10 bg-black dark:bg-white text-white dark:text-black"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Image
              src={grid3}
              alt="grid 3"
              width={400}
              height={400}
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src={grid4}
              alt="grid-4"
              width={400}
              height={400}
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                {hasCopied ? (
                  <Check className="w-8 h-8" width={30} height={30} />
                ) : (
                  <Copy className="w-8 h-8" width={30} height={30} />
                )}
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  leducanhphuongdev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
