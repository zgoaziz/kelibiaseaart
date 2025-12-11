"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <h1 className="text-4xl font-serif font-bold text-sea-deep mb-4">Votre panier</h1>
            <p className="text-gray-dark text-lg mb-8">Votre panier est vide.</p>
            <Button asChild className="bg-sea-deep hover:bg-sea-light text-white px-8 py-2 rounded-lg">
              <Link href="/menu">Continuer vos achats</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-sea-deep mb-2">Votre panier</h1>
          <p className="text-gray-dark">{cart.length} article(s)</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-marine p-4 flex gap-4"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <Link href={`/menu/${item.id}`}>
                    <h3 className="font-serif font-bold text-sea-deep hover:text-nature-green transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-gray-dark text-sm mt-1">{item.price.toFixed(2)} DT</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-3 py-1 bg-white rounded border border-sea-deep/20">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-right flex flex-col justify-between">
                  <p className="font-bold text-sea-deep">{(item.price * item.quantity).toFixed(2)} DT</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-fit">
            <div className="card-marine p-6 sticky top-32">
              <h2 className="text-2xl font-serif font-bold text-sea-deep mb-6">Résumé de commande</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-sea-deep/20">
                <div className="flex justify-between text-gray-dark">
                  <span>Sous-total</span>
                  <span>{cartTotal.toFixed(2)} DT</span>
                </div>
                <div className="flex justify-between text-gray-dark">
                  <span>Livraison</span>
                  <span>10.00 DT</span>
                </div>
                <div className="flex justify-between text-gray-dark">
                  <span>Taxes</span>
                  <span>À calculer</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-sea-deep mb-6">
                <span>Total</span>
                <span>{(cartTotal + 10).toFixed(2)} DT</span>
              </div>

              <Button
                asChild
                className="w-full bg-sea-deep hover:bg-sea-light text-white py-3 rounded-lg font-semibold"
              >
                <Link href="/checkout">Procéder au paiement</Link>
              </Button>

              <Button asChild variant="ghost" className="w-full mt-3 text-sea-deep">
                <Link href="/menu">Continuer vos achats</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
