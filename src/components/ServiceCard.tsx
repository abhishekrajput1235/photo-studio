import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ServiceCard = ({ title, description, price, image }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-yellow-600">From {price}</span>
          <Link
            to="/booking"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
