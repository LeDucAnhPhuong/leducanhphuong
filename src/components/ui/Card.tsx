"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
interface CardProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value?: string;
}
const Card: React.FC<CardProps> = ({ value, ...props }: CardProps) => {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });
  const [style, setStyle] = useState({});
  const [styleShadow, setStyleShadow] = useState({});
  useEffect(() => {
    const halfWidthCard = (cardRef.current?.clientWidth || 0) / 2;
    const halfHeightCard = (cardRef.current?.clientHeight || 0) / 2;

    setStyleShadow(
      rotate.x === 0 && rotate.y === 0
        ? {
            transform: "translate(0)",
            transition: "all 0.5s ease-out 0s",
            background:
              "radial-gradient(circle, rgba(0,0,0) 3%, transparent 60%)",
            opacity: 0,
          }
        : {
            transform: `translate(${-rotate.x * 0.7}px, ${rotate.y * 0.7}px)`,
            background:
              "radial-gradient(circle, rgba(0,0,0) 3%, transparent 60%)",
            transition: "all 0.1s ease-out 0s",
            opacity:
              (Math.abs(rotate.x) + Math.abs(rotate.y)) /
              (halfWidthCard + halfHeightCard),
          }
    );
    setStyle(
      rotate.x === 0 && rotate.y === 0
        ? {
            transform: "rotate3d(0,0,0,0deg) scale(1)",
            transition: "transform 0.5s ease-out 0s",
          }
        : {
            transform: `rotate3d(${rotate.y * (2 / halfHeightCard) * 0.2}, ${
              rotate.x * (2 / halfWidthCard) * 0.2
            }, 0, ${
              (Math.abs(rotate.x) + Math.abs(rotate.y)) *
              (20 / (halfWidthCard + halfHeightCard))
            }deg) scale(1.1)`,
            transition: "transform 0.1s ease-out 0s",
          }
    );
  }, [rotate]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const topHeight = cardRef?.current?.getBoundingClientRect().top ?? 0;
    const leftWidth = cardRef?.current?.getBoundingClientRect().left ?? 0;
    console.log("cardRef", { cardRef });
    const rotate = {
      x: e.clientX - (leftWidth + (cardRef?.current?.clientWidth || 0) / 2),
      y: topHeight + (cardRef?.current?.clientHeight || 0) / 2 - e.clientY,
    };

    setRotate(rotate);
  };
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  return (
    <button
      ref={cardRef}
      {...props}
      value={value}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full rounded-xl bg-card border shadow-md border-card-foreground "
      style={style}
    >
      <div className="w-full h-full rounded-xl overflow-hidden">
        <div className="inset-0 absolute flex flex-col justify-between  pointer-events-none">
          <span
            style={styleShadow}
            className="z-[-1] inset-2 absolute blur-[10px] pointer-events-none"
          ></span>
        </div>
        <div className="text-[24px] backdrop-blur-xl font-semibold h-full p-5">
          {props.children}
        </div>
      </div>
    </button>
  );
};

export default Card;
