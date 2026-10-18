import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    discipline: 'Vocal',
    level: 'Beginner',
    mode: 'Hybrid',
    agreed: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!formData.agreed) {
      setError('Please accept the Academy Code of Conduct.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/registration-success');
    }, 600);
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen lg:h-screen lg:overflow-hidden flex flex-col justify-between">
      {/* Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 flex justify-center items-center">
        <img 
          className="w-full h-full object-cover veena-bg" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbwHEpGS-j0gdYAswmYlTfXbS4upSVcBvw7DIP1RH0iXGhp6PXdyQsTaiNM2LVrdfopCwzaozpmZirDeMw7ix7qsht2lptwvm-li0SrK6DHNEQp8jX9XdM47eBCSvjDn0a3W-aEUKnnfK1oKCB1DOf7ZtA7VJT9H2A2-EY9Q0Hvpds8jiScS85Kk94ckufw80urvbvHfqxsIg32NVmuaAZfCnWEt8pxSZ1hk7-WYBp2wjEAKCb-IYD1IJ5WmbH_ufhN7WrRYa7H0Q" 
          alt="Veena Watermark"
        />
      </div>

      <main className="flex-grow flex items-center justify-center pt-20 pb-4 px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto">
          {/* Column 1: Heading, Value Proposition & Gurukula Heritage */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/50 border border-primary/20 text-on-primary-container text-xs font-semibold tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Gurukula Admission 2026
              </div>
              <h1 className="font-display text-3xl sm:text-4xl xl:text-[42px] text-cocoa-text font-bold leading-tight tracking-tight">
                Begin Your Sacred Journey in Carnatic Melody
              </h1>
              <p className="text-on-surface-variant text-sm sm:text-base mt-3 leading-relaxed">
                Join a lineage dedicated to lyrical purity, rhythmic mastery, and spiritual resonance. Learn directly under celebrated maestros.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-outline-variant/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-cocoa-text">Master Gurus &amp; Direct Mentorship</h4>
                  <p className="text-xs text-on-surface-variant">Preserving GNB and traditional Thanjavur banis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-outline-variant/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">school</span>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-cocoa-text">Structured Curriculum &amp; Certification</h4>
                  <p className="text-xs text-on-surface-variant">From Abhyasa Ganam foundations to advanced RTP.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-outline-variant/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-lg">devices</span>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-cocoa-text">Global Hybrid Classrooms</h4>
                  <p className="text-xs text-on-surface-variant">Studio-quality Zoom sessions &amp; Chennai main campus.</p>
                </div>
              </div>
            </div>

            {/* Quote snippet */}
            <div className="hidden sm:flex items-center gap-3 pt-2 text-xs text-on-surface-variant italic border-t border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-base not-italic">format_quote</span>
              <span>"Music is not merely sound; it is an intimate prayer of the soul."</span>
            </div>
          </div>

          {/* Column 2: Compact Registration Form (Fits single viewport) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-card bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_-15px_rgba(116,86,96,0.12)] border border-outline-variant/40">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-outline-variant/20">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl text-cocoa-text font-bold">
                    Create Student Account
                  </h2>
                  <p className="text-xs text-on-surface-variant">Step into the online Vidyalaya portal</p>
                </div>
                <Link
                  to="/login"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Already enrolled? Sign In</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>

              {error && (
                <div className="mb-4 p-2.5 rounded-lg bg-error-container text-on-error-container text-xs flex items-center gap-2 animate-fadeIn">
                  <span className="material-symbols-outlined text-sm">error</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSignUp} className="space-y-3.5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-cocoa-text mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      person
                    </span>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-warm-cream/50 border border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl py-2 pl-9 pr-3 text-xs sm:text-sm outline-none transition-all placeholder:text-outline/70 text-cocoa-text"
                      placeholder="e.g. Arjun Sharma"
                      type="text"
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-cocoa-text mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                        mail
                      </span>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-warm-cream/50 border border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl py-2 pl-9 pr-3 text-xs sm:text-sm outline-none transition-all placeholder:text-outline/70 text-cocoa-text"
                        placeholder="student@example.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cocoa-text mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                        call
                      </span>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-warm-cream/50 border border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl py-2 pl-9 pr-3 text-xs sm:text-sm outline-none transition-all placeholder:text-outline/70 text-cocoa-text"
                        placeholder="+91 98765 43210"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Password & Confirm Password Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-cocoa-text mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                        lock
                      </span>
                      <input
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-warm-cream/50 border border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl py-2 pl-9 pr-8 text-xs sm:text-sm outline-none transition-all placeholder:text-outline/70 text-cocoa-text"
                        placeholder="Min 6 chars"
                        type={showPassword ? 'text' : 'password'}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cocoa-text mb-1">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                        lock_reset
                      </span>
                      <input
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full bg-warm-cream/50 border border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl py-2 pl-9 pr-3 text-xs sm:text-sm outline-none transition-all placeholder:text-outline/70 text-cocoa-text"
                        placeholder="Repeat password"
                        type={showPassword ? 'text' : 'password'}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Musical Discipline, Level & Mode - 3 column row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div>
                    <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                      Discipline
                    </label>
                    <select
                      name="discipline"
                      value={formData.discipline}
                      onChange={handleChange}
                      className="w-full bg-warm-cream/60 border border-outline-variant/60 focus:border-primary rounded-xl py-1.5 px-2.5 text-xs outline-none text-cocoa-text font-medium"
                    >
                      <option value="Vocal">Carnatic Vocal</option>
                      <option value="Veena">Saraswati Veena</option>
                      <option value="Violin">Carnatic Violin</option>
                      <option value="Mridangam">Mridangam / Tala</option>
                      <option value="Bhajans">Bhajans &amp; Stotras</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                      Skill Level
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full bg-warm-cream/60 border border-outline-variant/60 focus:border-primary rounded-xl py-1.5 px-2.5 text-xs outline-none text-cocoa-text font-medium"
                    >
                      <option value="Beginner">Beginner (Foundations)</option>
                      <option value="Intermediate">Intermediate (Varnams)</option>
                      <option value="Advanced">Advanced (Manodharma)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                      Mode
                    </label>
                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      className="w-full bg-warm-cream/60 border border-outline-variant/60 focus:border-primary rounded-xl py-1.5 px-2.5 text-xs outline-none text-cocoa-text font-medium"
                    >
                      <option value="Hybrid">Hybrid</option>
                      <option value="Online">Online Zoom</option>
                      <option value="In-Person">In-Person Chennai</option>
                    </select>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="pt-0.5">
                  <label className="flex items-start gap-2.5 cursor-pointer group">
                    <input
                      name="agreed"
                      type="checkbox"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-outline-variant text-primary focus:ring-primary/20 w-3.5 h-3.5 cursor-pointer"
                      required
                    />
                    <span className="text-[11px] text-on-surface-variant leading-tight group-hover:text-primary transition-colors">
                      I agree to the Vidyalaya's traditional discipline and{' '}
                      <a href="#" className="text-primary font-bold hover:underline">
                        Student Code of Conduct
                      </a>.
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-[#8E3B2F] hover:bg-[#A34335] text-white py-3 rounded-xl font-semibold text-xs sm:text-sm hover:shadow-lg transition-all transform active:scale-[0.98] shadow-md shadow-primary/20 flex items-center justify-center gap-2 mt-1"
                >
                  {loading ? (
                    <span>Registering Student Account...</span>
                  ) : (
                    <>
                      <span>Complete Student Registration</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Compact aesthetic footer line */}
      <footer className="py-2 text-center text-[11px] text-on-surface-variant/60 border-t border-outline-variant/20 relative z-10">
        © 2026 Mata Sangeeta Vidyalaya. All rights reserved.
      </footer>
    </div>
  );
};

export default SignUp;
