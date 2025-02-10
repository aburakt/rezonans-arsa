"use client"

import { ParallaxBanner } from "react-scroll-parallax";

interface ParallaxDividerProps {
  image: string;
  height?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

export function ParallaxDivider({
  image,
  height = "h-[25vh]",
  speed = -20,
  overlay = true,
  overlayOpacity = 0.3
}: ParallaxDividerProps) {
  return (
    <div className={height}>
      <ParallaxBanner
        layers={[
          {
            image: image,
            speed: speed,
          }
        ]}
        className="h-full"
      >
        {overlay && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}
      </ParallaxBanner>
    </div>
  )
}