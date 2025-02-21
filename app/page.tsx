import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { ParallaxDivider } from "@/components/sections/parallax-divider"
import { Portfolio } from "@/components/sections/portfolio"
import { Services } from "@/components/sections/services"
import { Video } from "@/components/sections/video"
import { Navbar } from "@/components/ui/navbar"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ParallaxDivider
          image="/images/parallax/parallax1.JPG"
          height="h-[40vh]"
          speed={-30}
          overlayOpacity={0.5}
        />
        <Services />
        <ParallaxDivider
          image="/images/parallax/parallax3.png"
          height="h-[20vh]"
          speed={-30}
          overlayOpacity={0.5}
        />
        <Portfolio />
        <ParallaxDivider
          image="/images/parallax/parallax3.png"
          height="h-[20vh]"
          speed={-30}
          overlayOpacity={0.5}
        />
        <Video />
        <ParallaxDivider
          image="/images/parallax/parallax2.JPG"
          height="h-[40vh]"
          speed={-30}
          overlayOpacity={0.5}
        />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}