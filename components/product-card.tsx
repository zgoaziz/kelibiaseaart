"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/products"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-0 shadow-soft h-full group hover:shadow-medium transition-all">
        <div
          className="relative aspect-square overflow-hidden bg-gray-light"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />

          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col gap-3">
              <Button
                size="sm"
                className={`${isAdded ? "bg-nature-green" : "bg-sea-deep hover:bg-sea-light"} text-white transition-all`}
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {isAdded ? "Ajouté ✓" : "Ajouter au panier"}
              </Button>
            </div>
          </div>

          <Badge className="absolute top-3 left-3 bg-sea-deep hover:bg-sea-light text-white">
            {product.category === "jewelry"
              ? "Bijoux"
              : product.category === "accessories"
                ? "Accessoires"
                : "Décoration"}
          </Badge>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white text-sea-deep rounded-full h-8 w-8"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="p-4 bg-white">
          <h3 className="font-serif font-bold text-lg text-sea-deep group-hover:text-nature-green transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-dark text-sm line-clamp-2 mt-2 mb-4">{product.description}</p>

          <div className="flex justify-between items-center">
            <span className="font-semibold text-sea-deep text-lg">{product.price.toFixed(2)} DT</span>
            {product.stock > 0 ? (
              <span className="text-xs text-nature-green font-semibold">En stock</span>
            ) : (
              <span className="text-xs text-red-500 font-semibold">Rupture</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
