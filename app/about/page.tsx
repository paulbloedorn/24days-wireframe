"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, AlertTriangle, Scale } from "lucide-react"
import Header from "@/components/header"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">About the Film</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              An intimate exploration of maternal healthcare through the lens of personal tragedy, featuring real
              stories from families and healthcare providers working to create change.
            </p>
          </div>
        </div>
      </section>

      {/* Film Details Section */}
      <section className="w-full py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Film Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-black">52 Minutes</div>
                <div className="text-gray-600">Runtime</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-black">Vimeo</div>
                <div className="text-gray-600">Available Streaming</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-black">✓</div>
                <div className="text-gray-600">Close Captioning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Synopsis – 24 Days Without You</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p>
                When a routine childbirth turns into a life-threatening emergency, one mother's world is forever
                changed. 24 Days Without You follows Annie's harrowing experience with Amniotic Fluid Embolism (AFE)—a
                rare and often fatal complication that strikes without warning. Told in her own voice and through the
                perspectives of her family and care team, the film offers an unflinching look at the clinical,
                emotional, and relational aftermath of surviving the unimaginable.
              </p>
              <p>
                This 56-minute documentary goes beyond the hospital walls, exploring the ripple effects of trauma on
                Annie, her husband, their marriage, and the people who stood by them. At its core, 24 Days Without You
                is a story of survival, resilience, and the quiet heroism of showing up for one another when it matters
                most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Themes Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Main Themes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">The critical issues this film addresses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center space-y-4">
                <AlertTriangle className="h-10 w-10 text-red-600 mx-auto" />
                <h3 className="text-lg font-bold">Maternal Mortality Crisis</h3>
                <p className="text-gray-600 text-sm">
                  The US has the highest maternal mortality rate among developed nations, with 60% of deaths being
                  preventable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center space-y-4">
                <Users className="h-10 w-10 text-blue-600 mx-auto" />
                <h3 className="text-lg font-bold">Patient-Centered Care</h3>
                <p className="text-gray-600 text-sm">
                  The importance of listening to patients and ensuring clear communication between healthcare providers
                  and families.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center space-y-4">
                <Scale className="h-10 w-10 text-indigo-600 mx-auto" />
                <h3 className="text-lg font-bold">Healthcare Equity</h3>
                <p className="text-gray-600 text-sm">
                  Addressing systemic disparities and ensuring all families receive respectful, high-quality care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Participants Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Featured Participants</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The brave individuals who shared their stories to help others
              </p>
            </div>

            <div className="space-y-16">
              {/* Annie Johnson */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-gray-300 aspect-square rounded-lg flex items-center justify-center text-gray-600 text-lg font-medium">
                    Annie's Film Portrait
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Annie Johnson</h3>
                    <p className="text-lg text-gray-600">Mother, Advocate, Film Subject</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Annie is the heart of this documentary. After experiencing a traumatic birth that resulted in
                    life-threatening complications, she transformed her pain into purpose. Her raw honesty and
                    determination to prevent other families from experiencing similar tragedy drives the entire
                    narrative.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through her story, viewers witness both the devastating impact of healthcare gaps and the incredible
                    strength of the human spirit. Annie's journey from patient to advocate illustrates how personal
                    experience can become a powerful force for systemic change.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Survived amniotic fluid embolism</li>
                    <li>• Maternal health policy advocate</li>
                    <li>• Public speaker and educator</li>
                    <li>• Mother of two</li>
                  </ul>
                </div>
              </div>

              {/* David Johnson */}
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 lg:col-span-4 lg:order-2">
                  <div className="bg-gray-300 aspect-square rounded-lg flex items-center justify-center text-gray-600 text-lg font-medium">
                    David's Film Portrait
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 lg:order-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">David Johnson</h3>
                    <p className="text-lg text-gray-600">Husband, Father, Caregiver</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    David provides the partner's perspective on maternal healthcare trauma. His emotional testimony
                    reveals the often-overlooked impact on spouses and families when medical emergencies occur during
                    what should be joyful moments.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    His story highlights the importance of supporting entire families through healthcare crises and the
                    long-term effects of medical trauma on relationships and mental health.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Primary caregiver during Annie's recovery</li>
                    <li>• Advocate for partner support resources</li>
                    <li>• Software engineer</li>
                    <li>• Father of two</li>
                  </ul>
                </div>
              </div>

              {/* Healthcare Providers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg space-y-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Dr. Sarah's Portrait
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Sarah Martinez</h3>
                    <p className="text-gray-600">Maternal-Fetal Medicine Specialist</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Martinez provides clinical context and shares how healthcare providers are working to improve
                    emergency response protocols and patient communication.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 15+ years in high-risk obstetrics</li>
                    <li>• AFE emergency response expert</li>
                    <li>• Patient safety advocate</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg space-y-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Nurse Lisa's Portrait
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Lisa Thompson</h3>
                    <p className="text-gray-600">Labor & Delivery Nurse</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Lisa shares the nursing perspective on emergency situations and discusses how frontline staff can
                    better support families during medical crises.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 20+ years in labor & delivery</li>
                    <li>• Trauma-informed care trainer</li>
                    <li>• Patient advocacy specialist</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg space-y-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Dr. Kim's Portrait
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Michael Kim</h3>
                    <p className="text-gray-600">Emergency Medicine Physician</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Kim discusses emergency response protocols and the importance of interdisciplinary communication
                    during obstetric emergencies.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Emergency medicine specialist</li>
                    <li>• Obstetric emergency protocols expert</li>
                    <li>• Medical education advocate</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg space-y-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Maria's Portrait
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                    <p className="text-gray-600">Social Worker & Mother</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Maria shares her experience with postpartum mental health challenges and advocates for better
                    screening and support systems for new mothers.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Postpartum depression survivor</li>
                    <li>• Mental health advocate</li>
                    <li>• Community support organizer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Stories Matter Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Why These Stories Matter</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Every story in this film represents thousands of families who have faced similar challenges. By sharing
                these experiences, we create understanding, drive policy changes, and ultimately save lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-black">700+</div>
                <div className="text-lg font-semibold">Maternal deaths annually in the US</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-black">60%</div>
                <div className="text-lg font-semibold">Of these deaths are preventable</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-black">2/3</div>
                <div className="text-lg font-semibold">Occur after mom returns home</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">Help Share These Important Stories</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Request a screening for your organization and join the movement to improve maternal healthcare outcomes.
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
