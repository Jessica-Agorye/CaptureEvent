import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // install if not added: npm i lucide-react

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-gray-700 pb-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">CaptureEvent</h2>
            <p className="max-w-xs text-gray-400 text-sm">
              Connecting you to the best vendors for your next big event —
              photographers, decorators, planners, and more.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-10">
            <a href="#" className="hover:text-amber-400 transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left pt-6 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} CaptureEvent. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
