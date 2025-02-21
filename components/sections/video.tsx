"use client"

import { motion } from "framer-motion"

export function Video() {
  return (
    <section id="video" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 opacity-70 -z-10" />
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Projelerimiz Hakkında
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto"
          >
            Rezonans Arsa olarak, sizlere sunduğumuz projeleri yakından tanımak için videomuzu izleyebilirsiniz.
            Arsa yatırımlarınız için en doğru seçimleri yapmanıza yardımcı oluyoruz.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/pqmC9mgJG0Q?si=ihoRKNF9EdjAvACZ"
              title="Rezonans Arsa Projeleri"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}