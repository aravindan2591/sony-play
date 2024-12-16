import React, { useState, useEffect, useCallback, useRef } from "react";
import BackgroundWithImageOverlay from "./components/BackgroundWithImageOverlay";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import SlideImage from "./components/SlideImage";
import { IMAGES } from "./constants/images";

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const timerCallback = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerCallback();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [timerCallback]);

  return (
    <div className="main-content relative">
      <div className="container px-8 py-6 relative z-10">
        <div className="mb-24">
          <Header>MORE FROM</Header>
          <Header>RICO THE DOG</Header>
        </div>
        <div className="mb-2">
          <InfoBox type="info" message="RICO IS BACK!" />
        </div>
        <h1 className="text-title-mobile leading-tight">RICOBOT</h1>
        <div className="text-paragraph-mobile w-4/5 mb-8">
          Charge into a brand-new supersized adventure with RICO across 50 exciting and diverse worlds, available now on PS5!
        </div>
        <button
          onClick={() => {
            window.open("https://playstation.com", "_blank");
          }}
        >
          LEARN MORE
        </button>
        <div className="relative w-full" ref={carouselRef}>
          <div className="flex flex-wrap gap-4">
            {IMAGES.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={index} onClick={() => setActiveIndex(index)}>
                  <SlideImage image={image} active={isActive} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BackgroundWithImageOverlay image={IMAGES[activeIndex]} />
    </div>
  );
};

export default App;
