import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SecureCheckout = () => {
  const [activeTab, setActiveTab] = useState('cards');
  const navigate = useNavigate();

  const handlePay = (e) => {
    e.preventDefault();
    // Simulate payment process
    setTimeout(() => {
      navigate('/registration-success');
    }, 1000);
  };

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen relative">
      <style dangerouslySetInnerHTML={{__html: `
        .elegant-input {
            border: none;
            border-bottom: 1px solid #7A5C58;
            background: transparent;
            border-radius: 0;
            padding: 12px 0;
            transition: all 0.3s ease;
        }
        .elegant-input:focus {
            outline: none;
            border-bottom: 2px solid #745660;
            background: rgba(247, 214, 208, 0.1);
            box-shadow: none;
        }
      `}} />
      {/* Background Atmospheric Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-misty-sky/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        {/* Veena Strings inspired margin decoration */}
        <div className="absolute left-10 top-0 bottom-0 flex gap-2 opacity-5">
          <div className="w-px h-full bg-rosewood"></div>
          <div className="w-px h-full bg-rosewood"></div>
          <div className="w-px h-full bg-rosewood"></div>
        </div>
      </div>

      
      <main className="pt-24 pb-12 flex items-center justify-center min-h-screen px-4 md:px-6 relative z-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 bg-white/70 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_30px_60px_-12px_rgba(122,92,88,0.08)] border border-outline-variant/30">
          {/* Left Side: Order Summary */}
          <section className="lg:col-span-5 p-8 md:p-12 bg-warm-cream border-r border-outline-variant/30">
            <div className="mb-12">
              <h2 className="font-headline text-headline-md text-cocoa-text mb-2">Summer Music Workshop</h2>
              <p className="text-on-surface-variant italic">Mata Sangeetha Vidhyalaya</p>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-cocoa-text">Registration Fee</p>
                  <p className="text-label-sm text-on-surface-variant">Includes 4-week intensive training, course materials, and certification.</p>
                </div>
                <span className="font-semibold text-cocoa-text">₹ 2,000</span>
              </div>
              <div className="flex items-center justify-center gap-3 my-6">
                <div className="h-px bg-outline w-1/4"></div>
                <span className="material-symbols-outlined text-outline text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span>
                <div className="h-px bg-outline w-full"></div>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-headline-sm font-headline text-cocoa-text">Total Amount</span>
                <span className="text-headline-md font-headline font-bold text-primary">₹ 2,000.00</span>
              </div>
            </div>
            <div className="mt-16 pt-12 border-t border-outline-variant/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                </div>
                <div>
                  <p className="text-label-md font-bold text-cocoa-text">Need assistance?</p>
                  <p className="text-label-sm text-on-surface-variant">support@carnaticacademy.edu</p>
                </div>
              </div>
              <div className="bg-misty-sky/20 p-4 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm">info</span>
                <p className="text-label-sm text-secondary leading-relaxed">
                  A confirmation receipt will be sent to your registered email immediately after successful payment.
                </p>
              </div>
            </div>
          </section>

          {/* Right Side: Payment Interface */}
          <section className="lg:col-span-7 flex flex-col bg-surface-container-lowest">
            {/* Tabs */}
            
            <div className="p-8 md:p-12 flex-grow">
              <form id="payment-form" className="max-w-md mx-auto space-y-8" onSubmit={handlePay}>
                {activeTab === 'cards' && (
                  <div className="space-y-6">
                    <div className="group">
                      <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Card Number</label>
                      <div className="relative">
                        <input className="elegant-input w-full text-lg tracking-widest font-mono" placeholder="0000 0000 0000 0000" type="text" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
                          <span className="material-symbols-outlined text-outline-variant">contactless</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="group">
                        <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Expiry Date</label>
                        <input className="elegant-input w-full text-lg" placeholder="MM / YY" type="text" />
                      </div>
                      <div className="group">
                        <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">CVV</label>
                        <div className="relative">
                          <input className="elegant-input w-full text-lg" placeholder="•••" type="password" />
                          <span className="material-symbols-outlined text-outline-variant absolute right-0 top-1/2 -translate-y-1/2 cursor-help" title="Security code on the back of your card">help</span>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-label-sm text-on-surface-variant uppercase tracking-wider block mb-1">Cardholder Name</label>
                      <input className="elegant-input w-full text-lg" placeholder="As it appears on card" type="text" />
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <input className="rounded text-primary focus:ring-primary w-5 h-5 cursor-pointer" id="save-card" type="checkbox" />
                      <label className="text-label-md text-on-surface-variant cursor-pointer" htmlFor="save-card">Save this card securely for future payments</label>
                    </div>
                  </div>
                )}
                {activeTab !== 'cards' && (
                  <div className="py-12 text-center text-on-surface-variant">
                    Please use the mobile app or simulator for {activeTab} payments.
                  </div>
                )}
                
                {/* Submit button hidden in form, actual button is outside */}
                <button type="submit" id="submit-payment" className="hidden">Submit</button>
              </form>
            </div>

            {/* Footer-like CTA Section */}
            <div className="p-8 md:p-12 bg-surface-container-low border-t border-outline-variant/30">
              <button onClick={(e) => document.getElementById('submit-payment').click()} className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                Pay ₹ 2,000.00
              </button>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">PCI DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">encrypted</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">256-bit SSL Secure</span>
                </div>
                <img alt="Visa" className="h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB11zdgF9rcyimvORXjiMPXEM86B3HIL1VerYbmYVpqcwoCkHIYssLleqi461-jIsjXDLSef3i19VJoNJl-jpBtKSHO6p6z6Rt6UVA3HqkvZ9FSNUtzTfX5dkPeH_hRJ4sr2PaH4Bu5S6ImxaTPhoVZsLo9iXee68LGJ6A3IiAPaxBs2Cwuew0vmrxCxuNmgXDZIC8nwRmckW4jbCYohax5cuW7yDtzb2mNor-GHiFVP2_9DUHUgasVp__eVndthZB4qrGyMoeUXZpd" />
                <img alt="Mastercard" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPR-UXgoG2bqX6sKnfubrNLAW4pAy4r7lAbXPWd2d2J8s5994WbNwfXogXt062cpiepU7y0o7uJTmR7lsF5Hr_n845rDyL1kiTgzVtZ3h7xG8OgBxCMcKLfnptOVyIRLp7-84GVxHuLNM7IV9iPTzjzSs6Irrx9geZTdZnAfUqREIMeYeEzHaF8Y-E5USXEQG-ICqng2A7bnAVF4_O_GMNbZo_73OyiKafH8kIkJwP86YT04iJLEYlx_KIeG8zfAyKY5RsBjdN7Pw" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SecureCheckout;
