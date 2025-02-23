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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/30" />

        {/* Main content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Rezonans Arsa
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Geleceğinize Yatırım Yapın
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 
                         rounded-full text-white font-medium mt-8 hover:bg-white/20 
                         transition-colors"
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Keşfedin
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="text-white w-8 h-8 cursor-pointer 
                                 opacity-75 hover:opacity-100 transition-opacity" />
        </motion.div>
      </ParallaxBanner>
    </section>
  )
}