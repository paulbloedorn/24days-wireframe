"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Play } from "lucide-react"
import Header from "@/components/header"

export default function NewsAwards() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">News & Awards</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Follow our journey as we share this important story with audiences around the world through film
              festivals, conferences, and media coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Film Festival Recognition */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Film Festival Recognition</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Our film has been honored at prestigious festivals dedicated to healthcare and social impact
                storytelling
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sundance */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                  Award Ceremony Photo
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Sundance Film Festival</h3>
                    <span className="text-sm text-gray-500">2025</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">Best Documentary Short - Health & Medicine</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Recognized for its powerful portrayal of maternal healthcare challenges and its potential to drive
                    systemic change in medical education.
                  </p>
                  <p className="text-xs text-gray-500">January 2025, Park City, UT</p>
                </div>
              </div>

              {/* Tribeca */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                  Screening Photo
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Tribeca Festival</h3>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">Official Selection - Social Impact</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Featured in the festival's healthcare documentary showcase, reaching audiences of medical
                    professionals and advocates.
                  </p>
                  <p className="text-xs text-gray-500">June 2024, New York, NY</p>
                </div>
              </div>

              {/* SXSW */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                  Panel Discussion Photo
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">SXSW</h3>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">Audience Choice Award</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Voted by festival attendees as the most impactful documentary in the health and wellness category.
                  </p>
                  <p className="text-xs text-gray-500">March 2024, Austin, TX</p>
                </div>
              </div>

              {/* Full Frame */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                  Q&A Session Photo
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Full Frame Documentary Festival</h3>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">Official Selection</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Premiered alongside post-screening panel discussion with maternal health experts and policy makers.
                  </p>
                  <p className="text-xs text-gray-500">April 2024, Durham, NC</p>
                </div>
              </div>

              {/* DOC NYC */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                  Red Carpet Photo
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">DOC NYC</h3>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">Special Jury Recognition</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Honored for excellence in advocacy filmmaking and its contribution to public health discourse.
                  </p>
                  <p className="text-xs text-gray-500">November 2024, New York, NY</p>
                </div>
              </div>

              {/* Hot Docs */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                  Filmmaker Photo
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Hot Docs</h3>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">International Premiere</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Introduced the film to international audiences and healthcare professionals from around the globe.
                  </p>
                  <p className="text-xs text-gray-500">May 2024, Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Media Coverage</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Major outlets have featured our story and its impact on maternal healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* New York Times */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    NYT
                  </div>
                  <div>
                    <h3 className="font-bold">The New York Times</h3>
                    <p className="text-sm text-gray-600">March 15, 2024</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    "A Film That Could Save Lives: Documentary Tackles Maternal Mortality Crisis"
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    In-depth feature on how the documentary is being used in medical schools across the country to
                    improve patient care and emergency response protocols.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    Read Full Article <ExternalLink size={14} />
                  </Button>
                </div>
              </div>

              {/* CNN */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    CNN
                  </div>
                  <div>
                    <h3 className="font-bold">CNN Health</h3>
                    <p className="text-sm text-gray-600">February 28, 2024</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">"Mother's Tragic Experience Becomes Tool for Medical Education"</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Television segment featuring Annie Johnson discussing how her story is helping train the next
                    generation of healthcare providers.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    Watch Interview <Play size={14} />
                  </Button>
                </div>
              </div>

              {/* NPR */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    NPR
                  </div>
                  <div>
                    <h3 className="font-bold">NPR Health</h3>
                    <p className="text-sm text-gray-600">January 12, 2024</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    "The Patient Voice: How One Documentary is Changing Medical Training"
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Radio feature exploring the film's impact on medical education and its role in reducing maternal
                    mortality rates.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    Listen to Story <ExternalLink size={14} />
                  </Button>
                </div>
              </div>

              {/* Washington Post */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    WP
                  </div>
                  <div>
                    <h3 className="font-bold">Washington Post</h3>
                    <p className="text-sm text-gray-600">April 8, 2024</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">"From Tragedy to Advocacy: A Documentary's Mission to Save Mothers"</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Feature story on the film's journey from personal tragedy to national advocacy tool for maternal
                    health reform.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    Read Article <ExternalLink size={14} />
                  </Button>
                </div>
              </div>

              {/* USA Today */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    USA
                  </div>
                  <div>
                    <h3 className="font-bold">USA Today</h3>
                    <p className="text-sm text-gray-600">May 22, 2024</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">"Documentary Screening Leads to Policy Changes in Three States"</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Report on how screenings have influenced state-level maternal health legislation and hospital
                    protocol updates.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    Read More <ExternalLink size={14} />
                  </Button>
                </div>
              </div>

              {/* PBS */}
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                    PBS
                  </div>
                  <div>
                    <h3 className="font-bold">PBS NewsHour</h3>
                    <p className="text-sm text-gray-600">June 5, 2024</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">"Documentary Sparks National Conversation on Maternal Health"</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Television segment examining the broader impact of the film on public awareness and policy
                    discussions.
                  </p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    Watch Segment <Play size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Conference Presentations & Speaking Events</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Annie and our team have shared this story at leading healthcare conferences and educational events
              </p>
            </div>

            <div className="space-y-8">
              {/* ACOG - Featured */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Keynote Photo
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">American College of Obstetricians and Gynecologists (ACOG)</h3>
                      <p className="text-lg font-semibold text-blue-600">
                        Keynote Presentation: "The Patient Voice in Maternal Care"
                      </p>
                      <p className="text-sm text-gray-600">May 2024</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Annie delivered the opening keynote to over 3,000 healthcare professionals, sharing her story and
                      screening excerpts from the film. The presentation led to immediate commitments from 12 hospitals
                      to update their emergency response protocols.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>San Diego, CA</span>
                      <span>•</span>
                      <span>3,200 attendees</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Conferences Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AIM */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                  <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Panel Discussion Photo
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Alliance for Innovation on Maternal Health (AIM)</h3>
                    <p className="text-sm font-semibold text-blue-600">
                      Panel: "Patient Stories as Catalysts for Change"
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Participated in a panel discussion on how patient experiences can drive quality improvement
                      initiatives.
                    </p>
                    <div className="text-xs text-gray-500">
                      <p>March 2024</p>
                      <p>Washington, DC • 800 attendees</p>
                    </div>
                  </div>
                </div>

                {/* AAMC */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                  <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Screening Event Photo
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Association of American Medical Colleges (AAMC)</h3>
                    <p className="text-sm font-semibold text-blue-600">
                      Workshop: "Integrating Patient Narratives in Medical Education"
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Led a hands-on workshop for medical educators on using patient stories as teaching tools.
                    </p>
                    <div className="text-xs text-gray-500">
                      <p>November 2024</p>
                      <p>Phoenix, AZ • 1,500 attendees</p>
                    </div>
                  </div>
                </div>

                {/* AWHONN */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
                  <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center text-gray-600 text-sm font-medium">
                    Presentation Photo
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Association of Women's Health, Obstetric and Neonatal Nurses</h3>
                    <p className="text-sm font-semibold text-blue-600">
                      Presentation: "Trauma-Informed Care Through the Patient Lens"
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Addressed over 2,000 nurses on implementing trauma-informed care practices.
                    </p>
                    <div className="text-xs text-gray-500">
                      <p>September 2024</p>
                      <p>Orlando, FL • 2,100 attendees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Upcoming Screenings & Events</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Join us at these upcoming screenings and events to be part of the conversation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold">Harvard Medical School Screening</h3>
                    <p className="text-sm text-gray-600">February 15, 2025 • Boston, MA</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Special screening for medical students and faculty, followed by panel discussion with maternal health
                  experts.
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Register
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold">National Maternal Health Conference</h3>
                    <p className="text-sm text-gray-600">March 8, 2025 • Chicago, IL</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Annie will present the keynote address at this national conference focused on maternal health policy
                  and advocacy.
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Learn More
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold">Virtual Community Screening</h3>
                    <p className="text-sm text-gray-600">March 22, 2025 • Online</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Free virtual screening open to the public, with live Q&A session featuring Annie and healthcare
                  experts.
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Register Free
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold">International Midwifery Conference</h3>
                    <p className="text-sm text-gray-600">April 10, 2025 • London, UK</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  International premiere screening at the Global Midwifery Conference, reaching healthcare providers
                  worldwide.
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Details
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Link href="/request-screening">
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 transition-all duration-300 hover:scale-105">
                  Request a Screening for Your Organization
                </Button>
              </Link>
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
