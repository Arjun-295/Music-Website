import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SwaralayaCompetitions = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible';
          if (entry.target.classList.contains('slide-up-trigger')) {
            entry.target.classList.add('slide-up');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.slide-up-trigger').forEach(el => {
      el.style.visibility = 'hidden';
      observer.observe(el);
    });

    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50 && nav) {
        nav.classList.add('py-2', 'shadow-md');
        nav.classList.remove('py-4', 'shadow-sm');
      } else if (nav) {
        nav.classList.add('py-4', 'shadow-sm');
        nav.classList.remove('py-2', 'shadow-md');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-body text-base bg-surface text-on-surface overflow-x-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .slide-up {
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
      
      {/* TopNavBar */}
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative fade-in">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blush-pink rounded-full opacity-30 blur-2xl"></div>
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-outline-variant/30">
                <img alt="Young musicians performing" className="w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQxg0qtwPQkOA1g2vTSVN_SdjZhRvF7_IglGFJ554aaJfNAI_Fba4JcQ6hHFhinU1O3lL-rzzzI1fu9aiAgVdOhOd6pc5zMdgBci4mH4GTuQ15i0jgyW_N_whoWSaU1jqjt1plTu12T16hkNpApCgmWQ2Weyh0-ESCect7VCCYNLl2zYj6W8VvjBpuZhPfRFqKxCA-WhYJK4w4Uf1hFqMwh8LWkzdo8MJyQY5x7p1urZufQr7yI15Pcfo6uAXxr9H7GFR0vOxs8QI" />
              </div>
            </div>
            {/* Right: Content */}
            <div className="slide-up-trigger" style={{ animationDelay: '0s' }}>
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-label text-xs mb-6">Featured Competition</span>
              <h1 className="font-display text-4xl md:text-6xl text-cocoa-text mb-6">Young Carnatic Maestro Competition 2026</h1>
              <p className="font-body text-lg text-charcoal-text mb-8">An inspiring platform for aspiring musicians to showcase their knowledge of Carnatic music, rhythmic precision, and raga improvisation before a panel of legendary masters.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">calendar_today</span>
                  <div>
                    <p className="font-label text-sm text-cocoa-text font-bold">Date</p>
                    <p className="text-charcoal-text">Aug 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="font-label text-sm text-cocoa-text font-bold">Venue</p>
                    <p className="text-charcoal-text">Swaralaya Sabha Hall</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 col-span-2">
                  <span className="material-symbols-outlined text-primary">category</span>
                  <div>
                    <p className="font-label text-sm text-cocoa-text font-bold">Categories</p>
                    <p className="text-charcoal-text">Vocal, Veena, Violin, Mridangam</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/event-register" className="px-8 py-4 bg-primary text-on-primary rounded-[20px] font-label text-sm hover:shadow-lg transition-all duration-300 inline-block">Enroll Now</Link>
                <Link to="/competition-details" className="px-8 py-4 border border-outline text-primary rounded-[20px] font-label text-sm hover:bg-surface-container-low transition-all duration-300 inline-block">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Floating Section */}
        <section className="max-w-container-max mx-auto px-gutter -mt-12 relative z-10">
          <div className="bg-surface-container-lowest backdrop-blur-md border border-white/40 shadow-sm rounded-[20px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-12 pr-4 py-4 bg-warm-cream/50 border-none border-b border-rosewood/20 focus:border-b-2 focus:border-primary focus:ring-0 rounded-t-lg transition-all outline-none text-cocoa-text placeholder:text-outline-variant" placeholder="Search competitions, instruments, categories..." type="text" />
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-5 py-2 rounded-full bg-blush-pink text-primary font-label text-sm font-medium">All</button>
              <button className="px-5 py-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant font-label text-sm">Live</button>
              <button className="px-5 py-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant font-label text-sm">Upcoming</button>
              <button className="px-5 py-2 rounded-full hover:bg-surface-container-high transition-colors text-on-surface-variant font-label text-sm">Closed</button>
            </div>
          </div>
        </section>

        {/* Competition Grid Section */}
        <section className="max-w-container-max mx-auto px-gutter py-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-display text-4xl text-cocoa-text text-center">Upcoming Competitions</h2>
            <div className="flex flex-col gap-1 items-center my-10 opacity-30">
              <div className="h-px bg-rosewood w-20"></div>
              <div className="h-px bg-rosewood w-10"></div>
              <div className="h-px bg-rosewood w-16"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-warm-cream rounded-[20px] p-1 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-500 group slide-up-trigger" style={{ animationDelay: '0.1s' }}>
              <div className="p-6 bg-surface-container-lowest rounded-[19px] h-full flex flex-col">
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3]">
                  <img alt="Singer performing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCiPRW-5ciKbx6JWrpRxnIOGuXzOOIcJ7fY403nIQ7DuRSZfMR-Jx8X0cv5tnn3U9SbAgGIyrgwbN-EC9rseF5MYEJDhBNNZxIn2WGLMD2Gq-RVLNJQV4hwEz7R_z-BrnMHUG0vEsNKMGNI_G_8jxCASHOwY16Ry11Hg9k0E_kK6ujfdoai1Zgch6hpdtVRnvQhNHaP7AV7RFmyikqFJuJnUddsILdB258tgn3ZkFh_LKRS3FGfvy1NfhOg0J4Eyv8vx8b4tv14Yjc" />
                  <span className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Live</span>
                </div>
                <h3 className="font-display text-2xl text-cocoa-text mb-3">Carnatic Vocal Excellence Contest</h3>
                <p className="text-charcoal-text font-body text-sm mb-6 flex-grow">A senior-level competition focusing on 'Manodharma' and complex 'Ragam-Tanam-Pallavi' renditions.</p>
                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-primary font-bold text-sm">June 20 - 22</span>
                  <Link to="/competition-details" className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-warm-cream rounded-[20px] p-1 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-500 group slide-up-trigger" style={{ animationDelay: '0.2s' }}>
              <div className="p-6 bg-surface-container-lowest rounded-[19px] h-full flex flex-col">
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3]">
                  <img alt="Veena details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALxXFc7ZGovZ14J7qwOwA8LyCRozM3car2CiKCIiKzu9_r-qVZvnLTGICgU0lq37TB2CkSFaupEMUF1Jgm7eP39-XUVfEfAwjlTO2Gm6F3nD_Jry20zIJUzjYQgdaAmCVJOCJtkiw7IVOiq9pp3SIXAx0lKtLIt-KTJl6KnZbkMWPg_THzYwWDkGyQK3gpIeEGEaj0sUJAeLevs9y7Cw6kVLWKRdUt9GjbsLM7tElEy03TslC_RobDXL_xzd0AL1qGx5ehMn_CdRfV" />
                  <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Upcoming</span>
                </div>
                <h3 className="font-display text-2xl text-cocoa-text mb-3">Veena Recital Competition</h3>
                <p className="text-charcoal-text font-body text-sm mb-6 flex-grow">Celebrating the celestial sound of the Veena. Open to students from all over India in three age groups.</p>
                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-primary font-bold text-sm">Sept 10</span>
                  <Link to="/competition-details" className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-warm-cream rounded-[20px] p-1 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-500 group slide-up-trigger" style={{ animationDelay: '0.3s' }}>
              <div className="p-6 bg-surface-container-lowest rounded-[19px] h-full flex flex-col opacity-80">
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3] grayscale">
                  <img alt="Violin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9yXhKD76Iey8wIXuZ8-8h02GYeGYbflP-SrOvSXjmZS07zFrclTIVAvuB3E2MX7QJUCRP4Kp6mfkO9xzi-4EQDJ8reEQOGx3iZJGRWqXfIFjLi_fiWnUcnGbvxuRkVeM46XS16-06rSG9OwyTuQHX7cUS845mr_E714hZdtrZZu2CSmktWMpn1_2nFQbNeZ_pNTbas4Dj36IzkPISWgqCJ7RJO_2ro-pmIooz19Cxb28_V5vyWKwLEjAQZJkH223t0REX6pEQaPDq" />
                  <span className="absolute top-4 right-4 bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Closed</span>
                </div>
                <h3 className="font-display text-2xl text-cocoa-text mb-3">Junior Violin Festival</h3>
                <p className="text-charcoal-text font-body text-sm mb-6 flex-grow">A platform for young violinists to display their dexterity and understanding of Carnatic gamakas.</p>
                <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="text-outline font-bold text-sm">Completed</span>
                  <button className="text-outline font-bold text-sm flex items-center gap-1 cursor-not-allowed">
                    Results <span className="material-symbols-outlined text-sm">lock</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aesthetic Separator */}
        <div className="flex justify-center py-12 opacity-40">
          <svg fill="none" height="40" viewBox="0 0 200 40" width="200" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 0C104 10 115 15 125 15C135 15 146 10 150 0M50 0C54 10 65 15 75 15C85 15 96 10 100 0" stroke="#745660" strokeWidth="1"></path>
            <circle cx="100" cy="25" fill="#745660" r="3"></circle>
            <path d="M0 25H90M110 25H200" stroke="#745660" strokeDasharray="4 4" strokeWidth="0.5"></path>
          </svg>
        </div>
      </main>

      {/* Footer */}
          </div>
  );
};

export default SwaralayaCompetitions;
