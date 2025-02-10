"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const images = [
  { src: "/images/lands/land1.JPG", title: "Arsa 1" },
  { src: "/images/lands/land2.JPG", title: "Arsa 2" },
  { src: "/images/lands/land3.JPG", title: "Arsa 3" },
  // Add more images as needed
]

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Arsa Portföyümüz
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-video">
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