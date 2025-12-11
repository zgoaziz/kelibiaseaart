import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-sea-deep text-white pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="font-serif font-bold text-3xl text-sand-dark mb-2">Kélibia Maris</div>
            <div className="text-xs uppercase tracking-widest text-white/80 mb-4">Artisanat écologique tunisien</div>
            <p className="text-white/80 mb-6">
              Transformant les déchets marins en créations artisanales uniques depuis Nabeul/Kélibia.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-sand-dark hover:bg-white/10 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-sand-dark hover:bg-white/10 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-sand-dark hover:bg-white/10 rounded-full"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-sand-dark">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-sand-dark transition-colors inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/80 hover:text-sand-dark transition-colors inline-block">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-sand-dark transition-colors inline-block">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-sand-dark transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-sand-dark">Contact</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-sand-dark" />
                <div>
                  <p>Port de Kélibia</p>
                  <p>Nabeul, Tunisie</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sand-dark" />
                <p>+216 XX XXX XXX</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sand-dark" />
                <p>info@kelibiamaris.tn</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-sand-dark">Newsletter</h3>
            <p className="text-white/80 mb-4">Recevez nos actualités et offres exclusives.</p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-sand-dark"
              />
              <Button className="bg-sand-dark hover:bg-sand-dark text-sea-deep font-semibold rounded-lg">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Kélibia Maris. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-sand-dark transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="hover:text-sand-dark transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
