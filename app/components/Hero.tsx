"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "HTML5 (1).svg",
  "CSS3.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "React.svg",
  "Next.js.svg",
  "Node.js.svg",
  "Tailwind CSS.svg",
  "MongoDB.svg",
  "PostgresSQL.svg",
  "Tailwind CSS.svg",
  "Git.svg",
  "Vercel1.svg",
  "Python.svg",
  "FastAPI.svg",
  "Flask.svg",
];

// Simple split text function
const splitTextIntoWords = (element: HTMLElement) => {

  const text = element.textContent || "";
  const words = text.split(" ");

  element.innerHTML = words
    .map(
      (word) =>
        `<span class="split-word" style="opacity: 0; transform: translateY(10px); display: inline-block; will-change: transform, opacity;">${word}</span>`
    )
    .join(" ");

  return element.querySelectorAll(".split-word");
};

// Simple stagger animation
const animateWords = (words: NodeListOf<Element>) => {
  words.forEach((word, index) => {
    setTimeout(() => {
      (word as HTMLElement).style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      (word as HTMLElement).style.opacity = "1";
      (word as HTMLElement).style.transform = "translateY(0px)";
    }, index * 50);
  });
};

const Hero = () => {
  const greetingRef = useRef(null);
  const headingRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (greetingRef.current) {
        const greetingWords = splitTextIntoWords(greetingRef.current);
        setTimeout(() => animateWords(greetingWords), 100);
      }

      if (languageRef.current) {
        const languageWords = splitTextIntoWords(languageRef.current); // ✅ FIXED HERE
        setTimeout(() => animateWords(languageWords), 300);
      }

      if (headingRef.current) {
        const headingWords = splitTextIntoWords(headingRef.current);
        setTimeout(() => animateWords(headingWords), 500);
      }
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 my-20 flex flex-col justify-between lg:gap-14 gap-8 items-start">
      {/* ✅ Wrap greeting in motion.p to animate fade-in */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        ref={greetingRef}
        className="text-green-600 bg-green-200 px-5 py-2 rounded-md"
      >
        Hey my name is Ayushman Singh
      </motion.p>

      <h1
        ref={headingRef}
        className="md:text-5xl text-2xl font-medium leading-snug w-full md:w-[60%]"
        style={{ wordSpacing: "-0.1em" }}
      >
        Software Developer, Coder, Designer — Building digital experiences.
      </h1>

      <a
        href="https://drive.google.com/file/d/14XV7kHWBd75IKO1J1vghT9kB8mN8VGBA/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white lg:text-2xl px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors"
        >
          Resume
        </motion.button>
      </a>

      <p ref={languageRef} className="text-gray-400 text-xl md:text-2xl">
        Languages, tools, and frameworks I work with:
      </p>

      <div className="flex flex-wrap gap-5 md:gap-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${1.5 + index * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <img
              src={src}
              alt={`${src.replace(".svg", "").replace("(1)", "")} logo`}
              className="md:h-20 h-10 hover:scale-110 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
