"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    acceptTerms: false,
  })

  if (cart.length === 0 && !isCompleted) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
            <h1 className="text-4xl font-serif font-bold text-sea-deep mb-4">Panier vide</h1>
            <p className="text-gray-dark text-lg mb-8">
              Vous devez avoir des articles dans votre panier pour commander.
            </p>
            <Button asChild className="bg-sea-deep hover:bg-sea-light text-white px-8 py-2 rounded-lg">
              <Link href="//menu">Retour aux produits</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    )
  }

  if (isCompleted) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block mb-8">
              <div className="w-20 h-20 rounded-full bg-nature-green/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-nature-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-sea-deep mb-4">Commande confirmée!</h1>
            <p className="text-gray-dark text-lg mb-4">
              Merci pour votre achat. Vous recevrez un email de confirmation avec les détails de votre commande.
            </p>
            <p className="text-gray-dark mb-8">
              Numéro de commande: <span className="font-semibold">KM-{Date.now().toString().slice(-6)}</span>
            </p>
            <p className="text-gray-dark mb-8">Un message WhatsApp a été envoyé avec les détails de votre commande.</p>
            <Button asChild className="bg-sea-deep hover:bg-sea-light text-white px-8 py-2 rounded-lg">
              <Link href="/">Retour à l'accueil</Link>
            </Button>
          </motion.div>
        </div>
      </main>
    )
  }

  const encodeWhatsAppMessage = (data: typeof formData) => {
    const orderNumber = Date.now().toString().slice(-6)
    const cartItems = cart
      .map((item) => `${item.name} x${item.quantity} - ${(item.price * item.quantity).toFixed(2)} DT`)
      .join("\n")

    const message = `*Nouvelle Commande Kélibia Sea art* 🌊

*Numéro de commande:* KM-${orderNumber}

*Informations client:*
Nom: ${data.firstName} ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone}
Adresse: ${data.address}
Ville: ${data.city}
Code postal: ${data.zipCode}
Pays: ${data.country}

*Produits commandés:*
${cartItems}

*Total:* ${(cartTotal + 10).toFixed(2)} DT
(Dont livraison: 10.00 DT)

*Date:* ${new Date().toLocaleString("fr-TN")}`

    return encodeURIComponent(message)
  }

  const sendWhatsAppMessage = () => {
    const whatsappPhone = "+21672000000" // Business number for Kélibia Sea art
    const message = encodeWhatsAppMessage(formData)
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.acceptTerms) {
      alert("Veuillez accepter les conditions d'utilisation")
      return
    }
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      sendWhatsAppMessage()
      setIsCompleted(true)
      clearCart()
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-sea-deep mb-2">Passer la commande</h1>
          <p className="text-gray-dark">Complétez vos informations pour finaliser votre achat</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Contact Information */}
              <div className="card-marine p-6">
                <h2 className="text-2xl font-serif font-bold text-sea-deep mb-4">Informations personnelles</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Prénom"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border-sea-deep/20 focus:border-sea-deep"
                  />
                  <Input
                    placeholder="Nom"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border-sea-deep/20 focus:border-sea-deep"
                  />
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="md:col-span-2 border-sea-deep/20 focus:border-sea-deep"
                  />
                  <Input
                    placeholder="Téléphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="md:col-span-2 border-sea-deep/20 focus:border-sea-deep"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="card-marine p-6">
                <h2 className="text-2xl font-serif font-bold text-sea-deep mb-4">Adresse de livraison</h2>
                <div className="grid gap-4">
                  <Input
                    placeholder="Adresse"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="border-sea-deep/20 focus:border-sea-deep"
                  />
                  <div className="grid md:grid-cols-3 gap-4">
                    <Input
                      placeholder="Ville"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="border-sea-deep/20 focus:border-sea-deep"
                    />
                    <Input
                      placeholder="Code postal"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="border-sea-deep/20 focus:border-sea-deep"
                    />
                    <Input
                      placeholder="Pays"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="border-sea-deep/20 focus:border-sea-deep"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Acceptance */}
              <div className="card-marine p-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, acceptTerms: !!checked }))}
                  />
                  <label htmlFor="terms" className="text-gray-dark cursor-pointer">
                    J'accepte les conditions d'utilisation et la politique de confidentialité
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-sea-deep hover:bg-sea-light text-white py-3 rounded-lg font-semibold disabled:opacity-50"
              >
                {isProcessing ? "Traitement..." : "Confirmer la commande"}
              </Button>
            </motion.form>
          </div>

          {/* Order Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-fit">
            <div className="card-marine p-6 sticky top-32">
              <h2 className="text-2xl font-serif font-bold text-sea-deep mb-6">Résumé</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-sea-deep/20">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-dark">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>{(item.price * item.quantity).toFixed(2)} DT</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-gray-dark">
                  <span>Sous-total</span>
                  <span>{cartTotal.toFixed(2)} DT</span>
                </div>
                <div className="flex justify-between text-gray-dark">
                  <span>Livraison</span>
                  <span>10.00 DT</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-sea-deep pt-6 border-t border-sea-deep/20">
                <span>Total</span>
                <span>{(cartTotal + 10).toFixed(2)} DT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
