import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/* ---------------- types ---------------- */

type SkillProps = {
  id: number;
  title: { en: string; fi: string };
};

type TechProps = {
  id: number;
  title: { en: string; fi: string };
  skill_level_id: number;
};

type Props = {
  skills: SkillProps[];
  techs: TechProps[];
};

/* ---------------- component ---------------- */

const SkillTable: React.FC<Props> = ({ skills, techs }) => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(true);

  const sliderConfig = {
    loop: true,
    mode: "free-snap" as const,
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 16 } },
    },
  };

  const [skillsRef] = useKeenSlider<HTMLDivElement>(sliderConfig);
  const [techsRef] = useKeenSlider<HTMLDivElement>(sliderConfig);

  const text = {
    title: { en: "Skills & Tech Stack", fi: "Taidot & Teknologiat" },
    skills: { en: "Skills", fi: "Taidot" },
    tech: { en: "Tech Stack", fi: "Teknologiat" },
  };

  const Card = ({ title }: { title: string }) => (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      className="keen-slider__slide bg-white/80 backdrop-blur rounded-2xl p-6 shadow-sm border border-gray-200"
    >
      <p className="text-lg font-medium text-gray-800">{title}</p>
    </motion.div>
  );

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold">
            {text.title[language]}
          </h2>

          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="toggle"
          >
            {open ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="space-y-16"
            >
              {/* Skills */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-700">
                  {text.skills[language]}
                </h3>

                <div ref={skillsRef} className="keen-slider">
                  {skills.map((s) => (
                    <Card key={s.id} title={s.title[language]} />
                  ))}
                </div>
              </div>

              {/* Tech */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-700">
                  {text.tech[language]}
                </h3>

                <div ref={techsRef} className="keen-slider">
                  {techs.map((t) => (
                    <Card key={t.id} title={t.title[language]} />
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
