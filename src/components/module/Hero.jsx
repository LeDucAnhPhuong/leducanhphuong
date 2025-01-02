"use client";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import HTML from "@/components/ui/HTML";
import CSS from "@/components/ui/CSS";
import ReactLogo from "@/components/ui/ReactLogo";
import Button from "@/components/ui/Button";
import Target from "@/components/ui/Target";
import CanvasLoader from "@/components/ui/Loading";
import HeroCamera from "@/components/ui/HeroCamera";
import { calculateSizes } from "@/helper/data";
import { HackerRoom } from "@/components/ui/HackerRoom";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium dark:text-white text-black text-center font-generalsans">
          Hi, I am Phuong <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Front End Developer - Designer
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <CSS position={sizes.ringPosition} />
              <HTML position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Button
          onClick={() => {
            router.push("#about");
          }}
          name="Let's work together"
          isBeam
          containerClass="sm:w-fit w-full sm:min-w-96"
        />
      </div>
    </section>
  );
};

export default Hero;
