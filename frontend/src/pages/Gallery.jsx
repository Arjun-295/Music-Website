import { useState } from 'react';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    id: 1,
    category: 'Concerts',
    title: 'Annual Day Celebrations 2025',
    image: 'https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A mesmerizing performance by our senior students.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    category: 'Workshops',
    title: 'Violin Masterclass',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Exploring the intricacies of Carnatic violin techniques.',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    category: 'Competitions',
    title: 'Swaralaya Competition',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0E22O1lV3Zi_AFC89QiFNZpJECugfXATmFeBd9W0vrN50fuBujYr7va-BfPP1T1Hspi-QmgVrkqmofpKBOqNQumBF77xd2UYiw-Mi0tST_NxGPWy02qIp2e0vcfEjYZbQSR1BrLiJkcKO23MmDVTXu8EaF99f8zb1cNNE7OI_sUwb3yOjmOpSiSxYLe3RIV7hWZOpPWCIclQx5hfkfko4X35UsoEvTJyECBn6wbmzkTtxpmR_oKIkvKeuLpw1AslF_z1AmQqEodWq',
    description: 'Winners of the annual vocal competition.',
    span: 'col-span-1 row-span-2'
  },
  {
    id: 4,
    category: 'Concerts',
    title: 'Veena Recital',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9yXhKD76Iey8wIXuZ8-8h02GYeGYbflP-SrOvSXjmZS07zFrclTIVAvuB3E2MX7QJUCRP4Kp6mfkO9xzi-4EQDJ8reEQOGx3iZJGRWqXfIFjLi_fiWnUcnGbvxuRkVeM46XS16-06rSG9OwyTuQHX7cUS845mr_E714hZdtrZZu2CSmktWMpn1_2nFQbNeZ_pNTbas4Dj36IzkPISWgqCJ7RJO_2ro-pmIooz19Cxb28_V5vyWKwLEjAQZJkH223t0REX6pEQaPDq',
    description: 'An evening of soulful Veena melodies.',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    id: 5,
    category: 'Workshops',
    title: 'Vocal Training',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALxXFc7ZGovZ14J7qwOwA8LyCRozM3car2CiKCIiKzu9_r-qVZvnLTGICgU0lq37TB2CkSFaupEMUF1Jgm7eP39-XUVfEfAwjlTO2Gm6F3nD_Jry20zIJUzjYQgdaAmCVJOCJtkiw7IVOiq9pp3SIXAx0lKtLIt-KTJl6KnZbkMWPg_THzYwWDkGyQK3gpIeEGEaj0sUJAeLevs9y7Cw6kVLWKRdUt9GjbsLM7tElEy03TslC_RobDXL_xzd0AL1qGx5ehMn_CdRfV',
    description: 'Masterclass with renowned vocalists.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 6,
    category: 'Awards',
    title: 'Felicitation Ceremony',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Honoring our dedicated faculty members.',
    span: 'col-span-1 md:col-span-1 row-span-2'
  }
];

const categories = ['All', 'Concerts', 'Workshops', 'Competitions', 'Awards'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="font-body text-on-surface bg-surface min-h-screen">
      <main className="pt-32 pb-20 px-6 max-w-container-max mx-auto">
        <div className="text-center mb-16 fade-in">
          <span className="text-tertiary font-label text-sm uppercase tracking-[0.2em] mb-4 block">Visual Journey</span>
          <h1 className="font-display text-4xl md:text-6xl text-on-surface mb-6">Our Gallery</h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A glimpse into the soulful moments, vibrant performances, and memorable events at Mata Sangeeta Vidyalaya.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in" style={{ animationDelay: '0.1s' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-label text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6 fade-in" style={{ animationDelay: '0.2s' }}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 ${activeCategory === 'All' ? item.span : 'col-span-1 row-span-1'}`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-tertiary-fixed font-label text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                <h3 className="font-display text-2xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                <p className="text-white/80 font-body text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">image_not_supported</span>
            <h3 className="font-display text-2xl text-on-surface-variant">No images found for this category.</h3>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
