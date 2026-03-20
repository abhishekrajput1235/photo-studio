import Hero from '../components/Hero';
import GalleryGrid from '../components/GalleryGrid';
import portfolioHeroImage from '../assets/portfolio.jpeg';
import guddu_raj7  from '../assets/guddu_raj7.jpeg';
import guddu_raj1  from '../assets/guddu_studio1.jpeg';
import guddu_raj2  from '../assets/guddu_raj2.jpeg';
import guddu_raj3  from '../assets/guddu_raj3.jpeg';
import guddu_raj5  from '../assets/guddu_raj5.jpeg';
import guddu_raj6  from '../assets/guddu_raj6.jpeg';
import guddu_raj8  from '../assets/guddu_raj8.jpeg';

const Portfolio = () => {
  const images = [
    { id: 1, url: guddu_raj1, category: 'Wedding', alt: 'Wedding couple' },
    { id: 2, url: guddu_raj2, category: 'Wedding', alt: 'Pre-wedding shoot' },
    { id: 3, url: 'https://img-cdn.publive.online/filters:format(webp)/bollyy/media/post_attachments/HMD/images/images/2025/sep/Shiv-Thakare-birthday-celebration-m-750884.jpg', category: 'Birthday', alt: 'Birthday celebration' },
    { id: 4, url: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Baby', alt: 'Newborn baby' },
    { id: 5, url: guddu_raj3, category: 'Events', alt: 'Corporate event' },
    { id: 6, url: guddu_raj7, category: 'Wedding', alt: 'Engagement ceremony' },
    { id: 7, url: 'https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'Events', alt: 'Family function' },
    { id: 8, url: 'https://i.pinimg.com/736x/62/ed/0f/62ed0f7b084136c676200226bdf66871.jpg', category: 'Baby', alt: 'Baby portrait' },
    { id: 9, url: 'https://m.media-amazon.com/images/I/81hO1Z+l34L.jpg', category: 'Birthday', alt: 'Birthday party' },
    { id: 10, url: guddu_raj5, category: 'Wedding', alt: 'Wedding rings' },
    { id: 11, url: 'https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg', category: 'Baby', alt: 'Baby hands' },
    { id: 12, url: guddu_raj8, category: 'Events', alt: 'Event photography' },
    { id: 13, url: guddu_raj6, category: 'Wedding', alt: 'Wedding ceremony' },
    { id: 14, url: 'https://www.athiniphotos.in/wp-content/uploads/2023/09/Captivating-Baby-Birthday-Photoshoot-Ideas-at-Home.jpg', category: 'Birthday', alt: 'Birthday cake' },
    { id: 15, url: 'https://bloximages.newyork1.vip.townnews.com/yakimaherald.com/content/tncms/assets/v3/editorial/6/de/6dec6d28-a066-11ee-a773-7f58385e9495/6584e13c9d46e.image.jpg?resize=666%2C500', category: 'Events', alt: 'Special event' },
  ];

  return (
    <div>
      <Hero
        title="Our Portfolio"
        subtitle="Explore our collection of beautifully captured moments"
        backgroundImage={portfolioHeroImage}
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
