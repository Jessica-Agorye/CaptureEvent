import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional for icons, install with: npm i lucide-react

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-800">CaptureEvent</div>

        {/* Search Input (visible only on md and up) */}
        <div className="hidden md:flex">
          <input
            type="text"
            className="pl-2 border-2 border-amber-800 rounded-xl h-[35px] w-[300px] md:w-[350px] focus:outline-none"
            placeholder="Find vendors"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-lg">
            <li className="cursor-pointer hover:text-amber-800">About Us</li>
            <li className="cursor-pointer hover:text-amber-800">Services</li>
            <li className="cursor-pointer hover:text-amber-800">FAQ</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-black text-white px-5 py-1.5 rounded-lg hover:bg-gray-800">
              Sign Up
            </button>
            <button className="bg-slate-700 text-white px-5 py-1.5 rounded-lg hover:bg-slate-600">
              Sign In
            </button>
          </div>
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-50 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-3 text-lg">
            <li className="cursor-pointer hover:text-amber-800">About Us</li>
            <li className="cursor-pointer hover:text-amber-800">Services</li>
            <li className="cursor-pointer hover:text-amber-800">FAQ</li>
          </ul>

          {/* Search bar for mobile */}
          <input
            type="text"
            className="w-full pl-2 border-2 border-amber-800 rounded-xl h-[35px] focus:outline-none"
            placeholder="Find vendors"
          />

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
              Sign Up
            </button>
            <button className="bg-slate-700 text-white px-5 py-2 rounded-lg hover:bg-slate-600">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
