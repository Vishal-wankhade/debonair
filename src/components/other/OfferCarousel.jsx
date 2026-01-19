import { useRef } from "react";
import WJ from "../../assets/WJ.jpg";

const offers = [
  { id: 1, title: "Winter Sale", price: "Up to 50% Off", img: WJ},
  { id: 2, title: "New Arrivals", price: "Premium Wear", img: WJ },
  { id: 3, title: "Limited Offer", price: "Flat 30% Off", img: WJ },
  { id: 4, title: "Trending", price: "Best Sellers", img: WJ },
];



export default function OfferCarousel() {
  const ref = useRef(null);

  // Mouse wheel → horizontal scroll
  const handleWheel = (e) => {
    if (ref.current) {
      e.preventDefault();
      ref.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-semibold mb-6 px-6">
        Hot Offers 🔥
      </h2>

      <div
        ref={ref}
        onWheel={handleWheel}
        className="
          flex gap-6 px-6
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          p-5
          scrollbar-hide
        "
      >
        {offers.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[280px]
              h-[360px]
              snap-start
              rounded-2xl
              bg-white
              shadow-lg
              hover:scale-105
              transition-transform duration-300
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-2/3 w-full object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
