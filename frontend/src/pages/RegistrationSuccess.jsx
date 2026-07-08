import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const RegistrationSuccess = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.opacity = '0';
      cardRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cardRef.current.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        cardRef.current.style.opacity = '1';
        cardRef.current.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <div className="font-body text-on-surface bg-surface min-h-screen flex flex-col">
      {/* TopNavBar */}
      
      <main className="flex-grow pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Atmospheric Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-container rounded-full blur-[80px]"></div>
        </div>

        {/* Success Content Container */}
        <div className="max-w-2xl w-full text-center relative z-10">
          {/* Celebratory Visual */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Subtle Animated Pulse */}
              <div className="absolute inset-0 bg-primary-container rounded-full opacity-30 animate-ping"></div>
              <div className="relative z-10 w-24 h-24 bg-surface-container-highest rounded-full flex items-center justify-center border border-primary-container" style={{ filter: 'drop-shadow(0 0 15px rgba(239, 200, 211, 0.4))' }}>
                <span className="material-symbols-outlined text-primary text-5xl">auto_awesome</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl text-primary font-bold mb-4 tracking-tight">Registration Successful</h1>
          <p className="font-body text-body-lg text-on-surface-variant mb-12 max-w-lg mx-auto">
            Thank you for choosing Mata Sangeetha Vidhyalaya. We are honored to guide you on your musical journey.
          </p>

          {/* Confirmation Card */}
          <div ref={cardRef} className="glass-card rounded-2xl p-8 md:p-10 text-left mb-10 shadow-[0_30px_60px_-15px_rgba(116,86,96,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-outline-variant/30 pb-8 mb-8">
              <div>
                <span className="block text-label-sm uppercase tracking-widest text-outline mb-1">Registration ID</span>
                <span className="font-body text-xl font-semibold text-on-surface">MSV-2026-8821</span>
              </div>
              <div>
                <span className="block text-label-sm uppercase tracking-widest text-outline mb-1">Event Name</span>
                <span className="font-body text-xl font-semibold text-on-surface">Summer Music Workshop</span>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 flex-shrink-0">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <p className="font-body text-body-md text-on-surface-variant">
                A confirmation email with the workshop schedule and login details has been sent to your inbox. Please check your spam folder if you don't see it within 5 minutes.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-label font-semibold text-label-md tracking-wider hover:bg-on-primary-container transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-container/40 flex items-center justify-center gap-2">
              View My Dashboard
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
            </Link>
            <Link to="/" className="border border-outline-variant text-on-surface-variant px-10 py-4 rounded-2xl font-label font-semibold text-label-md tracking-wider hover:bg-surface-container transition-all flex items-center justify-center">
              Back to Home
            </Link>
          </div>

          {/* Swaralaya Separator */}
          <div className="mt-20 flex flex-col items-center gap-1 opacity-40">
            <div className="w-16 h-[1px] bg-outline"></div>
            <div className="w-24 h-[1px] bg-outline"></div>
            <div className="w-16 h-[1px] bg-outline"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-xl bg-surface-container border-t border-outline-variant/50 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-[1200px] mx-auto">
          <div className="space-y-4">
            <span className="font-display text-xl font-semibold text-primary">Mata Sangeetha Vidhyalaya</span>
            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
              Preserving the sanctity of Carnatic traditions through modern educational excellence. Join our community of lifelong learners.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Link className="font-body text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" to="/">About Us</Link>
              <Link className="font-body text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" to="/">Faculty</Link>
              <Link className="font-body text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" to="/">Gallery</Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link className="font-body text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" to="/">Privacy Policy</Link>
              <Link className="font-body text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" to="/">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">music_note</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">mail</span>
            </div>
            <p className="font-body text-label-sm text-on-surface-variant opacity-70">
              © 2024 Mata Sangeetha Vidhyalaya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationSuccess;
