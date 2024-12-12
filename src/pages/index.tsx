import { useState, useEffect, CSSProperties,useRef } from "react";
import Quadrado from "./quadradoBlur";
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppButton } from "./WhatsAppButton";
import { ImageSlider } from "./ImageSlider";
import QuadradosP from "./QuadradosP";
import CommunitySection from "./SectionCommunity";
import Gallery from "./components/Gallery";
import { NewsSection } from './components/NewsSection';
import { Header } from "./components/Gallery/Header";
export default function Home() {
  // Definindo estados para controlar a navegação e a seção ativa
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // O estado pode ser um número ou null
  const [activeIndex, setActiveIndex] = useState(0); // Para gerenciar a seção ativa na navegação

    const educationRef = useRef<HTMLDivElement>(null);
  
  



  const images = [
    './im1.jpg',
    './im2.jpg',
    './im3.jpg',
    './im4.jpg',
    './im5.jpg',
  ];


  return (
    <main>
      <Header/>

      <div className="min-h-screen bg-gray-100">
      <ImageSlider
        images={images}
        title="WELCOME TO AMERICAN SCHOOLS OF ANGOLA"
        description="Providing an American-style, innovative, and technology-driven education inside Angola."
      />

      <div>
        <QuadradosP/>
      </div>
      </div>

      <section ref={educationRef} style={styles.sectionEducation}>
        <div style={styles.quadradoContainer}>
          <Quadrado />
        </div>
        <div className="bg-white w-full max-w-md h-16 mt-10 flex items-center justify-center">
  <h1 className="text-2xl font-semibold text-[#2e2b70]">
    ALL THE EDUCATION LEVELS
  </h1>
</div>
<p className="text-lg mt-6">
  We have all the education levels, from elementary to high school grade, with complete high technology teaching.
</p>
      </section>

      <div className=" bg-gradient-to-br from-blue-50 to-indigo-50" style={{ height: '500px'}}>
      <NewsSection />
      </div>      
      
      <section style={styles.sectionGallery}>
      <div className="bg-white w-[90%] h-20 -mt-5 mx-auto rounded-bl-[80px] rounded-tr-[80px] flex items-center justify-center">
  <h1 className="text-[#2e2b70] font-bold text-xl text-center px-4">
    Explore our best moments in the gallery
  </h1>
</div>
          <Gallery/>
         
      </section>

      <section ref={educationRef} style={styles.sectionCommunity} className=" bg-gradient-to-br from-blue-50 to-indigo-50">
       <CommunitySection/>
      </section>

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
    </main>
  );
}


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
  banner: {
    position: 'relative',
    width: '100%',
    height: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  slidesContainer: {
    display: 'flex',
    transition: 'transform 0.9s ease',
  },
  slide: {
    minWidth: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slideGallery: {
    width: '100%',
    minWidth: '50%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  activeSlideGallery: {
    position: 'relative',
  },
  activeSlide: {
    position: 'relative',
  },
  indicators: {
    marginBottom: '140px',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
  },
  indicatorsGallery: {
    marginBottom: '30px',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
  },
  indicator: {
    width: '10px',
    height: '10px',
    backgroundColor: 'gray',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
  overlaytext: {
    position: 'absolute',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    zIndex: '10'
  },
  overlaytext1: {
    position: 'absolute',
    color: '#2e2b70',
    fontSize: '15px',
  },
  blurredSquare: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: '90%',
    height: '90%',
    zIndex: '5',
    transform: 'translate(-50%, -50%)', // Centraliza o elemento no centro da tela
    alignItems: 'center', // Centraliza verticalmente o conteúdo interno
    justifyContent: 'center', // Centraliza horizontalmente o conteúdo interno
  },
  textCaixa1: {
    fontSize: '50px',
    alignItems: 'center',
    justifySelf: 'center',
    lineHeight: '1.4',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: '10px',
    fontWeight: '500',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  textCaixa: {
    fontSize: '50px',
    alignItems: 'center',
    justifySelf: 'center',
    lineHeight: '1.4',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: '10px',
    fontWeight: 'bolder',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  texto: {
    width: '60%',
    alignItems: 'center',
    justifySelf: 'center',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '17px',
  },
  caixa: {
    padding: '8px',
    marginTop: '320px',
    width: '50%',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    backgroundColor: '#2e2b70',
    borderBottomRightRadius: '80px',
    borderTopLeftRadius: '80px'
  },
  buttonSession: {
    position: 'absolute',
    top: '63%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Centraliza o container ao centro da tela
    display: 'flex',
    alignItems: 'center', // Centraliza o conteúdo verticalmente dentro do container
    justifyContent: 'center', // Centraliza o conteúdo horizontalmente dentro do container
    gap: '50px'
  },
  button2: {
    color: '#ffffff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    fontWeight: 'bold',
    fontSize: '18px',
    width: '200px',
    height: '50px',
    backgroundColor: '#FFC90E',
    borderRadius: '10px'
  },
 sectionEducation: {
    width: '100%',
    minHeight: '100vh', // Mantém o tamanho da seção sem que os quadrados quebrem para uma nova linha
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2e2b70',
    padding: '20px 0', // Espaço para dar margem interna à seção
    backgroundImage:`url('./FS.png')`,
    backgroundSize: 'cover', // Faz com que a imagem cubra todo o elemento
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundRepeat: 'no-repeat', // Evita que a imagem se repita
  
  },
  sectionGallery: {
    width: '100%',
    minHeight: '100vh', // Mantém o tamanho da seção sem que os quadrados quebrem para uma nova linha
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2e2b70',
    padding: '20px 0', // Espaço para dar margem interna à seção
    backgroundImage:`url('./bgf.jpg')`,
    backgroundSize: 'cover', // Faz com que a imagem cubra todo o elemento
    backgroundPosition: 'center', // Centraliza a imagem
    backgroundRepeat: 'no-repeat', // Evita que a imagem se repita
  },
  sectionCommunity: {
    width: '100%',
    minHeight: '100vh', // Mantém o tamanho da seção sem que os quadrados quebrem para uma nova linha
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0', // Espaço para dar margem interna à seção
  },
  sectionDivMain: {
    width: '100%',
    height: '100%'
  },

  quadradoBlur: {
    width: '350px',
    height: '330px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row', // Alinha divInQuadrado e imgAlunos lado a lado
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '11px 2px 6px rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '10px',
  },

  quadradoBlurGallery: {
    width: '60%',
    height: '500px',
    display: 'flex',
    flexDirection: 'row', // Alinha divInQuadrado e imgAlunos lado a lado
    justifyContent: 'space-between',
    justifySelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '10px',
  },
    divInQuadrado: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column', // Coloca o texto acima do botão
    alignItems: 'center', // Centraliza o conteúdo na div
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: '10px',
  },
  conteudoQuadrado: {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
},
  textQuadrado: {
  textAlign: 'center',
  color: '#ffff',
  fontWeight: 'bold',
  fontSize: '20px',
  marginBottom: '50px'
},
quadradoContainer: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Centraliza os quadrados no container
  alignItems: 'center',
  gap: '60px', // Espaço entre os quadrados
  width: '100%',
  margin: '0 auto', // Centraliza o container na seção
  marginTop: '130px'
},

  buttonQuadrado2Gallery: {
    marginTop: '20px',
    width: '150px',
    height: '40px',
    borderTopLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: '#22B14C',
  },

  imgStyle: {
    marginTop: '20px',
    width: '60%',
    height: '60%',
    transition: 'transform 0.3s ease-in-out',
  },
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






