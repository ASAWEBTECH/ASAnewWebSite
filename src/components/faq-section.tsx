"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimationWrapper from "./animation-wrapper";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is it true that ASA only teaches in English?",
    answer:
      "No, that's a common misconception. While English is the primary language of instruction, ASA offers a holistic and inclusive education based on U.S. academic standards, including Portuguese and French language courses to support multilingual development."
  },
  {
    question: "What curriculum does the American Schools of Angola follow?",
    answer:
      "ASA follows a U.S.-based curriculum that focuses on critical thinking, creativity, and global citizenship. The program is designed to prepare students for both American and international universities."
  },
  {
    question: "Do you offer extracurricular activities?",
    answer:
      "Yes, we offer a wide variety of extracurricular activities including sports, music, drama, STEM clubs, and community service programs to support students’ personal growth beyond the classroom."
  },
  {
    question: "Is ASA open to students who do not speak English fluently?",
    answer:
      "Absolutely. We provide English as a Second Language (ESL) support and personalized assistance to help non-native speakers integrate and succeed in our learning environment."
  },
  {
    question: "How to apply for admission?",
    answer:
      "Click on the link for a video explaining the admission process."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-4 md:py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimationWrapper delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2b70] mb-12 text-center">
            FAQ
          </h2>
        </AnimationWrapper>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimationWrapper key={index} delay={0.1 + index * 0.1}>
              <div className="border-b border-gray-200 py-5">
                <button
                  className="flex w-full justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium text-slate-800">{faq.question}</h3>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`mt-3 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 pb-4">{faq.answer}</p>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
