// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section className="relative px-8 md:px-20 py-32 bg-neutral-950 text-white overflow-hidden">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-20"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//       >
//         <p className="text-sm tracking-[0.3em] text-neutral-400 mb-4">CONTACT</p>
//         <h2 className="text-4xl md:text-5xl font-light">
//           Let's Build Something <span className="font-semibold">Together</span>
//         </h2>
//       </motion.div>

//       {/* Contact Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//         {/* Contact Form */}
//         <motion.form
//           className="bg-neutral-900 p-10 rounded-xl shadow-2xl space-y-6"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div>
//             <label className="block text-sm mb-2" htmlFor="name">Name</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2" htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2" htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows="5"
//               placeholder="Your Message"
//               className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-300"
//           >
//             Send Message
//           </button>
//         </motion.form>

//         {/* Contact Info + Map */}
//         <motion.div
//           className="space-y-10"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           {/* Address */}
//           <div>
//             <h3 className="text-xl font-light mb-4">Our Office</h3>
//             <p className="text-neutral-400 leading-relaxed">
//               12th Floor Wing A & B<br />
//               Lokmat Bhavan, Lokmat Square<br />
//               Ramdaspeth, Nagpur, Maharashtra 440010
//             </p>
//           </div>

//           {/* Phone & Email */}
//           <div>
//             <h3 className="text-xl font-light mb-4">Contact</h3>
//             <p className="text-neutral-400 leading-relaxed">📞  9657777021 / 9322874814</p>
//             <p className="text-neutral-400 leading-relaxed">📩 office@cubespace.org</p>
//           </div>

//           {/* Embedded Google Map */}
//           <div className="overflow-hidden rounded-xl shadow-2xl">
//             <iframe
//               title="CubeSpace Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.433273856598!2d79.09155327426232!3d21.14450388628694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c8c8239b9b3b%3A0x6f9408961b867d!2sLokmat%20Bhavan%2C%20Ramdaspeth%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1704060000000!5m2!1sen!2sin"
//               width="100%"
//               height="300"
//               className="border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }























// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section className="relative px-6 sm:px-10 md:px-20 py-24 md:py-32 bg-neutral-800 text-white overflow-hidden">
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-16 md:mb-20"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//       >
//         <p className="text-sm sm:text-base tracking-[0.2em] text-neutral-400 mb-2 sm:mb-4">CONTACT</p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug">
//           Let's Build Something <span className="font-semibold">Together</span>
//         </h2>
//       </motion.div>

//       {/* Contact Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
//         {/* Contact Form */}
//         <motion.form
//           className="bg-neutral-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl space-y-5 sm:space-y-6"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div>
//             <label className="block text-sm sm:text-base mb-1 sm:mb-2" htmlFor="name">Name</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm sm:text-base mb-1 sm:mb-2" htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="you@example.com"
//               className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm sm:text-base mb-1 sm:mb-2" htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows="4 sm:rows-5"
//               placeholder="Your Message"
//               className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full md:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-300"
//           >
//             Send Message
//           </button>
//         </motion.form>

//         {/* Contact Info + Map */}
//         <motion.div
//           className="space-y-8 sm:space-y-10"
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           {/* Address */}
//           <div>
//             <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-4">Our Office</h3>
//             <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
//               12th Floor Wing A & B<br />
//               Lokmat Bhavan, Lokmat Square<br />
//               Ramdaspeth, Nagpur, Maharashtra 440010
//             </p>
//           </div>

//           {/* Phone & Email */}
//           <div>
//             <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-4">Contact</h3>
//             <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">📞 9657777021 / 9322874814</p>
//             <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">📩 office@cubespace.org</p>
//           </div>

//           {/* Embedded Google Map */}
//           <div className="overflow-hidden rounded-xl shadow-2xl">
//             <iframe
//               title="CubeSpace Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.433273856598!2d79.09155327426232!3d21.14450388628694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c8c8239b9b3b%3A0x6f9408961b867d!2sLokmat%20Bhavan%2C%20Ramdaspeth%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1704060000000!5m2!1sen!2sin"
//               width="100%"
//               height="250"
//               className="sm:h-300 border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

















import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const WHATSAPP_NUMBER = "919529187029"; // country code required

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello CubeSpace Ateliers,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative px-6 sm:px-10 md:px-20 py-24 md:py-32 bg-neutral-800 text-white overflow-hidden">
      
      {/* Heading */}
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-sm tracking-[0.2em] text-neutral-400 mb-4">
          CONTACT
        </p>
        <h2 className="text-4xl md:text-5xl font-light">
          Let's Build Something <span className="font-semibold">Together</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-neutral-900 p-8 md:p-10 rounded-xl shadow-2xl space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Address + Map */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Office Address */}
          <div>
            <h3 className="text-xl font-light mb-4">Our Office</h3>
            <p className="text-neutral-400 leading-relaxed">
              12th Floor, Wing A & B<br />
              Lokmat Bhavan, Lokmat Square<br />
              Ramdaspeth, Nagpur<br />
              Maharashtra – 440010
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-light mb-4">Contact</h3>
            <p className="text-neutral-400">📞 9657777021 / 9322874814</p>
            <p className="text-neutral-400">📩 office@cubespace.org</p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <iframe
              title="CubeSpace Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.433273856598!2d79.09155327426232!3d21.14450388628694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c8c8239b9b3b%3A0x6f9408961b867d!2sLokmat%20Bhavan%2C%20Ramdaspeth%2C%20Nagpur%2C%20Maharashtra%20440010!5e0!3m2!1sen!2sin!4v1704060000000"
              width="100%"
              height="260"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

