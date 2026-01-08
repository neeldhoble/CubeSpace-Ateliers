import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white px-8 md:px-20 py-20">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold mb-4">CubeSpace</h2>
          <p className="text-neutral-400 leading-relaxed">
            Crafting refined architectural and interior experiences that blend
            aesthetics, functionality, and timeless elegance.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h3 className="text-xl font-light mb-6">Quick Links</h3>
          <ul className="space-y-3 text-neutral-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">About</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Services</li>
            {/* <li className="hover:text-white transition duration-300 cursor-pointer">Projects</li> */}
            <li className="hover:text-white transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-xl font-light mb-6">Contact</h3>
          <p className="text-neutral-400 mb-2">
            12th Floor Wing A & B, Lokmat Bhavan<br />
            Lokmat Square, Ramdaspeth, Nagpur, Maharashtra 440010
          </p>
          <p className="text-neutral-400 mb-2">📞 +91 12345 67890</p>
          <p className="text-neutral-400 mb-6">✉️ contact@cubespace.com</p>

          <div className="flex gap-4 mt-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white/70 hover:text-white transition duration-300"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white/70 hover:text-white transition duration-300"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white/70 hover:text-white transition duration-300"
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white/70 hover:text-white transition duration-300"
            >
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="mt-16 border-t border-white/10 pt-6 text-center text-neutral-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        &copy; {new Date().getFullYear()} CubeSpace Ateliers. All rights reserved.
      </motion.div>
    </footer>
  );
}
