"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink } from "lucide-react"
import Header from "@/components/header"

export default function Making() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">Making of the Film</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the passionate team and creative journey behind "24 Days Without You" - a film born from tragedy
              and transformed into a powerful force for healthcare change.
            </p>
          </div>
        </div>
      </section>

      {/* The Film's Journey Section */}
      <section className="w-full py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">The Film's Journey</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  What began as a personal tragedy became a mission to transform maternal healthcare. "24 Days Without
                  You" chronicles not just one family's loss, but the systemic issues that continue to affect thousands
                  of families across America.
                </p>
                <p>
                  Through intimate storytelling and unflinching honesty, this documentary reveals the gaps in our
                  healthcare system while honoring the memory of those we've lost and fighting to protect future
                  mothers.
                </p>
              </div>
            </div>
            <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-lg font-medium">
              Behind-the-scenes production stills
            </div>
          </div>
        </div>
      </section>

      {/* Production Timeline Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Production Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <Calendar className="h-8 w-8 text-gray-800" />
                <h3 className="text-lg font-bold">Pre-production</h3>
                <p className="text-gray-600">January 2023 - March 2023</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <Calendar className="h-8 w-8 text-gray-800" />
                <h3 className="text-lg font-bold">Principal filming</h3>
                <p className="text-gray-600">April 2023 - August 2023</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <Calendar className="h-8 w-8 text-gray-800" />
                <h3 className="text-lg font-bold">Post-production</h3>
                <p className="text-gray-600">September 2023 - February 2024</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <Calendar className="h-8 w-8 text-gray-800" />
                <h3 className="text-lg font-bold">Festival circuit</h3>
                <p className="text-gray-600">March 2024 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Team Members Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Key Team Members</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who brought this important story to life
              </p>
            </div>

            <div className="space-y-16">
              {/* Annie Johnson */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-4">
                  <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-gray-600 text-lg font-medium">
                    Annie's Portrait
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Annie Johnson</h3>
                    <p className="text-lg text-gray-600">Producer & Film Subject</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Annie transformed her personal tragedy into a powerful catalyst for change. As both producer and the
                    heart of this story, she ensures that every aspect of the film honors her experience while serving
                    the greater mission of improving maternal healthcare.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Maternal health advocate</li>
                    <li>• Public speaker and educator</li>
                    <li>• Healthcare policy consultant</li>
                  </ul>
                </div>
              </div>

              {/* Becky Martinez */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-4 lg:order-2">
                  <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-gray-600 text-lg font-medium">
                    Becky's Portrait
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 lg:order-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Becky Martinez</h3>
                    <p className="text-lg text-gray-600">Producer</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    With over 15 years in documentary filmmaking, Becky brought her expertise in sensitive storytelling
                    to ensure the film would resonate with both healthcare professionals and general audiences while
                    maintaining the integrity of Annie's story.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Award-winning documentary producer</li>
                    <li>• Healthcare media specialist</li>
                    <li>• Film festival programmer</li>
                  </ul>
                </div>
              </div>

              {/* Michael Chen */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-4">
                  <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-gray-600 text-lg font-medium">
                    Michael's Portrait
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Michael Chen</h3>
                    <p className="text-lg text-gray-600">Director</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Michael's compassionate directing style and background in medical documentaries made him the perfect
                    choice to helm this sensitive project. His approach balances emotional storytelling with educational
                    content that drives real change.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Sundance Film Festival alumnus</li>
                    <li>• Medical documentary specialist</li>
                    <li>• Healthcare advocacy filmmaker</li>
                  </ul>
                </div>
              </div>

              {/* Elska */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-4 lg:order-2">
                  <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-gray-600 text-lg font-medium">
                    Elska's Portrait
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 lg:order-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Elska</h3>
                    <p className="text-lg text-gray-600">Composer & Musician</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Elska's haunting and beautiful score provides the emotional backbone of the film. Her music captures
                    both the grief of loss and the hope for change, creating an unforgettable sonic landscape that
                    enhances every moment of the story.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Award-winning film composer</li>
                    <li>• Multi-instrumentalist</li>
                    <li>• Soundtrack available on all platforms</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-2 bg-transparent">
                    Visit Elska's Website <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Credits Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Production Credits</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Acknowledging the talented professionals who made this film possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Production Team</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Executive Producer</span>
                    <span className="text-gray-600">Sarah Williams</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Cinematographer</span>
                    <span className="text-gray-600">David Park</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Editor</span>
                    <span className="text-gray-600">Lisa Thompson</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sound Designer</span>
                    <span className="text-gray-600">Marcus Rodriguez</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Production Manager</span>
                    <span className="text-gray-600">Jennifer Lee</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Assistant Director</span>
                    <span className="text-gray-600">Tom Mitchell</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Post-Production</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Color Grading</span>
                    <span className="text-gray-600">Alex Morgan</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sound Mixing</span>
                    <span className="text-gray-600">Rachel Kim</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Graphics Designer</span>
                    <span className="text-gray-600">Maya Patel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Medical Consultant</span>
                    <span className="text-gray-600">Dr. Patricia Adams</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Legal Advisor</span>
                    <span className="text-gray-600">Johnson & Associates</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Distribution</span>
                    <span className="text-gray-600">Impact Media Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgments Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Acknowledgments</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This film exists because of the support and contributions of many
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Healthcare Partners</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• AFE Foundation for their expertise and guidance</li>
                  <li>• Alliance for Innovation on Maternal Health (AIM)</li>
                  <li>• Perinatal Quality Collaboratives across the nation</li>
                  <li>• American College of Obstetricians and Gynecologists</li>
                  <li>• Society for Maternal-Fetal Medicine</li>
                  <li>• National Association of Certified Professional Midwives</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Community Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• The families who shared their stories</li>
                  <li>• Healthcare providers who participated</li>
                  <li>• Kickstarter backers and individual donors</li>
                  <li>• Film festival programmers and audiences</li>
                  <li>• Educational institutions and screening hosts</li>
                  <li>• Media partners who amplified our message</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">In Memory</h3>
              <p className="text-gray-700 italic">
                "This film is dedicated to all the mothers we've lost to preventable complications, and to the families
                who continue to fight for change in their memory. Your stories matter, your voices are heard, and your
                legacy lives on in every life we save."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Bring This Story to Your Organization</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Help us continue the mission that drove the creation of this film. Request a screening for your hospital,
              medical school, or healthcare organization.
            </p>
            <Link href="/request-screening">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Request a Screening
              </Button>
            </Link>
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
                <Link href="/news-awards" className="text-gray-300 hover:text-white transition-colors">
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
