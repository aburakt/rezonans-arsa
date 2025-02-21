"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section className="relative py-20 overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70 -z-10" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 border-b-2 border-primary pb-2 inline-block"
            >
              Vizyonumuz
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Genel amacı birlikte al birlikte yap olan şirketimizin, yatırım danışmanlığımız
                ile sizin aşamalı konut sahibi olmanızı sağlamak.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Öncelikli olarak sahibi olmak istediğiniz imar içerisindeki toplu konut projemizde
                arsanızda emsallerinin yarı fiyatına hisse sahibi olup, arsa payınız üzerinden
                inşaatı neredeyse maliyet fiyatına yapıyoruz.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Güvenilir Yatırım', 'Uygun Fiyat', 'Profesyonel Ekip', 'Kaliteli Hizmet'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/logo-bg-01.png"
              alt="Rezonans Arsa Vizyonu"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}