"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    title: "Yatırım Danışmanlığı",
    description: "Seçtiğimiz arsaların imar izinleri, konum analizi ve gelecek planlaması konusunda uzman danışmanlık.",
    icon: "📊"
  },
  {
    title: "Birlikte Al Birlikte Yap",
    description: "Toplu konut projelerinde uygun fiyatlı hisse sahibi olma fırsatı.",
    icon: "🤝"
  },
  {
    title: "Güvenli Yatırım",
    description: "Enflasyona karşı korumalı, avantajlı projeler ve yatırım fırsatları.",
    icon: "🏦"
  }
]

export function Services() {
  return (
    <section className="py-20 bg-muted" id="services">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Hizmetlerimiz
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}