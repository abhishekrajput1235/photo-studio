import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { Award, Camera, Heart, Users } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture your special day with stunning, timeless wedding photography that tells your unique love story.',
      price: '$2,500',
      image: 'src/assets/wedding.webp',
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Romantic and creative pre-wedding photoshoots in beautiful locations to celebrate your journey.',
      price: '$800',
      image: 'src/assets/pre-wedding.jpg',
    },
    {
      title: 'Birthday Photography',
      description: 'Celebrate milestones with vibrant, joyful birthday photography that captures every smile and moment.',
      price: '$500',
      image: 'src/assets/birthday.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael',
      event: 'Wedding Photography',
      text: 'GoldenLens captured our wedding day perfectly! Every moment was beautifully documented. We are forever grateful for these precious memories.',
      rating: 5,
    },
    {
      name: 'Jennifer Davis',
      event: 'Baby Photoshoot',
      text: 'The patience and creativity shown during our newborn session was outstanding. The photos are absolutely adorable and professional.',
      rating: 5,
    },
    {
      name: 'Robert Johnson',
      event: 'Corporate Event',
      text: 'Professional, timely, and excellent quality. Our corporate event was documented beautifully. Highly recommend for business events.',
      rating: 5,
    },
  ];

  const stats = [
    { icon: Camera, value: '5000+', label: 'Photos Captured' },
    { icon: Heart, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: Users, value: '10+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* <Hero
        title="Capturing Life's Precious Moments"
        subtitle="Professional photography services for weddings, events, and special occasions"
        backgroundImage="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1600"
      /> */}
<Hero
  backgroundImage="src/assets/indian3.jpeg"
  badge="Est. 2024"
  eyebrow="The Summit Collection"
  title="Where Earth Meets"
  titleEmphasis="Silence"
  subtitle="High above the ordinary — a journey through peaks that have held the sky in their palms since before memory."
  stats={[
    { value: "48", label: "Peaks" },
    { value: "12", label: "Routes" },
    { value: "7K+", label: "Metres" },
  ]}
/>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-yellow-500">GoldenLens</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are passionate photographers dedicated to capturing your most cherished moments.
              With years of experience and a keen eye for detail, we transform fleeting moments into timeless memories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From weddings to birthdays, we cover all your photography needs with professionalism and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy clients have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Capture Your Moments?</h2>
          <p className="text-white text-lg mb-8">
            Book your session today and let us create beautiful memories that last a lifetime.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-white text-yellow-600 px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-bold text-lg shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
