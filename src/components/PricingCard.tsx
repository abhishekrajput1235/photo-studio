// import { Check } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface PricingCardProps {
//   title: string;
//   price: string;
//   features: string[];
//   popular?: boolean;
// }

// const PricingCard = ({ title, price, features, popular = false }: PricingCardProps) => {
//   return (
//     <div
//       className={`relative rounded-lg p-8 ${
//         popular
//           ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-white shadow-2xl scale-105'
//           : 'bg-white shadow-lg hover:shadow-xl'
//       } transition-all duration-300`}
//     >
//       {popular && (
//         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-yellow-500 px-4 py-1 rounded-full text-sm font-bold">
//           Most Popular
//         </div>
//       )}
//       <h3 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-gray-900'}`}>
//         {title}
//       </h3>
//       <div className="mb-6">
//         <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-gray-900'}`}>
//           {price}
//         </span>
//       </div>
//       <ul className="space-y-4 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-start">
//             <Check className={`w-5 h-5 mr-3 mt-1 ${popular ? 'text-white' : 'text-yellow-500'}`} />
//             <span className={popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
//           </li>
//         ))}
//       </ul>
//       <Link
//         to="/booking"
//         className={`block w-full text-center py-3 rounded-full font-bold transition-all duration-300 ${
//           popular
//             ? 'bg-white text-yellow-600 hover:bg-gray-100'
//             : 'bg-black text-white hover:bg-yellow-500 hover:text-black'
//         }`}
//       >
//         Book Now
//       </Link>
//     </div>
//   );
// };

// export default PricingCard;



import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

/* ── Thin heraldic divider SVG ── */
const HeraldDivider = ({ gold = false }: { gold?: boolean }) => (
  <svg width="100%" height="14" viewBox="0 0 280 14" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
    <line x1="0" y1="7" x2="112" y2="7" stroke={gold ? '#C9A84C' : 'rgba(201,168,76,0.35)'} strokeWidth="0.8" />
    <path d="M128 7 L132 3 L136 7 L132 11 Z" fill={gold ? '#C9A84C' : 'rgba(201,168,76,0.45)'} />
    <circle cx="140" cy="7" r="2" fill={gold ? '#C9A84C' : 'rgba(201,168,76,0.45)'} />
    <path d="M144 7 L148 3 L152 7 L148 11 Z" fill={gold ? '#C9A84C' : 'rgba(201,168,76,0.45)'} />
    <line x1="168" y1="7" x2="280" y2="7" stroke={gold ? '#C9A84C' : 'rgba(201,168,76,0.35)'} strokeWidth="0.8" />
  </svg>
);

/* ── Crown SVG ── */
const Crown = ({ size = 28, color = '#C9A84C' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 32 24" fill="none">
    <path
      d="M2 20 L4 8 L10 14 L16 4 L22 14 L28 8 L30 20 Z"
      fill={color}
      stroke={color}
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
    <rect x="2" y="20" width="28" height="3" rx="1" fill={color} />
    <circle cx="16" cy="4" r="1.8" fill="#fff" opacity="0.9" />
    <circle cx="4" cy="8" r="1.4" fill="#fff" opacity="0.7" />
    <circle cx="28" cy="8" r="1.4" fill="#fff" opacity="0.7" />
  </svg>
);

/* ── Ornate corner ── */
const OrnateCorner = ({ flip }: { flip?: boolean }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <path d="M2 34 L2 2 L34 2" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <path d="M2 2 L8 8" stroke="#C9A84C" strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.4" />
    <circle cx="2" cy="2" r="2" fill="#C9A84C" opacity="0.7" />
    <path d="M7 2 L9 4 L7 6 L5 4 Z" fill="#C9A84C" opacity="0.55" />
    <circle cx="14" cy="2" r="1" fill="#C9A84C" opacity="0.35" />
    <circle cx="2" cy="14" r="1" fill="#C9A84C" opacity="0.35" />
  </svg>
);

const PricingCard = ({ title, price, features, popular = false }: PricingCardProps) => {
  return (
    <div
      style={{
        position: 'relative',
        background: popular
          ? 'linear-gradient(160deg, #1a1020 0%, #0f0a1a 40%, #120e08 100%)'
          : 'linear-gradient(160deg, #0e0c12 0%, #0a0810 100%)',
        border: popular ? '1px solid rgba(201,168,76,0.7)' : '1px solid rgba(201,168,76,0.22)',
        padding: '0',
        transition: 'transform 0.4s cubic-bezier(.34,1.4,.64,1), box-shadow 0.4s ease',
        transform: 'translateY(0)',
        boxShadow: popular
          ? '0 0 0 1px rgba(201,168,76,0.15), 0 12px 48px rgba(0,0,0,0.6)'
          : '0 8px 32px rgba(0,0,0,0.5)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = popular
          ? '0 0 0 1px rgba(201,168,76,0.3), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.08)'
          : '0 20px 60px rgba(0,0,0,0.65)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivider).style.boxShadow = popular
          ? '0 0 0 1px rgba(201,168,76,0.15), 0 12px 48px rgba(0,0,0,0.6)'
          : '0 8px 32px rgba(0,0,0,0.5)';
      }}
    >
      {/* Outer gold frame line */}
      <div
        style={{
          position: 'absolute',
          inset: '6px',
          border: popular ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(201,168,76,0.1)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Ornate corners */}
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}><OrnateCorner /></div>
      <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}><OrnateCorner flip /></div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 2, transform: 'scaleY(-1)' }}><OrnateCorner /></div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 2, transform: 'scale(-1)' }}><OrnateCorner /></div>

      {/* Royal seal badge for popular */}
      {popular && (
        <div
          style={{
            position: 'absolute',
            top: '-18px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #b8860b 0%, #C9A84C 40%, #8B6914 100%)',
            border: '1px solid rgba(255,235,150,0.4)',
            padding: '5px 22px',
            zIndex: 10,
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: '#0a0810',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
          }}
        >
          ✦ Most Chosen ✦
        </div>
      )}

      {/* Card inner content */}
      <div style={{ padding: '40px 28px 32px', position: 'relative', zIndex: 2 }}>
        {/* Crown for popular */}
        {popular && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
            <Crown size={32} color="#C9A84C" />
          </div>
        )}

        {/* Tier title */}
        <p
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.65)',
            textAlign: 'center',
            marginBottom: '8px',
          }}
        >
          — {title} —
        </p>

        {/* Price */}
        <div style={{ textAlign: 'center', marginBottom: '6px' }}>
          <span
            style={{
              fontFamily: "'Cinzel Decorative', 'Cinzel', Georgia, serif",
              fontSize: popular ? '48px' : '42px',
              fontWeight: popular ? 700 : 400,
              color: popular ? '#E8C96D' : '#C9A84C',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              textShadow: popular ? '0 0 40px rgba(201,168,76,0.25)' : 'none',
            }}
          >
            {price}
          </span>
        </div>

        <p
          style={{
            fontFamily: "'IM Fell English', 'Georgia', serif",
            fontSize: '12px',
            letterSpacing: '0.12em',
            color: 'rgba(201,168,76,0.4)',
            textAlign: 'center',
            marginBottom: '24px',
            fontStyle: 'italic',
          }}
        >
          per session
        </p>

        <HeraldDivider gold={popular} />

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 28px' }}>
          {features.map((feat) => (
            <li
              key={feat}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '7px 0',
                borderBottom: '1px solid rgba(201,168,76,0.08)',
                fontFamily: "'IM Fell English', Georgia, serif",
                fontSize: '14px',
                color: popular ? '#d4c4a0' : '#9a8a72',
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: '2px',
                  color: popular ? '#C9A84C' : 'rgba(201,168,76,0.5)',
                }}
              >
                <Check size={13} strokeWidth={2.5} />
              </span>
              {feat}
            </li>
          ))}
        </ul>

        <HeraldDivider gold={popular} />

        {/* CTA */}
        <div style={{ marginTop: '24px' }}>
          <div
            style={{
              padding: '1px',
              background: popular
                ? 'linear-gradient(90deg, #7a5208, #E8C96D, #7a5208)'
                : 'linear-gradient(90deg, rgba(201,168,76,0.3), rgba(201,168,76,0.6), rgba(201,168,76,0.3))',
            }}
          >
            <Link
              to="/booking"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '13px',
                background: popular ? '#C9A84C' : 'transparent',
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: '11px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: popular ? '#0a0810' : '#C9A84C',
                textDecoration: 'none',
                transition: 'background 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = popular ? '#E8C96D' : 'rgba(201,168,76,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = popular ? '#C9A84C' : 'transparent';
              }}
            >
              {popular ? 'Claim This Package' : 'Book Now'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
