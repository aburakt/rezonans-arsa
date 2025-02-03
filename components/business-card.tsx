import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import Image from "next/image"
import AboutUs from "./about-us"

export function BusinessCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Left side - Business Info */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Rezonans Arsa</h1>
              <div className="space-y-2">
                <p className="text-muted-foreground">Ali Ege Öztürk</p>
                <p className="text-muted-foreground">Founder</p>
                <a href="mailto:rezonansarsa@gmail.com">
                  <p className="text-muted-foreground hover:text-blue-600 transition-colors">rezonansarsa@gmail.com</p>
                </a>
                <a href="tel:+905437195171"
                  className="text-muted-foreground hover:text-blue-600 transition-colors">
                  <p className="text-muted-foreground">+90 543 719 5171</p>
                </a>
                <p className="text-muted-foreground">Yenişehir Mah. Millet Cad. No: 34D D Blok İç Kapı No:188 Pendik/İstanbul</p>
              </div>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Hakkımızda</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Rezonans Arsa Hakkında</h2>
                    <AboutUs />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="flex items-center justify-center bg-muted p-6">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}