"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    title: "Yatırım Danışmanlığı",
    description: "Seçtiğimiz arsaların imar izinleri, konum analizi ve gelecek planlaması konusunda uzman danışmanlık.",
    icon: "📊",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Birlikte Al Birlikte Yap",
    description: "Toplu konut projelerinde uygun fiyatlı hisse sahibi olma fırsatı.",
    icon: "🤝",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    title: "Güvenli Yatırım",
    description: "Enflasyona karşı korumalı, avantajlı projeler ve yatırım fırsatları.",
    icon: "🏦",
    gradient: "from-amber-500 to-orange-400"
  }
]

export function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-600 text-lg">
            Yatırımlarınızı güvenle değerlendirin, geleceğinizi birlikte inşa edelim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
                <CardHeader className="relative">
                  <div className="text-5xl mb-6 bg-gradient-to-br from-primary to-primary/60 rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}