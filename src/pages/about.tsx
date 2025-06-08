import React, { useEffect, useState } from "react";
import { Phone, MapPin, GraduationCap, School, Award } from "lucide-react";
import { Header } from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
function About() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Header Section - Animação apenas de entrada */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutASAimg.jpg"
            alt="Gallery background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#221f52]/80 to-[#2e2b70]/30" />
        </div>

        <div className="relative z-10 text-left text-white pl-8 md:pl-32 max-w-3xl top-24">
          <h1
            className={`text-4xl font-bold mb-4 leading-tight transition-all duration-1200 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-16 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Committed to Excellence in Education and Personal Growth
          </h1>
          <p
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-12 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            At our institution, we strive to foster academic excellence,
            discipline, and character development. Learn more about our mission,
            values, and the dedicated team behind our educational journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            We invite you to explore our website to learn more about our
            community and how our approach can become a life-changing and
            revolutionary student opportunity.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <School className="w-8 h-8 text-blue-600" />,
              text: "Accredited school offering a USA high-tech-driven education",
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
              text: "USA high school diploma upon meeting graduation requirements",
            },
            {
              icon: <Award className="w-8 h-8 text-blue-600" />,
              text: "ASA includes Kindergarten through grade 12",
            },
            {
              icon: <Award className="w-8 h-8 text-blue-600" />,
              text: "First USA school licensed by the Angolan Ministry of Education",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-3xl mx-auto p-4">
          <iframe
            className="w-full aspect-video rounded-lg overflow-hidden"
            src="https://www.youtube.com/embed/CBWzCOrX2s0?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>

        {/* Enrollment Section */}
        <div className="bg-blue-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Flexible Enrollment
          </h2>
          <p className="text-gray-700 mb-4">
            Our flexible enrollment allows families to join at the right time
            for their needs. Consider joining in August and January to gain the
            full benefit of courses and tuition.
          </p>
          <div className="flex items-center gap-4 text-blue-800">
            <Phone className="w-5 h-5" />
            <p className="font-semibold">945.333.000</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Luanda – Rosalinda Condominium
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This modern development includes residences, United Nations, and
                other Angolan Ministries. Our campus spans three buildings with
                over 3,600 square meters of spacious tech-rich classrooms,
                landscaped patios, and a shared playground.
              </p>
              <p className="text-gray-700 mt-4">
                ASA Rosalinda is located on Samba Road southbound, in Futungo.
                We are across the street from Sonangol&apos;s Paz Flor, up the
                hill from ENAPP.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditation Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Accreditations
          </h2>
          <p className="text-gray-700 mb-4">
            American Schools of Angola is the only USA curriculum in Angola with
            blended classrooms filled with innovative technology taught by
            International-certified teachers.
          </p>
          <p className="text-gray-700">
            ASA grants an accredited American high school diploma recognized at
            universities worldwide. Our curriculum accreditations are AdvancED,
            Cognia, and officially recognized by the NCAA.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <Image
            src="/credencialimg.png"
            alt="Accreditation credential"
            width={350}
            height={200}
            style={{
              width: "350px",
              height: "auto",
              justifySelf: "center",
              marginTop: "20px",
            }}
          />
          <Image
            src="/advenced.jpg"
            alt="AdvancED accreditation"
            width={350}
            height={200}
            style={{
              width: "350px",
              height: "auto",
              justifySelf: "center",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
