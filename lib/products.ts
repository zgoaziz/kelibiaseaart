export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: "jewelry" | "accessories" | "decoration"
  color: string
  image: string
  stock: number
  material: string
  brand: string
}

export const products: Product[] = [
  // Shell Jewelry - Asiatic Collection
  {
    id: "1",
    name: "Collier Coquillage Doré - Plage",
    description:
      "Magnifique collier artisanal avec coquillage naturel et chaîne dorée. Parfait pour un look bohème côtier.",
    price: 45,
    category: "jewelry",
    color: "Or",
    image: "/shell-necklace-1.jpg",
    stock: 5,
    material: "Coquillage naturel, chaîne acier doré",
    brand: "Asiatic",
  },
  {
    id: "2",
    name: "Colliers Coquillages Assortis",
    description:
      "Ensemble de 4 colliers délicats en coquilles blanches avec perles marines et chaîne acier inoxydable.",
    price: 85,
    category: "jewelry",
    color: "Blanc",
    image: "/shell-necklaces-set.jpg",
    stock: 8,
    material: "Coquilles blanches, perles marines, acier inoxydable",
    brand: "Asiatic",
  },
  {
    id: "3",
    name: "Bracelet Pierres Rose et Charmes",
    description: "Bracelet élégant en pierres roses avec perles dorées et charmes délicats. Un accessoire parfait.",
    price: 38,
    category: "jewelry",
    color: "Rose",
    image: "/rose-quartz-bracelet.jpg",
    stock: 6,
    material: "Pierres roses, perles dorées, élastique écologique",
    brand: "Asiatic",
  },

  // Fishing Net Accessories - Asiatic Collection
  {
    id: "4",
    name: "Sac de Plage Filets Recyclés",
    description: "Grand sac pratique confectionné à partir de filets de pêche usagés, durable et écologique.",
    price: 65,
    category: "accessories",
    color: "Bleu",
    image: "/recycled-fishing-net-beach-bag.jpg",
    stock: 4,
    material: "Filets de pêche recyclés, renforts cuir",
    brand: "Asiatic",
  },
  {
    id: "5",
    name: "Pochette Filets Bleus",
    description: "Élégante pochette en filets bleus transformée en accessoire tendance.",
    price: 28,
    category: "accessories",
    color: "Bleu",
    image: "/blue-fishing-net-pouch.jpg",
    stock: 10,
    material: "Filets de pêche bleus, doublure coton",
    brand: "Asiatic",
  },
  {
    id: "6",
    name: "Porte-Bouteilles Filets",
    description: "Accessoire pratique et design pour transporter vos bouteilles à la plage ou en pique-nique.",
    price: 22,
    category: "accessories",
    color: "Marron",
    image: "/fishing-net-bottle-holder.jpg",
    stock: 7,
    material: "Filets de pêche renforcés, anses renforcées",
    brand: "Asiatic",
  },

  // Shell Decoration - Asiatic Collection
  {
    id: "7",
    name: "Suspension Coquillages Lumineux",
    description: "Décoration murale illuminée créant une ambiance marine chaleureuse dans votre intérieur.",
    price: 55,
    category: "decoration",
    color: "Blanc",
    image: "/luminous-shell-decoration.jpg",
    stock: 3,
    material: "Coquillages naturels, LED solaire",
    brand: "Asiatic",
  },
  {
    id: "8",
    name: "Photophore Coquillages Assemblés",
    description: "Joli photophore réunissant différentes coquilles pour une décoration bohème.",
    price: 32,
    category: "decoration",
    color: "Multicolore",
    image: "/shell-photophore.jpg",
    stock: 9,
    material: "Coquillages naturels, verre recyclé",
    brand: "Asiatic",
  },
  {
    id: "9",
    name: "Miroir Encadré Filets & Coquillages",
    description: "Miroir original encadré par une combinaison artistique de filets et coquillages.",
    price: 72,
    category: "decoration",
    color: "Beige",
    image: "/mirror-fishing-net-shells.jpg",
    stock: 2,
    material: "Filets de pêche, coquillages, bois recyclé",
    brand: "Asiatic",
  },
  {
    id: "10",
    name: "Tableau Filets Tissés",
    description:
      "Artwork mural en filets de pêche tissés de manière artistique, parfait pour créer une ambiance côtière.",
    price: 85,
    category: "decoration",
    color: "Multicolore",
    image: "/woven-fishing-net-wall-art.jpg",
    stock: 1,
    material: "Filets de pêche colorés, bois flotté",
    brand: "Asiatic",
  },
  {
    id: "11",
    name: "Panier Stockage Filets",
    description: "Panier fonctionnel fabriqué à partir de filets de pêche renforcés, idéal pour l'organisation.",
    price: 48,
    category: "decoration",
    color: "Beige",
    image: "/fishing-net-storage-basket.jpg",
    stock: 5,
    material: "Filets de pêche renforcés, structure bois",
    brand: "Asiatic",
  },
]

export const categories = [
  { value: "all", label: "Tous les produits" },
  { value: "jewelry", label: "Bijoux" },
  { value: "accessories", label: "Accessoires" },
  { value: "decoration", label: "Décoration" },
]

export const colors = ["Or", "Blanc", "Rose", "Bleu", "Marron", "Multicolore", "Beige"]

export const priceRanges = [
  { label: "Moins de 30 DT", min: 0, max: 30 },
  { label: "30 - 50 DT", min: 30, max: 50 },
  { label: "50 - 75 DT", min: 50, max: 75 },
  { label: "Plus de 75 DT", min: 75, max: Number.POSITIVE_INFINITY },
]
