// import { Link } from 'react-router-dom';

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   price: string;
//   image: string;
// }

// const ServiceCard = ({ title, description, price, image }: ServiceCardProps) => {
//   return (
//     <div className="group relative overflow-hidden rounded-lg shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold text-yellow-600">From {price}</span>
//           <Link
//             to="/booking"
//             className="bg-black text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 font-medium"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;



import { useState } from "react";

// Helper: parse "$2,500" → 2500, compute discount, return "$X,XXX"
const calcDiscountedPrice = (priceStr, discountPercent) => {
  const numeric = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  const discounted = Math.round(numeric * (1 - discountPercent / 100));
  const symbol = priceStr.match(/[^\d.,\s]/)?.[0] || "$";
  return symbol + discounted.toLocaleString();
};

const ServiceCard = ({ title, description, price, image, discount = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount ? calcDiscountedPrice(price, discount) : price;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Sacramento&display=swap');

        :root {
          --parchment: #f5efe0;
          --parchment-dark: #e8ddc8;
          --ink: #2c1f0e;
          --ink-light: #4a3828;
          --sepia: #8b6240;
          --sepia-light: #b8895a;
          --terracotta: #c4714a;
          --sage: #6b7c5c;
          --cream: #fdf8ef;
          --stamp-red: #9b3a2a;
          --discount-green: #3d6b43;
          --discount-green-light: #d4e8d6;
        }

        .craft-card {
          position: relative;
          background-color: var(--parchment);
          border-radius: 2px;
          font-family: 'Libre Baskerville', Georgia, serif;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.35s ease;
          box-shadow:
            2px 2px 0 #c9b99a,
            4px 4px 0 #b8a78c,
            6px 6px 12px rgba(44,31,14,0.18);
          overflow: hidden;
        }

        /* Grain texture overlay */
        .craft-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 10;
          border-radius: inherit;
        }

        .craft-card:hover {
          transform: translate(-3px, -3px);
          box-shadow:
            5px 5px 0 #c9b99a,
            8px 8px 0 #b8a78c,
            10px 10px 24px rgba(44,31,14,0.24);
        }

        /* Ink border frame */
        .card-frame {
          position: absolute;
          inset: 8px;
          border: 1.5px solid var(--sepia);
          pointer-events: none;
          z-index: 9;
          opacity: 0.55;
        }

        .card-frame::before,
        .card-frame::after {
          content: '✦';
          position: absolute;
          font-size: 9px;
          color: var(--sepia);
          top: -7px;
          left: -7px;
          background: var(--parchment);
          padding: 0 2px;
          line-height: 1;
        }
        .card-frame::after {
          left: auto;
          right: -7px;
        }

        /* Image area */
        .card-image-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }

        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(35%) contrast(1.05) brightness(0.95);
          transition: transform 0.6s ease, filter 0.4s ease;
        }

        .craft-card:hover .card-image-wrap img {
          transform: scale(1.06);
          filter: sepia(20%) contrast(1.08) brightness(1.0);
        }

        /* ── Discount ribbon (top-left diagonal banner) ── */
        .discount-ribbon {
          position: absolute;
          top: 18px;
          left: -28px;
          z-index: 6;
          width: 110px;
          background: var(--discount-green);
          color: var(--cream);
          font-family: 'Libre Baskerville', serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-align: center;
          padding: 5px 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          border-top: 1px dashed rgba(255,255,255,0.4);
          border-bottom: 1px dashed rgba(255,255,255,0.4);
        }

        /* ── Price stamp (top-right) — now shows discounted price ── */
        .price-stamp {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 5;
          background: var(--stamp-red);
          color: var(--cream);
          font-family: 'Libre Baskerville', serif;
          letter-spacing: 0.04em;
          padding: 7px 13px;
          border-radius: 1px;
          box-shadow: 2px 2px 6px rgba(0,0,0,0.35);
          transform: rotate(2deg);
          border: 1.5px solid rgba(255,255,255,0.2);
          text-align: center;
          line-height: 1.3;
        }

        .price-stamp::after {
          content: '';
          position: absolute;
          inset: 3px;
          border: 1px dashed rgba(255,255,255,0.35);
          border-radius: 1px;
        }

        .price-stamp-original {
          font-size: 10px;
          opacity: 0.7;
          text-decoration: line-through;
          text-decoration-color: rgba(255,255,255,0.6);
          display: block;
        }

        .price-stamp-discounted {
          font-size: 15px;
          font-weight: 700;
          display: block;
        }

        .price-stamp-only {
          font-size: 13px;
          font-weight: 700;
          display: block;
        }

        /* Torn paper edge */
        .torn-edge {
          position: relative;
          height: 28px;
          margin-top: -14px;
          z-index: 2;
          overflow: hidden;
        }

        .torn-edge svg {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
        }

        /* Card body */
        .card-body {
          padding: 4px 22px 24px;
          position: relative;
        }

        .card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 19px;
          font-weight: 700;
          color: var(--ink);
          margin: 12px 0 6px;
          letter-spacing: -0.01em;
          line-height: 1.25;
          position: relative;
          z-index: 1;
        }

        /* Decorative underline */
        .title-underline {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .title-underline span {
          height: 1px;
          background: var(--sepia-light);
          opacity: 0.5;
          flex: 1;
        }

        .title-underline em {
          font-family: 'Sacramento', cursive;
          font-size: 13px;
          color: var(--sepia);
          font-style: normal;
          opacity: 0.7;
          white-space: nowrap;
        }

        .card-desc {
          font-size: 13.5px;
          color: var(--ink-light);
          line-height: 1.72;
          margin: 0;
        }

        /* ── Pricing block inside card body ── */
        .price-block {
          margin-top: 16px;
          padding: 12px 14px;
          background: var(--parchment-dark);
          border: 1px solid rgba(139,98,64,0.25);
          border-left: 3px solid var(--sepia);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .price-block-left {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .price-label {
          font-family: 'Playfair Display', serif;
          font-size: 10.5px;
          font-style: italic;
          color: var(--sepia);
          letter-spacing: 0.06em;
        }

        .price-original-inline {
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          color: var(--sepia);
          text-decoration: line-through;
          text-decoration-color: var(--terracotta);
          opacity: 0.7;
        }

        .price-final {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .price-final-no-discount {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--ink);
        }

        /* ── Savings badge ── */
        .savings-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--discount-green);
          color: var(--cream);
          border-radius: 50%;
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
          border: 1.5px dashed rgba(255,255,255,0.4);
          position: relative;
        }

        .savings-badge-percent {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
        }

        .savings-badge-off {
          font-family: 'Libre Baskerville', serif;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.85;
          line-height: 1;
          margin-top: 1px;
        }

        /* Bottom action row */
        .card-footer {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          border-top: 1px dashed var(--sepia);
          padding-top: 14px;
          opacity: 0.85;
        }

        .card-btn {
          background: transparent;
          border: 1.5px solid var(--ink);
          color: var(--ink);
          font-family: 'Libre Baskerville', serif;
          font-size: 11.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 18px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .card-btn:hover {
          background: var(--ink);
          color: var(--parchment);
        }

        /* Image overlay */
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(139,98,64,0.0) 50%,
            rgba(44,31,14,0.55) 100%
          );
          z-index: 1;
        }
      `}</style>

      <div
        className="craft-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="card-frame" />

        {/* Image */}
        <div className="card-image-wrap">
          <img src={image} alt={title} />
          <div className="image-overlay" />

          {/* Diagonal discount ribbon — only if discounted */}
          {hasDiscount && (
            <div className="discount-ribbon">{discount}% OFF</div>
          )}

          {/* Price stamp top-right */}
          <div className="price-stamp">
            {hasDiscount ? (
              <>
                <span className="price-stamp-original">{price}</span>
                <span className="price-stamp-discounted">{discountedPrice}</span>
              </>
            ) : (
              <span className="price-stamp-only">{price}</span>
            )}
          </div>
        </div>

        {/* Torn paper edge */}
        <div className="torn-edge">
          <svg viewBox="0 0 400 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,28 L0,18 Q10,22 20,16 Q30,10 40,18 Q50,25 60,17 Q70,10 80,19 Q90,27 100,18 Q110,10 120,16 Q130,22 140,14 Q150,7 160,17 Q170,26 180,16 Q190,7 200,18 Q210,27 220,15 Q230,5 240,17 Q250,27 260,16 Q270,7 280,18 Q290,27 300,15 Q310,5 320,17 Q330,27 340,14 Q350,4 360,16 Q370,26 380,15 Q390,6 400,18 L400,28 Z"
              fill="#f5efe0"
            />
          </svg>
        </div>

        {/* Card body */}
        <div className="card-body">
          <div className="card-title">{title}</div>

          <div className="title-underline">
            <span />
            <em>handcrafted memory</em>
            <span />
          </div>

          <p className="card-desc">{description}</p>

          {/* Pricing block */}
          <div className="price-block">
            <div className="price-block-left">
              <span className="price-label">
                {hasDiscount ? "Special Offer" : "Starting from"}
              </span>
              {hasDiscount && (
                <span className="price-original-inline">{price}</span>
              )}
              {hasDiscount ? (
                <span className="price-final">{discountedPrice}</span>
              ) : (
                <span className="price-final-no-discount">{price}</span>
              )}
            </div>

            {hasDiscount && (
              <div className="savings-badge">
                <span className="savings-badge-percent">{discount}%</span>
                <span className="savings-badge-off">off</span>
              </div>
            )}
          </div>

          <div className="card-footer">
            <button className="card-btn">Enquire</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;