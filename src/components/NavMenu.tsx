import { useState } from "react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-10 ">
      <div className=" justify-between flex md:justify-around p-4">
        <div className="text-2xl font-bold">CaptureEvent</div>
        <div className="hidden md:flex  ">
          {" "}
          <input
            type="text"
            className=" pl-2 border-2 border-amber-800 rounded-xl h-[30px] w-[350px]"
            placeholder="Find vendors"
          />
        </div>
        <div className="flex">
          <ul className=" hidden text-lg md:flex gap-6">
            <li>About Us</li>
            <li>Services</li>
            <li>FAQ</li>
            <li></li>
          </ul>

          <div className="flex gap-4">
            {" "}
            <button className="bg-black text-white px-6 rounded-lg">
              Sign Up{" "}
            </button>
            <button className="bg-slate-700 text-white px-6 rounded-lg">
              Sign In
            </button>
          </div>

          {isOpen && (
            <div>
              <button onClick={toggleMenu} className="md:hidden">
                Hamburger
              </button>
            </div>
          )}
        </div>
        {/* Add hmaburger menu here */}

        {/* For Mobile View */}

        {!isOpen && (
          <div className="bg-red-300  md:hidden">
            <button onClick={toggleMenu}>Close</button>
            <p>lorem</p>
            <p>lorem</p>

            <div className="flex gap-4">
              {" "}
              <button className="bg-black text-white px-4 rounded-2xl">
                Sign Up{" "}
              </button>
              <button className="bg-slate-700 text-white px-4 rounded-2xl">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
