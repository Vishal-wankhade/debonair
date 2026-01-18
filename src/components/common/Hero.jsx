// import { motion } from "framer-motion";
// import heroImage from "../../assets/hero.jpg";


// export default function Hero() {
// return (
//     <section className="min-h-[calc(100vh-64px)] flex items-center">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

//             {/* Left Content */}
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col justify-center"
//             >
//                 <h1 className="text-4xl md:text-5xl font-brand leading-tight mb-4">
//                     Elevate Your Style
//                 </h1>

//                 <p className="text-gray-600 text-lg mb-6">
//                     Discover premium fashion crafted for comfort and confidence.
//                 </p>

//                 <button className="w-fit px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
//                     Shop Now
//                 </button>
//             </motion.div>

//             {/* Right Image */}
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex justify-center"
//             >
//                 <img
//                     src={heroImage}
//                     alt="Main Product"
//                     className="max-h-[420px] object-contain"
//                 />
//             </motion.div>

//         </div>
//     </section>
// );
// }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-brand text-5xl md:text-6xl leading-tight mb-6">
            Redefine <br /> Your Style
          </h1>

          <p className="font-subheading text-gray-600 max-w-md mb-8">
            Premium fashion curated for modern lifestyles. Designed with
            elegance, comfort, and confidence in mind.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/shop"
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
            >
              Shop Collection
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Explore Brand
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 w-72 h-60 bg-black/5 rounded-full blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200"
            alt="Featured fashion"
            className="relative z-10 w-full max-w-md mx-auto rounded-2xl object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
