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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          İletişim
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info & Map Card */}
          <Card className="p-8">
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-muted-foreground">
                      İstanbul, Türkiye<br />
                      Tam adres bilgisi
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+90 XXX XXX XX XX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">rezonansarsa@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-[16/9] w-full mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="shadow-md"
                />
              </div>
            </div>
          </Card>

          {/* Contact Form Card */}
          <Card className="p-8">
            <h3 className="font-semibold text-xl mb-6 text-center">Bize Ulaşın</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Ad Soyad
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Adınız Soyadınız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Adresiniz"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Telefon numaranız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınız"
                    rows={6}
                    className="resize-none"
                    required
                  />
                </div>
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Gönderiliyor..." : "Gönder"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}