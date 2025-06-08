import React, { useState, useEffect, useRef } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

// Hook para animações de entrada e saída
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  });

  return { elementRef, isVisible, hasBeenVisible };
};

// Componente para seções animadas
type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  style = {},
  delay = 0,
}) => {
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver();

  const getAnimationClass = () => {
    if (!hasBeenVisible) return 'opacity-0 translate-y-12';
    if (isVisible) return 'opacity-100 translate-y-0';
    return 'opacity-30 translate-y-6';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Componente para cards animados individualmente
type AnimatedCardProps = {
  children: React.ReactNode;
  delay?: number;
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 0 }) => {
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver();

  const getAnimationClass = () => {
    if (!hasBeenVisible) return 'opacity-0 translate-y-8 scale-95';
    if (isVisible) return 'opacity-100 translate-y-0 scale-100';
    return 'opacity-40 translate-y-4 scale-98';
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-800 ease-out ${getAnimationClass()}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

function GalleryMain() {
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
            src="/Moments.png"
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
                ? 'opacity-100 translate-x-0 translate-y-0' 
                : 'opacity-0 -translate-x-16 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Where every photo tells a story lived by our students
          </h1>
          <p 
            className={`text-xl text-white text-left transition-all duration-1000 ease-out ${
              isHeaderLoaded 
                ? 'opacity-100 translate-x-0 translate-y-0' 
                : 'opacity-0 -translate-x-12 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Through smiles, discoveries, and friendships, our gallery is an
            invitation to relive the most cherished moments of our journey.
          </p>
        </div>
      </div>

      {/* Featured Section */}
      <AnimatedSection className="py-20 px-6" delay={200}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2e2b70] mb-12 text-center">
            Events in the spotlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/SportDay.jpg",
                title: "Sports Day",
                description: "The magic of sports moment",
                barra: "#0083cb",
              },
              {
                image: "/Fy.jpg",
                title: "New Academic Year",
                description: "Starting new academic year with happiness",
                barra: "#fdaf17",
              },
              {
                image: "/OR.JPG",
                title: "WorkShop Breast Cancer Awareness",
                description: "Prevent to Better Care",
                barra: "#008633",
              },
            ].map((item, index) => (
              <AnimatedCard key={index} delay={index * 200}>
                <div
                  className="group relative overflow-hidden rounded-xl"
                  style={{
                    borderBottomColor: item.barra,
                    borderBottomWidth: "10px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={320}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Sports Day Section */}
      <AnimatedSection className="py-20 px-6 bg-[#e6e6e6]" delay={100}>
        <div className="max-w-7xl mx-auto">
          <div className="w-[800px] h-[60px] bg-[#0083cb] justify-self-center mb-5 p-2 rounded-tl-[60px] rounded-br-[60px] sm:w-[600px] md:w-[700px] lg:w-[800px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Sports Day
            </h2>
          </div>
          
          <AnimatedCard delay={300}>
            <div className="space-y-6">
              {/* Fotos no topo */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["/G1.jpg", "/G2.jpg", "/G3.jpg", "/G4.jpg"].map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden aspect-square rounded-lg"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              
              {/* Vídeo e card lado a lado */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full">
                  <iframe
                    className="w-full aspect-video rounded-lg overflow-hidden"
                    src="https://www.youtube.com/embed/xokuMIop-rM?si=-Us4J6Wj3lK0ieTF?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold text-[#0083cb] mb-4">Sports Day</h3>
                  <p className="text-gray-700 text-lg">
                    A celebration of athleticism, teamwork, and school spirit! Our Sports Day brings together students, teachers, and families for a day filled with fun competitions, encouragement, and unforgettable memories.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* New Academic Year Section */}
      <AnimatedSection className="py-20 px-6 bg-[#e6e6e6] mt-10" delay={100}>
        <div className="max-w-7xl mx-auto">
          <div className="w-[800px] h-[60px] bg-[#fdaf17] justify-self-center mb-5 p-2 rounded-tl-[60px] rounded-br-[60px] sm:w-[600px] md:w-[700px] lg:w-[800px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              New Academic Year
            </h2>
          </div>
          
          <AnimatedCard delay={300}>
            <div className="space-y-6">
              {/* Fotos no topo */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["/GG1.jpg", "/GG2.jpg", "/GG3.jpg", "/GG4.jpg"].map(
                  (image, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden aspect-square rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )
                )}
              </div>
              
              {/* Vídeo e card lado a lado */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full">
                  <iframe
                    className="w-full aspect-video rounded-lg overflow-hidden"
                    src="https://www.youtube.com/embed/lNMmoygDuYc?si=rRzrtklJbEQo756y?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold text-[#fdaf17] mb-4">New Academic Year</h3>
                  <p className="text-gray-700 text-lg">
                    The beginning of a new academic year is always a moment of excitement and hope. We welcome our students with open arms and look forward to a year full of learning, growth, and new friendships!
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Breast Cancer Awareness Section */}
      <AnimatedSection className="py-20 px-6 bg-[#e6e6e6] mt-10" delay={100}>
        <div className="max-w-7xl mx-auto">
          <div className="w-[800px] h-[60px] bg-[#008633] justify-self-center mb-5 p-2 rounded-tl-[60px] rounded-br-[60px] sm:w-[600px] md:w-[700px] lg:w-[800px] mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              WorkShop Breast Cancer Awareness
            </h2>
          </div>
          
          <AnimatedCard delay={300}>
            <div className="space-y-6">
              {/* Fotos no topo */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {["/GGG1.jpg", "/GGG2.jpg", "/GGG3.jpg", "/GGG4.jpg"].map(
                  (image, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden aspect-square rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )
                )}
              </div>
              
              {/* Vídeo e card lado a lado */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full">
                  <iframe
                    className="w-full aspect-video rounded-lg overflow-hidden"
                    src="https://www.youtube.com/embed/8d2bHV4dY8U?si=iRwO4PKg3_Pe7x78?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-bold text-[#008633] mb-4">Workshop Breast Cancer Awareness</h3>
                  <p className="text-gray-700 text-lg">
                    Promoting awareness and prevention is key to better care. Our workshop brings vital information and support to our community, empowering everyone to take action for their health.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
}

export default GalleryMain;