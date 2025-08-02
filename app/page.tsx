"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Heart, Users, GraduationCap, Award, Music } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"

export default function Home() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
  })

  const [showVideoModal, setShowVideoModal] = useState(false)

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section")
            if (sectionName) {
              setIsVisible((prev) => ({ ...prev, [sectionName]: true }))
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section)
      }
    })

    // Add keyboard event listener for closing modal
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowVideoModal(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-count-up {
          animation: countUp 0.8s ease-out forwards;
        }

        .animate-pulse-hover:hover {
          animation: pulse 0.6s ease-in-out;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .opacity-0 { opacity: 0; }
      `}</style>

      {/* YouTube Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-60 text-white text-opacity-80 border-white border-opacity-60 px-4 py-2 hover:bg-opacity-80 hover:text-opacity-100 hover:border-opacity-80 transition-all duration-300 font-medium rounded-lg border-2"
              aria-label="Close video"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TfyZuYkED8U?si=CQXtebKmJuOKp_Wo&autoplay=1"
              title="24 Days Without You - Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full py-8 sm:py-10" data-section="hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div
              className={`lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left ${isVisible.hero ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                A Story That Changes How We Care
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                24 Days Without You reveals the critical moments that can save lives and the human connections that heal
                families during maternal health emergencies.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 px-6 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => setShowVideoModal(true)}
                >
                  <Play size={18} /> Watch Trailer
                </Button>
              </div>
            </div>
            <div className={`lg:col-span-6 ${isVisible.hero ? "animate-slide-in-right delay-200" : "opacity-0"}`}>
              <div className="max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/images/24-days-poster.png"
                  alt="24 Days Without You - A Film by Rebecca Rizzio"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="w-full bg-white py-4 sm:py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 overflow-x-auto py-2">
            <div className="flex-shrink-0">
              <Image
                src="/images/womens-international-film-festival.png"
                alt="Official Selection - Women's International Film Festival 2025"
                width={100}
                height={100}
                className="sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/twin-cities-film-fest.png"
                alt="Audience Award Documentary - Twin Cities Film Fest 2024"
                width={100}
                height={100}
                className="sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/san-diego-cinema-awards.png"
                alt="Nominee - San Diego Independent Cinema Awards"
                width={100}
                height={100}
                className="sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Callout Quotation Section */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 p-6 sm:p-8 lg:p-12 rounded-lg text-center space-y-6 sm:space-y-8 transition-all duration-300 hover:shadow-lg">
            <div className="text-gray-400 text-4xl sm:text-5xl lg:text-6xl font-serif">"</div>
            <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed">
              Raw, powerful, and deeply moving. This film doesn't just tell a story—it invites you to feel every moment
              and leaves you thinking long after the credits roll.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full shrink-0 transition-all duration-300 hover:scale-110"></div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-900 text-lg">Denise Amundson, RN</div>
                <div className="text-gray-600">Labor and Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Section */}
      <section className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">The Crisis We Face</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the urgent need for change in maternal healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 animate-pulse-hover cursor-default">
                  700+
                </div>
                <div className="text-lg sm:text-xl font-semibold">Women Die Annually</div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  From pregnancy-related complications in the United States, with rates continuing to rise
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 animate-pulse-hover cursor-default">
                  2/3
                </div>
                <div className="text-lg sm:text-xl font-semibold">Deaths After Discharge</div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Of maternal deaths occur after mothers have returned home from the hospital
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 animate-pulse-hover cursor-default">
                  1 in 8
                </div>
                <div className="text-lg sm:text-xl font-semibold">Experience Depression</div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  New mothers experience postpartum depression, often going undiagnosed and untreated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Re-humanizing Care Section */}
      <section className="w-full py-16 sm:py-20" data-section="mission">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div
              className={`lg:col-span-6 space-y-4 sm:space-y-6 ${isVisible.mission ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Re-humanizing Care</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Bringing the patient perspective into every element of maternal care
              </p>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold">Our Mission</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We need to re-humanize care in the US by ensuring clear communication between mothers and doctors,
                  supporting parents as they transition back to home life, and providing long-term checkups - not just a
                  single call, but a community of support in the months and years following a birth event.
                </p>
                <div className="flex justify-center lg:justify-end pt-4">
                  <Link href="/mission">
                    <Button
                      variant="outline"
                      className="transition-all duration-300 hover:scale-105 bg-transparent border-2 border-black"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-6 ${isVisible.mission ? "animate-slide-in-right delay-200" : "opacity-0"}`}>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg space-y-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100">
                <div className="text-gray-400 text-3xl sm:text-4xl font-serif">"</div>
                <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
                  "We need to look at how we can make changes right now. This film helps us see through the patient's
                  eyes and understand what truly matters in care."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full shrink-0 transition-all duration-300 hover:scale-110"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Dr. Jennifer Martinez</div>
                    <div className="text-gray-600 text-sm">Maternal Care Provider</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Solutions Section */}
      <section className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Current Solutions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Heart className="h-10 w-10 sm:h-12 sm:w-12 text-black" />
                <h3 className="text-lg sm:text-xl font-bold">Medical Community Impact</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Healthcare providers are using the film to advance trauma awareness and postpartum depression
                  recognition in clinical settings.
                </p>
                <Link href="/medical-education">
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm sm:text-base border-black border-2"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col">
                <div className="flex-grow space-y-4 sm:space-y-6">
                  <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-black" />
                  <h3 className="text-lg sm:text-xl font-bold">Educational Initiatives</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Educators are integrating the film into curricula to teach empathy and patient-centered care
                    approaches.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm sm:text-base"
                >
                  Coming Soon
                </Button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col">
                <div className="flex-grow space-y-4 sm:space-y-6">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-black" />
                  <h3 className="text-lg sm:text-xl font-bold">Community Screenings</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Mothers and community members are attending screening events to build support networks.
                  </p>
                </div>
                <Link href="/get-notified">
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm sm:text-base border-black border-2"
                  >
                    Get Notified
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Impact Section */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Measurable Impact</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                How the film is changing healthcare practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg">
                <div className="text-gray-400 text-3xl sm:text-4xl font-serif">"</div>
                <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
                  "After watching this film, I've completely changed how I communicate with families during emergencies.
                  I now take time to explain what's happening and ensure they feel heard."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Dr. Sarah Chen</div>
                    <div className="text-gray-600 text-sm">Emergency Medicine</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg">
                <div className="text-gray-400 text-3xl sm:text-4xl font-serif">"</div>
                <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
                  "We've implemented new protocols for family support during critical events. The film showed us gaps we
                  didn't even know existed."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Michael Rodriguez, RN</div>
                    <div className="text-gray-600 text-sm">Labor & Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Changes Happening Now</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl font-bold text-black">92%</div>
                  <div className="text-base sm:text-lg font-semibold">Intend to Change Practice</div>
                  <p className="text-sm sm:text-base text-gray-600">Healthcare providers plan practice modifications</p>
                </div>
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl font-bold text-black">78%</div>
                  <div className="text-base sm:text-lg font-semibold">Improved Communication</div>
                  <p className="text-sm sm:text-base text-gray-600">Report better patient-family interactions</p>
                </div>
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl font-bold text-black">85%</div>
                  <div className="text-base sm:text-lg font-semibold">Enhanced Empathy</div>
                  <p className="text-sm sm:text-base text-gray-600">Feel more connected to patient experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude & Recognition Section */}
      <section className="w-full bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Gratitude & Recognition</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Celebrating the contributors making this impact possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 sm:space-y-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold">Film Contributors</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Honoring everyone who brought this story to life
                </p>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm sm:text-base"
                >
                  View Credits
                </Button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 sm:space-y-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Music className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold">Featured Artist: Elka</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Beautiful music that enhances the film's emotional impact
                </p>
                <Button
                  variant="outline"
                  className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm sm:text-base"
                  onClick={() => window.open("https://www.hielska.com/", "_blank")}
                >
                  Visit Elka's Page
                </Button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4 sm:space-y-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-black mx-auto" />
                <h3 className="text-lg sm:text-xl font-bold">News & Awards</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Latest recognition and upcoming events
                </p>
                <Link href="/news-awards">
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 hover:scale-105 bg-transparent text-sm sm:text-base"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about the film and our mission
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    Can I stream the film now?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    On demand viewing is not currently available, but click "Join our community" below to be notified
                    about upcoming public showings (more are being planned right now!)
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    What is "24 Days Without You" about?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    "24 Days Without You" is a documentary that follows a family's journey through a maternal health
                    emergency, revealing the critical moments that can save lives and the human connections that heal
                    families. The film provides an intimate look at healthcare professionals navigating complex medical
                    and emotional challenges while offering valuable insights into improving patient outcomes during
                    medical crises.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-sm:text-base">
                    How can I request a screening for my organization?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    You can request a screening by visiting our Request a Screening page and filling out the form with
                    your organization details. We offer flexible screening formats for medical conferences, hospital
                    training, educational institutions, and community events. Our team will reach out within 2-3
                    business days to discuss your specific needs and provide next steps.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-sm:text-base">
                    Is the film suitable for medical education?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    Yes, the film is specifically designed for medical education and has been used by healthcare
                    institutions worldwide. It addresses key themes including patient voice & advocacy, communication in
                    crisis, trauma-informed care, and family-centered support. We provide educational resources,
                    discussion guides, and can support CME credit applications for healthcare professionals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-sm:text-base">
                    What impact has the film had on healthcare practices?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    The film has shown measurable impact with 92% of healthcare providers reporting intent to change
                    practice, 78% showing improved communication with patients and families, and 85% demonstrating
                    enhanced empathy. Healthcare teams have implemented new protocols for family support during critical
                    events and improved trauma-informed care practices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left text-sm:text-base">
                    How can I get involved with your mission?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    There are many ways to get involved! You can volunteer with outreach and event coordination, support
                    our work through donations, attend community screenings, or help spread awareness. Visit our Get
                    Involved page to learn about current opportunities including outreach coordinators, event support,
                    and content creation roles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left text-sm:text-base">
                    What awards and recognition has the film received?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    The film has been recognized at prestigious festivals including official selections at Women's
                    International Film Festival 2025, Audience Award at Twin Cities Film Fest 2024, and nominations at
                    San Diego Independent Cinema Awards. It has also received extensive media coverage from major
                    outlets including The New York Times, CNN, NPR, and PBS NewsHour.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Be Part of the Solution Section */}
      <section className="w-full bg-black text-white py-16 sm:py-20">
        <div className="max-w-5xl px-4 sm:px-6 mx-auto">
          <div className="text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold border-0">Be Part of the Solution</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto text-center">
              Join our mission to transform maternal healthcare by centering the patient voice. Whether you're a
              healthcare provider, medical educator, a momma or partner who needs resorces or a concerned community
              member - there's a place for you in this movement.
            </p>
            <Link href="/get-involved">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg my-3">
                {"Join the Community"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-5 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold">24 Days Without You</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                A film that transforms how we understand and deliver maternal healthcare by centering the patient
                experience in every aspect of care.
              </p>
            </div>

            <div className="lg:col-span-3 lg:col-start-7 space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col space-y-2 sm:space-y-3">
                <Link
                  href="/medical-education"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Medical Education
                </Link>
                <Link
                  href="/request-screening"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Request Screening
                </Link>
                <Link href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  News & Awards
                </Link>
                <Link href="/about" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  About the Film
                </Link>
              </nav>
            </div>

            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-bold">Contact</h3>
              <div className="text-sm sm:text-base text-gray-300 space-y-2 sm:space-y-3">
                <p>info@24dayswithout-you.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
            <p className="text-center text-sm sm:text-base text-gray-400">
              © 2025 24 Days Without You. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
