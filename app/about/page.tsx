"use client"

import { motion } from "framer-motion"
import { Heart, Leaf, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Chaque pièce est créée avec amour et dévouement pour célébrer la beauté marine.",
    },
    {
      icon: Leaf,
      title: "Durabilité",
      description: "Nous utilisons des matériaux recyclés et respectueux de l'environnement pour préserver nos océans.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Nous transformons les déchets marins en trésors artisanaux uniques et exceptionnels.",
    },
  ]

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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">À Propos de Nous</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'histoire de Kélibia Maris et notre engagement envers l'artisanat durable et la préservation de
            nos océans.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 bg-primary/5 rounded-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Notre Histoire</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Kélibia Maris est née de la passion pour la mer et l'artisanat. Inspirés par la beauté naturelle de
              Kélibia, nous avons décidé de créer une marque qui célèbre l'océan tout en respectant l'environnement.
            </p>
            <p>
              Chaque produit est confectionné à la main par des artisans locaux talentueux qui transforment les
              matériaux marins récupérés en pièces uniques et magnifiques. Des coquillages naturels aux filets de pêche
              recyclés, chaque élément a une histoire à raconter.
            </p>
            <p>
              Notre mission est de sensibiliser les gens à l'importance de la préservation de nos océans tout en offrant
              des produits artisanaux de haute qualité qui apportent la beauté marine directement dans votre maison.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-12 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg p-8 text-center border border-primary/10 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Collections Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-8 text-center">Notre Collection Asiatic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">Bijoux</h3>
              <p className="text-gray-600">
                Créés avec des coquillages naturels et des perles marines, nos bijoux apportent l'essence de l'océan
                directement sur votre peau.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">Accessoires</h3>
              <p className="text-gray-600">
                Nos accessoires sont fabriqués à partir de filets de pêche recyclés, offrant une touche écologique et
                tendance à votre lifestyle.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">Décoration</h3>
              <p className="text-gray-600">
                Transformez votre intérieur avec nos pièces de décoration qui célèbrent la beauté brute et l'art marin.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-primary/10 rounded-lg p-12"
        >
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Rejoignez-nous dans cette aventure</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez notre collection complète et contribuez à la préservation de nos océans en choisissant des
            produits artisanaux durables.
          </p>
          <a
            href="/products"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Découvrir nos produits
          </a>
        </motion.div>
      </div>
    </main>
  )
}
