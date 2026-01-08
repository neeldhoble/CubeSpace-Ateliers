import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Urban Residence",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    },
    {
      title: "Gallery Space",
      location: "Delhi",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    },
    {
      title: "Modern Workspace",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    {
      title: "Luxury Villa",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-32 bg-[#D3D3D3] overflow-hidden">
      
      {/* Heading */}
      <motion.div
        className="mb-20 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-light mb-4">
          Selected Projects
        </h2>
        <p className="text-neutral-500">
          A curated selection of our recent architectural and interior works.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid gap-16 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.18 },
          },
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardReveal}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-[460px] object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Always-visible gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text (always visible) */}
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-light mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-300 tracking-wide">
                {project.location}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* Card reveal */
const cardReveal = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
