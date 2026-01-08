// // import { useRef } from "react";
// // import { NavLink } from "react-router-dom";

// // export default function Navbar() {
// //   const navRef = useRef(null);

// //   return (
// //     <nav
// //       ref={navRef}
// //       className="fixed top-0 left-0 w-full z-50 px-10 py-4 text-black"
// //     >
// //       <div className="flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3">

// //         {/* Logo */}
// //         <NavLink
// //           to="/"
// //           className=" text-lg tracking-widest font-bold text-[25px]"
// //         >
// //           CubeSpace Ateliers
// //         </NavLink>

// //         <div className="flex gap-5 items-center">
// //           {/* Nav Links */}
// //           <ul className="hidden md:flex gap-10 text-md tracking-wider font-bold text-black">
// //             {[
// //               { name: "Home", path: "/" },
// //               { name: "About", path: "/About" },
// //               { name: "Projects", path: "/project" },
// //               { name: "Portfolio", path: "/portfolio" },
// //             ].map((item) => (
// //               <li key={item.name}>
// //                 <NavLink
// //                   to={item.path}
// //                   className={({ isActive }) =>
// //                     `relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:bg-white after:transition-all after:duration-300
// //                     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
// //                   }
// //                 >
// //                   {item.name}
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* CTA */}
// //           <NavLink
// //             to="/contact"
// //             className="hidden md:block font-bold text-md tracking-widest px-6 py-2 border border-white/60 rounded-full hover:bg-white hover:text-black transition duration-300"
// //           >
// //             GET IN TOUCH
// //           </NavLink>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }










// import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.jpeg"; // correct path

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white">
//       <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

//         {/* LEFT — LOGO */}
//         <NavLink to="/" className="flex items-center gap-3">
          
//           {/* LOGO IMAGE */}
//           <img
//             src={logo}
//             alt="CubeSpace Logo"
//             className="w-30 h-10 object-contain"
//           />

//           {/* BRAND TEXT */}
//           <div className="leading-tight">
//             <p className="font-bold tracking-wide text-lg">CUBESPACE</p>
//             <p className="text-sm tracking-wide text-neutral-600">
//               Ateliers
//             </p>
//           </div>
//         </NavLink>

//         {/* CENTER — NAV LINKS */}
//         <ul className="hidden md:flex gap-10 text-sm tracking-wide text-neutral-800">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About", path: "/about" },
//             { name: "Services", path: "/services" },
//             { name: "Portfolio", path: "/portfolio" },
//             { name: "Contact", path: "/contact" },
//           ].map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `relative pb-1 transition
//                    after:absolute after:left-0 after:bottom-0
//                    after:h-[1px] after:bg-neutral-800
//                    after:transition-all after:duration-300
//                    ${
//                      isActive
//                        ? "after:w-full"
//                        : "after:w-0 hover:after:w-full"
//                    }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* RIGHT — PHONE */}
//         <a
//           href="tel:+919657777021"
//           className="hidden md:flex items-center gap-2 text-sm tracking-wide text-neutral-800 hover:opacity-70 transition"
//         >
//           {/* +91 9657777021 */}
//           GET IN TOUCH
//           <span className="text-lg">›</span>
//         </a>
//       </div>
//     </nav>
//   );
// }









import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="CubeSpace Logo"
            className="h-10 w-auto object-contain"
          />
          {/* BRAND TEXT */}
           <div className="leading-tight">
             <p className="font-bold tracking-wide text-lg">CUBESPACE</p>
             <p className="text-sm tracking-wide text-neutral-600">
               Ateliers
             </p>
          </div>
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wide text-neutral-800">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-1 transition
                   after:absolute after:left-0 after:bottom-0
                   after:h-[1px] after:bg-neutral-800
                   after:transition-all after:duration-300
                   ${
                     isActive
                       ? "after:w-full"
                       : "after:w-0 hover:after:w-full"
                   }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <a
          href="/contact"
          className="hidden md:flex items-center gap-2 text-sm tracking-wide text-neutral-800 hover:opacity-70 transition"
        >
          GET IN TOUCH
          <span className="text-lg">›</span>
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <ul className="flex flex-col px-6 py-6 gap-6 text-sm tracking-wide text-neutral-800">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* MOBILE CTA */}
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
            >
              GET IN TOUCH
              <span className="text-lg">›</span>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
