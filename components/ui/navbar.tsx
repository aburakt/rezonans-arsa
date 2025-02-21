"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const links = [
  { href: "#about", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetler" },
  { href: "#portfolio", label: "Portföy" },
  { href: "#video", label: "Video" },
  { href: "#contact", label: "İletişim" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
        : "bg-transparent py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/logo.png"
              alt="Rezonans Arsa Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className={`font-bold text-2xl ${isScrolled ? "text-gray-900" : "text-white"
              }`}>
              Rezonans Arsa
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-lg font-medium transition-colors px-4 py-2 rounded-full ${isScrolled
                  ? "text-gray-600 hover:text-primary hover:bg-gray-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-3 rounded-full ${isScrolled ? "text-gray-900" : "text-white"
              }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-4">
              {links.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-4 px-6 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl transition-all text-lg"
                  whileHover={{ x: 4 }}
                  whileTap={{ x: 0 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}