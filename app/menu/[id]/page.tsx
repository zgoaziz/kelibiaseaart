"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, ChevronLeft, Heart, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params)
  const product = products.find((p) => p.id === unwrappedParams.id)
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-sea-deep mb-4">Produit non trouvé</h1>
          <Button asChild>
            <Link href="/menu">Retour aux produits</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  // Find related products
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link
            href="/menu"
            className="flex items-center gap-2 text-sea-deep hover:text-nature-green transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            Retour au catalogue
          </Link>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-light">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            <Badge className="absolute top-4 left-4 bg-sea-deep hover:bg-sea-light text-white">
              {product.category === "jewelry"
                ? "Bijoux"
                : product.category === "accessories"
                  ? "Accessoires"
                  : "Décoration"}
            </Badge>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start">
            <div className="mb-6">
              <h1 className="text-4xl font-serif font-bold text-sea-deep mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-sea-deep">{product.price.toFixed(2)} DT</span>
                {product.stock > 0 ? (
                  <Badge className="bg-nature-green text-white">En stock</Badge>
                ) : (
                  <Badge className="bg-red-500 text-white">Rupture</Badge>
                )}
              </div>
            </div>

            <p className="text-gray-dark text-lg leading-relaxed mb-8">{product.description}</p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-light rounded-lg">
              <div>
                <p className="text-xs uppercase text-gray-600 font-semibold mb-1">Matériel</p>
                <p className="text-sea-deep font-semibold">{product.material}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-600 font-semibold mb-1">Couleur</p>
                <p className="text-sea-deep font-semibold">{product.color}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-600 font-semibold mb-1">Marque</p>
                <p className="text-sea-deep font-semibold">{product.brand}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-600 font-semibold mb-1">Stock</p>
                <p className="text-sea-deep font-semibold">{product.stock} unités</p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-8 flex gap-4">
              <div className="flex items-center border border-sea-deep/20 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-light transition"
                >
                  −
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-light transition">
                  +
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 ${isAdded ? "bg-nature-green" : "bg-sea-deep hover:bg-sea-light"} text-white`}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {isAdded ? "Ajouté au panier ✓" : "Ajouter au panier"}
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 pt-8 border-t border-gray-light">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-sea-deep" />
                <span className="text-gray-dark">Livraison gratuite à partir de 100 DT</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-sea-deep" />
                <span className="text-gray-dark">100% artisanal - Garantie qualité</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-sea-deep" />
                <span className="text-gray-dark">Retour gratuit sous 30 jours</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-sea-deep mb-8">Produits similaires</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/menu/${p.id}`}>
                  <div className="card-marine rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative aspect-square overflow-hidden bg-gray-light">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-sea-deep mb-2 line-clamp-2">{p.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sea-deep">{p.price.toFixed(2)} DT</span>
                        <Badge className="bg-nature-green text-white text-xs">
                          {p.category === "jewelry"
                            ? "Bijoux"
                            : p.category === "accessories"
                              ? "Accessoires"
                              : "Décoration"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
