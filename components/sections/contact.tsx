"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          İletişim
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
            <div>
              <p className="font-medium">Adres:</p>
              <p className="text-muted-foreground">Your Address Here</p>
            </div>
            <div>
              <p className="font-medium">Telefon:</p>
              <p className="text-muted-foreground">+90 XXX XXX XX XX</p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p className="text-muted-foreground">info@example.com</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL"
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}