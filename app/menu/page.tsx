"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter, X } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ProductCard } from "@/components/product-card"
import { products, categories, colors, priceRanges } from "@/lib/products"

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Apply filters
  useEffect(() => {
    const filtered = products.filter((product) => {
      // Search filter
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory.length === 0 || selectedCategory.includes(product.category)

      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)

      let matchesPrice = true
      if (selectedPriceRange) {
        const range = priceRanges.find((r) => r.label === selectedPriceRange)
        if (range) {
          matchesPrice = product.price >= range.min && product.price <= range.max
        }
      }

      return matchesSearch && matchesCategory && matchesColor && matchesPrice
    })

    setFilteredProducts(filtered)
  }, [searchQuery, selectedCategory, selectedColors, selectedPriceRange])

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategory((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory([])
    setSelectedColors([])
    setSelectedPriceRange(null)
  }

  const FilterContent = () => (
    <div className="py-4 h-full overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-sea-deep">Filtres</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="h-8 text-sea-deep hover:text-nature-green hover:bg-transparent"
        >
          Réinitialiser
        </Button>
      </div>

      <Accordion type="single" collapsible defaultValue="categories" className="w-full">
        {/* Categories Filter */}
        <AccordionItem value="categories" className="border-b border-sand-light">
          <AccordionTrigger className="text-sea-deep hover:text-nature-green py-3 hover:no-underline">
            Catégories
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 py-2">
              {categories.slice(1).map((category) => (
                <div key={category.value} className="flex items-center">
                  <Checkbox
                    id={`category-${category.value}`}
                    checked={selectedCategory.includes(category.value)}
                    onCheckedChange={() => toggleCategory(category.value)}
                    className="border-sea-deep/30 data-[state=checked]:bg-sea-deep data-[state=checked]:text-white"
                  />
                  <Label htmlFor={`category-${category.value}`} className="ml-2 cursor-pointer text-gray-dark text-sm">
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Filter */}
        <AccordionItem value="price" className="border-b border-sand-light">
          <AccordionTrigger className="text-sea-deep hover:text-nature-green py-3 hover:no-underline">
            Prix
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 py-2">
              {priceRanges.map((range) => (
                <div key={range.label} className="flex items-center">
                  <Checkbox
                    id={`price-${range.label}`}
                    checked={selectedPriceRange === range.label}
                    onCheckedChange={() =>
                      setSelectedPriceRange(selectedPriceRange === range.label ? null : range.label)
                    }
                    className="border-sea-deep/30 data-[state=checked]:bg-sea-deep data-[state=checked]:text-white"
                  />
                  <Label htmlFor={`price-${range.label}`} className="ml-2 cursor-pointer text-gray-dark text-sm">
                    {range.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color Filter */}
        <AccordionItem value="color" className="border-b border-sand-light">
          <AccordionTrigger className="text-sea-deep hover:text-nature-green py-3 hover:no-underline">
            Couleur
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 py-2">
              {colors.map((color) => (
                <div key={color} className="flex items-center">
                  <Checkbox
                    id={`color-${color}`}
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => toggleColor(color)}
                    className="border-sea-deep/30 data-[state=checked]:bg-sea-deep data-[state=checked]:text-white"
                  />
                  <Label htmlFor={`color-${color}`} className="ml-2 cursor-pointer text-gray-dark text-sm">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h4 className="text-sea-deep uppercase tracking-wider font-medium mb-2">Collection Asiatic</h4>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-sea-deep mb-4">Nos Produits Artisanaux</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-sea-deep to-transparent mx-auto mb-6"></div>
        <p className="text-lg text-gray-dark max-w-2xl mx-auto leading-relaxed">
          Découvrez notre sélection exclusive Asiatic de produits artisanaux : bijoux en coquillages naturels,
          accessoires en filets de pêche recyclés et décoration marine. Chaque pièce est unique et respectueuse de
          l'environnement.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 bg-gradient-to-b from-sand-light to-white p-6 rounded-xl border border-sand-dark/10 shadow-sm">
            <FilterContent />
          </div>
        </div>

        {/* Mobile Filters Button and Sheet */}
        <div className="lg:hidden flex items-center justify-between mb-6 gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-sea-deep/30 text-sea-deep bg-white hover:bg-sand-light"
              >
                <Filter className="h-4 w-4" />
                Filtres
                {(selectedCategory.length > 0 || selectedColors.length > 0 || selectedPriceRange) && (
                  <Badge className="ml-1 bg-sea-deep hover:bg-sea-light text-white">
                    {selectedCategory.length + selectedColors.length + (selectedPriceRange ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
              <FilterContent />
            </SheetContent>
          </Sheet>

          {/* Search Input for Mobile */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-sea-deep/20 focus:border-sea-deep focus:ring-sea-deep/20 bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1">
          {/* Desktop Search */}
          <div className="hidden lg:flex mb-8 relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-sea-deep/20 focus:border-sea-deep focus:ring-sea-deep/20 bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>

          {/* Active Filters */}
          {(selectedCategory.length > 0 || selectedColors.length > 0 || selectedPriceRange) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory.map((category) => {
                const categoryLabel = categories.find((c) => c.value === category)?.label
                return (
                  <Badge
                    key={`cat-${category}`}
                    variant="secondary"
                    className="bg-sand-light text-sea-deep hover:bg-sand-dark/10 border border-sea-deep/10"
                  >
                    {categoryLabel}
                    <button
                      onClick={() => setSelectedCategory((prev) => prev.filter((c) => c !== category))}
                      className="ml-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )
              })}
              {selectedColors.map((color) => (
                <Badge
                  key={`color-${color}`}
                  variant="secondary"
                  className="bg-sand-light text-sea-deep hover:bg-sand-dark/10 border border-sea-deep/10"
                >
                  {color}
                  <button onClick={() => setSelectedColors((prev) => prev.filter((c) => c !== color))} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {selectedPriceRange && (
                <Badge
                  variant="secondary"
                  className="bg-sand-light text-sea-deep hover:bg-sand-dark/10 border border-sea-deep/10"
                >
                  {selectedPriceRange}
                  <button onClick={() => setSelectedPriceRange(null)} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <p className="text-sm text-gray-600 mb-6">
            {filteredProducts.length} {filteredProducts.length > 1 ? "résultats" : "résultat"} trouvé(s)
          </p>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} className="opacity-0" animate={{ opacity: 1 }}>
                  <Link href={`/menu/${product.id}`} className="block">
                    <ProductCard product={product} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 mb-4">Aucun produit ne correspond à vos critères.</p>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-sea-deep text-sea-deep hover:bg-sand-light bg-white"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
