"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Mesaj gönderilemedi")

      toast({
        title: "Başarılı!",
        description: "Mesajınız başarıyla gönderildi.",
      })

      // Reset form
      e.currentTarget.reset()
    } catch (error: unknown) {
      toast({
        title: "Hata!",
        description: `Mesajınız gönderilemedi: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            İletişim
          </h2>
          <p className="text-gray-600 text-lg">
            Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info & Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Yenişehir Mah. Millet Cad.<br />
                        Bina No:34D D blok iç kapı No:188<br />
                        Pendik İstanbul, Türkiye
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-gray-600">+90 543 719 51 71</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">rezonansarsa@gmail.com</p>
                    </div>
                  </motion.div>
                </div>

                {/* Map */}
                <div className="aspect-[16/9] w-full mt-8 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.4666211254134!2d29.3063247529891!3d40.927439450794566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cada10fa90bc6f%3A0x7013eb09722865bf!2sYeni%C5%9Fehir%2C%20Millet%20Cd.%20No%3A34%2C%2034912%20Pendik%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1739215041110!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="shadow-md hover:shadow-xl transition-shadow"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Bize Ulaşın
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Adınız
                    </label>
                    <Input id="name" name="name" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefon
                    </label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mesajınız
                    </label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    type="submit" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Gönderiliyor..." : "Gönder"}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}