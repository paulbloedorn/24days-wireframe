"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Clock, MapPin, PenTool } from "lucide-react"
import Header from "@/components/header"

export default function GetInvolved() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join our mission to transform maternal healthcare. Whether through volunteering, supporting our work, or
              staying connected with our community, every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form - Full width on mobile, left side on desktop */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Join Our Community</h2>
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input id="fullName" placeholder="Enter your full name" className="w-full h-12" required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full h-12"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                        How would you like to get involved? (Select all that apply)
                      </label>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox id="volunteer" className="mt-1" />
                          <label htmlFor="volunteer" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                            I'm interested in volunteer opportunities
                          </label>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox id="donate" className="mt-1" />
                          <label htmlFor="donate" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                            I'd like to learn about donation opportunities
                          </label>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox id="events" className="mt-1" />
                          <label htmlFor="events" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                            Keep me informed about upcoming screenings and events
                          </label>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox id="updates" className="mt-1" />
                          <label htmlFor="updates" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                            Send me project updates and newsletter
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your interest or how you'd like to contribute..."
                        className="w-full resize-y min-h-[120px]"
                      />
                    </div>

                    <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 h-12 text-base transition-all duration-300 hover:scale-105">
                      Join Our Mission
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Content - Full width on mobile, right side on desktop */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-12">
              {/* Message from Annie */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">A Message from Annie and Family</h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      "Thank you for joining us in this important mission. Your support - whether through volunteering,
                      donations, or simply spreading awareness - helps ensure that no family has to face what we
                      experienced. Together, we can transform maternal healthcare and save lives."
                    </p>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">Annie & The Johnson Family</div>
                      <div className="text-sm text-gray-600">Film Subjects & Advocates</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Impact */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Community Impact</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">500+</div>
                    <p className="text-xs sm:text-base text-gray-600">active volunteers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">50</div>
                    <p className="text-xs sm:text-base text-gray-600">states reached</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">1,200+</div>
                    <p className="text-xs sm:text-base text-gray-600">newsletter subscribers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">300+</div>
                    <p className="text-xs sm:text-base text-gray-600">screening events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="w-full bg-gray-50 py-20 mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Current Opportunities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore specific ways you can contribute to our mission right now
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 text-center space-y-4 sm:space-y-6">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold">Outreach Coordinators</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Help us connect with hospitals, medical schools, and healthcare organizations to schedule screenings.
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• Flexible remote work</li>
                  <li>• Training provided</li>
                  <li>• 5-10 hours per week</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm"
                >
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 text-center space-y-4 sm:space-y-6">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold">Event Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Assist with screening events, from setup to facilitating post-film discussions and Q&A sessions.
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• In-person and virtual events</li>
                  <li>• Discussion guide training</li>
                  <li>• Evening and weekend options</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm"
                >
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 text-center space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
                <PenTool className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold">Content Creation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Help create educational materials, social media content, and resources for healthcare providers.
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <li>• Writing and design skills</li>
                  <li>• Healthcare knowledge helpful</li>
                  <li>• Project-based work</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold">24 Days Without You</h3>
              <p className="text-gray-300 leading-relaxed">
                A film that transforms how we understand and deliver maternal healthcare by centering the patient
                experience in every aspect of care.
              </p>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-7 space-y-6">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/medical-education" className="text-gray-300 hover:text-white transition-colors">
                  Medical Education
                </Link>
                <Link href="/request-screening" className="text-gray-300 hover:text-white transition-colors">
                  Request Screening
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  News & Awards
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About the Film
                </Link>
              </nav>
            </div>

            <div className="col-span-12 sm:col-span-6 lg:col-span-4 space-y-6">
              <h3 className="text-lg font-bold">Contact</h3>
              <div className="text-gray-300 space-y-3">
                <p>info@24dayswithout-you.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8">
            <p className="text-center text-gray-400">© 2025 24 Days Without You. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
