"use client";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, SpotLight } from "@react-three/drei";

import Developer from "@/components/ui/Developer";
import CanvasLoader from "@/components/ui/Loading";
import { workExperiences } from "@/helper/data";
import Image from "next/image";
import useIsInViewport from "@/hooks/useIsInViewport";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const ref = useRef<HTMLElement | null>(null);
  const isView = useIsInViewport(ref);
  return (
    <section ref={ref} className="c-space mb-20" id="work">
      <div className="w-full dark:text-white-600 text-black-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <SpotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
              />
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-8}
                  scale={5}
                  animationName={animationName}
                  visible={isView}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <Image
                        className="w-full h-full"
                        src={item.icon}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold dark:text-white-800 text-black-600 ">
                      {item.name}
                    </p>
                    <p className="text-sm mb-5">
                      <span>{item.duration}</span>
                    </p>
                    <p className="">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
