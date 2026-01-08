// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Portfolio() {
//   const [filter, setFilter] = useState("All");

//   const projects = [
//     { title: "Urban Residence", category: "Architecture", image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198" },
//     { title: "Gallery Space", category: "Interior Design", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
//     { title: "Modern Workspace", category: "Workspace", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
//     { title: "Luxury Villa", category: "Architecture", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
//     { title: "Cozy Apartment", category: "Interior Design", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
//   ];

//   const categories = ["All", "Architecture", "Interior Design", "Workspace"];

//   // Filtered projects
//   const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

//   return (
//     <section className="px-8 md:px-20 py-32 bg-neutral-50">
//       {/* Hero */}
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <p className="text-sm tracking-[0.3em] text-neutral-500 mb-4">PORTFOLIO</p>
//         <h2 className="text-4xl md:text-5xl font-light">Our Work & Creations</h2>
//         <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
//           A curated showcase of architectural and interior projects demonstrating clarity, aesthetics, and innovation.
//         </p>
//       </motion.div>

//       {/* Category Filters */}
//       <motion.div
//         className="flex justify-center gap-6 mb-16 flex-wrap"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {categories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => setFilter(cat)}
//             className={`px-6 py-2 rounded-full font-medium border transition duration-300 ${
//               filter === cat
//                 ? "bg-black text-white border-black"
//                 : "bg-white text-black border-neutral-300 hover:bg-black hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </motion.div>

//       {/* Projects Grid */}
//       <motion.div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.15 } },
//         }}
//       >
//         {filteredProjects.map((project, i) => (
//           <motion.div
//             key={i}
//             className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             whileHover={{ scale: 1.03 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-[320px] object-cover"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
//             {/* Text */}
//             <div className="absolute bottom-4 left-4 text-white">
//               <h3 className="text-xl font-semibold">{project.title}</h3>
//               <p className="text-sm opacity-90">{project.category}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }










// import architectureImg from "../assets/architecture.jpg";
// import about from "../assets/About1.jpeg"
// import whyus1 from "../assets/whyus1.jpeg"
// import whyus2 from "../assets/whyus2.jpeg"

// export default function WhyUs() {
//   const principles = [
//     {
//       title: "Design Before Decoration",
//       desc: "We believe architecture begins with clarity of thought, not surface aesthetics. Every line has a reason.",
//     },
//     {
//       title: "Human-Centered Spaces",
//       desc: "Spaces are designed around how people move, feel, and live — not around trends.",
//     },
//     {
//       title: "Material Intelligence",
//       desc: "We respect materials for what they are. Texture, light, and proportion guide every decision.",
//     },
//     {
//       title: "Bespoke by Nature",
//       desc: "No templates. No repetition. Each project starts from zero and grows from your story.",
//     },
//   ];

//   return (
//     <section className="bg-[#F9F6EE] text-neutral-900">
//       {/* HERO INTRO */}
//       <div className="px-6 md:px-20 pt-32 pb-24 max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl">
//           Why <span className="font-medium">CubeSpace</span> Exists
//         </h2>

//         <p className="mt-8 text-neutral-600 max-w-xl text-lg">
//           We are not here to follow trends or replicate familiar styles.
//           CubeSpace was formed to create spaces that feel calm, considered,
//           and deeply connected to the people who inhabit them.
//         </p>
//       </div>

//       {/* IMAGE + TEXT SPLIT */}
//       <div className="grid md:grid-cols-2 gap-16 items-center px-6 md:px-20 max-w-7xl mx-auto">
//         <div className="relative">
//           <img
//             src={architectureImg}
//             alt="Architecture concept"
//             className="rounded-3xl w-full h-[420px] object-cover"
//           />
//         </div>

//         <div>
//           <h3 className="text-3xl font-light mb-6">
//             A Thoughtful Design Philosophy
//           </h3>
//           <p className="text-neutral-600 leading-relaxed">
//             As a young studio, our strength lies in intention.
//             We take time to listen, observe, and understand —
//             allowing each space to evolve naturally through logic,
//             emotion, and proportion.
//           </p>
//         </div>
//       </div>

//       {/* PRINCIPLES GRID */}
//       <div className="px-6 md:px-20 py-32 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12">
//           {principles.map((item, index) => (
//             <div
//               key={index}
//               className="p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-lg transition"
//             >
//               <h4 className="text-xl mb-3 font-medium">{item.title}</h4>
//               <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* IMAGE STRIP (SAME IMAGE REUSED) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 max-w-7xl mx-auto">
//         <img
//           src={whyus1}
//           className="h-64 w-full object-cover rounded-2xl"
//           alt="Concept"
//         />
//         <img
//           src={about}
//           className="h-64 w-full object-cover rounded-2xl"
//           alt="Concept"
//         />
//         <img
//           src={whyus2}
//           className="h-64 w-full object-cover rounded-2xl"
//           alt="Concept"
//         />
//       </div>

//       {/* FINAL STATEMENT */}
//       <div className="px-6 md:px-20 py-32 text-center max-w-4xl mx-auto">
//         <h3 className="text-3xl md:text-4xl font-light leading-snug">
//           We may be a new studio,
//           <br />
//           but our ideas are deeply grounded.
//         </h3>

//         <p className="mt-6 text-neutral-600 text-lg">
//           If you value intention, honesty, and timeless design —
//           CubeSpace is built for you.
//         </p>

//         {/* <button className="mt-10 px-10 py-4 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition">
//           Start a Conversation →
//         </button> */}
//       </div>
//     </section>
//   );
// }












import architectureImg from "../assets/architecture.jpg";
import about from "../assets/About1.jpeg";
import whyus1 from "../assets/whyus1.jpeg";
import whyus2 from "../assets/whyus2.jpeg";

export default function WhyUs() {
  const principles = [
    {
      title: "Design Before Decoration",
      desc: "We believe architecture begins with clarity of thought, not surface aesthetics. Every line has a reason.",
    },
    {
      title: "Human-Centered Spaces",
      desc: "Spaces are designed around how people move, feel, and live — not around trends.",
    },
    {
      title: "Material Intelligence",
      desc: "We respect materials for what they are. Texture, light, and proportion guide every decision.",
    },
    {
      title: "Bespoke by Nature",
      desc: "No templates. No repetition. Each project starts from zero and grows from your story.",
    },
  ];

  return (
    <section className="bg-[#F9F6EE] text-neutral-900">
      {/* HERO INTRO */}
      <div className="px-6 md:px-20 pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mx-auto md:mx-0">
          Why <span className="font-medium">CubeSpace</span> Exists
        </h2>

        <p className="mt-6 md:mt-8 text-neutral-600 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
          We are not here to follow trends or replicate familiar styles.
          CubeSpace was formed to create spaces that feel calm, considered,
          and deeply connected to the people who inhabit them.
        </p>
      </div>

      {/* IMAGE + TEXT SPLIT */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative">
          <img
            src={architectureImg}
            alt="Architecture concept"
            className="rounded-3xl w-full h-64 sm:h-80 md:h-[420px] object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-light mb-4 sm:mb-6">
            A Thoughtful Design Philosophy
          </h3>
          <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
            As a young studio, our strength lies in intention.
            We take time to listen, observe, and understand —
            allowing each space to evolve naturally through logic,
            emotion, and proportion.
          </p>
        </div>
      </div>

      {/* PRINCIPLES GRID */}
      <div className="px-6 md:px-20 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {principles.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-lg transition"
            >
              <h4 className="text-lg sm:text-xl mb-2 sm:mb-3 font-medium">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE STRIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20 max-w-7xl mx-auto">
        <img
          src={whyus1}
          className="h-48 sm:h-56 md:h-64 w-full object-cover rounded-2xl"
          alt="Concept"
        />
        <img
          src={about}
          className="h-48 sm:h-56 md:h-64 w-full object-cover rounded-2xl"
          alt="Concept"
        />
        <img
          src={whyus2}
          className="h-48 sm:h-56 md:h-64 w-full object-cover rounded-2xl"
          alt="Concept"
        />
      </div>

      {/* FINAL STATEMENT */}
      {/* <div className="px-6 md:px-20 py-20 md:py-32 text-center max-w-4xl mx-auto bg-[#CD7F32]">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
          We may be a new studio,
          <br />
          but our ideas are deeply grounded.
        </h3>

        <p className="mt-4 sm:mt-6 text-neutral-600 text-sm sm:text-base">
          If you value intention, honesty, and timeless design —
          CubeSpace is built for you.
        </p>
      </div> */}
      <div className="px-4 sm:px-6 py-16">
  <div
    className="
      mx-auto
      max-w-3xl
      text-center
      bg-[#DAA06D]
      border border-black/10
      rounded-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      px-6 sm:px-10
      py-12 sm:py-16
    "
  >
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-black">
      We may be a new studio,
      <br />
      but our ideas are deeply grounded.
    </h3>

    <p className="mt-4 sm:mt-6 text-black/70 text-sm sm:text-base">
      If you value intention, honesty, and timeless design —
      CubeSpace is built for you.
    </p>
  </div>
</div>

    </section>
  );
}
