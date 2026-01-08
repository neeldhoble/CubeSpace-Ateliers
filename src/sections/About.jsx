// import { motion } from "framer-motion";
// import AboutImage from "../assets/About.jpeg";

// export default function About() {
//   return (
//     <section className="bg-[#faf7f4] py-32">
//       <div className="max-w-7xl mx-auto px-8 md:px-20">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           >
//             <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-neutral-900">
//               About Us
//             </h2>

//             <p className="text-neutral-600 leading-relaxed mb-6">
//               CubeSpace Ateliers is a multidisciplinary interior design and
//               architectural studio creating refined, timeless spaces. We
//               merge sophisticated design with technical precision to deliver
//               environments that are visually compelling and purposefully
//               built.
//             </p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="mt-4 bg-[#f28c6a] text-white px-6 py-3 text-sm tracking-wide rounded-sm"
//             >
//               Read More
//             </motion.button>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             className="overflow-hidden"
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             <img
//               src={AboutImage}
//               alt="CubeSpace Interior"
//               className="w-full h-[420px] object-cover rounded-full"
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }











import { motion } from "framer-motion";
import AboutImage from "../assets/About.jpeg";

export default function About() {
  const handleReadMore = () => {
    // Opens About details page in a new tab
    window.open("/readmore", "_blank");
  };

  return (
    <section className="bg-[#faf7f4] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 sm:mb-8 text-neutral-900">
              About Us
            </h2>

            <p className="text-neutral-600 leading-relaxed mb-6 text-sm sm:text-base">
              CubeSpace Ateliers is a multidisciplinary interior design and
              architectural studio creating refined, timeless spaces. We
              merge sophisticated design with technical precision to deliver
              environments that are visually compelling and purposefully
              built.
            </p>

            <motion.button
              onClick={handleReadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="
                mt-4 
                bg-[#f28c6a] text-white 
                px-6 py-3 
                text-xs sm:text-sm 
                tracking-wide 
                rounded-sm
                hover:opacity-90
              "
            >
              Read More
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="overflow-hidden flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={AboutImage}
              alt="CubeSpace Interior"
              className="
                w-full 
                h-[300px] sm:h-[380px] md:h-[420px] 
                object-cover 
                rounded-3xl md:rounded-full
              "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
