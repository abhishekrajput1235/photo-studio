import Hero from '../components/Hero';
import GalleryGrid from '../components/GalleryGrid';

const Portfolio = () => {
  const images = [
    { id: 1, url: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wedding', alt: 'Wedding couple' },
    { id: 2, url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wedding', alt: 'Pre-wedding shoot' },
    { id: 3, url: 'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Birthday', alt: 'Birthday celebration' },
    { id: 4, url: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Baby', alt: 'Newborn baby' },
    { id: 5, url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Events', alt: 'Corporate event' },
    { id: 6, url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wedding', alt: 'Engagement ceremony' },
    { id: 7, url: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Events', alt: 'Family function' },
    { id: 8, url: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Baby', alt: 'Baby portrait' },
    { id: 9, url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Birthday', alt: 'Birthday party' },
    { id: 10, url: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wedding', alt: 'Wedding rings' },
    { id: 11, url: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Baby', alt: 'Baby hands' },
    { id: 12, url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Events', alt: 'Event photography' },
    { id: 13, url: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Wedding', alt: 'Wedding ceremony' },
    { id: 14, url: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Birthday', alt: 'Birthday cake' },
    { id: 15, url: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Events', alt: 'Special event' },
  ];

  return (
    <div>
      <Hero
        title="Our Portfolio"
        subtitle="Explore our collection of beautifully captured moments"
        backgroundImage="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600"
        height="h-96"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Each photograph tells a unique story. Filter by category to see examples of our work
              across different types of events and celebrations.
            </p>
          </div>
          <GalleryGrid images={images} />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
