import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 bg-background text-foreground"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
        <div className={`w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
        <div className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background shadow-lg rounded-md">
          <ul className="flex flex-col p-2">
            <li>
              <a href="#discover" className="block p-2 hover:bg-gray-200">Discover</a>
            </li>
            <li>
              <a href="#search" className="block p-2 hover:bg-gray-200">Search</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;