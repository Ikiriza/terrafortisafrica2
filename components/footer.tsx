import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"          // change to your actual file name
                alt="TerraFortis Africa logo"
                width={24}
                height={24}
                className="h-6 w-6"
                priority
              />
              <span className="text-xl font-serif font-bold">TerraFortis Africa</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading the way in sustainable innovation for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Sustainability Consulting</li>
              <li className="text-sm text-primary-foreground/80">Green Solutions</li>
              <li className="text-sm text-primary-foreground/80">Environmental Impact</li>
              <li className="text-sm text-primary-foreground/80">Eco Innovation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                hello@terrafortisafrica.com
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} TerraFortisAfrica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
