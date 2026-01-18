import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../../assets/hero.jpg";

const offers = [
  { id: 1, title: "Summer Sale", off: "40% OFF", img: heroImg },
  { id: 2, title: "New Arrivals", off: "25% OFF", img: heroImg },
  { id: 3, title: "Limited Edition", off: "50% OFF", img: heroImg },
  { id: 4, title: "Best Sellers", off: "30% OFF", img: heroImg },
];

export default function OfferCarousel() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-40%"]);

  return (
    <section className="relative w-full overflow-hidden py-12 bg-gray-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h2 className="font-heading text-3xl mb-2">Exclusive Offers</h2>
        <p className="text-gray-500 font-subheading">
          Hand-picked deals just for you
        </p>
      </div>

      {/* Scroll Linked Carousel */}
      <motion.div
        style={{ x }}
        className="flex gap-6 px-6 will-change-transform"
      >
        {offers.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="min-w-[280px] md:min-w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-black text-white text-sm px-3 py-1 rounded-full">
                {item.off}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-subheading text-xl mb-2">
                {item.title}
              </h3>
              <button className="mt-2 text-sm font-medium underline hover:text-indigo-600">
                Shop Now →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
