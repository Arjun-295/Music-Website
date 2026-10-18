import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (targetPath) => {
    const baseClass =
      "transition-all duration-300 font-label-md text-label-md ";
    if (
      path === targetPath ||
      (targetPath !== "/" && path.startsWith(targetPath))
    ) {
      return (
        baseClass + "text-primary border-b-2 border-primary pb-1 font-bold"
      );
    }
    return baseClass + "text-on-surface-variant hover:text-primary";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop py-4 md:py-6 mx-auto">
        <Link
          to="/"
          className="font-display-lg text-2xl md:text-[28px] text-on-secondary-fixed-variant tracking-tighter font-bold"
        >
          Mata Sangeeta Vidyalaya
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          <Link className={getLinkClass("/")} to="/">
            Home
          </Link>
          <Link className={getLinkClass("/about")} to="/about">
            About Us
          </Link>
          <Link className={getLinkClass("/competitions")} to="/competitions">
            Competitions
          </Link>
          <Link className={getLinkClass("/workshops")} to="/workshops">
            Workshops
          </Link>
          <Link className={getLinkClass("/gallery")} to="/gallery">
            Gallery
          </Link>
          <div className="flex items-center gap-2 ml-1 border-l border-outline-variant/30 pl-4">
            <Link className={getLinkClass("/login")} to="/login">
              Login
            </Link>
            <Link
              to="/signup"
              className="cursor-pointer bg-primary text-on-primary px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 font-label-md text-label-md inline-block font-semibold shadow-sm hover:shadow"
            >
              Join Now
            </Link>
          </div>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-b border-outline-variant/30 px-6 py-5 flex flex-col gap-4 shadow-lg animate-fadeIn">
          <Link 
            onClick={() => setMobileMenuOpen(false)} 
            className={`${getLinkClass("/")} py-1`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)} 
            className={`${getLinkClass("/about")} py-1`} 
            to="/about"
          >
            About Us
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)} 
            className={`${getLinkClass("/competitions")} py-1`} 
            to="/competitions"
          >
            Competitions
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)} 
            className={`${getLinkClass("/workshops")} py-1`} 
            to="/workshops"
          >
            Workshops
          </Link>
          <Link 
            onClick={() => setMobileMenuOpen(false)} 
            className={`${getLinkClass("/gallery")} py-1`} 
            to="/gallery"
          >
            Gallery
          </Link>
          <div className="pt-3 border-t border-outline-variant/20 flex flex-col gap-3">
            <Link 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-on-surface-variant font-semibold hover:text-primary py-1" 
              to="/login"
            >
              Login
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              to="/signup"
              className="cursor-pointer text-center bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md font-semibold shadow-sm"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
