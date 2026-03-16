import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';

const Packages = () => {
  const weddingPackages = [
    {
      title: 'Basic',
      price: '$2,500',
      features: [
        '6 hours coverage',
        '1 photographer',
        '300+ edited photos',
        'Online gallery',
        'Print rights',
        '3-week delivery',
      ],
    },
    {
      title: 'Premium',
      price: '$4,500',
      popular: true,
      features: [
        '10 hours coverage',
        '2 photographers',
        '600+ edited photos',
        'Online gallery',
        'Premium album (50 pages)',
        'Engagement session',
        '2-week delivery',
        'Print rights',
      ],
    },
    {
      title: 'Luxury',
      price: '$7,000',
      features: [
        'Full day coverage',
        '2 photographers + videographer',
        '1000+ edited photos',
        'Cinematic highlights video',
        'Premium album (100 pages)',
        'Engagement + pre-wedding session',
        '1-week delivery',
        'All digital files',
      ],
    },
  ];

  const eventPackages = [
    {
      title: 'Half Day',
      price: '$800',
      features: [
        '4 hours coverage',
        '1 photographer',
        '150+ edited photos',
        'Online gallery',
        '2-week delivery',
      ],
    },
    {
      title: 'Full Day',
      price: '$1,200',
      popular: true,
      features: [
        '8 hours coverage',
        '1 photographer',
        '300+ edited photos',
        'Online gallery',
        'Slideshow video',
        '1-week delivery',
      ],
    },
    {
      title: 'Premium',
      price: '$1,800',
      features: [
        '12 hours coverage',
        '2 photographers',
        '500+ edited photos',
        'Online gallery',
        'Highlight video',
        'Same-day sneak peek',
        'Priority editing',
      ],
    },
  ];

  const birthdayPackages = [
    {
      title: 'Essential',
      price: '$500',
      features: [
        '2 hours coverage',
        '100+ edited photos',
        'Online gallery',
        'Print rights',
      ],
    },
    {
      title: 'Deluxe',
      price: '$800',
      popular: true,
      features: [
        '4 hours coverage',
        '200+ edited photos',
        'Photo album (20 pages)',
        'Online gallery',
        'Print rights',
        'Custom decorations photography',
      ],
    },
    {
      title: 'Ultimate',
      price: '$1,200',
      features: [
        '6 hours coverage',
        '300+ edited photos',
        'Premium album (40 pages)',
        'Highlight video',
        'Online gallery',
        'Printed photo booth images',
      ],
    },
  ];

  return (
    <div>
      <Hero
        title="Our Packages"
        subtitle="Flexible pricing options designed to fit your needs and budget"
        backgroundImage="src/assets/8.jpeg"
        height="h-96"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wedding Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive wedding photography packages to capture every moment of your special day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {weddingPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perfect for corporate events, family functions, and special celebrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {eventPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Birthday Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capture the joy and excitement of birthday celebrations for all ages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {birthdayPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Packages Available</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Don't see exactly what you need? We offer customized packages tailored to your specific
            requirements. Contact us to discuss your vision and we'll create a personalized quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Packages;
