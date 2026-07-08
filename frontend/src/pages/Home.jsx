import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    if(carouselRef.current) {
      carouselRef.current.classList.add('active');
      startX = e.pageX - carouselRef.current.offsetLeft;
      scrollLeft = carouselRef.current.scrollLeft;
    }
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e) => {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
            <main className="mt-20">
        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10 rotate-12">
              <span className="material-symbols-outlined text-[120px] text-tertiary">music_note</span>
            </div>
            <div className="rounded-[60px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(100,84,78,0.08)]">
              <img alt="Traditional Music Classroom" className="w-full h-[600px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd7cc-sm49Jw-3xJUzst_Gp_hWHLE3RIBbeX9rXbDrgixv8t3MTenTHYM7pI-eqo912ZHWe-XvK3HOmMathko0uU9aeECYR8oBqFv1ckLBHB6nkolGyGsrHC0E6oE2CzBBvER1IWwOLqt3lCMIzfvN98h1skuergD-To0i7IDY26x7ZwjLAk9wutO2fdYHwvceXk3EMOZLzm39uvI0HBf1gRUxEVghvlKX-PTpp6SG10pUx3F32pehms1IBobR_Qe0KdEZDh6hzCt-" />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-8" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background leading-tight">
              Where Tradition <br/>Meets Melody
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Immerse yourself in the sacred discipline of Carnatic music. At Mata Sangeeta Vidyalaya, we preserve centuries of heritage while nurturing the next generation of classical artists with modern pedagogical grace.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-full hover:bg-tertiary transition-colors duration-300 font-label-md text-label-md shadow-lg shadow-primary/20">
                Explore Programs
              </button>
              <button className="border-2 border-on-secondary-fixed-variant text-on-secondary-fixed-variant px-10 py-5 rounded-full hover:bg-surface-container transition-colors duration-300 font-label-md text-label-md">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        <div className="veena-string mx-margin-desktop"></div>

        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-background">Meet Our Gurus</h2>
            <div className="w-16 h-1 bg-tertiary/30 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-surface-container rounded-card p-10 flex flex-col md:flex-row gap-8 items-center hover:scale-[1.02] transition-transform duration-500 shadow-[0_32px_64px_-12px_rgba(100,84,78,0.06)] relative overflow-hidden group">
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <span className="material-symbols-outlined text-[150px] text-tertiary">spa</span>
              </div>
              <img alt="Smt. Kamala Aswathama" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiBKRgNnR3hYsYR2h2oL_dD_DPSI42tKs_VkwUxkvfw160vUfa_zKEYtnQzKnp5-eSBe6Ax0B_7WlUdv4A8x0crZpw1D9ux4NIgNKIPleq60b1vQbXyQscBFQmHGGRWUwOR1ThdYB6aLfH_4kJwlZzNluzCH3UiFyK-5eU80JFJzqPQpzcteE285Y_GpXlx6NTvUWmpnkpey0h3Mkf_9qQmsExg-V3HuZsU6Plh6WaD4OMAyHPcZAmZZj08gcWJNdCcepteFLLiG8t" />
              <div className="space-y-3">
                <h3 className="font-headline-sm text-headline-sm text-on-background">Smt. Kamala Aswathama</h3>
                <p className="text-primary font-bold font-label-md uppercase tracking-wider">Founder &amp; Vocal Specialist</p>
                <p className="text-on-surface-variant font-body-md italic">Preserving the GNB style of singing with a focus on lyrical purity and rhythmic complexity.</p>
                <div className="pt-4 flex items-center gap-2 text-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
                  <span className="font-bold">40+ Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-card p-10 flex flex-col md:flex-row gap-8 items-center hover:scale-[1.02] transition-transform duration-500 shadow-[0_32px_64px_-12px_rgba(100,84,78,0.06)] relative overflow-hidden group">
              <div className="absolute bottom-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <span className="material-symbols-outlined text-[150px] text-tertiary">spa</span>
              </div>
              <img alt="Smt. Syamala Sajanani" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeiPSQQVVmUXuNUECRmX_5_W8SYtTzREKAUNcu1hx61mzw0bZ2qrk4iMfk-IBO1VoieT5KfzccQtpn5b_kTKtrhj7tPN-EDaJfBmlSxxEtfYzcl6kYmDnsIRtQ_XJTw_L9Y9yrZ343-QD0J0VQCP8YQJTMK1BwD_eNjVCQKsIV_icmlW2I8W6JBJWGZEaRtt2H_ryhKM0NQOdT3WHTnsU9HvAj-d4LxFV6kWeQemCB5UwFBBdbeHbsp6kLQfViqbd2hOvP0xZ6bF6B" />
              <div className="space-y-3">
                <h3 className="font-headline-sm text-headline-sm text-on-background">Smt. Syamala Sajanani</h3>
                <p className="text-primary font-bold font-label-md uppercase tracking-wider">Vocal Mentor</p>
                <p className="text-on-surface-variant font-body-md italic">Specializing in pedagogical methods that make complex Ragas accessible to beginners.</p>
                <div className="pt-4 flex items-center gap-2 text-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>workspace_premium</span>
                  <span className="font-bold">25+ Years of Pedagogy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop mb-12 flex justify-between items-end">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-background">Voices of Success</h2>
              <p className="text-on-surface-variant font-body-md">Our alumni performing on global stages.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={handlePrev} className="p-3 rounded-full bg-white shadow-sm border border-outline-variant hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={handleNext} className="p-3 rounded-full bg-white shadow-sm border border-outline-variant hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div 
            ref={carouselRef} 
            className="flex gap-8 overflow-x-auto scroll-hide px-margin-desktop pb-8 cursor-grab select-none active"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            <div className="min-w-[350px] md:min-w-[450px] bg-surface rounded-card p-8 shadow-sm">
              <div className="flex gap-1 text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant font-body-lg mb-8">"The discipline taught at Mata Sangeeta Vidyalaya is unparalleled. I attribute my concert success to the solid foundation built here."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed"></div>
                <div>
                  <p className="font-bold text-on-background">Ananya Rao</p>
                  <p className="text-caption text-on-surface-variant">Concert Artist, Chennai</p>
                </div>
              </div>
            </div>
            <div className="min-w-[350px] md:min-w-[450px] bg-surface rounded-card p-8 shadow-sm">
              <div className="flex gap-1 text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant font-body-lg mb-8">"Learning virtually with Smt. Syamala was seamless. The depth of theory and practice is truly global."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed"></div>
                <div>
                  <p className="font-bold text-on-background">Vikram Iyer</p>
                  <p className="text-caption text-on-surface-variant">Music Researcher, London</p>
                </div>
              </div>
            </div>
            <div className="min-w-[350px] md:min-w-[450px] bg-surface rounded-card p-8 shadow-sm">
              <div className="flex gap-1 text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="text-on-surface-variant font-body-lg mb-8">"The Bhajans sessions are my spiritual sanctuary. It's more than music; it's a way of life."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed"></div>
                <div>
                  <p className="font-bold text-on-background">Meera Krishnan</p>
                  <p className="text-caption text-on-surface-variant">Senior Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap" id="competitions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface rounded-[48px] p-1 border border-surface-container-highest shadow-sm">
              <div className="relative h-64 rounded-[40px] overflow-hidden mb-8">
                <img alt="Competitions" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCefIQUtw9FbiyHHnAaok5rD2v01Zn6tfqkQULdbcWMGQKPS1cJ42hAvrzdanwKfI7Uj8nUrvzggWGZHqNVpfXmQq-Vn4fTZMcOhfYH7inB2j9I5rtOgPLvYVAhUbuEFIF3oZ9LcJECGANEyXWv1aij67veofc9DafEjIvhGGKOPJQiMfeDlo2q6-gglpNrF7aQpoMqd1KQa8uzphXx86XzJD4zhRo27RdygAlsmc0W0l-WNlB6lSWdEWyhyDyFBAUD7yiZCEp8PXOu" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex items-end p-8">
                  <h3 className="text-white font-headline-md">Upcoming Competitions</h3>
                </div>
              </div>
              <div className="px-8 pb-10 space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-surface-container transition-colors group">
                  <div className="bg-primary-container text-primary p-3 rounded-2xl font-bold text-center min-w-[60px]">
                    <span className="block text-xl">15</span>
                    <span className="text-xs uppercase">Oct</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background group-hover:text-primary transition-colors">Varnam Challenge 2024</h4>
                    <p className="text-caption text-on-surface-variant">Showcase your mastery of complex Adi Tala Varnams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-surface-container transition-colors group">
                  <div className="bg-primary-container text-primary p-3 rounded-2xl font-bold text-center min-w-[60px]">
                    <span className="block text-xl">02</span>
                    <span className="text-xs uppercase">Nov</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background group-hover:text-primary transition-colors">Junior Swara Kalpana</h4>
                    <p className="text-caption text-on-surface-variant">Creativity competition for young aspirants (under 12).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface rounded-[48px] p-1 border border-surface-container-highest shadow-sm" id="workshops">
              <div className="relative h-64 rounded-[40px] overflow-hidden mb-8">
                <img alt="Workshops" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD5YNc8kyYTvYqi8Pk88PV7ICxKf7YGyRPI2kPZo6ec-fqVfcN0PedGXe0Bu9my2YcLt3r1u1Ate2-xeq7ir54CUFG5I6kwkoe9ifTydRdvE7wKHLisoy1NbAJOFng0mupEwegDY5nTAqTiIA2Fzg5XiHXLgT9rU3zHKnPrKLr9TBBk3rmcs1AipMDMGKBvDmZmyAdFMfvowKEXmXSywJJnGZSXM9xjE41XW4mRANBc2pIpN3Vpa9iteB5n0HS0D5_If2B1g8IxjO3" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex items-end p-8">
                  <h3 className="text-white font-headline-md">Specialist Workshops</h3>
                </div>
              </div>
              <div className="px-8 pb-10 space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-surface-container transition-colors group">
                  <div className="bg-tertiary-container text-tertiary p-3 rounded-2xl font-bold text-center min-w-[60px]">
                    <span className="block text-xl">20</span>
                    <span className="text-xs uppercase">Oct</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background group-hover:text-tertiary transition-colors">The Art of Manodharma</h4>
                    <p className="text-caption text-on-surface-variant">Improvisational techniques by Smt. Syamala Sajanani.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-3xl hover:bg-surface-container transition-colors group">
                  <div className="bg-tertiary-container text-tertiary p-3 rounded-2xl font-bold text-center min-w-[60px]">
                    <span className="block text-xl">12</span>
                    <span className="text-xs uppercase">Nov</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-background group-hover:text-tertiary transition-colors">Laya &amp; Rhythm Patterns</h4>
                    <p className="text-caption text-on-surface-variant">Understanding complex tala cycles for vocalists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap" id="activities">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-background mb-4">Vidyalaya Life</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-outline"></div>
              <span className="material-symbols-outlined text-tertiary">celebration</span>
              <div className="h-px w-12 bg-outline"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-card overflow-hidden relative group">
              <img alt="Annual Day" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTXGxrEi5HIn6Hli5HeO5TPtR56u8kyVaZR2Nay_X9znnPtSiMQSJReFiLZkbffHoa7QQQUhNnlIAecHCEZ8ev1vveN4EHmHQvWoKcNypPhvxeDKsLKJhlgYlpq-rapGTQLn15cQWGrw3QLB7VJNkxFWvyC7haLiUmVy-Axggg9_KDtZIGWq_OBqr8I3Nfc_VU_I3GRFAmUSpEfC3DOUEbEYqt-qhZvNoE_Hd1h-8usOoshSK3f3EDArLQKMME06qLNWI532YwX2YO" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-xl">Grand Annual Day</span>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 rounded-card overflow-hidden relative group">
              <img alt="Bhajan Sessions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWjOfM0wC3u-cUwtNNErPLyI1qZagxtYnjgmFxC98Tv6Gxq0GOnUCp10SFAG0uJwc_BGHGhh_JLOJ-CaHocvtd4FpH-nMeMaJ3EII6gutMjlJOlVLVBNSAzwpSttqshGbWsmvaVbnujGlKGfvP7i28Xdzz6LhCm5y39_NmYnWROeljEnEsrPYfpZv30CqjUdYym_ZWZW8tjwks906GGrIYBDxT-yoEl1wlQUOldXAmitDyES8Pns_-2tYeTny1I1yIsGp8sTqFkvb" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg">Saturday Bhajans</span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 rounded-card overflow-hidden relative group">
              <img alt="Instrumental" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmBm9twExjW1khM-W4k9hjIjgZG05-uHDiWritb85EmLBqx_IVelZOt3NMPr6ROtaShwXmimtdmVEqH1ysyoi_1hIBe-F60ck4A2OeLZEOf2_NGVP3_6ItwyFg0rAn0RNkOu5uGXUcgpc8XWXEIR8TYwvyHHJwjzvilK3ImzG01ycJmMg16piK-0DPZGgQlX3sdQXYHU7utuX-BOU2rsoYHE00R4Br3f0sVKY41xBYbrtqoto5OQ1Z9DQdAk9TZ5o0vi7Ekxp3TflJ" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">Veena Classes</span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 rounded-card overflow-hidden relative group">
              <img alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzfxRSJ58lYEPEupUULsByuq6ZJQGI6EB8_ocFqQW_pgQdtLPvzD0UpNSuRtUXBg9fxmk5RMUkixivToKve925lBcp4wKIg0hb3fjCJrToMtwg7a5TZOlG12qajyAcs5sGXRzjPWNHze0GvwOO4ZTRgNwSHUXkslCZnw9UN-7t0IoGKZyluY-S2MBhwXEC5-Yj_0JNrMABiPaZxX0jQ-gG9NVrO28l5LfuB5NRkj7i06nLujQK6c24p-b-jrQfMf8TXQ5-mUKAmOjY" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">Student Community</span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-margin-desktop py-section-gap">
          <div className="bg-primary-container rounded-[60px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 kolam-divider"></div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-primary-container relative z-10">Start Your Musical Journey Today</h2>
            <p className="font-body-lg text-on-primary-container/80 max-w-2xl mx-auto relative z-10">
              Enroll in our upcoming session and receive a personalized curriculum designed by our master gurus.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
              <input className="w-full md:w-96 px-8 py-5 rounded-full bg-surface border-none focus:ring-2 focus:ring-primary shadow-sm text-on-surface" placeholder="Your Email Address" type="email" />
              <button className="bg-on-secondary-fixed-variant text-white px-12 py-5 rounded-full hover:scale-105 active:scale-95 transition-all font-bold">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
