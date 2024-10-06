"use client";

import Glider from "react-glider";
import "glider-js/glider.min.css";

export interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <div className="flex basis-1/2 w-11/12">
      <Glider
        className="no-scrollbar"
        draggable
        hasDots
        hasArrows
        duration={0.5}
        scrollLock
        scrollLockDelay={250}
        rewind
      >
        {children}
      </Glider>
    </div>
  );
}
