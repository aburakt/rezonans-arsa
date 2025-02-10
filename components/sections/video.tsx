"use client"

import { motion } from "framer-motion"

export function Video() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Projelerimiz Hakkında</h2>
          <p className="text-lg mb-12 text-muted-foreground">
            Rezonans Arsa olarak, sizlere sunduğumuz projeleri yakından tanımak için videomuzu izleyebilirsiniz.
            Arsa yatırımlarınız için en doğru seçimleri yapmanıza yardımcı oluyoruz.
          </p>
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Rezonans Arsa Projeleri"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}