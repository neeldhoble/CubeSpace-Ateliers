// import { motion } from "framer-motion";

// // IMPORT LOCAL IMAGES
// import interiorImg from "../assets/interior.avif";
// import architectureImg from "../assets/architecture.jpg";
// import designImg from "../assets/design.jpg";
// import projectImg from "../assets/project.jpg";

// export default function Services() {
//   const services = [
//     {
//       title: "Interior Design",
//       image: interiorImg,
//       desc: "Thoughtfully crafted interiors that blend comfort and elegance.",
//     },
//     {
//       title: "Architecture",
//       image: architectureImg,
//       desc: "Modern architectural solutions built for longevity and style.",
//     },
//     {
//       title: "Design Development",
//       image: designImg,
//       desc: "From concept to execution with precise design detailing.",
//     },
//     {
//       title: "Project Coordination",
//       image: projectImg,
//       desc: "Seamless coordination ensuring timely and quality delivery.",
//     },
//   ];

//   return (
//     <section className="px-6 md:px-20 py-32 bg-neutral-50 overflow-hidden w-[1500px] mx-auto">
      
//       {/* Heading */}
//       <motion.div
//         className="mb-20 max-w-2xl"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-4xl font-light mb-4">Our Services</h2>
//         <p className="text-neutral-500">
//           We provide end-to-end design and architectural solutions tailored to
//           modern lifestyles.
//         </p>
//       </motion.div>

//       {/* Grid */}
//       <motion.div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: {
//             transition: { staggerChildren: 0.15 },
//           },
//         }}
//       >
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             variants={cardReveal}
//             whileHover={{ y: -6 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-black"
//           >
//             {/* Image */}
//             <motion.img
//               src={service.image}
//               alt={service.title}
//               className="h-[420px] w-full object-cover"
//               whileHover={{ scale: 1.08 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             />

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />

//             {/* Text */}
//             <div className="absolute bottom-0 p-8 text-white">
//               <h3 className="text-xl font-light mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm text-neutral-200 leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// /* Card reveal animation */
// const cardReveal = {
//   hidden: {
//     opacity: 0,
//     y: 60,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };





import { motion } from "framer-motion";

// IMPORT LOCAL IMAGES
import interiorImg from "../assets/interior.avif";
import architectureImg from "../assets/architecture.jpg";
import designImg from "../assets/design.jpg";
import projectImg from "../assets/project.jpg";

export default function Services() {
  const services = [
    {
      title: "Interior Design",
      image: interiorImg,
      desc: "Thoughtfully crafted interiors that blend comfort and elegance.",
    },
    {
      title: "Architecture",
      image: architectureImg,
      desc: "Modern architectural solutions built for longevity and style.",
    },
    {
      title: "Design Development",
      image: designImg,
      desc: "From concept to execution with precise design detailing.",
    },
    {
      title: "Project Coordination",
      image: projectImg,
      desc: "Seamless coordination ensuring timely and quality delivery.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-20 py-24 md:py-32 bg-neutral-50 overflow-hidden w-[1500px] mx-auto">
      
      {/* Heading */}
      <motion.div
        className="mb-16 md:mb-20 max-w-full md:max-w-2xl mx-auto text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-500">
          We provide end-to-end design and architectural solutions tailored to
          modern lifestyles.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardReveal}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-black"
          >
            {/* Image */}
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* Card reveal animation */
const cardReveal = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
