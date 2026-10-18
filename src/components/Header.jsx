import { Link, useLocation } from "react-router-dom";

const Header = () => {
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
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
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
              to="/register"
              className="bg-primary text-on-primary px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 font-label-md text-label-md inline-block"
            >
              Join Now
            </Link>
          </div>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
