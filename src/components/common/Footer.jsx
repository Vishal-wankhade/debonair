import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-white">
            DEBONAIR
          </h2>
          <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
            Elevated fashion for the modern generation.  
            Designed to stand out, built to last.
          </p>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Connect
          </h3>
          <div className="flex gap-4">
            <a className="p-2 rounded-full bg-neutral-800 hover:bg-white hover:text-black transition">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-neutral-800 hover:bg-white hover:text-black transition">
              <FaTwitter />
            </a>
            <a className="p-2 rounded-full bg-neutral-800 hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-5 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} Debonair. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Crafted with precision ✦ India</p>
      </div>
    </footer>
  );
}
