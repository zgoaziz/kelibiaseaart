"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Avez-vous des questions? Nous serions ravis d'entendre parler de vous. Contactez-nous pour en savoir plus
            sur nos produits artisanaux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Adresse</h3>
                  <p className="text-gray-600">Kélibia, Nabeul</p>
                  <p className="text-gray-600">Tunisie</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
                  <a href="mailto:contact@kelibia-maris.com" className="text-primary hover:text-primary/80">
                    contact@kelibia-maris.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Téléphone</h3>
                  <a href="tel:+216 72 000 000" className="text-primary hover:text-primary/80">
                    +216 72 000 000
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-secondary mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Lundi - Vendredi: 9h00 - 18h00</p>
                  <p>Samedi: 10h00 - 17h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-lg p-8 shadow-sm border border-primary/10"
            >
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-nature-green/10 border border-nature-green text-nature-green p-4 rounded-lg"
                >
                  Merci! Votre message a été envoyé avec succès.
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Nom
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="border-primary/20 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className="border-primary/20 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                  Téléphone
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+216 XX XXX XXX"
                  className="border-primary/20 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                  Sujet
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  required
                  className="border-primary/20 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-primary/20 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Envoi..." : "Envoyer le message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
