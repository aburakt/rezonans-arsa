"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const images = [
  {
    src: "/images/lands/land01.JPG",
    title: "Arsa 1",
    description: "Premium konumda yatırımlık arsa",
    location: "Gelibolu, Ocaklı",
    area: ""
  },
  {
    src: "/images/lands/land02.JPG",
    title: "Arsa 2",
    description: "Premium konumda yatırımlık arsa",
    location: "Gelibolu, Ocaklı",
    area: ""
  },
  {
    src: "/images/lands/land03.JPG",
    title: "Arsa 3",
    description: "Premium konumda yatırımlık arsa",
    location: "Gelibolu, Ocaklı",
    area: ""
  },
]

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Arsa Portföyümüz
          </h2>
          <p className="text-gray-600 text-lg">
            Size en uygun arsayı seçin, geleceğinize yatırım yapın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{image.location}</span>
                  <span>•</span>
                  <span>{image.area}</span>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  onClick={() => setSelectedImage(image.src)}
                >
                  Detaylı İncele
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-white/95 backdrop-blur-sm">
          {selectedImage && (
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Selected land"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}