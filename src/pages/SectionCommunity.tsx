import React from 'react';
import { Heart, School, Map } from 'lucide-react';

const CommunitySection = () => {
  const services = [
    {
      title: "Serviços de suporte",
      description: "Na American Schools of Angola, acreditamos no desenvolvimento holístico. Quando a progressão acadêmica é importante, o bem-estar social e emocional garante que cada criança alcance seu potencial máximo em todas as esferas da vida.",
      icon: <Heart className="w-8 h-8 text-indigo-600" />,
      image: "./img1.png"
    },
    {
      title: "Centro de Desenvolvimento Infantil",
      description: "Bem-vindo ao ASA Child Development Center, onde valorizamos profundamente a singularidade de cada criança. Desde o início da escola, nossa meta tem sido fornecer um ecossistema inclusivo para que cada criança floresça.",
      icon: <School className="w-8 h-8 text-indigo-600" />,
      image: "./img2.jpg"
    },
    {
      title: "Vida Saudável",
      description: "Crianças e jovens passam grande parte do dia na escola. É importante que eles tenham oportunidades de consumir alimentos e bebidas saudáveis​​enquanto estão na escola.",
      icon: <Heart className="w-8 h-8 text-indigo-600" />,
      image: "./img3.jpg"
    },
    {
      title: "Visitas de estudo e eventos artísticos",
      description: "Planejamos diversas aventuras de aprendizado para alunos e funcionários, e também convidamos os alunos a participar de todos os eventos artísticos e culturais que organizamos em parceria com a ResiliArt Angola.",
      icon: <Map className="w-8 h-8 text-indigo-600" />,
      image: "./img4.jpg"
    }
  ];

  return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="./OurCommunity.jpg"
              alt="Community"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Community</h2>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Skills for Success</h3>
            <p className="text-gray-700 leading-relaxed">
              Em preparação para a cidadania e liderança globais, a ASA enfatiza
              habilidades transdisciplinares.
              <br /><br />
              • Habilidades sociais como ser um jogador de equipe<br />
              • Habilidades de pensamento, como adquirir conhecimento e adaptar novos pensamentos<br />
              • Comunicação eficaz com boas habilidades de escuta, escrita e fala<br />
              • Pensamento crítico com capacidade de perceber, buscar soluções e resolver problemas diários<br />
              • Aceitar e dar feedback construtivo com elegância<br />
              • Pensamento criativo com capacidade de gerar soluções ou alternativas únicas<br />
              • Integridade ao fazer a coisa certa mesmo quando ninguém está olhando<br />
              • Habilidades de pesquisa para planejar e executar projetos ou artigos
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-2">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default CommunitySection;