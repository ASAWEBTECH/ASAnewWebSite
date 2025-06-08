import React from "react";
import { Heart, School, Map } from "lucide-react";
import Image from "next/image";

const CommunitySection = () => {
  const services = [
    {
      title: "Support Services",
      description:
        "At American Schools of Angola, we believe in holistic development. While academic progress is important, social and emotional well-being ensures that each child reaches their full potential in all areas of life.",
      icon: <Heart className="w-8 h-8 text-indigo-600" />,
      image: "/img1.png",
    },
    {
      title: "Child Development Center",
      description:
        "Welcome to ASA Child Development Center, where we deeply value the uniqueness of each child. From the start of school, our goal has been to provide an inclusive ecosystem for every child to thrive.",
      icon: <School className="w-8 h-8 text-indigo-600" />,
      image: "/img2.jpg",
    },
    {
      title: "Healthy Living",
      description:
        "Children and youth spend a significant part of their day at school. It's important that they have opportunities to consume healthy foods and drinks while at school.",
      icon: <Heart className="w-8 h-8 text-indigo-600" />,
      image: "/img3.jpg",
    },
    {
      title: "Study Visits and Artistic Events",
      description:
        "We plan various learning adventures for students and staff, and also invite students to participate in all the artistic and cultural events that we organize in partnership with ResiliArt Angola.",
      icon: <Map className="w-8 h-8 text-indigo-600" />,
      image: "/img4.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/OurCommunity.jpg"
            alt="Community"
            className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            width={800}
            height={500}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            priority
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Community
          </h2>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
            Skills for Success
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Preparing for global citizenship and leadership, ASA emphasizes
            transdisciplinary skills.
            <br />
            <br /> • Social skills such as teamwork
            <br /> • Thinking skills, such as acquiring knowledge and adapting
            new thoughts
            <br /> • Effective communication with good listening, writing, and
            speaking skills
            <br /> • Critical thinking with the ability to perceive, seek
            solutions, and resolve everyday problems
            <br /> • Accepting and giving constructive feedback with elegance
            <br /> • Creative thinking with the ability to generate unique
            solutions or alternatives
            <br /> • Integrity in doing the right thing even when no one is
            looking
            <br /> • Research skills for planning and executing projects or
            articles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                width={400}
                height={192}
                style={{ width: "100%", height: "192px", objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-2">
                  {service.title}
                </h3>
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
