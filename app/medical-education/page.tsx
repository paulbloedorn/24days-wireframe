"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, MessageCircle, Shield, Brain, Stethoscope, GraduationCap, Building } from "lucide-react"
import Header from "@/components/header"

export default function MedicalEducation() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`text-center space-y-6 `}>
            <h1 className="text-5xl font-bold">Medical Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming healthcare education through patient-centered storytelling
            </p>
          </div>
        </div>
      </section>

      {/* Synopsis and Key Themes Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            <div className={`col-span-12 lg:col-span-6 space-y-6 `}>
              <h2 className="text-3xl font-bold">Film Synopsis</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  24 Days Without You follows a family's journey through a maternal health emergency, revealing the
                  critical moments that can save lives and the human connections that heal families. The film provides
                  an intimate look at healthcare professionals navigating complex medical and emotional challenges,
                  offering valuable insights into improving patient outcomes during medical crises.
                </p>
                <p>
                  Through authentic storytelling, the film illuminates the patient and family perspective during one of
                  medicine's most challenging scenarios, offering healthcare providers deeper understanding of the
                  emotional and psychological impact of their care decisions.
                </p>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Request a Screening
              </Button>
            </div>

            <div className={`col-span-12 lg:col-span-6 space-y-6 `}>
              <h2 className="text-3xl font-bold">Key Themes</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Patient Voice & Advocacy
                  </h3>
                  <p className="text-gray-600">Understanding the patient experience during medical emergencies</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                    Communication in Crisis
                  </h3>
                  <p className="text-gray-600">
                    Effective provider-patient communication during high-stress situations
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Trauma-Informed Care
                  </h3>
                  <p className="text-gray-600">Recognizing and responding to trauma in healthcare settings</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    Family-Centered Support
                  </h3>
                  <p className="text-gray-600">Including families as partners in the care process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Initiatives Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className={`text-center space-y-4 `}>
              <h2 className="text-4xl font-bold">Educational Initiatives</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Supporting healthcare education through evidence-based storytelling
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <Stethoscope className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Clinical Readiness for Extreme Events</h3>
                <p className="text-gray-600 leading-relaxed">
                  Preparing healthcare teams for rare but critical maternal emergencies. The film provides
                  evidence-based, realistic scenarios that help providers understand the urgency, complexity, and
                  emotional impact of these life-threatening situations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Emergency response protocols</li>
                  <li>• Team communication strategies</li>
                  <li>• Family support during crisis</li>
                </ul>
              </div>

              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <Heart className="h-12 w-12 text-red-600" />
                <h3 className="text-xl font-bold">Humanizing Patient Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experiencing the patient voice to create more respectful, empathetic care environments. The film
                  allows providers to see through the patient's eyes, understanding fears, needs, and the profound
                  impact of their words and actions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Patient perspective training</li>
                  <li>• Empathy development</li>
                  <li>• Cultural competency</li>
                </ul>
              </div>

              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <Shield className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Trauma Awareness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding how medical trauma affects patients and families during and after critical care. The
                  film demonstrates the lasting psychological impact of medical emergencies and the importance of
                  trauma-informed care practices.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Recognizing trauma responses</li>
                  <li>• Trauma-informed communication</li>
                  <li>• Long-term support strategies</li>
                </ul>
              </div>

              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <Brain className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-bold">Mental Health Awareness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Addressing postpartum depression, anxiety, and PTSD in maternal healthcare. The film highlights the
                  often-overlooked mental health challenges that can affect both patients and providers in medical
                  emergencies.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Postpartum depression screening</li>
                  <li>• PTSD recognition and support</li>
                  <li>• Family mental health resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educator Testimonials Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className={`text-center space-y-4 `}>
              <h2 className="text-4xl font-bold">Educator Testimonials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How educators are using the film to transform learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`bg-gray-50 p-8 rounded-lg space-y-6 transition-all duration-300 hover:shadow-lg `}>
                <div className="text-gray-400 text-4xl font-serif">"</div>
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  "This film has revolutionized how we teach empathy in our medical curriculum. Students now understand
                  the profound impact their words and actions can have on patient outcomes. It's not just medical
                  education—it's about human connection."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-full shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Amanda Foster</div>
                    <div className="text-gray-600">Director of Medical Education, Johns Hopkins</div>
                  </div>
                </div>
              </div>

              <div className={`bg-gray-50 p-8 rounded-lg space-y-6 transition-all duration-300 hover:shadow-lg `}>
                <div className="text-gray-400 text-4xl font-serif">"</div>
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  "We've integrated this film into our obstetrics residency program. The discussions it generates about
                  patient advocacy and trauma-informed care are invaluable. Our residents are becoming more
                  compassionate providers."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-300 rounded-full shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Maria Santos</div>
                    <div className="text-gray-600">Residency Program Director, UCLA Medical Center</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Case Studies Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className={`text-center space-y-4 `}>
              <h2 className="text-4xl font-bold">Implementation Case Studies</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Real-world applications and measurable outcomes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <GraduationCap className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Clinical Training Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  How medical institutions are integrating the film into residency and continuing education programs to
                  improve patient care outcomes.
                </p>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-600">89%</div>
                  <div className="text-sm text-gray-600">Improvement in empathy scores</div>
                </div>
                <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105 bg-transparent">
                  View Full Case Study
                </Button>
              </div>

              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <Building className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Academic Curricula</h3>
                <p className="text-gray-600 leading-relaxed">
                  Universities and medical schools using the film to teach patient advocacy, communication skills, and
                  trauma-informed care principles.
                </p>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Student engagement increase</div>
                </div>
                <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105 bg-transparent">
                  View Full Case Study
                </Button>
              </div>

              <div
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105 `}
              >
                <Users className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-bold">Community Screenings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Healthcare organizations hosting community screenings to build bridges between providers and patients,
                  fostering better understanding.
                </p>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">78%</div>
                  <div className="text-sm text-gray-600">Report improved trust</div>
                </div>
                <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105 bg-transparent">
                  View Full Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Your Educational Program Section */}
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`text-center space-y-8 `}>
            <h2 className="text-4xl font-bold">Transform Your Educational Program</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Join healthcare institutions worldwide using 24 Days Without You to enhance empathy, improve
              communication, and deliver more compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-screening">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 transition-all duration-300 hover:scale-105">
                  Request a Screening
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-gray-800 bg-transparent px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Download Educational Resources
              </Button>
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
