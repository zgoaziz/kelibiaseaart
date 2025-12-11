import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/context/cart-context"

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Kélibia Maris - Bijoux et Créations Artisanales Écologiques",
  description:
    "Découvrez Kélibia Maris, un projet de valorisation écologique et artisanale. Transformez les déchets marins en magnifiques bijoux et créations handmade faites à Kélibia, Tunisie.",
  keywords: "Kélibia, artisanat écologique, bijoux marins, déchets marins, produits artisanaux, Tunisie",
  authors: [{ name: "Kélibia Maris" }],
  openGraph: {
    title: "Kélibia Maris - Créations Artisanales Écologiques",
    description:
      "Transformez les déchets marins en bijoux et créations uniques. Projet écologique et social à Kélibia, Tunisie.",
    type: "website",
    locale: "fr_TN",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
