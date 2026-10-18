import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { workshops, getWorkshopById } from '../data/workshopsData';

const WorkshopDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const workshopId = id || searchParams.get('id') || 'tm-krishna-classroom';
  const workshop = getWorkshopById(workshopId);

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
  }, [workshopId]);

  const relatedWorkshops = workshops.filter((w) => w.id !== workshop.id).slice(0, 3);

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[460px] flex items-end overflow-hidden bg-[#241a15]">
          <div className="absolute inset-0 z-0">
            <img 
              src={workshop.image} 
              alt={workshop.title} 
              className="w-full h-full object-cover opacity-25 filter blur-sm scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1410] via-[#241a15]/80 to-[#241a15]/90"></div>
          </div>
          
          <div className="max-w-container-max mx-auto w-full px-4 sm:px-6 md:px-margin-desktop py-12 md:pb-16 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link to="/workshops" className="hover:text-white transition-colors">Workshops</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white font-medium truncate max-w-xs">{workshop.title}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {workshop.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                    {workshop.mode} Mode
                  </span>
                  <span className="bg-amber-400/90 text-amber-950 text-xs font-bold px-3 py-1 rounded-full">
                    {workshop.badge}
                  </span>
                </div>
                
                <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white leading-tight mb-4">
                  {workshop.title}
                </h1>
                
                <p className="font-body text-white/90 text-base sm:text-xl font-light mb-6">
                  {workshop.subtitle}
                </p>

                {/* Guru quick tag */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-white">
                  <img 
                    src={workshop.instructorImage} 
                    alt={workshop.instructor} 
                    className="w-8 h-8 rounded-full object-cover border border-white/50" 
                  />
                  <div>
                    <span className="text-xs text-white/70 block leading-tight">Master Instructor</span>
                    <span className="font-semibold text-sm">{workshop.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white min-w-[280px]">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/15">
                  <span className="material-symbols-outlined text-tertiary-fixed text-2xl">event</span>
                  <div>
                    <p className="text-xs text-white/70">Dates</p>
                    <p className="font-label font-bold text-base">{workshop.dates}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/15">
                  <span className="material-symbols-outlined text-tertiary-fixed text-2xl">schedule</span>
                  <div>
                    <p className="text-xs text-white/70">Timings &amp; Duration</p>
                    <p className="font-label font-bold text-base">{workshop.time}</p>
                    <p className="text-xs text-white/80">{workshop.duration}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-white/80 font-medium">Fee:</span>
                  <span className="text-2xl font-display font-bold text-white">{workshop.fee} {workshop.currency}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface py-12 md:py-20">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Content (8 Cols) */}
              <div className="lg:col-span-8 space-y-12">
                {/* 1. Overview */}
                <div className="animate-on-scroll">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">auto_stories</span>
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">About This Workshop</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-cocoa-text mb-4 font-bold">
                    Overview &amp; Artistic Vision
                  </h2>
                  <p className="font-body text-base sm:text-lg text-cocoa-text leading-relaxed">
                    {workshop.overview}
                  </p>
                </div>

                {/* Aesthetic divider */}
                <div className="flex items-center justify-center gap-3 my-8">
                  <div className="h-px bg-outline-variant/40 flex-grow"></div>
                  <span className="material-symbols-outlined text-primary text-sm">music_note</span>
                  <div className="h-px bg-outline-variant/40 flex-grow"></div>
                </div>

                {/* 2. Compositions to be Taught */}
                <div className="animate-on-scroll">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">library_music</span>
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Repertoire</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-cocoa-text mb-6 font-bold">
                    Compositions Covered
                  </h2>
                  <div className="space-y-4">
                    {workshop.compositions.map((comp, i) => (
                      <div 
                        key={i} 
                        className="bg-warm-cream/70 rounded-2xl p-6 border border-outline-variant/40 shadow-sm hover:border-primary/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="font-display text-xl font-bold text-cocoa-text capitalize">
                            "{comp.title}"
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs font-semibold px-2.5 py-1 bg-surface-container text-primary rounded-md">
                              Raga: {comp.raga}
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-1 bg-secondary-container text-on-secondary-container rounded-md">
                              Tala: {comp.tala}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                          Composer: <span className="text-cocoa-text font-semibold">{comp.composer}</span>
                        </p>
                        <p className="text-sm text-charcoal-text font-body leading-relaxed bg-white/70 p-3.5 rounded-xl border border-outline-variant/20">
                          <span className="font-semibold text-primary">Mastery Focus:</span> {comp.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Curriculum & Learning Takeaways */}
                <div className="animate-on-scroll">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">checklist</span>
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Curriculum</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-cocoa-text mb-6 font-bold">
                    What You Will Learn
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {workshop.curriculum.map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/30">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5 font-bold">check_circle</span>
                        <p className="text-sm sm:text-base text-cocoa-text font-medium leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Eligibility & Prerequisites */}
                <div className="animate-on-scroll bg-surface-container-low rounded-2xl p-6 sm:p-8 border border-outline-variant/40">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined">school</span>
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-cocoa-text font-bold">Eligibility &amp; Prerequisites</h3>
                      <p className="text-xs text-on-surface-variant">Recommended skill level for participants</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {workshop.eligibility.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-charcoal-text">
                        <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">verified</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Schedule & Itinerary */}
                <div className="animate-on-scroll">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-xl">event_note</span>
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Agenda</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-cocoa-text mb-6 font-bold">
                    Detailed Workshop Schedule
                  </h2>
                  <div className="space-y-4">
                    {workshop.schedule.map((slot, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-4 p-5 bg-warm-cream rounded-2xl border border-outline-variant/30">
                        <div className="min-w-[160px]">
                          <span className="font-label text-xs font-bold text-primary uppercase block">{slot.day}</span>
                          <span className="text-xs text-on-surface-variant">{slot.time}</span>
                        </div>
                        <div className="sm:border-l sm:border-outline-variant/40 sm:pl-4 flex-1">
                          <p className="text-sm sm:text-base text-cocoa-text font-medium leading-relaxed">{slot.topics}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Meet the Instructor Profile */}
                <div className="animate-on-scroll bg-gradient-to-br from-surface-container-low to-warm-cream rounded-2xl p-6 sm:p-8 border border-outline-variant/40 shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <img 
                      src={workshop.instructorImage} 
                      alt={workshop.instructor} 
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-md flex-shrink-0" 
                    />
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">Meet The Guru</span>
                      <h3 className="font-display text-2xl text-cocoa-text font-bold mb-1">{workshop.instructor}</h3>
                      <p className="text-sm font-semibold text-tertiary mb-3">{workshop.instructorRole}</p>
                      <p className="font-body text-sm sm:text-base text-charcoal-text leading-relaxed">
                        {workshop.instructorBio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7. Deliverables & Important Policies */}
                <div className="animate-on-scroll bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-sm">
                  <h3 className="font-display text-xl text-cocoa-text font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">redeem</span>
                    Workshop Inclusions &amp; Policies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {workshop.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-cocoa-text">
                        <span className="material-symbols-outlined text-emerald-600 text-base">check_box</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-outline-variant/20 pt-4 text-xs text-on-surface-variant space-y-1.5">
                    <p>• Payments are strictly non-refundable once confirmed.</p>
                    <p>• Online participants will receive HD Zoom link and notation PDF via email 24 hours prior to the session.</p>
                    <p>• For inquiries, reach out at <a href={`mailto:${workshop.contactEmail}`} className="text-primary font-semibold underline">{workshop.contactEmail}</a> or call {workshop.contactPhone}.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Action Card (4 Cols) */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_-10px_rgba(100,84,78,0.12)] border border-outline-variant/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        Enrollment Active
                      </span>
                      <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full">
                        {workshop.seatsLeft} of {workshop.seatsTotal} seats remaining
                      </span>
                    </div>

                    <div className="mb-6">
                      <span className="text-xs text-on-surface-variant block font-medium">Session Fee</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-display font-bold text-cocoa-text">{workshop.fee}</span>
                        <span className="text-lg font-bold text-primary">{workshop.currency}</span>
                        <span className="text-xs text-on-surface-variant ml-auto">Inclusive of all taxes</span>
                      </div>
                    </div>

                    {/* Progress bar for seats */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000" 
                          style={{ width: `${Math.round(((workshop.seatsTotal - workshop.seatsLeft) / workshop.seatsTotal) * 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-[11px] text-right text-on-surface-variant mt-1.5 font-medium">
                        {Math.round(((workshop.seatsTotal - workshop.seatsLeft) / workshop.seatsTotal) * 100)}% seats filled
                      </p>
                    </div>

                    {/* Key Attributes summary */}
                    <div className="space-y-3 mb-8 text-xs sm:text-sm text-on-surface-variant border-y border-outline-variant/20 py-4">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium">
                          <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                          Date:
                        </span>
                        <span className="font-semibold text-cocoa-text">{workshop.dates}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium">
                          <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                          Time:
                        </span>
                        <span className="font-semibold text-cocoa-text">{workshop.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium">
                          <span className="material-symbols-outlined text-sm text-primary">devices</span>
                          Format:
                        </span>
                        <span className="font-semibold text-cocoa-text">{workshop.mode}</span>
                      </div>
                    </div>

                    {/* Register Now CTA Button */}
                    <Link 
                      to={`/register?workshop=${workshop.id}`} 
                      className="cursor-pointer w-full bg-[#8E3B2F] hover:bg-[#A34335] text-white py-4 rounded-xl font-label font-bold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 block text-center shadow-md mb-4"
                    >
                      Register for Workshop
                    </Link>

                    <div className="flex items-center justify-center gap-2 text-on-surface-variant text-xs">
                      <span className="material-symbols-outlined text-sm text-emerald-600">lock</span>
                      <span>256-Bit Encrypted Secure Checkout</span>
                    </div>
                  </div>

                  {/* Venue / Location Details Card */}
                  <div className="bg-warm-cream/80 p-5 rounded-2xl border border-outline-variant/30 text-xs sm:text-sm">
                    <p className="font-bold text-cocoa-text mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                      Venue / Access Details
                    </p>
                    <p className="text-on-surface-variant leading-relaxed">
                      {workshop.venue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Related Workshops */}
            {relatedWorkshops.length > 0 && (
              <div className="mt-20 pt-12 border-t border-outline-variant/30">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">More Sessions</span>
                    <h2 className="font-display text-2xl sm:text-3xl text-cocoa-text font-bold">Other Upcoming Workshops</h2>
                  </div>
                  <Link 
                    to="/workshops" 
                    className="cursor-pointer text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>View All Workshops</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedWorkshops.map((other) => (
                    <Link
                      key={other.id}
                      to={`/workshop-details/${other.id}`}
                      className="cursor-pointer bg-white rounded-2xl p-5 border border-outline-variant/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group block"
                    >
                      <div>
                        <div className="relative mb-4 rounded-xl overflow-hidden aspect-[16/10]">
                          <img 
                            src={other.image} 
                            alt={other.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                          <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {other.mode}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">{other.category}</span>
                        <h4 className="font-display text-lg font-bold text-cocoa-text mb-1 group-hover:text-primary transition-colors line-clamp-1">
                          {other.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mb-2">By {other.instructor}</p>
                        <p className="text-xs text-charcoal-text line-clamp-2">{other.overview}</p>
                      </div>

                      <div className="pt-4 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
                        <span className="text-xs font-semibold text-cocoa-text">{other.dates}</span>
                        <span className="text-sm font-bold text-primary">{other.fee} {other.currency}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkshopDetails;
