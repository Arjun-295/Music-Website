import { useState } from 'react';
import { Link } from 'react-router-dom';

const Competitions = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="font-body bg-surface text-cocoa-text">
      {/* TopNavBar */}
      
      <main className="pt-32 pb-20 max-w-[1200px] mx-auto px-6 min-h-screen">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cocoa-text mb-4">Available Competitions</h1>
          <p className="text-on-surface-variant max-w-2xl">Discover and participate in prestigious Carnatic music competitions. Showcase your talent across various disciplines of South Indian classical music.</p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-outline-variant">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-outline bg-surface-container-low hover:bg-surface-container transition-all">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            <span className="text-sm font-medium">Filters</span>
            <span className="bg-primary text-on-primary text-[10px] rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <div className="h-6 w-px bg-outline-variant mx-2"></div>
          {['All', 'Live', 'Upcoming', 'Closed'].map(status => (
            <button 
              key={status}
              onClick={() => setFilter(status)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all text-sm ${filter === status ? 'border-outline-variant bg-primary-container/30 text-on-primary-container font-semibold' : 'border-outline-variant hover:border-primary font-medium'}`}
            >
              {status}
            </button>
          ))}
          <div className="ml-auto hidden lg:flex items-center gap-2">
            <span className="text-sm text-on-surface-variant">Sort By:</span>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant text-sm font-medium">
              Newest First
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        </div>

        {/* Competition Cards List */}
        <div className="flex flex-col gap-6">
          {/* Competition Card 1: Live */}
          <Link to="/competition-details" className="bg-warm-cream rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group block">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-[10px] font-bold tracking-wider uppercase">Live</span>
                <span className="text-xs text-on-surface-variant font-medium">Ends in 2 days</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-cocoa-text mb-2">Carnatic Vocal Excellence Contest</h2>
              <p className="text-on-surface-variant mb-6 font-medium">Mata Sangeetha Vidhyalaya, Main Hall</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">group</span>
                  <span className="text-sm">Individual Participation</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                  <span className="text-sm">Physical Event</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">Vocal</span>
                <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">Senior Category</span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-on-surface-variant">Posted 2 days ago</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
              <img alt="Vocal Contest" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0E22O1lV3Zi_AFC89QiFNZpJECugfXATmFeBd9W0vrN50fuBujYr7va-BfPP1T1Hspi-QmgVrkqmofpKBOqNQumBF77xd2UYiw-Mi0tST_NxGPWy02qIp2e0vcfEjYZbQSR1BrLiJkcKO23MmDVTXu8EaF99f8zb1cNNE7OI_sUwb3yOjmOpSiSxYLe3RIV7hWZOpPWCIclQx5hfkfko4X35UsoEvTJyECBn6wbmzkTtxpmR_oKIkvKeuLpw1AslF_z1AmQqEodWq" />
            </div>
          </Link>

          {/* Competition Card 2: Upcoming */}
          <div className="bg-warm-cream rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blush-pink text-on-primary-container text-[10px] font-bold tracking-wider uppercase">Upcoming</span>
                <span className="text-xs text-on-surface-variant font-medium">Starts Oct 12, 2024</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-cocoa-text mb-2">Veena Recital Competition</h2>
              <p className="text-on-surface-variant mb-6 font-medium">Online Global Auditions</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">person</span>
                  <span className="text-sm">Solo Instrumental</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">videocam</span>
                  <span className="text-sm">Online</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">Veena</span>
                <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">Open Age</span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-on-surface-variant">Registration open</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
              <img alt="Veena Competition" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkJ7x4yBzRtJVRbnlhhWhCZFe9VNrv0Qvm0JruOXqSUR_yzAf61K_Z6hpP9eJflAR93dY67-moHp6CCxAkj9fwonc2a2ko7-IIhukQQ5ojOIIUGkwvsU8TfXMNlpMOFqUCpVZ_cKs4nXLMwLuVKF_Xn6jJ-djnnaSAxR1gFW1NXUDnEAv0KikAIJPFcBJk8B-QzsLYkARUoZoUp7C29iEs6jOlEBMZ7qGZKWI98MQVAKIFybFgUr-cfO7tUxjbermdBC-AexBYTqjc" />
            </div>
          </div>

          {/* Competition Card 3: Upcoming */}
          <div className="bg-warm-cream rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-6 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-blush-pink text-on-primary-container text-[10px] font-bold tracking-wider uppercase">Upcoming</span>
                <span className="text-xs text-on-surface-variant font-medium">Starts Nov 05, 2024</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-cocoa-text mb-2">Junior Violin Festival</h2>
              <p className="text-on-surface-variant mb-6 font-medium">Chennai Academy of Arts</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">face_6</span>
                  <span className="text-sm">Junior Category (Under 15)</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                  <span className="text-sm">Chennai</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">Violin</span>
                <span className="px-3 py-1 bg-misty-sky text-on-secondary-container text-xs font-semibold rounded-lg">Folk &amp; Classical</span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-on-surface-variant">Opening soon</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
              <img alt="Violin Festival" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlGbfcbqp6TmjIBsZ7r_7iUffwKrwNUzdbRrq_7a0Q1YF4aWJvZwAHdF5Oqcd1dz1-ZfO7zc3IRx6zcyRHq2hxN9m_Sio1LCwW6AqcfOQqXmpVOy0K5NfgfLzFVWjeWkNdWSgfT4C5_VnP9OPkcj6fi8Q4Su4yz7YZwXjmBePkk2r2t8PJM27Yoac_Ox9nkl-MpEcc6UYrT4aVJRF8NHRCpAVQ66aG7DPmzzkhRCe-zh9fsQFRay3yAakNtDnFCrvvxOLqfNQyyFzY" />
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Load More Competitions
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>

      {/* Footer */}
          </div>
  );
};

export default Competitions;
