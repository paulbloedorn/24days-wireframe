"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Building, UserPlus } from "lucide-react"
import Header from "@/components/header"

export default function RequestScreening() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Request a Screening</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Bring "24 Days Without You" to your organization, conference, or educational setting. Help us transform
              maternal healthcare by sharing the patient perspective with your community.
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
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input id="fullName" placeholder="Enter your full name" className="w-full h-12" required />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization *
                      </label>
                      <Input
                        id="organization"
                        placeholder="Hospital, University, Conference, etc."
                        className="w-full h-12"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@organization.com"
                        className="w-full h-12"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your interest *
                      </label>
                      <Textarea
                        id="interest"
                        placeholder="Please describe your organization, intended audience, event details, or any specific questions you have about hosting a screening..."
                        className="w-full resize-y min-h-[120px]"
                        required
                      />
                    </div>

                    <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 h-12 text-base transition-all duration-300 hover:scale-105">
                      Submit Request
                    </Button>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-white text-sm">i</span>
                        </div>
                        <p className="text-sm text-blue-800">
                          After you submit a request, a member of our team will reach out to you within 2-3 business
                          days to discuss your screening request and provide next steps.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Content - Full width on mobile, right side on desktop */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-12">
              {/* Testimonial */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                <div className="text-gray-400 text-3xl sm:text-4xl font-serif mb-4">"</div>
                <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  "Every healthcare provider, from medical students to seasoned physicians, should see this film. It
                  fundamentally changed how I approach patient care and reminded me why clear, compassionate
                  communication is at the heart of healing. This isn't just a story - it's a mirror that shows us how we
                  can do better."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Dr. Elena Martinez</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Director of Medical Education, Johns Hopkins</div>
                  </div>
                </div>
              </div>

              {/* Screening Options */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Screening Options</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  We offer flexible screening formats to meet your organization's needs
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                    <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto mb-3 sm:mb-4" />
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Educational Conferences</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Perfect for medical conferences, nursing symposiums, and healthcare education events. Includes
                      discussion guide and Q&A support.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1 mb-3 sm:mb-4">
                      <li>• 90-minute screening + discussion</li>
                      <li>• CME credit support</li>
                      <li>• Facilitator resources</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                    <Building className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto mb-3 sm:mb-4" />
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Hospital Screenings</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Designed for hospital staff training, department meetings, and quality improvement initiatives.
                      Customizable for different units.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1 mb-3 sm:mb-4">
                      <li>• Flexible timing options</li>
                      <li>• Unit-specific discussions</li>
                      <li>• Follow-up resources</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 text-center sm:col-span-2 lg:col-span-1">
                    <UserPlus className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto mb-3 sm:mb-4" />
                    <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Community Events</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Open to advocacy groups, patient organizations, and community healthcare initiatives. Builds
                      awareness and support.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1 mb-3 sm:mb-4">
                      <li>• Public screening format</li>
                      <li>• Community discussion</li>
                      <li>• Advocacy resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-16 mt-20">
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
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
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
