"use client"

import { ParallaxBanner } from "react-scroll-parallax"

export function Footer() {
  return (
    <footer className="h-[100px] relative">
      <ParallaxBanner
        layers={[
          {
            image: "/images/footer-bg.jpg",
            speed: -15,
          }
        ]}
        className="h-full"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm opacity-70">
              Coded by{" "}
              <a
                href="https://aburakt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                @aburakt
              </a>
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </footer>
  )
}