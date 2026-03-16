import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  event: string;
  text: string;
  rating: number;
}

const Testimonial = ({ name, event, text, rating }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{text}"</p>
      <div className="border-t pt-4">
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{event}</p>
      </div>
    </div>
  );
};

export default Testimonial;
