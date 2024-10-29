"use client";

import Glider from "react-glider";
import "glider-js/glider.min.css";

// export interface CarouselProps {
//   children: React.ReactNode;
// }

export default function Carousel({
  className,
  slidesToShow,
  children,
}: {
  className: string;
  slidesToShow: number;
  children: React.ReactNode;
}) {
  return (
    <div className={`${className}`}>
      <Glider
        className={`no-scrollbar`}
        draggable
        hasDots
        hasArrows
        slidesToShow={slidesToShow}
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
