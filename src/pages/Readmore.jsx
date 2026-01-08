import { motion } from "framer-motion";
import heroImg from "../assets/interior.avif";
import { useNavigate } from "react-router-dom";

export default function ServiceDetails() {
    const navigate = useNavigate();
  return (
    <section className="bg-white overflow-hidden">
      
      {/* HERO */}
      <div className="relative h-[60vh] md:h-[75vh]">
        <motion.img
          src={heroImg}
          alt="Service Detail"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-end px-6 md:px-20 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-white max-w-3xl"
          >
            Interior Design
          </motion.h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid md:grid-cols-3 gap-16">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            Designing Spaces That Reflect You
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6">
            At CubeSpace Ateliers, our interior design approach balances
            aesthetics, functionality, and comfort. Every space is curated
            to reflect the personality of its occupants while maintaining
            timeless elegance.
          </p>

          <p className="text-neutral-600 leading-relaxed mb-6">
            From material selection to spatial planning, we focus on creating
            environments that feel intuitive, warm, and refined. Our designs
            are rooted in context, lifestyle, and purpose.
          </p>

          <p className="text-neutral-600 leading-relaxed">
            Whether it’s residential, commercial, or hospitality interiors,
            we deliver solutions that stand the test of time.
          </p>
        </motion.div>

        {/* RIGHT INFO PANEL */}
        <motion.div
          className="bg-neutral-100 p-8 rounded-2xl h-fit"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-lg font-medium mb-6">Service Highlights</h3>

          <ul className="space-y-4 text-sm text-neutral-600">
            <li>• Space Planning & Layout</li>
            <li>• Material & Finish Selection</li>
            <li>• Lighting Design</li>
            <li>• Furniture & Styling</li>
            <li>• Custom Design Solutions</li>
          </ul>

          <button
      onClick={() => navigate("/contact")}
      className="
        mt-8 w-full
        bg-[#f28c6a] text-white
        py-3 text-sm tracking-wide
        rounded-sm
        hover:opacity-90 transition
      "
    >
      Enquire Now
    </button>
        </motion.div>

      </div>
    </section>
  );
}
