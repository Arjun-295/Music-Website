import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full rounded-t-[40px] mt-section-gap bg-gradient-to-b from-surface-container to-primary-container dark:from-surface-container-highest dark:to-primary-container border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="font-headline-md text-headline-md text-on-secondary-fixed-variant">
            Mata Sangeeta <br/>Vidyalaya
          </div>
          <p className="font-body-md text-body-md text-on-secondary-fixed-variant/80">Preserving the timeless beauty of Carnatic music for future generations.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-secondary-fixed-variant">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">About Us</Link></li>
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Terms of Service</Link></li>
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Privacy Policy</Link></li>
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Contact Support</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-secondary-fixed-variant">Programs</h4>
          <ul className="space-y-2">
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Vocal Foundations</Link></li>
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Advanced Manodharma</Link></li>
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Veena Instrumental</Link></li>
            <li><Link className="text-on-secondary-fixed-variant/80 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block" to="/">Theory of Raga</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-on-secondary-fixed-variant">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"><span className="material-symbols-outlined text-2xl">share</span></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"><span className="material-symbols-outlined text-2xl">mail</span></a>
            <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"><span className="material-symbols-outlined text-2xl">location_on</span></a>
          </div>
          <p className="text-caption text-on-secondary-fixed-variant/60 mt-4">© 2024 Mata Sangeeta Vidyalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
