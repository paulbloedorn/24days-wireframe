"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Home, Users, Heart, Brain, DollarSign, UserPlus, ExternalLink } from "lucide-react"
import Header from "@/components/header"

export default function Mission() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Our Mission</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Re-humanizing maternal care by centering the patient voice in every aspect of healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Re-humanizing Care Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 space-y-6">
              <h2 className="text-4xl font-bold leading-tight">Re-humanizing Care in America</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our mission is to transform maternal healthcare by bringing the patient perspective into every element
                  of the care process. We believe that true healing happens when healthcare providers see, hear, and
                  understand the human being behind every medical case.
                </p>
                <p>
                  Through authentic storytelling and evidence-based advocacy, we're working to ensure that every mother
                  receives compassionate, respectful care that honors her voice, supports her family, and recognizes her
                  humanity during one of life's most vulnerable moments.
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="bg-gray-600 aspect-video flex items-center justify-center text-white text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Mission Vision Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Patient-Centered Care Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Comprehensive Patient-Centered Care</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Supporting families throughout their entire maternal health journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <MessageCircle className="h-12 w-12 text-black" />
                <h3 className="text-xl font-bold">Clear Communication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensuring transparent, empathetic dialogue between healthcare providers and mothers throughout
                  pregnancy, delivery, and recovery. Every conversation matters.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Home className="h-12 w-12 text-black" />
                <h3 className="text-xl font-bold">Transition Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supporting parents as they navigate the critical transition back to home life, providing resources,
                  guidance, and emotional support during this vulnerable period.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Users className="h-12 w-12 text-black" />
                <h3 className="text-xl font-bold">Community of Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting support networks that extend beyond single checkups to create communities of care
                  that support families for months and years following birth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Community Solutions Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Health Community Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How the medical community is using our film to drive meaningful change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg space-y-6 transition-all duration-300 hover:shadow-lg">
                <Heart className="h-12 w-12 text-black" />
                <h3 className="text-2xl font-bold">Trauma Awareness Training</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Medical professionals are using the film to understand the lasting psychological impact of medical
                  emergencies and develop trauma-informed care practices that support healing.
                </p>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-black">92%</div>
                    <div className="text-sm text-gray-600">of providers report improved trauma recognition</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg space-y-6 transition-all duration-300 hover:shadow-lg">
                <Brain className="h-12 w-12 text-black" />
                <h3 className="text-2xl font-bold">Postpartum Depression Awareness</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Healthcare teams are implementing new screening protocols and support systems for postpartum mental
                  health, recognizing the critical connection between physical and emotional well-being.
                </p>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-black">85%</div>
                    <div className="text-sm text-gray-600">increase in early detection rates</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Explore Medical Education Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners in Change Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Partners in Change</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Working together with organizations dedicated to improving maternal health outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h3 className="text-lg font-bold">AFE Foundation</h3>
                <p className="text-gray-600 text-sm">Supporting research and awareness for Amniotic Fluid Embolism</p>
                <Button
                  variant="outline"
                  className="w-full text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Visit Website <ExternalLink size={14} />
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h3 className="text-lg font-bold">Momma's Voices</h3>
                <p className="text-gray-600 text-sm">Amplifying maternal voices to improve healthcare experiences</p>
                <Button
                  variant="outline"
                  className="w-full text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Visit Website <ExternalLink size={14} />
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h3 className="text-lg font-bold">AIM Conference</h3>
                <p className="text-gray-600 text-sm">Advancing maternal safety through collaborative improvement</p>
                <Button
                  variant="outline"
                  className="w-full text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Visit Website <ExternalLink size={14} />
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h3 className="text-lg font-bold">PQC Collaboratives</h3>
                <p className="text-gray-600 text-sm">Perinatal Quality Collaboratives improving care nationwide</p>
                <Button
                  variant="outline"
                  className="w-full text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Visit Website <ExternalLink size={14} />
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h3 className="text-lg font-bold">Maternal Safety Coalition</h3>
                <p className="text-gray-600 text-sm">Building safer maternal healthcare systems</p>
                <Button
                  variant="outline"
                  className="w-full text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Visit Website <ExternalLink size={14} />
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <h3 className="text-lg font-bold">Medical Education Partners</h3>
                <p className="text-gray-600 text-sm">Universities integrating patient voice in curricula</p>
                <Button
                  variant="outline"
                  className="w-full text-sm transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 p-12 rounded-lg text-center space-y-8 transition-all duration-300 hover:shadow-lg">
            <div className="text-gray-400 text-6xl font-serif">"</div>
            <p className="text-xl italic text-gray-700 leading-relaxed max-w-4xl mx-auto">
              "We need to remember that behind every medical case is a human being with fears, hopes, and a family who
              loves them. This film reminds us why we became healthcare providers in the first place - to heal, to
              comfort, and to care."
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full shrink-0 transition-all duration-300 hover:scale-110"></div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">Dr. Sarah Chen</div>
                <div className="text-gray-600">Chief of Obstetrics, Seattle Medical Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be Part of the Solution Section */}
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Be Part of the Solution</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Join our mission to transform maternal healthcare by centering the patient voice. Whether you're a
                healthcare provider, educator, advocate, or concerned community member, there's a place for you in this
                movement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl">
                <UserPlus className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold">Volunteer</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  Help spread awareness and support our educational initiatives
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-gray-800 bg-transparent w-full transition-all duration-300 hover:scale-105"
                >
                  Get Involved
                </Button>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl">
                <DollarSign className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold">Donate</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  Support our mission to reach more healthcare providers
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-gray-800 bg-transparent w-full transition-all duration-300 hover:scale-105"
                >
                  Donate Now
                </Button>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg flex flex-col items-center text-center space-y-6 transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl">
                <Users className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold">Stay Connected</h3>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  Get notified about upcoming screenings and events
                </p>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-gray-800 bg-transparent w-full transition-all duration-300 hover:scale-105"
                >
                  Subscribe
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
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
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
