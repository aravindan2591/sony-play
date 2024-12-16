"use client";

import BackgroundWithImageOverlay from "../components/BackgroundWithImageOverlay";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import SlideImage from "../components/SlideImage";
import { IMAGE, IMAGES } from "../constants/images";
import { cn } from "../utils/classnames";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const timerCallback = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  }, [setActiveIndex]);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerCallback();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [timerCallback]);

  return (
    <div className={cn("main-content", "relative")}>
      <div className={cn("container px-8 py-6 pad:p-16 relative z-10")}>
        <div className="mb-24 pad:mb-20">
          <Header>MORE FROM</Header>
          <Header>RICO THE DOG</Header>
        </div>
        <div className="mb-2">
          <InfoBox type="info" message="RICO IS BACK!" />
        </div>
        <h1 className="text-title-mobile pad:text-title-desktop leading-tight">RICOBOT</h1>
        <div className="text-paragraph-mobile pad:text-paragraph-desktop w-4/5 pad:w-5/12 mb-8">
          Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on
          PS5!
        </div>
        <button
          className={cn(
            "!text-cta-foreground",
            "bg-cta-background",
            "text-cta-mobile pad:text-cta-desktop",
            "p-3 rounded-full",
            "mb-16"
          )}
          onClick={() => {
            window.open("https://playstation.com", "_blank");
          }}
        >
          LEARN MORE
        </button>
        <div className="relative w-full" ref={carouselRef}>
          <div className="flex flex-wrap gap-4 pad:gap-8">
            {IMAGES.map((image: IMAGE, index) => {
              const isActive = index === activeIndex;
              const itemClass = cn(
                "flex items-center",
                "flex-shrink-0 cursor-pointer",
                "rounded-md pad:rounded-lg overflow-hidden"
              );

              return (
                <div key={index} className={itemClass} onClick={() => setActiveIndex(index)}>
                  <SlideImage key={image.background} image={image} active={isActive} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BackgroundWithImageOverlay image={IMAGES[activeIndex]} />
    </div>
  );
}
