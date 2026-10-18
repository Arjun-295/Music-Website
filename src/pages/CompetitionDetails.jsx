import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CompetitionDetails = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-end overflow-hidden bg-[#241a15]">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>
          </div>
          <div className="max-w-container-max mx-auto w-full px-6 md:px-margin-desktop pb-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-tertiary-fixed font-label text-sm uppercase tracking-[0.2em] mb-4 block">Musical Mastery</span>
                <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">Classroom Series with T.M. Krishna</h1>
                <div className="h-1 w-24 bg-tertiary-fixed rounded-full"></div>
              </div>
              <div className="bg-surface/10 glass-nav border border-white/10 p-6 rounded-xl text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary-fixed">event</span>
                  <p className="font-label text-lg">June 20 &amp; 21, 2026</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary-fixed">schedule</span>
                  <p className="font-label text-lg">8:00 to 10:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface py-section-gap-mobile md:py-24">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Content */}
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none">
                  <p className="font-body text-body-lg text-cocoa-text leading-relaxed mb-8">
                    Presenting the third edition of the Classroom Series. Over the past few years, I have been sharing audio recordings from my classroom on my YouTube channel. In response to this initiative, a few people have asked for specific compositions. Some of these are complex and large compositions that require a lot more time and effort to learn.
                  </p>
                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-12">
                    Hence, every few months I have been conducting a LIVE classroom session where 1-2 such magnus-opus compositions are taught by me. This is the first session for 2026, please find the details below:
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 my-12">
                    <div className="h-px bg-[#D4B483] flex-grow"></div>
                    <div className="w-2 h-2 bg-[#D4B483] rotate-45"></div>
                    <div className="h-px bg-[#D4B483] flex-grow"></div>
                  </div>

                  <div className="space-y-12 animate-on-scroll-container">
                    <div className="animate-on-scroll">
                      <h2 className="font-display text-3xl text-primary mb-6">Session #3 Details</h2>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                          <span className="material-symbols-outlined text-primary mt-1">library_music</span>
                          <div>
                            <p className="font-label font-bold text-on-surface uppercase tracking-wide">Compositions to be Taught</p>
                            <ul className="list-disc list-inside mt-2 text-on-surface-variant space-y-1">
                              <li>devi ni pada sarasamule dikku - kambhoji - adi - shyama shastri</li>
                              <li>devi sri tulasamma - mayamalavagowla - adi - tyagaraja</li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                          <div>
                            <p className="font-label font-bold text-on-surface uppercase tracking-wide">Venue &amp; Format</p>
                            <p className="text-on-surface-variant mt-1">Chennai-based participants can attend in-person. Limited seating available. Online via Zoom for global participants.</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
                      <div className="bg-warm-cream p-8 rounded-xl border border-outline-variant/30">
                        <h3 className="font-display text-2xl text-tertiary mb-4">Eligibility</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-on-surface-variant">
                            <span className="material-symbols-outlined text-tertiary scale-75">check_circle</span>
                            Age: 13+ years
                          </li>
                          <li className="flex items-center gap-3 text-on-surface-variant">
                            <span className="material-symbols-outlined text-tertiary scale-75">check_circle</span>
                            Must have learnt at least 20 Kirtanas
                          </li>
                        </ul>
                      </div>
                      <div className="bg-secondary-container/30 p-8 rounded-xl border border-misty-sky">
                        <h3 className="font-display text-2xl text-secondary mb-4">Session Fee</h3>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-display font-bold text-on-secondary-container">2000</span>
                          <span className="text-xl font-label text-secondary">INR</span>
                        </div>
                        <p className="text-sm text-secondary mt-2">Per participant inclusive of materials</p>
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary animate-on-scroll">
                      <h3 className="font-label font-bold text-on-surface uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined">info</span> Please Note
                      </h3>
                      <ul className="space-y-4 text-sm text-on-surface-variant">
                        <li className="flex gap-3"><span className="text-primary">•</span> During registration, you will be required to log in to your email account to complete the process.</li>
                        <li className="flex gap-3"><span className="text-primary">•</span> Please note that payments made towards confirmed registrations are non-refundable.</li>
                        <li className="flex gap-3"><span className="text-primary">•</span> If you would like to avail financial assistance for this session, please indicate the same in the registration form.</li>
                        <li className="flex gap-3"><span className="text-primary">•</span> For any further queries, please contact tmkrishnaofficial@gmail.com or +91 95001 33814.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar / Action Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-[0_32px_64px_-12px_rgba(100,84,78,0.08)] border border-outline-variant/20">
                    <div className="text-center mb-8">
                      <p className="text-primary font-label text-sm font-bold uppercase tracking-widest mb-2">Registration Open</p>
                      <h4 className="font-display text-2xl text-on-surface">Secure Your Seat</h4>
                    </div>
                    <Link to="/checkout" className="w-full bg-primary text-on-primary py-4 rounded-xl font-label font-bold text-lg hover:bg-rosewood hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95 mb-6 block text-center">
                      Register Now
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-on-surface-variant text-sm">
                      <span className="material-symbols-outlined text-sm">lock</span>
                      <span>Secure Payment Gateway</span>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-sm relative group">
                    <img alt="Musical Ambience" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACPMrH4j25S4zPNvbeakp99STswK8JiAGtGBAXei2Zq4ge8YlOK7tJqGhfSY4FxqD292K_wdm36HA8L6hWeVkoANUSX9-Uza3j6URhH1iRklzwNg7pjCFZkX_Bhc1oHSoBAAe3K-zMJW9zpg6o-M1lE9rwBxe6z2KKsno57B1SLg9UaNE51tPhIx3oylGSCDEqGEgqW-06uKMa2jWXPH7XFSdxeaXb987FzhVUa_a3Jaz7mrYnKDCxG3MLGjlWA9IQKX1fHKDucAZr" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white font-display italic text-lg leading-snug">"Learning is an intimate journey of the soul through sound."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
          </div>
  );
};

export default CompetitionDetails;
