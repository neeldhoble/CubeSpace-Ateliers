import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Move horizontally as user scrolls vertically
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const steps = [
    {
      title: "Understanding Vision",
      desc: "We begin by deeply understanding your aspirations, lifestyle, and spatial needs to define a clear design direction.",
    },
    {
      title: "Context Analysis",
      desc: "Site, surroundings, climate, and cultural context are analyzed to create spaces that belong naturally.",
    },
    {
      title: "Design Development",
      desc: "Concepts evolve into refined layouts, proportions, and spatial narratives guided by clarity and intent.",
    },
    {
      title: "Material Intelligence",
      desc: "Materials are selected for texture, durability, and sustainability—where aesthetics meet performance.",
    },
    {
      title: "Execution",
      desc: "We collaborate closely during execution to ensure every detail is realized with precision and care.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#28282B] text-white"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Heading */}
        <div className="px-20 mb-20">
          <h2 className="text-4xl font-light tracking-wide">
            Our Design Process
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl">
            A thoughtful, structured approach that transforms ideas into
            timeless architectural experiences.
          </p>
        </div>

        {/* Horizontal motion */}
        <motion.div
          style={{ x }}
          className="flex w-[160vw] gap-24 px-20"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="min-w-[360px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 hover:bg-white/10 transition duration-500"
            >
              <span className="text-sm tracking-widest text-neutral-400">
                0{i + 1}
              </span>

              <h3 className="text-2xl font-light mt-4">
                {step.title}
              </h3>

              <p className="mt-6 text-neutral-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress line */}
        <div className="absolute bottom-20 left-20 right-20 h-[1px] bg-white/10" />
      </div>
    </section>
  );
}
