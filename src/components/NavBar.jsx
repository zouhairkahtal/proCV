import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, FileText, LayoutIcon, Mail, Pencil } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <LayoutIcon size={18} /> },
    { name: "Drawing Board", path: "/DrawingPage", icon: <Pencil size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <FileText size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              ProCV
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
