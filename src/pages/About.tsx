import Hero from '../components/Hero';
import { Camera, Award, Heart, Zap } from 'lucide-react';
import aboutHeroImage from '../assets/2.jpeg';
import OurTeam from '../components/OurTeam';
import gudduraj from  '../assets/guddu-raj.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Camera,
      title: 'Passion',
      description: 'We pour our heart and soul into every photograph, treating each shoot as a unique masterpiece.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning quality and professional standards in every project we undertake.',
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'Committed to understanding your vision and bringing it to life through our lens.',
    },
    {
      icon: Zap,
      title: 'Creativity',
      description: 'Innovative approaches and artistic vision that make your photos stand out.',
    },
  ];

  const achievements = [
    'Best Wedding Photographer 2023',
    'Excellence in Portrait Photography',
    'Featured in Photography Magazine',
    'Client Satisfaction Award',
    '5-Star Rated Service',
    'Industry Recognition Award',
  ];

  return (
    <div>
      <Hero
        title="About GoldenLens Studio"
        subtitle="Your story, beautifully told through our lens"
        backgroundImage={aboutHeroImage}
  
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2013, GoldenLens Photography Studio was born from a simple passion: capturing the beauty
                in life's most precious moments. What started as a dream has grown into a full-service photography
                studio trusted by hundreds of clients.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of experienced photographers brings together artistic vision, technical expertise, and a
                genuine love for storytelling. We believe that every event, every person, and every moment has a
                unique story worth preserving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's the joy of a wedding day, the innocence of a newborn, or the celebration of a
                milestone, we're honored to be part of your journey and committed to delivering photographs that
                you'll treasure forever.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Photography"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Behind the scenes"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <value.icon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={gudduraj}
                alt="Photographer"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Lead Photographer</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <span className="font-bold text-gray-900">Guddu Raj</span> is an award-winning photographer
                with over 10 years of experience in the industry. With a degree in Fine Arts and Photography,
                Guddu Raj combines technical expertise with artistic vision.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Having photographed over 500 weddings and countless special events, Guddu Raj has a natural ability
                to capture genuine emotions and create stunning visual narratives. When not behind the camera,
                Guddu Raj mentors aspiring photographers and conducts workshops.
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Achievements & Recognition</h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-yellow-500 mr-2" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
<Link to="/shop" className="relative inline-block mt-6 group">
  {/* Chroma Border */}
  <span
    className="absolute inset-0 rounded-xl p-[1.5px] 
               bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 
               opacity-70 group-hover:opacity-100 
               blur-[2px] group-hover:blur-[4px] 
               transition-all duration-300"
  ></span>

  {/* Button */}
  <span
    className="relative inline-flex items-center justify-center px-7 py-3 
               bg-neutral-900 text-white font-semibold rounded-xl 
               border border-white/10 
               group-hover:bg-black 
               transition-all duration-300"
  >
    Our Electronic Shop
  </span>
</Link>          </div>
          </div>
        </div>
      </section>
      <OurTeam />


      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Behind the Scenes</h2>
          <p className="text-lg mb-8 leading-relaxed">
            We use state-of-the-art equipment and the latest techniques to ensure every photo meets our high
            standards. From professional-grade cameras to advanced lighting setups, we invest in the best tools
            to deliver exceptional results for our clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
