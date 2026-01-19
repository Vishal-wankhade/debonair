import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag, FiMenu, FiX , FiSearch} from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Redux cart count (safe even if cart not ready yet)
  const cartCount = useSelector((state) => state.cart?.items?.length || 0);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition ${
      isActive ? "text-black" : "text-gray-600"
    } hover:text-black`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-brand text-3xl">
          Debonair
        </Link>
        <div className="relative w-full max-w-sm">
           <FiSearch
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
    type="text"
    placeholder="Search products..."
    className="
      w-full pl-10 pr-4 py-2
      rounded-full
      border border-gray-300
      text-sm
      placeholder-gray-400
      transition-all duration-300
      focus:outline-none
      focus:border-gray-400
      focus:ring-2 focus:ring-gray/10
      hover:border-gray-400
    "
  />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-72 bg-white p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                About
              </NavLink>
              <NavLink
                to="/cart"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                Cart
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
