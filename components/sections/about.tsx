"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Vizyonumuz</h2>
          <p className="text-lg mb-6">
            Genel amacı birlikte al birlikte yap olan şirketimizin, yatırım danışmanlığımız ile sizin aşamalı konut sahibi olmanızı sağlamak.
          </p>
          <p className="text-lg">
            Öncelikli olarak sahibi olmak istediğiniz imar içerisindeki toplu konut projemizde arsanızda emsallerinin yarı fiyatına hisse sahibi olup, arsa payınız üzerinden inşaatı neredeyse maliyet fiyatına yapıyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  )
}