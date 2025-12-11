"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Heart, Share2, ShoppingBag, Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { useCart } from "@/context/cart-context"

export default function ProductPage() {
  const router = useRouter()
  const params = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<any>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (params.id) {
      const productId = Array.isArray(params.id) ? params.id[0] : params.id
      const foundProduct = products.find((p) => p.id === productId)

      if (foundProduct) {
        setProduct(foundProduct)
        setSelectedImage(foundProduct.image)

        // Find related products (same category)
        const related = products.filter((p) => p.id !== productId && p.category === foundProduct.category).slice(0, 4)

        setRelatedProducts(related)
      }
    }

    setIsLoading(false)
  }, [params.id])

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse w-full max-w-6xl">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square bg-gray-200 rounded-sm"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mt-8"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
        <p className="mb-8">Le produit que vous recherchez n'existe pas.</p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
          <Link href="/menu">Retour au menu</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Button
        variant="ghost"
        className="mb-8 text-secondary hover:text-primary hover:bg-accent"
        onClick={() => router.back()}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Retour
      </Button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="sticky top-24">
            <div className="aspect-square relative overflow-hidden mb-4 fancy-border">
              <Image src={selectedImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="bg-accent text-secondary border-primary/20">
                {product.category === "jewelry"
                  ? "Bijoux"
                  : product.category === "accessories"
                    ? "Accessoires"
                    : "Décoration"}
              </Badge>
            </div>

            <h1 className="text-3xl font-serif font-bold text-secondary">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mt-2">{product.price.toFixed(2)} DT</p>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div>
            <h3 className="font-medium mb-2 text-secondary">Matériau</h3>
            <p className="text-gray-700">{product.material}</p>
          </div>

          <Separator className="bg-primary/10" />

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-secondary mr-4">Quantité</span>
              <div className="flex items-center border border-primary/20">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-none text-primary hover:bg-primary/10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={incrementQuantity}
                  className="h-10 w-10 rounded-none text-primary hover:bg-primary/10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Ajouter au panier
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-none bg-transparent"
              >
                <Heart className="mr-2 h-4 w-4" />
                Ajouter aux favoris
              </Button>
              <Button size="icon" variant="ghost" className="text-secondary hover:text-primary hover:bg-accent">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h4 className="text-primary uppercase tracking-wider font-medium mb-2">Découvrez aussi</h4>
            <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Produits similaires</h2>
            <div className="w-20 h-0.5 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  )
}
