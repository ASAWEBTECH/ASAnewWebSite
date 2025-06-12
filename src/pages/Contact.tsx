import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Contact() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  useEffect(() => {
    // Trigger header animations after component mounts
    const timer = setTimeout(() => {
      setIsHeaderLoaded(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header Section - Animação apenas de entrada */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fundoContact.jpg"
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
            We&apos;re here to support and guide every step of the way
          </h1>
          <p
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-12 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Get in touch with us for questions, information, or to learn more
            about our school. We’re always happy to hear from you.
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address Block */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-blue-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 shadow">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[#2e2b70]">
                Address
              </h3>
              <p className="text-gray-600 font-medium">
                Estrada da Samba
                <br />
                Condomínio Rosalinda Bloco #2
              </p>
            </div>

            {/* Phone Block */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-green-100 flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 shadow">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-green-700">
                Phone
              </h3>
              <p className="text-gray-600 font-medium">+ (244) 945 333 000</p>
              <p className="text-gray-600 font-medium">+ (244) 929 842 625</p>
              <p className="text-gray-600 font-medium">+ (244) 945 217 135</p>
            </div>

            {/* Email Block */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-purple-100 flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4 shadow">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-purple-700">
                Email
              </h3>
              <p className="text-gray-600 font-medium">
                admissions@asangola.com
              </p>
            </div>

            {/* Business Hours Block */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-orange-100 flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4 shadow">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-4 text-orange-700">
                Business Hours
              </h3>
              <div className="w-full flex flex-col gap-2 text-gray-600 font-medium">
                <div className="flex justify-between w-full">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Sunday:</span>
                  <span className="text-red-500 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-6 text-[#2e2b70]">
              Our Location
            </h2>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.2418853213135!2d13.178734037573715!3d-8.88544608058157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f4b61a0a37cf%3A0xf569a8769ef032fa!2sCondom%C3%ADnio%20Rosalinda!5e0!3m2!1spt-PT!2sao!4v1736758621724!5m2!1spt-PT!2sao"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
