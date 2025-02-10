"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { ParallaxBanner } from "react-scroll-parallax"

export function Hero() {
  return (
    <section className="relative h-screen">
      <ParallaxBanner
        layers={[
          {
            image: "/images/landing.JPG",
            speed: -20,
          }
        ]}
        className="h-full"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rezonans Arsa</h1>
            <p className="text-xl md:text-2xl">Geleceğinize Yatırım Yapın</p>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown
            className="text-white w-8 h-8 cursor-pointer"
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        </motion.div>
      </ParallaxBanner>
    </section>
  )
}