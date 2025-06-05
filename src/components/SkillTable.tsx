import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";

type SkillProps = {
  id: number;
  title: {
    en: string;
    fi: string;
  };
};

type SkillsProps = {
  skills: SkillProps[];
};

type TechProps = {
  id: number;
  title: {
    en: string;
    fi: string;
  };
  skill_level_id: number;
};

type TechStackProps = {
  techs: TechProps[];
};

const SkillTable: React.FC<SkillsProps & TechStackProps> = ({ skills, techs }) => {
  // Slider for Skills
  const [skillsSliderRef, skillsSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
  });

  // Slider for Techs
  const [techsSliderRef, techsSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
  });

  const { language } = useLanguage();
  const [showSections, setShowSections] = useState(false);

  const textContent = {
    skills: {
      en: "Skills",
      fi: "Taidot",
    },
    techStack: {
      en: "Tech Stack",
      fi: "Teknologiat",
    },
    toggle: {
      en: "Toggle",
      fi: "Näytä/piilota",
    },
    scroll: {
      en: "Scroll the carousel to see more",
      fi: "Selaa karusellia nähdäksesi lisää",
    },
  };

  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header and Toggle */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {textContent.skills[language]} & {textContent.techStack[language]}
            </h2>
            <p className="text-gray-600 text-sm">{textContent.scroll[language]}</p>
          </div>
          <button
            onClick={() => setShowSections((prev) => !prev)}
            className="text-sm text-blue-900 hover:underline"
            aria-label={textContent.toggle[language]}
          >
            {showSections ? (
              <ArrowBigUp size={40} className="inline-block" />
            ) : (
              <ArrowBigDown size={40} className="inline-block" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {showSections && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Skills Slider with Arrows */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <button
                    onClick={() => skillsSlider.current?.prev()}
                    className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-400"
                    aria-label="Previous skills"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => skillsSlider.current?.next()}
                    className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-400"
                    aria-label="Next skills"
                  >
                    Next
                  </button>
                </div>
                <div ref={skillsSliderRef} className="keen-slider py-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={`skill-${skill.id}`}
                      className="keen-slider__slide relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[120px]"
                    >
                      <div
                        className={`absolute top-0 right-0 h-full w-3 rounded-r-lg ${
                          index % 3 === 0
                            ? "bg-red-500"
                            : index % 3 === 1
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      />
                      <h3 className="text-lg font-semibold mb-2 text-gray-600">
                        {skill.title[language]}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Slider with Arrows */}
              <div>
                <div className="flex justify-between mb-2">
                  <button
                    onClick={() => techsSlider.current?.prev()}
                    className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-400"
                    aria-label="Previous tech stack"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => techsSlider.current?.next()}
                    className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-400"
                    aria-label="Next tech stack"
                  >
                    Next
                  </button>
                </div>
                <div ref={techsSliderRef} className="keen-slider py-4">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={`tech-${tech.id}`}
                      className="keen-slider__slide relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[120px]"
                    >
                      <div
                        className={`absolute top-0 right-0 h-full w-3 rounded-r-lg ${
                          index % 3 === 0
                            ? "bg-red-500"
                            : index % 3 === 1
                            ? "bg-blue-500"
                            : "bg-green-500"
                        }`}
                      />
                      <h3 className="text-lg font-semibold mb-2 text-gray-600">
                        {tech.title[language]}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillTable;
