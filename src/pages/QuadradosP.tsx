import React from "react";
import { Award, Cpu, BookOpen, Clock } from "lucide-react";

function FeatureBox({
  icon: Icon,
  title,
  description,
  bgColor,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  delay: string;
}) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative animate-fade-up ${delay}`}>
      <div className="bg-blue-50 p-4 rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div
        className="absolute bottom-0 left-0 w-full h-1.5 rounded-b-xl transition-all duration-300"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
}

function QuadradosP() {
  const features = [
    {
      icon: Award,
      title: "Internationally Recognized Certificate",
      description:
        "With this, our students stand out in the job market and global academic opportunities.",
      bgColor: "#fdaf17",
      delay: "delay-0",
    },
    {
      icon: Cpu,
      title: "Cutting-edge Technologies",
      description:
        "We utilize cutting-edge technologies to ensure that students have access to the most advanced tools, combining technological innovation with quality education.",
      bgColor: "#0083cb",
      delay: "delay-1",
    },
    {
      icon: BookOpen,
      title: "Blended Learning",
      description:
        "This model offers flexibility to students, allowing them to learn autonomously while maintaining interaction with teachers and peers in face-to-face activities.",
      bgColor: "#01944d",
      delay: "delay-2",
    },
    {
      icon: Clock,
      title: "Self-pacing",
      description:
        "This method offers autonomy for each student to progress according to their understanding of the content, ensuring more effective learning tailored to their needs.",
      bgColor: "#ed1b24",
      delay: "delay-3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2b70] mb-4">
            Our Educational Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our educational approach unique and effective
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuadradosP;