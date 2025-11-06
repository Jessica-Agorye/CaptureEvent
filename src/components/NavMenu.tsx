import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-amber-700 tracking-wide cursor-pointer hover:opacity-80 transition">
          CaptureEvent
        </div>

        {/* Search Input (Desktop only) */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            className="pl-3 border border-amber-700 rounded-full h-[38px] w-[320px] md:w-[380px] focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
            placeholder="Find vendors..."
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-lg font-medium">
            {["About Us", "Services", "FAQ"].map((item) => (
              <li key={item} className="cursor-pointer relative group">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-700 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition">
              Sign Up
            </button>
            <button className="border border-amber-700 text-amber-700 px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition">
              Sign In
            </button>
          </div>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-amber-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-amber-50 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] py-4 px-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-lg font-medium">
          {["About Us", "Services", "FAQ"].map((item) => (
            <li
              key={item}
              className="cursor-pointer border-b border-amber-100 pb-2 hover:text-amber-800 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Search */}
        <div className="mt-4">
          <input
            type="text"
            className="w-full pl-3 border border-amber-700 rounded-full h-[38px] focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
            placeholder="Find vendors..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-5">
          <button className="bg-amber-700 text-white px-5 py-2 rounded-full hover:bg-amber-800 transition">
            Sign Up
          </button>
          <button className="border border-amber-700 text-amber-700 px-5 py-2 rounded-full hover:bg-amber-700 hover:text-white transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
