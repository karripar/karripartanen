import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";

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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.16 }}
      className="keen-slider__slide rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <p className="text-lg font-medium text-slate-800">{title}</p>
    </motion.div>
  );

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {text.title[language]}
          </h2>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 transition-colors duration-200 hover:bg-slate-100"
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
              transition={{ duration: 0.2 }}
              className="space-y-16"
            >
              {/* Skills */}
              <div>
                <h3 className="mb-4 text-xl font-medium text-slate-700">
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
                <h3 className="mb-4 text-xl font-medium text-slate-700">
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
