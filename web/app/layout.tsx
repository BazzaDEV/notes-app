import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            inter.className,
            "flex flex-col min-h-screen px-8 max-w-4xl m-auto"
          )}
        >
          <header className="py-4">Blog</header>
          <div className="flex-1 flex flex-col py-4">{children}</div>
          <footer className="py-4">2023</footer>
        </body>
      </Providers>
    </html>
  )
}
