"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-bold text-xl">Rezonans Arsa</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary">Hakkımızda</a>
            <a href="#services" className="hover:text-primary">Hizmetler</a>
            <a href="#portfolio" className="hover:text-primary">Portföy</a>
            <a href="#contact" className="hover:text-primary">İletişim</a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}