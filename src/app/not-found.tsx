import { Button } from '@/components/ui/button'
import { Merriweather, Montserrat } from "next/font/google"
import Link from "next/link"

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})


export default function NotFound() {
  return (
    <html className={`${merriweather.variable} ${montserrat.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Button asChild className="font-display">

            <Link href="/">Return Home</Link>
          </Button>
        </div>

      </body>
    </html>
  )
}