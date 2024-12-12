import React from 'react';
import { Award, Cpu, BookOpen, Clock } from 'lucide-react';

function FeatureBox({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="bg-blue-50 p-4 rounded-full mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function QuadradosP() {
  const features = [
    {
      icon: Award,
      title: "Internationally Recognized Certificate",
      description: "With this, our students stand out in the job market and global academic opportunities."
    },
    {
      icon: Cpu,
      title: "Cutting-edge Technologies",
      description: "We utilize cutting-edge technologies to ensure that students have access to the most advanced tools, combining technological innovation with quality education."
    },
    {
      icon: BookOpen,
      title: "Blended Learning",
      description: "This model offers flexibility to students, allowing them to learn autonomously while maintaining interaction with teachers and peers in face-to-face activities."
    },
    {
      icon: Clock,
      title: "Self-pacing",
      description: "This method offers autonomy for each student to progress according to their understanding of the content, ensuring more effective learning tailored to their needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuadradosP;