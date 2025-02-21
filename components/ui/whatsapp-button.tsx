"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export function WhatsAppButton() {
  const phoneNumber = "905437195171" // TR format without + sign
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <FaWhatsapp className="w-8 h-8 text-white" />
      </div>
    </motion.a>
  )
}