import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { CustomSidebar } from "@/components/custom-sidebar"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Restaurant Menu Management",
  description: "Manage your restaurant menu items",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
        <div className="flex min-h-screen">
          <CustomSidebar />
          <div className="flex-1 w-full lg:ml-[70px]">{children}</div>
        </div>
    </body>
  </html>
  )
}
