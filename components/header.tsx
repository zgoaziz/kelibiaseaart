"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, ShoppingBag, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/context/cart-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/menu" },
    { name: "À propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-soft py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Updated logo branding from "Kélibia Sea art" to "Kelibia Sea Art" */}
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sea-deep flex items-center justify-center text-white">
            <Waves className="w-5 h-5" />
          </div>
          <div className="font-serif font-bold text-2xl text-sea-deep">Kelibia</div>
          <div className="hidden md:block text-xs uppercase tracking-widest text-nature-green">Sea Art</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative font-medium transition-colors ${
                pathname === item.href ? "text-sea-deep" : "text-gray-dark hover:text-sea-deep"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div layoutId="underline" className="absolute left-0 right-0 h-0.5 bg-sea-deep bottom-[-4px]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-sea-deep hover:text-nature-green">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-nature-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <Button asChild className="bg-sea-deep hover:bg-sea-light text-white rounded-lg">
            <Link href="/menu">Boutique</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden">
          <Link href="/cart" className="relative mr-2">
            <Button variant="ghost" size="icon" className="text-sea-deep hover:text-nature-green">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-nature-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-sea-deep hover:text-nature-green">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-sea-deep/20">
                  <Link href="/" className="font-serif font-bold text-2xl text-sea-deep flex items-center gap-2">
                    <Waves className="w-6 h-6" />
                    Kelibia Sea Art
                  </Link>
                </div>

                <nav className="flex flex-col space-y-6 py-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium ${pathname === item.href ? "text-sea-deep" : "text-gray-dark"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto py-6 border-t border-sea-deep/20 space-y-3">
                  <Button asChild className="w-full bg-sea-deep hover:bg-sea-light text-white rounded-lg">
                    <Link href="/menu">Voir la boutique</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/cart">Voir le panier ({cartCount})</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
