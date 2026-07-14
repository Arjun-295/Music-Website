import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/checkout');
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface">
      {/* TopNavBar */}
      
      <main className="min-h-screen pt-12 pb-24 px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Header Section */}
          
          {/* Event Summary Card */}
          <div className="bg-secondary-container/20 border border-outline-variant/30 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-56 h-40 rounded-xl overflow-hidden shadow-sm">
              <img className="w-full h-full object-cover" data-alt="A close-up of a traditional Indian Veena instrument, beautifully crafted and resting on a silk cloth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlIKm0pYCo-NK91fPhJReDZjwsEj7_JYqjWk1QuSzUX8ltLv2xyJJWRdV9ZyDvNbDjJPO_BLHXCvPwQCKQ2sAkbdkmkraLMA6mctv5w50OzvP87Gu0tMjM3Db5QPBll00pzZkXHtn5KKmyZCc9KDMgkurb2L8z2t7uwpYIYOLf1KnT9Ud-h_kUcAMjqFe_alzJGqJDfUZerCcEqqUgzoPHWjxMyYo28PllpTb1uY4VXrvwE3GnBJPQo6XUtNC4BF9413D_Oov7AhGz" />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-3xl text-cocoa-brown mb-4">Summer Music Workshop</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-on-surface-variant text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                  <span>20 July 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                  <span>10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                  <span>Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">payments</span>
                  <span className="font-semibold text-cocoa-brown">2000 INR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-warm-cream rounded-2xl p-8 md:p-12 shadow-sm border border-outline-variant/30">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Participant Details */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center text-lg font-bold">1</span>
                  <h2 className="font-headline text-2xl text-cocoa-brown">Participant Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Full Name *</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="Enter your full name" required type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Email Address *</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="name@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Mobile Number *</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="+91 98765 43210" required type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Age</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="e.g. 22" type="number" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">City</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="e.g. Hyderabad" type="text" />
                  </div>
                </div>
              </section>

              <div className="swaralaya-separator my-12">
                <div className="swaralaya-line w-32"></div>
                <span className="material-symbols-outlined text-outline-variant/60 text-lg">music_note</span>
                <div className="swaralaya-line w-32"></div>
              </div>

              {/* Music Details */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center text-lg font-bold">2</span>
                  <h2 className="font-headline text-2xl text-cocoa-brown">Music Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Category *</label>
                    <select defaultValue="" className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all appearance-none cursor-pointer outline-none" required>
                      <option disabled value="">Select Category</option>
                      <option value="vocal">Vocal</option>
                      <option value="instrumental">Instrumental</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Genre</label>
                    <select defaultValue="" className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all appearance-none cursor-pointer outline-none">
                      <option disabled value="">Select Genre</option>
                      <option value="classical">Classical</option>
                      <option value="western">Western</option>
                      <option value="contemporary">Contemporary</option>
                      <option value="folk">Folk</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Years of Experience</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="e.g. 2" type="number" />
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Song/Performance Title (for competition)</label>
                    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all outline-none" placeholder="e.g. Maha Ganapathim in Nattai" type="text" />
                  </div>
                </div>
              </section>

              <div className="swaralaya-separator my-12">
                <div className="swaralaya-line w-32"></div>
                <span className="material-symbols-outlined text-outline-variant/60 text-lg">attachment</span>
                <div className="swaralaya-line w-32"></div>
              </div>

              {/* Additional Details */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center text-lg font-bold">3</span>
                  <h2 className="font-headline text-2xl text-cocoa-brown">Additional Details</h2>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Upload Performance Video (optional)</label>
                    <div 
                      className="border-2 border-dashed border-outline-variant/40 rounded-2xl p-10 text-center hover:bg-surface-container-lowest hover:border-primary/40 transition-all group cursor-pointer"
                      onClick={handleUploadClick}
                    >
                      <span className="material-symbols-outlined text-5xl text-outline mb-4 group-hover:text-primary transition-colors">upload_file</span>
                      <p className="text-on-surface-variant mb-1 font-medium">Drag and drop or <span className="text-primary font-bold">browse</span> your video file</p>
                      <p className="text-xs text-outline">Max file size: 50MB (MP4, MOV)</p>
                      <input className="hidden" type="file" ref={fileInputRef} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-semibold text-cocoa-brown ml-1">Special Requirements / Notes</label>
                    <textarea className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 font-body form-input-focus transition-all resize-none outline-none" placeholder="Any dietary restrictions, instrument handling needs, or other requests." rows="4"></textarea>
                  </div>
                </div>
              </section>

              {/* Consent & Actions */}
              <section className="pt-10 border-t border-outline-variant/30">
                <div className="flex items-center gap-3 mb-10">
                  <input className="h-5 w-5 rounded border-outline-variant/60 text-primary focus:ring-primary/40 cursor-pointer" id="consent" required type="checkbox" />
                  <label className="text-sm text-on-surface-variant cursor-pointer" htmlFor="consent">
                    I agree to the <a className="text-primary font-semibold hover:underline underline-offset-4" href="#">Terms &amp; Conditions</a> regarding the event rules and refund policy.
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-outline uppercase tracking-widest font-bold mb-1">Registration Fee</p>
                    <p className="text-4xl font-headline font-bold text-primary">2000 <span className="text-xl font-normal text-on-surface-variant">INR</span></p>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <Link to="/" className="flex-1 sm:flex-none px-8 py-4 rounded-full font-body text-sm font-bold text-on-surface-variant hover:bg-surface-container-highest transition-colors text-center inline-block">Cancel</Link>
                    <button className="flex-1 sm:flex-none px-12 py-4 rounded-full font-body text-sm font-bold bg-primary text-on-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all" type="submit">Register Now</button>
                  </div>
                </div>
              </section>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center opacity-60">
            <div className="flex justify-center gap-6 mb-4">
              <span className="material-symbols-outlined text-outline">verified_user</span>
              <span className="material-symbols-outlined text-outline">lock</span>
              <span className="material-symbols-outlined text-outline">payments</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-outline max-w-xs mx-auto">Secure payment gateway powered by Razorpay. All transactions are encrypted.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
          </div>
  );
};

export default Registration;
