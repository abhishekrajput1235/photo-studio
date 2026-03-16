import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, features, popular = false }: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-lg p-8 ${
        popular
          ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-2xl scale-105'
          : 'bg-white shadow-lg hover:shadow-xl'
      } transition-all duration-300`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-yellow-500 px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <div className="mb-6">
        <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-gray-900'}`}>
          {price}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`w-5 h-5 mr-3 mt-1 ${popular ? 'text-white' : 'text-yellow-500'}`} />
            <span className={popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/booking"
        className={`block w-full text-center py-3 rounded-full font-bold transition-all duration-300 ${
          popular
            ? 'bg-white text-yellow-600 hover:bg-gray-100'
            : 'bg-black text-white hover:bg-yellow-500 hover:text-black'
        }`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default PricingCard;
