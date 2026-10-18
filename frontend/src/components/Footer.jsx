import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-b from-surface-container to-primary-container dark:from-surface-container-highest dark:to-primary-container w-full rounded-t-[40px] mt-section-gap border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-md text-headline-md text-on-secondary-fixed-variant mb-6 font-bold">
            Mata Sangeeta Vidyalaya
          </div>
          <p className="text-body-md text-on-secondary-fixed-variant/80 font-body mb-8">
            Nurturing the soul through the timeless traditions of Carnatic music.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-on-primary-fixed-variant/10 flex items-center justify-center text-on-primary-fixed-variant hover:bg-primary hover:text-white transition-all duration-300" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-on-primary-fixed-variant/10 flex items-center justify-center text-on-primary-fixed-variant hover:bg-primary hover:text-white transition-all duration-300" href="#">
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="font-label text-sm font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Quick Links</h5>
          <nav className="flex flex-col gap-3">
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/about">About Us</Link>
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/workshops">Workshops</Link>
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/gallery">Gallery</Link>
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/competitions">Blog</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-label text-sm font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Legal &amp; Support</h5>
          <nav className="flex flex-col gap-3">
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/">Terms of Service</Link>
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/">Privacy Policy</Link>
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/">Contact Support</Link>
            <Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300" to="/">FAQs</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h5 className="font-label text-sm font-bold uppercase tracking-widest text-on-secondary-fixed-variant">Newsletter</h5>
          <p className="text-sm text-on-secondary-fixed-variant/80 mb-4">Stay updated with our musical journey.</p>
          <div className="relative">
            <input className="w-full bg-white/50 border border-outline-variant/30 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary transition-all" placeholder="Email Address" type="email" />
            <button className="absolute right-1 top-1 bg-primary text-on-primary p-2 rounded-full hover:scale-105 transition-all">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/10 py-8 px-margin-desktop text-center">
        <p className="font-caption text-caption text-on-secondary-fixed-variant/60">
          © 2024 Mata Sangeeta Vidyalaya. All rights reserved. Designed for Carnatic Serenity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
