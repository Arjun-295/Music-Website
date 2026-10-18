import { useEffect } from 'react';

const AboutUs = () => {
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

  const faculty = [
    {
      name: 'Vidushi Kamala Aswathama',
      role: 'Principal & Senior Vocal Faculty',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A distinguished performer with over 30 years of teaching experience, renowned for her deep understanding of Manodharma.'
    },
    {
      name: 'Vidwan R. Krishnan',
      role: 'Senior Veena Faculty',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A maestro of the Mysore style of Veena, dedicated to preserving and passing on intricate techniques to the next generation.'
    },
    {
      name: 'Smt. Lakshmi Narayan',
      role: 'Violin Instructor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'An acclaimed violinist who accompanies top-tier artists and brings a wealth of concert experience to her classroom.'
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <main className="pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-warm-cream/50 z-0"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blush-pink rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-container-max mx-auto relative z-10 text-center animate-on-scroll">
            <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">Our Heritage</span>
            <h1 className="font-display text-4xl md:text-6xl text-cocoa-text mb-6">Mata Sangeeta Vidyalaya</h1>
            <p className="font-body text-body-lg text-charcoal-text max-w-2xl mx-auto leading-relaxed">
              Nurturing the soul through the timeless traditions of Carnatic music. We are dedicated to preserving, teaching, and celebrating the rich classical heritage of South India.
            </p>
          </div>
        </section>

        {/* Our Story & Mission Section */}
        <section className="py-20 px-6 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-on-scroll">
              <div className="absolute -left-4 -top-4 w-full h-full bg-surface-container-highest rounded-2xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Traditional Music Learning" 
                className="relative z-10 rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">Our Journey</h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-6">
                Established in 1995, Mata Sangeeta Vidyalaya was founded with a singular vision: to create a sanctuary where the profound art of Carnatic music could be imparted in its purest form. What began as a humble gathering of a few dedicated students has blossomed into a premier institution.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-8">
                Our approach blends the revered Gurukula system's intimacy and rigor with modern pedagogical methods. We don't just teach students how to sing or play an instrument; we guide them on an intimate journey of the soul through sound.
              </p>
              
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                <h3 className="font-display text-xl text-tertiary mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">psychology</span>
                  Our Mission
                </h3>
                <p className="text-sm text-charcoal-text">
                  To provide holistic education in Carnatic music, emphasizing both theoretical depth and performance excellence, while fostering a lifelong devotion to the arts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center opacity-40 py-10">
          <div className="swaralaya-separator-alt w-64"></div>
        </div>

        {/* Core Values Section */}
        <section className="py-20 bg-warm-cream/30">
          <div className="max-w-container-max mx-auto px-6">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Core Values</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">The guiding principles that shape our teaching methodology and institutional culture.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'self_improvement', title: 'Tradition (Sampradaya)', desc: 'Strict adherence to authentic patanthara and the timeless grammar of classical music.' },
                { icon: 'favorite', title: 'Devotion (Bhakti)', desc: 'Cultivating a deep sense of surrender and emotional connection to the art form.' },
                { icon: 'groups', title: 'Community (Satsangam)', desc: 'Building a supportive ecosystem of learners, artists, and rasikas who uplift one another.' }
              ].map((value, idx) => (
                <div key={idx} className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-sm text-center animate-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="w-16 h-16 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="font-display text-xl text-cocoa-text mb-3">{value.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-20 px-6 max-w-container-max mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Our Esteemed Gurus</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Learn from accomplished artists who bring decades of stage experience and profound knowledge to the classroom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {faculty.map((member, idx) => (
              <div key={idx} className="group animate-on-scroll" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-display text-2xl text-cocoa-text mb-1">{member.name}</h3>
                <p className="text-tertiary font-label text-sm uppercase tracking-wider font-bold mb-4">{member.role}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutUs;
