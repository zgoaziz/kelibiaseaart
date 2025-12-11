"use client"

import { motion } from "framer-motion"
import { ChevronRight, Waves, Leaf, Anchor } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { ScrollAudio } from "@/components/scroll-audio"
import { WavyBackground } from "@/components/ui/wavy-background"

const products = [
  {
    id: "1",
    name: "Collier Coquillage Doré - Plage",
    image: "/shell-necklace-1.jpg",
    price: 45,
    category: "jewelry",
  },
  {
    id: "2",
    name: "Colliers Coquillages Assortis",
    image: "/shell-necklaces-set.jpg",
    price: 85,
    category: "jewelry",
  },
  {
    id: "3",
    name: "Bracelet Pierres Rose et Charmes",
    image: "/rose-quartz-bracelet.jpg",
    price: 38,
    category: "jewelry",
  },
  {
    id: "4",
    name: "Sac de Plage Filets Recyclés",
    image: "/recycled-fishing-net-beach-bag.jpg",
    price: 65,
    category: "accessories",
  },
]

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <ScrollAudio />

      {/* Hero Section */}
      <section className="w-full relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/hero-kelibia-sea-art.jpg" alt="Kélibia Sea Art" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-sand-dark flex items-center justify-center">
                <Waves className="w-8 h-8 text-sand-dark" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Kélibia Sea Art
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light mb-8 text-white/90"
          >
            Là où la mer dépose ses trésors.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Un projet de valorisation écologique et artisanale
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button asChild className="btn-primary">
              <Link href="#project">
                Découvrir le projet
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="text-center text-white/60">
            <div className="text-xs uppercase tracking-widest mb-2">Scroll</div>
            <div className="flex justify-center">
              <ChevronRight className="w-5 h-5 transform rotate-90" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Products Preview Section */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-4">Nos Produits Artisanaux</h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto mb-8">
              Explorez notre collection exclusive de bijoux et accessoires faits à la main avec des matériaux marins
              recyclés
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {products.slice(0, 4).map((product, i) => (
              <motion.div key={product.id} variants={fadeInUp} custom={i}>
                <div className="card-marine rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square overflow-hidden bg-gray-light">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-sea-deep mb-2 text-sm line-clamp-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sea-deep">{product.price.toFixed(2)} DT</span>
                      <Badge className="bg-nature-green text-white text-xs">
                        {product.category === "jewelry"
                          ? "Bijoux"
                          : product.category === "accessories"
                            ? "Accessoires"
                            : "Décor"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Button asChild className="btn-primary">
              <Link href="/menu">
                Voir nos produits
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity Section */}
      <section id="project" className="w-full bg-white">
        <WavyBackground
          colors={["#1a7a8a", "#0d9488", "#14b8a6", "#2dd4bf", "#06b6d4"]}
          backgroundFill="rgba(255, 255, 255, 0.8)"
          waveOpacity={0.3}
          blur={8}
          waveWidth={40}
          containerClassName="bg-gradient-to-b from-stone-50 to-white py-24"
          className="max-w-6xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-4">
              Notre littoral : une beauté menacée, une opportunité cachée.
            </h2>
            <div className="section-divider mt-6"></div>
          </motion.div>
        </WavyBackground>

        <div className="px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Beauté naturelle */}
              <motion.div variants={fadeInUp} custom={0} className="card-marine p-8">
                <Image
                  src="/pristine-tunisian-beach-clear-turquoise-water.jpg"
                  alt="Beauté du littoral"
                  width={500}
                  height={400}
                  className="rounded-lg mb-6 object-cover h-64 w-full"
                />
                <h3 className="text-2xl font-serif font-bold text-sea-deep mb-4">
                  Une beauté naturelle, une source d'inspiration.
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  Le littoral de Kélibia, avec ses eaux cristallines et son sable blanc, reste une richesse naturelle
                  incontournable et une source inépuisable d'inspiration pour nos créations artisanales.
                </p>
              </motion.div>

              {/* Pollution marine */}
              <motion.div variants={fadeInUp} custom={1} className="card-marine p-8">
                <Image
                  src="/abandoned-fishing-nets-marine-pollution-beach-wast.jpg"
                  alt="Pollution marine"
                  width={500}
                  height={400}
                  className="rounded-lg mb-6 object-cover h-64 w-full"
                />
                <h3 className="text-2xl font-serif font-bold text-sea-deep mb-4">
                  Une pollution marine qui menace et dévalorise nos ressources.
                </h3>
                <p className="text-gray-dark leading-relaxed">
                  Filets de pêche abandonnés, coquillages oubliés... ces déchets marins polluent notre écosystème.
                  Kélibia Maris les transforme en trésors artisanaux.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-24 px-4 bg-sand-light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-4">
              Chaque déchet est une ressource.
            </h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              Découvrez comment nos matières premières deviennent des produits uniques
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Coquillages */}
            <motion.div variants={fadeInUp} custom={0} className="card-marine p-8 border-2 border-nature-green">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-nature-light/20 flex items-center justify-center flex-shrink-0">
                  <Waves className="w-6 h-6 text-nature-green" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-sea-deep">Coquillages usagés</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sea-deep mb-2">Source</p>
                  <p className="text-gray-dark">
                    Récupérés auprès des restaurants, cafés et hôtels du littoral (Nabeul, Hammamet, Kélibia)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sea-deep mb-2">Type</p>
                  <p className="text-gray-dark">Palourdes, moules, coquilles Saint-Jacques, etc.</p>
                </div>
              </div>
            </motion.div>

            {/* Filets de pêche */}
            <motion.div variants={fadeInUp} custom={1} className="card-marine p-8 border-2 border-nature-green">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-nature-light/20 flex items-center justify-center flex-shrink-0">
                  <Anchor className="w-6 h-6 text-nature-green" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-sea-deep">Filets de pêche usés</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sea-deep mb-2">Source</p>
                  <p className="text-gray-dark">Collectés directement auprès des pêcheurs du port de Kélibia</p>
                </div>
                <div>
                  <p className="font-semibold text-sea-deep mb-2">Constat</p>
                  <p className="text-gray-dark">
                    Souvent stockés ou abandonnés, ces filets non réutilisables deviennent une matière première pour
                    notre atelier
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-white to-sand-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-8">
              Notre vision : Créer de la valeur, sociale et écologique.
            </h2>
            <div className="section-divider mb-12"></div>
            <p className="text-xl text-gray-dark mb-16">Créer une entreprise écologique et sociale à Nabeul/Kélibia</p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mt-12"
            >
              {[
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: "Solution écologique innovante",
                  desc: "Réduire la pollution marine en recyclant les déchets naturels et plastiques",
                },
                {
                  icon: <Waves className="w-8 h-8" />,
                  title: "Produits uniques et authentiques",
                  desc: "Chaque pièce faite à la main avec un design inspiré par la mer",
                },
                {
                  icon: <Anchor className="w-8 h-8" />,
                  title: "Impact social local",
                  desc: "Créer des emplois et valoriser le savoir-faire artisanal tunisien",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} custom={i} className="card-marine p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nature-light/20 mb-4 text-nature-green">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-sea-deep mb-3">{item.title}</h3>
                  <p className="text-gray-dark">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-4">
              L'art de la transformation.
            </h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              Découvrez nos deux catégories de produits artisanaux
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Shell Products */}
            <motion.div variants={fadeInUp} custom={0} className="card-marine p-8">
              <Image
                src="/handmade-shell-jewelry-necklace-earrings-artisanal.jpg"
                alt="Produits en coquillages"
                width={500}
                height={400}
                className="rounded-lg mb-8 object-cover h-64 w-full"
              />
              <h3 className="text-2xl font-serif font-bold text-sea-deep mb-6">Produits à base de coquillages</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sea-deep mb-1">Bijoux</p>
                  <p className="text-gray-dark text-sm">Boucles d'oreilles, colliers, bracelets</p>
                </div>
                <div>
                  <p className="font-semibold text-sea-deep mb-1">Accessoires</p>
                  <p className="text-gray-dark text-sm">Porte-clés, broches, accessoires cheveux</p>
                </div>
                <div>
                  <p className="font-semibold text-sea-deep mb-1">Décoration</p>
                  <p className="text-gray-dark text-sm">Suspensions, photophores, miroirs</p>
                </div>
              </div>
            </motion.div>

            {/* Fishing Net Products */}
            <motion.div variants={fadeInUp} custom={1} className="card-marine p-8">
              <Image
                src="/artisanal-woven-bag-fishing-net-beach-eco-friendly.jpg"
                alt="Produits en filets"
                width={500}
                height={400}
                className="rounded-lg mb-8 object-cover h-64 w-full"
              />
              <h3 className="text-2xl font-serif font-bold text-sea-deep mb-6">Produits à base de filets de pêche</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sea-deep mb-1">Sacs et accessoires</p>
                  <p className="text-gray-dark text-sm">Sacs de plage, pochettes, porte-bouteilles</p>
                </div>
                <div>
                  <p className="font-semibold text-sea-deep mb-1">Décoration</p>
                  <p className="text-gray-dark text-sm">Tableaux, paniers, luminaires</p>
                </div>
                <div>
                  <p className="font-semibold text-sea-deep mb-1">Objets design</p>
                  <p className="text-gray-dark text-sm">Articles pour l'hôtellerie, sets de table, porte-menus</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-sand-light to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-4">Nos Créations Artistiques</h2>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              Faites glisser les cartes pour explorer notre galerie d'art maritime
            </p>
            <div className="section-divider mt-6"></div>
          </motion.div>

          <DraggableCardContainer className="relative flex min-h-96 w-full items-center justify-center overflow-hidden">
            {[
              {
                title: "Colliers Coquillages",
                image: "/shell-necklace-1.jpg",
                className: "absolute top-10 left-[15%] rotate-[-8deg]",
              },
              {
                title: "Coquillages Assortis",
                image: "/shell-necklaces-set.jpg",
                className: "absolute top-40 left-[30%] rotate-[-5deg]",
              },
              {
                title: "Bracelet Rose",
                image: "/rose-quartz-bracelet.jpg",
                className: "absolute top-20 left-[50%] rotate-[6deg]",
              },
              {
                title: "Sac de Plage",
                image: "/recycled-fishing-net-beach-bag.jpg",
                className: "absolute top-32 left-[68%] rotate-[3deg]",
              },
              {
                title: "Pochette Filets",
                image: "/blue-fishing-net-pouch.jpg",
                className: "absolute top-16 left-[82%] rotate-[-6deg]",
              },
            ].map((item, i) => (
              <DraggableCardBody key={i} className={item.className}>
                <div className="h-full flex flex-col justify-between">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <p className="font-semibold text-sea-deep text-lg">{item.title}</p>
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4 bg-sand-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-6">
              Rejoignez notre mouvement écologique
            </h2>
            <p className="text-lg text-gray-dark mb-12 max-w-2xl mx-auto">
              Découvrez nos créations artisanales et contribuez à la préservation de notre littoral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link href="/menu">
                  Voir nos produits
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
