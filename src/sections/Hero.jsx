// import { motion } from "framer-motion";
// import heroImg from "../assets/Hero.jpeg";

// export default function Hero() {
//   return (
//     <section
//       className="
//         relative 
//         min-h-screen 
//         overflow-hidden 
//         bg-black
//         pt-[64px] md:pt-[80px]   /* START AFTER NAVBAR */
//       "
//     >
//       {/* Background Image */}
//       <motion.div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImg})` }}
//         initial={{ scale: 1.08 }}
//         animate={{ scale: 1.16 }}
//         transition={{
//           duration: 25,
//           ease: "easeOut",
//         }}
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

//       {/* Content */}
//       <div className="relative z-10 flex min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] items-center">
//         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-20">
          
//           <motion.div
//             className="max-w-xl md:max-w-2xl text-white"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: {},
//               visible: { transition: { staggerChildren: 0.18 } },
//             }}
//           >
//             {/* Heading */}
//             <motion.h1
//               className="
//                 text-3xl sm:text-4xl md:text-6xl
//                 font-serif font-light leading-tight
//               "
//               variants={fadeUp}
//             >
//               Architecture & Interiors,
//               <span className="block mt-2">
//                 Perfectly Aligned
//               </span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               className="
//                 mt-5 sm:mt-6
//                 text-sm sm:text-base md:text-xl
//                 text-white/85
//                 leading-relaxed
//                 font-light
//               "
//               variants={fadeUp}
//             >
//               CubeSpace Ateliers is a multidisciplinary interior design and
//               architectural studio crafting refined, timeless spaces. We
//               combine design sophistication with technical precision to
//               deliver visually compelling, purpose-driven environments.
//             </motion.p>

//             {/* CTA */}
//             <motion.button
//               variants={fadeUp}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//               }}
//               transition={{ duration: 0.3 }}
//               className="
//                 mt-8 sm:mt-10
//                 inline-flex items-center
//                 bg-[#f28c6a] text-white
//                 px-6 sm:px-7 py-3
//                 text-xs sm:text-sm tracking-wide
//                 rounded-sm
//               "
//             >
//               View Our Portfolio
//             </motion.button>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// /* Animation */
// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       ease: "easeOut",
//     },
//   },
// };


















import { motion } from "framer-motion";
import heroImg from "../assets/Hero.jpeg";

export default function Hero() {
  return (
    <section
      className="
        relative 
        min-h-screen 
        overflow-hidden 
        bg-black
        pt-[64px] md:pt-[80px]   /* START AFTER NAVBAR */
      "
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.16 }}
        transition={{
          duration: 25,
          ease: "easeOut",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
          
          <motion.div
            className="max-w-full md:max-w-2xl text-white text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            {/* Heading */}
            <motion.h1
              className="
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl
                font-serif font-light leading-snug sm:leading-tight md:leading-tight
              "
              variants={fadeUp}
            >
              Architecture & Interiors,
              <span className="block mt-2 md:mt-4">
                Perfectly Aligned
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="
                mt-4 sm:mt-5 md:mt-6
                text-xs sm:text-sm md:text-base lg:text-lg
                text-white/85
                leading-relaxed
                font-light
              "
              variants={fadeUp}
            >
              CubeSpace Ateliers is a multidisciplinary interior design and
              architectural studio crafting refined, timeless spaces. We
              combine design sophistication with technical precision to
              deliver visually compelling, purpose-driven environments.
            </motion.p>

            {/* CTA */}
            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="
                mt-6 sm:mt-8 md:mt-10
                inline-flex items-center justify-center
                bg-[#f28c6a] text-white
                px-4 sm:px-6 md:px-8
                py-2 sm:py-3
                text-xs sm:text-sm md:text-base
                tracking-wide
                rounded-md
              "
            >
              View Our Portfolio
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* Animation */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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
