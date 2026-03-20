// import Hero from '../components/Hero';
// import PricingCard from '../components/PricingCard';
// import packagesHeroImage from '../assets/8.jpeg';

// const Packages = () => {
//   const weddingPackages = [
//     {
//       title: 'Basic',
//       price: '$2,500',
//       features: [
//         '6 hours coverage',
//         '1 photographer',
//         '300+ edited photos',
//         'Online gallery',
//         'Print rights',
//         '3-week delivery',
//       ],
//     },
//     {
//       title: 'Premium',
//       price: '$4,500',
//       popular: true,
//       features: [
//         '10 hours coverage',
//         '2 photographers',
//         '600+ edited photos',
//         'Online gallery',
//         'Premium album (50 pages)',
//         'Engagement session',
//         '2-week delivery',
//         'Print rights',
//       ],
//     },
//     {
//       title: 'Luxury',
//       price: '$7,000',
//       features: [
//         'Full day coverage',
//         '2 photographers + videographer',
//         '1000+ edited photos',
//         'Cinematic highlights video',
//         'Premium album (100 pages)',
//         'Engagement + pre-wedding session',
//         '1-week delivery',
//         'All digital files',
//       ],
//     },
//   ];

//   const eventPackages = [
//     {
//       title: 'Half Day',
//       price: '$800',
//       features: [
//         '4 hours coverage',
//         '1 photographer',
//         '150+ edited photos',
//         'Online gallery',
//         '2-week delivery',
//       ],
//     },
//     {
//       title: 'Full Day',
//       price: '$1,200',
//       popular: true,
//       features: [
//         '8 hours coverage',
//         '1 photographer',
//         '300+ edited photos',
//         'Online gallery',
//         'Slideshow video',
//         '1-week delivery',
//       ],
//     },
//     {
//       title: 'Premium',
//       price: '$1,800',
//       features: [
//         '12 hours coverage',
//         '2 photographers',
//         '500+ edited photos',
//         'Online gallery',
//         'Highlight video',
//         'Same-day sneak peek',
//         'Priority editing',
//       ],
//     },
//   ];

//   const birthdayPackages = [
//     {
//       title: 'Essential',
//       price: '$500',
//       features: [
//         '2 hours coverage',
//         '100+ edited photos',
//         'Online gallery',
//         'Print rights',
//       ],
//     },
//     {
//       title: 'Deluxe',
//       price: '$800',
//       popular: true,
//       features: [
//         '4 hours coverage',
//         '200+ edited photos',
//         'Photo album (20 pages)',
//         'Online gallery',
//         'Print rights',
//         'Custom decorations photography',
//       ],
//     },
//     {
//       title: 'Ultimate',
//       price: '$1,200',
//       features: [
//         '6 hours coverage',
//         '300+ edited photos',
//         'Premium album (40 pages)',
//         'Highlight video',
//         'Online gallery',
//         'Printed photo booth images',
//       ],
//     },
//   ];

//   return (
//     <div>
//       <Hero
//         title="Our Packages"
//         subtitle="Flexible pricing options designed to fit your needs and budget"
//         backgroundImage={packagesHeroImage}
//         height="h-96"
//       />

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Wedding Packages</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Comprehensive wedding photography packages to capture every moment of your special day.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//             {weddingPackages.map((pkg, index) => (
//               <PricingCard key={index} {...pkg} />
//             ))}
//           </div>

//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Packages</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Perfect for corporate events, family functions, and special celebrations.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//             {eventPackages.map((pkg, index) => (
//               <PricingCard key={index} {...pkg} />
//             ))}
//           </div>

//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Birthday Packages</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Capture the joy and excitement of birthday celebrations for all ages.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {birthdayPackages.map((pkg, index) => (
//               <PricingCard key={index} {...pkg} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Packages Available</h3>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             Don't see exactly what you need? We offer customized packages tailored to your specific
//             requirements. Contact us to discuss your vision and we'll create a personalized quote.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Packages;




import { useEffect } from 'react';
import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import packagesHeroImage from '../assets/8.jpeg';
import { Link } from 'react-router-dom';

/* ── Section crown divider ── */
const SectionCrest = ({ label }: { label: string }) => (
  <div style={{ textAlign: 'center', marginBottom: '56px' }}>
    {/* Crown */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none">
        <path
          d="M3 28 L6 10 L14 20 L22 4 L30 20 L38 10 L41 28 Z"
          fill="#C9A84C"
          stroke="#C9A84C"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <rect x="3" y="28" width="38" height="4" rx="1.5" fill="#C9A84C" />
        <circle cx="22" cy="4" r="2.4" fill="#fffbe0" opacity="0.95" />
        <circle cx="6" cy="10" r="2" fill="#fffbe0" opacity="0.8" />
        <circle cx="38" cy="10" r="2" fill="#fffbe0" opacity="0.8" />
      </svg>
    </div>
    {/* Ornate rule */}
    <svg width="480" height="20" viewBox="0 0 480 20" style={{ display: 'block', margin: '0 auto 16px', maxWidth: '100%' }}>
      <line x1="0" y1="10" x2="185" y2="10" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" />
      <path d="M196 10 L200 6 L204 10 L200 14 Z" fill="rgba(201,168,76,0.5)" />
      <line x1="208" y1="10" x2="220" y2="10" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8" />
      <path d="M226 10 L230 5 L234 10 L230 15 Z" fill="#C9A84C" />
      <circle cx="240" cy="10" r="3" fill="#C9A84C" />
      <path d="M246 10 L250 5 L254 10 L250 15 Z" fill="#C9A84C" />
      <line x1="260" y1="10" x2="272" y2="10" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8" />
      <path d="M276 10 L280 6 L284 10 L280 14 Z" fill="rgba(201,168,76,0.5)" />
      <line x1="295" y1="10" x2="480" y2="10" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" />
    </svg>
    {/* Label */}
    <h2
      style={{
        fontFamily: "'Cinzel Decorative', 'Cinzel', Georgia, serif",
        fontWeight: 400,
        fontSize: '32px',
        color: '#E8C96D',
        letterSpacing: '0.06em',
        marginBottom: '12px',
        textShadow: '0 0 60px rgba(201,168,76,0.2)',
      }}
    >
      {label}
    </h2>
    {/* Bottom rule */}
    <svg width="280" height="12" viewBox="0 0 280 12" style={{ display: 'block', margin: '0 auto' }}>
      <line x1="0" y1="6" x2="120" y2="6" stroke="rgba(201,168,76,0.2)" strokeWidth="0.6" />
      <circle cx="130" cy="6" r="1.5" fill="rgba(201,168,76,0.45)" />
      <circle cx="140" cy="6" r="2" fill="rgba(201,168,76,0.55)" />
      <circle cx="150" cy="6" r="1.5" fill="rgba(201,168,76,0.45)" />
      <line x1="160" y1="6" x2="280" y2="6" stroke="rgba(201,168,76,0.2)" strokeWidth="0.6" />
    </svg>
  </div>
);

/* ── Section subtitle ── */
const SectionSub = ({ text }: { text: string }) => (
  <p
    style={{
      fontFamily: "'IM Fell English', 'Georgia', serif",
      fontStyle: 'italic',
      fontSize: '17px',
      color: 'rgba(201,168,76,0.5)',
      textAlign: 'center',
      marginTop: '-36px',
      marginBottom: '52px',
      letterSpacing: '0.03em',
    }}
  >
    {text}
  </p>
);

/* ── Big section separator ── */
const Separator = () => (
  <div style={{ padding: '52px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
    <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25))' }} />
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2 L16 10 L24 10 L18 15 L20 23 L14 18 L8 23 L10 15 L4 10 L12 10 Z" fill="#C9A84C" opacity="0.4" />
    </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1 L10.5 6.5 L16 6.5 L11.5 9.5 L13 15 L9 11.5 L5 15 L6.5 9.5 L2 6.5 L7.5 6.5 Z" fill="#C9A84C" opacity="0.6" />
    </svg>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2 L16 10 L24 10 L18 15 L20 23 L14 18 L8 23 L10 15 L4 10 L12 10 Z" fill="#C9A84C" opacity="0.4" />
    </svg>
    <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.25))' }} />
  </div>
);

const Packages = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;600&family=IM+Fell+English:ital@0;1&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const weddingPackages = [
    {
      title: 'Noble',
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
      title: 'Royal',
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
      title: 'Imperial',
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
      title: 'Court',
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
      title: 'Grand',
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
      title: 'Sovereign',
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
      title: 'Crescent',
      price: '$500',
      features: [
        '2 hours coverage',
        '100+ edited photos',
        'Online gallery',
        'Print rights',
      ],
    },
    {
      title: 'Marquis',
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
      title: 'Majestic',
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
    <div style={{ background: '#07050f', minHeight: '100vh' }}>
      <Hero
        title="Our Packages"
        subtitle="Flexible pricing options designed to fit your needs and budget"
        backgroundImage={packagesHeroImage}
        height="h-96"
      />

      {/* Velvet texture overlay strip below hero */}
      <div
        style={{
          height: '6px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, rgba(201,168,76,0.5), #C9A84C, transparent)',
        }}
      />

      <section
        style={{
          padding: '80px 24px',
          background: '#07050f',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 20% 30%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(139,30,30,0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          {/* ── WEDDING ── */}
          <SectionCrest label="Wedding Packages" />
          <SectionSub text="Comprehensive coverage to immortalise every sacred moment of your union" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start', marginBottom: '0' }}>
            {weddingPackages.map((pkg, i) => (
              <PricingCard key={i} {...pkg} />
            ))}
          </div>

          <Separator />

          {/* ── EVENTS ── */}
          <SectionCrest label="Event Packages" />
          <SectionSub text="For corporate galas, family functions, and grand celebrations" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}>
            {eventPackages.map((pkg, i) => (
              <PricingCard key={i} {...pkg} />
            ))}
          </div>

          <Separator />

          {/* ── BIRTHDAY ── */}
          <SectionCrest label="Birthday Packages" />
          <SectionSub text="Capture the joy and splendour of birthday celebrations for all ages" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', alignItems: 'start' }}>
            {birthdayPackages.map((pkg, i) => (
              <PricingCard key={i} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom packages banner ── */}
      <section
        style={{
          padding: '72px 24px',
          background: '#0d0a1a',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative wide rule */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 20%, #C9A84C 50%, rgba(201,168,76,0.4) 80%, transparent)',
          }}
        />

        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <svg width="52" height="40" viewBox="0 0 52 40" fill="none" style={{ display: 'block', margin: '0 auto 20px' }}>
            <path d="M4 34 L8 12 L17 23 L26 4 L35 23 L44 12 L48 34 Z" fill="#C9A84C" stroke="#C9A84C" strokeWidth="0.8" strokeLinejoin="round" />
            <rect x="4" y="34" width="44" height="4" rx="1.5" fill="#C9A84C" />
            <circle cx="26" cy="4" r="2.8" fill="#fffbe0" opacity="0.95" />
            <circle cx="8" cy="12" r="2.2" fill="#fffbe0" opacity="0.8" />
            <circle cx="44" cy="12" r="2.2" fill="#fffbe0" opacity="0.8" />
          </svg>

          <p
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '11px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              marginBottom: '12px',
            }}
          >
            — By Royal Appointment —
          </p>

          <h3
            style={{
              fontFamily: "'Cinzel Decorative', Georgia, serif",
              fontWeight: 400,
              fontSize: '28px',
              color: '#E8C96D',
              marginBottom: '20px',
              letterSpacing: '0.05em',
            }}
          >
            Bespoke Packages
          </h3>

          <p
            style={{
              fontFamily: "'IM Fell English', Georgia, serif",
              fontSize: '17px',
              fontStyle: 'italic',
              color: 'rgba(201,168,76,0.5)',
              lineHeight: 1.85,
              marginBottom: '36px',
            }}
          >
            Do not see exactly what you require? We craft bespoke packages tailored to your
            sovereign vision. Contact us to discuss your requirements and we shall compose a
            personalised royal quote.
          </p>

          <div style={{ display: 'inline-block', padding: '1px', background: 'linear-gradient(90deg, #7a5208, #E8C96D, #7a5208)' }}>
            <Link
              to="/booking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 48px',
                background: '#07050f',
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                textDecoration: 'none',
                transition: 'background 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#C9A84C';
                (e.currentTarget as HTMLAnchorElement).style.color = '#07050f';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#07050f';
                (e.currentTarget as HTMLAnchorElement).style.color = '#C9A84C';
              }}
            >
              Request a Bespoke Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
