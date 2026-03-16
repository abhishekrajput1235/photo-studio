import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage with artistic storytelling, candid moments, and stunning portraits. Includes engagement session and premium album.',
      price: '$2,500',
      image: 'src/assets/wedding.webp',
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Romantic outdoor photoshoots at picturesque locations. Perfect for save-the-date cards and wedding invitations.',
      price: '$800',
      image: 'src/assets/pre-wedding.jpg',
    },
    {
      title: 'Birthday Photography',
      description: 'Capture the joy and excitement of birthday celebrations with vibrant, energetic photography for all ages.',
      price: '$500',
      image: 'src/assets/birthday.jpg',
    },
    {
      title: 'Corporate Events',
      description: 'Professional documentation of corporate events, conferences, and business gatherings with quick turnaround.',
      price: '$1,200',
      image: 'src/assets/corporate-event.webp',
    },
    {
      title: 'Baby Photography',
      description: 'Gentle newborn and baby photoshoots capturing precious early moments with safety as our top priority.',
      price: '$600',
      image: 'src/assets/baby-photography.jpg',
    },
    {
      title: 'Engagement Ceremonies',
      description: 'Beautiful documentation of your engagement celebration with family and friends in traditional or modern style.',
      price: '$900',
      image: 'src/assets/engagement-ceremonies.webp',
    },
    {
      title: 'Family Functions',
      description: 'Preserve memories of family gatherings, reunions, and special occasions with warm, candid photography.',
      price: '$700',
      image: 'src/assets/family-functions.jpg',
    },
    {
      title: 'Outdoor Photoshoots',
      description: 'Creative outdoor sessions in natural settings, perfect for portraits, couples, and lifestyle photography.',
      price: '$650',
      image: 'src/assets/outdoor-photoshoots.webp',
    },
    {
      title: 'Real Estate Photography',
      description: 'High-quality photos showcasing properties for sale or rent, highlighting key features and curb appeal.',
      price: '$650',
      image: 'src/assets/real-estate.jpg',
    },
  ];

  return (
    <div>
      <Hero
        title="Our Photography Services"
        subtitle="Professional photography for every occasion and milestone"
        backgroundImage="src/assets/our-services.jpeg"
        height="h-96"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Photography Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From intimate moments to grand celebrations, we offer comprehensive photography services
              tailored to your needs. Each package includes high-resolution images, professional editing,
              and flexible delivery options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">All Packages Include:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Professional photographer</li>
                <li>✓ High-resolution edited images</li>
                <li>✓ Online gallery access</li>
                <li>✓ Print rights</li>
                <li>✓ 2-week delivery</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Add-ons:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Same-day editing</li>
                <li>✓ Premium albums</li>
                <li>✓ Canvas prints</li>
                <li>✓ Additional photographer</li>
                <li>✓ Drone photography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
