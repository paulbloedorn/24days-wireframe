"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="w-full border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold flex items-center opacity-70">
            <Image
              src="/images/24-days-logo.png"
              alt="24 Days Without You"
              width={50}
              height={50}
              className="sm:w-[60px] sm:h-[60px] transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") ? "text-black border-b-2 border-black" : "hover:text-gray-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/medical-education"
              className={`text-sm font-medium transition-colors ${
                isActive("/medical-education") ? "text-black border-b-2 border-black" : "hover:text-gray-600"
              }`}
            >
              Medical Education
            </Link>
            <Link
              href="/mission"
              className={`text-sm font-medium transition-colors ${
                isActive("/mission") ? "text-black border-b-2 border-black" : "hover:text-gray-600"
              }`}
            >
              Mission
            </Link>
            <Link
              href="/making"
              className={`text-sm font-medium transition-colors ${
                isActive("/making") ? "text-black border-b-2 border-black" : "hover:text-gray-600"
              }`}
            >
              Making
            </Link>
            <Link
              href="/news-awards"
              className={`text-sm font-medium transition-colors ${
                isActive("/news-awards") ? "text-black border-b-2 border-black" : "hover:text-gray-600"
              }`}
            >
              News and Awards
            </Link>
            <Link href="/request-screening">
              <Button className="bg-black text-white hover:bg-gray-800 ml-4 transition-all duration-300 hover:scale-105 text-sm px-4 py-2">
                Request a Screening
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive("/about") ? "text-black font-semibold" : "hover:text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/medical-education"
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive("/medical-education") ? "text-black font-semibold" : "hover:text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Medical Education
              </Link>
              <Link
                href="/mission"
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive("/mission") ? "text-black font-semibold" : "hover:text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </Link>
              <Link
                href="/making"
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive("/making") ? "text-black font-semibold" : "hover:text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Making
              </Link>
              <Link
                href="/news-awards"
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive("/news-awards") ? "text-black font-semibold" : "hover:text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                News and Awards
              </Link>
              <Link href="/request-screening" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-black text-white hover:bg-gray-800 w-full mt-2 transition-all duration-300">
                  Request a Screening
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
