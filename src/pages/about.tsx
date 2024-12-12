import { useState,useRef, CSSProperties } from "react";
import { Phone, MapPin, GraduationCap, Mail, School, Award } from 'lucide-react';

import { WhatsAppButton } from "./WhatsAppButton";
function About() {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // O estado pode ser um número ou null
  const [activeIndex, setActiveIndex] = useState(0); // Para gerenciar a seção ativa na navegação

    const educationRef = useRef<HTMLDivElement>(null);


  const handleNavigationClick = (index: number, sectionId: string) => {
    setActiveIndex(index);

    if (sectionId === "education" && educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Estilo para o link com barra verde na seção ativa
  const a = (index: number) => ({
    color: hoveredIndex === index ? '#00B2FF' : '#fff', // Cor azul se o item estiver sendo "hovered"
    fontWeight: 'bold',
    fontSize: hoveredIndex === index ? '17px' : '15px', // Tamanho da fonte dinâmico
    transition: 'color 0.3s ease, font-size 0.3s ease-out', // Transição da cor e font-size
    borderBottom: index === activeIndex ? '6px solid green' : 'none',
    paddingBottom: '19px', // Espaço entre o nome e a barra
  marginBottom: '5px', // Adiciona um pequeno espaço abaixo do texto antes da barra
 // Barra verde no item ativo
  });

  return (
    
    <div className="min-h-screen bg-white">
          <header style={head}>
        <div>
          <a href="#home">
            <img
              src="./fundo.png"
              style={{ height: "62px", width: "400px", marginLeft: "-20px" }}
              alt="Logo"
            />
          </a>
        </div>
        <nav className="flex items-center">
          <ul className="list-none p-0 m-0 flex">
            {/* Passando o índice para saber qual item está sendo hovered */}
            {["HOME", "EDUCATION", "GALERY", "OUR COMMUNITY", "CONTACT US"].map(
              (item, index) => (
                <li key={index} style={{ padding: "1em" }}>
                  <a
                    style={a(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() =>
                      handleNavigationClick(
                        index,
                        item.toLowerCase().replace(" ", "")
                      )
                    }
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
          <div style={{ position: "relative" }}>
            <a href="https://asangola.openapply.com/">
              <button style={styles.button0}>Admissions</button>
            </a>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">About American Schools of Angola</h1>
            <p className="text-xl">Providing an American-style, innovative, and technology-driven education inside Angola</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            We invite you to explore our website to learn more about our community and how our approach can become a life-changing and revolutionary student opportunity.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <School className="w-8 h-8 text-blue-600" />,
              text: "Accredited school offering a USA high-tech-driven education"
            },
            {
              icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
              text: "USA high school diploma upon meeting graduation requirements"
            },
            {
              icon: <Award className="w-8 h-8 text-blue-600" />,
              text: "ASA includes Kindergarten through grade 12"
            },
            {
              icon: <Award className="w-8 h-8 text-blue-600" />,
              text: "First USA school licensed by the Angolan Ministry of Education"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Enrollment Section */}
        <div className="bg-blue-50 p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Flexible Enrollment</h2>
          <p className="text-gray-700 mb-4">
            Our flexible enrollment allows families to join at the right time for their needs. Consider joining in August and January to gain the full benefit of courses and tuition.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Luanda – Rosalinda Condominium</h2>
              <p className="text-gray-700 leading-relaxed">
                This modern development includes residences, United Nations, and other Angolan Ministries. Our campus spans three buildings with over 3,600 square meters of spacious tech-rich classrooms, landscaped patios, and a shared playground.
              </p>
              <p className="text-gray-700 mt-4">
                ASA Rosalinda is located on Samba Road southbound, in Futungo. We are across the street from Sonangol's Paz Flor, up the hill from ENAPP.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditation Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Accreditations</h2>
          <p className="text-gray-700 mb-4">
            American Schools of Angola is the only USA curriculum in Angola with blended classrooms filled with innovative technology taught by International-certified teachers.
          </p>
          <p className="text-gray-700">
            ASA grants an accredited American high school diploma recognized at universities worldwide. Our curriculum accreditations are AdvancED, Cognia, and officially recognized by the NCAA.
          </p>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +244 945333000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                admissions@asangola.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Estrada da Samba, Condomínio Rosalinda <br />
                Bloco#2
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:text-blue-400">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/calendar" className="hover:text-blue-400">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-blue-400">
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg flex-1 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <img
                src="./l.png"
                alt="Social media icon"
                style={{ width: "25px", height: "auto" }}
              />
              <img
                src="./i.png"
                alt="Social media icon"
                style={{ width: "25px", height: "auto" }}
              />
              <img
                src="./f.png"
                alt="Social media icon"
                style={{ width: "25px", height: "auto" }}
              />
              <img
                src="./y.png"
                alt="Social media icon"
                style={{ width: "25px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} American Schools of Angola. All rights
            reserved.
          </p>
        </div>
        <div className="bg-gray-100 flex items-center justify-center">
          <WhatsAppButton phoneNumber="+244945333000" />
        </div>
      </footer>
    </div>
  );
}

export default About;


const head: CSSProperties = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  height: '4rem', /* Equivalente a h-20 */
  backgroundColor: '#2e2b70', /* Equivalente a bg-white/80 */
  backdropFilter: 'blur(4px)', /* Equivalente a backdrop-blur-sm */
  zIndex: '10',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '1.25rem', /* Equivalente a px-5 */
  paddingRight: '1.25rem',
  width: '100%', /* Equivalente a w-full */
};


const styles: { [key: string]: CSSProperties } = {
  button0: {
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    fontWeight: 'bold',
    fontSize: '18px',
    width: '150px',
    height: '50px',
    backgroundColor: '#169AF2',
    borderRadius: '10px'
  }

};
