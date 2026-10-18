import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { workshops } from '../data/workshopsData';

const Workshops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.slide-up-trigger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedFilter, selectedMode, searchQuery]);

  const featuredWorkshop = workshops[0];

  const filteredWorkshops = workshops.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'All'
        ? true
        : selectedFilter === 'Upcoming'
        ? item.status === 'Upcoming'
        : selectedFilter === 'Online'
        ? item.mode === 'Online' || item.mode === 'Hybrid'
        : item.category.toLowerCase() === selectedFilter.toLowerCase();

    const matchesMode =
      selectedMode === 'All'
        ? true
        : selectedMode === 'In-Person'
        ? item.mode === 'In-Person' || item.mode === 'Hybrid'
        : item.mode === 'Online' || item.mode === 'Hybrid';

    return matchesSearch && matchesFilter && matchesMode;
  });

  return (
    <div className="font-body text-base bg-surface text-on-surface overflow-x-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .slide-up-trigger {
            opacity: 0;
        }
      `}} />
      
      <main className="pt-24">
        {/* Hero Section - Featured Workshop */}
        <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image with Decorative Aura */}
            <div className="relative fade-in">
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-blush-pink rounded-full opacity-40 blur-2xl"></div>
              <div className="rounded-[24px] overflow-hidden shadow-2xl border border-outline-variant/30 relative group">
                <img 
                  alt={featuredWorkshop.title} 
                  className="w-full h-[420px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={featuredWorkshop.image} 
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {featuredWorkshop.mode} Workshop
                </div>
                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-xl text-on-surface shadow-md">
                  <span className="text-xs text-on-surface-variant block font-medium">Session Fee</span>
                  <span className="text-xl font-bold text-primary">{featuredWorkshop.fee} {featuredWorkshop.currency}</span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="slide-up-trigger" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-primary-container text-on-primary-container font-label text-xs font-semibold">
                  Featured Series
                </span>
                <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  Only {featuredWorkshop.seatsLeft} seats left
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-cocoa-text mb-4 leading-tight">
                {featuredWorkshop.title}
              </h1>
              <p className="font-body text-base md:text-lg text-charcoal-text mb-6 leading-relaxed">
                {featuredWorkshop.overview}
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 bg-surface-container-low/60 p-5 rounded-2xl border border-outline-variant/30">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">person</span>
                  <div>
                    <p className="font-label text-xs text-on-surface-variant font-medium">Guru</p>
                    <p className="text-cocoa-text font-semibold text-sm sm:text-base">{featuredWorkshop.instructor}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">calendar_today</span>
                  <div>
                    <p className="font-label text-xs text-on-surface-variant font-medium">Dates</p>
                    <p className="text-charcoal-text font-semibold text-sm sm:text-base">{featuredWorkshop.dates}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">schedule</span>
                  <div>
                    <p className="font-label text-xs text-on-surface-variant font-medium">Timings</p>
                    <p className="text-charcoal-text font-semibold text-sm sm:text-base">{featuredWorkshop.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                  <div>
                    <p className="font-label text-xs text-on-surface-variant font-medium">Format</p>
                    <p className="text-charcoal-text font-semibold text-sm sm:text-base">{featuredWorkshop.mode}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Link 
                  to={`/workshop-details/${featuredWorkshop.id}`} 
                  className="cursor-pointer px-7 py-3.5 bg-primary hover:bg-[#6c483d] text-on-primary rounded-xl font-label text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>View Full Details</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <Link 
                  to={`/event-register?workshop=${featuredWorkshop.id}`}
                  className="cursor-pointer px-7 py-3.5 bg-surface-container hover:bg-surface-container-high text-primary border border-primary/30 rounded-xl font-label text-sm font-semibold hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter relative z-10 mb-8">
          <div className="bg-surface-container-lowest backdrop-blur-md border border-outline-variant/40 shadow-sm rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 bg-warm-cream/60 border border-outline-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all outline-none text-cocoa-text placeholder:text-outline" 
                placeholder="Search workshops by raga, composer, instructor, or topic..." 
                type="text" 
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary p-1"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {['All', 'Upcoming', 'Vocal', 'Instrumental', 'Rhythm'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`cursor-pointer px-4 py-2 rounded-full font-label text-xs sm:text-sm font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Grid Section */}
        <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter py-12">
          <div className="flex flex-col items-center mb-12">
            {/* Mode Toggle Buttons (All / In-Person / Online) */}
            <div className="flex gap-2 mb-6 bg-surface-container-low p-1.5 rounded-full border border-outline-variant/30">
              {['All', 'In-Person', 'Online'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  className={`cursor-pointer px-5 py-1.5 rounded-full font-label text-xs font-semibold transition-all ${
                    selectedMode === mode
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-cocoa-text text-center">
              Available Classical Workshops
            </h2>
            <p className="text-on-surface-variant text-sm mt-2 text-center max-w-xl">
              Curated masterclasses and intensive training sessions conducted by eminent Carnatic gurus.
            </p>
            <div className="flex flex-col gap-1 items-center my-6 opacity-30">
              <div className="h-px bg-rosewood w-20"></div>
              <div className="h-px bg-rosewood w-10"></div>
              <div className="h-px bg-rosewood w-16"></div>
            </div>
          </div>

          {filteredWorkshops.length === 0 ? (
            <div className="text-center py-16 bg-surface-container-low/50 rounded-2xl border border-dashed border-outline-variant">
              <span className="material-symbols-outlined text-5xl text-outline-variant mb-3 block">event_busy</span>
              <h3 className="font-display text-xl text-cocoa-text font-semibold mb-2">No workshops found</h3>
              <p className="text-sm text-on-surface-variant mb-6">Try clearing your filters or searching with different keywords.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedFilter('All'); setSelectedMode('All'); }}
                className="cursor-pointer px-5 py-2.5 bg-primary text-on-primary rounded-xl font-label text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorkshops.map((workshop, idx) => (
                <div
                  key={workshop.id}
                  className="bg-warm-cream rounded-[24px] p-1.5 border border-outline-variant/40 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col slide-up-trigger"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="p-6 bg-surface-container-lowest rounded-[20px] h-full flex flex-col justify-between">
                    <div>
                      {/* Image Thumbnail with Badges */}
                      <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[16/10] shadow-inner">
                        <img 
                          alt={workshop.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          src={workshop.image} 
                        />
                        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {workshop.mode}
                        </span>
                        <span className="absolute top-3 right-3 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                          {workshop.badge}
                        </span>
                      </div>

                      {/* Workshop Header & Tags */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wider bg-primary-container/40 px-2.5 py-0.5 rounded-md">
                          {workshop.category}
                        </span>
                        <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                          {workshop.seatsLeft} seats left
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl text-cocoa-text mb-2 font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                        {workshop.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <img 
                          src={workshop.instructorImage} 
                          alt={workshop.instructor} 
                          className="w-6 h-6 rounded-full object-cover border border-outline-variant/50"
                        />
                        <p className="text-xs font-semibold text-on-surface-variant">
                          By <span className="text-cocoa-text">{workshop.instructor}</span>
                        </p>
                      </div>

                      <p className="text-charcoal-text font-body text-sm mb-6 line-clamp-3 leading-relaxed">
                        {workshop.overview}
                      </p>

                      {/* Compositions preview tags */}
                      {workshop.compositions && workshop.compositions.length > 0 && (
                        <div className="mb-6 p-3 bg-surface-container-low/50 rounded-xl border border-outline-variant/30">
                          <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px] text-primary">music_note</span>
                            Key Composition:
                          </p>
                          <p className="text-xs font-medium text-cocoa-text italic truncate">
                            "{workshop.compositions[0].title}" ({workshop.compositions[0].raga})
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Info & Action Buttons */}
                    <div className="pt-4 border-t border-outline-variant/30 mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xs text-on-surface-variant block font-medium">Date &amp; Time</span>
                          <span className="text-xs font-semibold text-cocoa-text">{workshop.dates}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-on-surface-variant block font-medium">Workshop Fee</span>
                          <span className="text-base font-bold text-primary">{workshop.fee} {workshop.currency}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          to={`/workshop-details/${workshop.id}`}
                          className="cursor-pointer w-full py-2.5 px-3 text-center rounded-xl border border-primary/40 text-primary hover:bg-primary hover:text-white font-label text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1 group/btn"
                        >
                          <span>Details</span>
                          <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                        </Link>
                        <Link 
                          to={`/event-register?workshop=${workshop.id}`}
                          className="cursor-pointer w-full py-2.5 px-3 text-center rounded-xl bg-primary hover:bg-[#6c483d] text-on-primary font-label text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
    </div>
  );
};

export default Workshops;
