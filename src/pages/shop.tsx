const featuredProducts = [
  {
    name: "LG 360L Double Door Refrigerator",
    spec: ["Frost Free", "5 Star Rating", "Inverter Compressor", "Smart Diagnosis"],
    price: "₹32,990",
    oldPrice: "₹45,990",
    saving: "₹13,000 OFF",
    image: "https://m.media-amazon.com/images/I/81i-+ArTSVL._AC_UF1000,1000_QL80_.jpg",
    label: "DEAL OF THE WEEK",
    labelColor: "#c1121f",
  },
  {
    name: "Symphony Desert Air Cooler 37L",
    spec: ["37 Litre Tank", "i-Pure Technology", "Auto Louver Movement", "Remote Control"],
    price: "₹12,499",
    oldPrice: "₹17,000",
    saving: "₹4,501 OFF",
    image: "https://shop.symphonylimited.com/cdn/shop/files/SUM40-1.png?v=1773403588",
    label: "BEST SELLER",
    labelColor: "#005f73",
    reverse: true,
  },
  {
    name: "Havells Stealth BLDC Ceiling Fan",
    spec: ["BLDC Motor", "5 Star Rated", "Remote Control", "7 Speed Settings"],
    price: "₹4,199",
    oldPrice: "₹5,800",
    saving: "₹1,601 OFF",
    image: "https://fabgizmoz.com/cdn/shop/files/61KzgajVHwL._SL1500.jpg?v=1729230885&width=1946",
    label: "TOP RATED",
    labelColor: "#2a9d8f",
  },
  {
    name: "Voltas 1.5 Ton 5 Star Split AC",
    spec: ["Inverter Technology", "5 Star BEE Rating", "Wi-Fi Enabled", "Auto Restart & Clean"],
    price: "₹34,490",
    oldPrice: "₹45,000",
    saving: "₹10,510 OFF",
    image: "https://jamesandco.in/wp-content/uploads/2024/09/718BacYqEbL._SL1500_c5cae283-a2f7-4bb3-aa96-0c54381a2a99.jpg",
    label: "NEW ARRIVAL",
    labelColor: "#e76f51",
    reverse: true,
  },
  {
    name: "Bosch 7kg Front Load Washing Machine",
    spec: ["7 Kg Capacity", "1200 RPM Spin", "5 Star Rated", "In-built Heater"],
    price: "₹29,990",
    oldPrice: "₹40,000",
    saving: "₹10,010 OFF",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=900&h=700&fit=crop",
    label: "PREMIUM PICK",
    labelColor: "#264653",
  },
];

const storeDeals = [
  ["Whirlpool 265L Double Door Fridge", "Frost Free · Inverter · 5 Star", "₹36,000", "₹27,490", "₹8,510"],
  ["Samsung 192L Single Door Fridge", "Direct Cool · 4 Star · Anti-Bacterial", "₹21,000", "₹15,990", "₹5,010"],
  ["Bajaj Glacier Air Cooler 67L", "67L Tank · Honeycomb Pads · 3 Speed", "₹12,500", "₹9,299", "₹3,201"],
  ["Orient Electric Table Fan 400mm", "High Speed · 3 Blade · Quiet Motor", "₹2,700", "₹1,899", "₹801"],
  ["Godrej 6.5 Kg Semi Auto Washer", "6.5 Kg · Turbo Dry · Soak Function", "₹15,000", "₹9,990", "₹5,010"],
  ["Panasonic 32L Microwave Oven", "Convection · 32L · Auto Cook Menu", "₹14,000", "₹9,499", "₹4,501"],
  ["Usha Turbo Room Cooler 50L", "50L · High Speed · Castor Wheels", "₹9,500", "₹6,999", "₹2,501"],
  ["Crompton Aura Ceiling Fan", "High Speed · Anti-Dust Blades · 2 Year Warranty", "₹3,200", "₹2,099", "₹1,101"],
];

const handleImageFallback = (event: React.SyntheticEvent<HTMLImageElement>, text: string) => {
  event.currentTarget.src = `https://placehold.co/900x700/e9ecef/6c757d?text=${encodeURIComponent(text)}`;
};

export default function ApplianceShowcase() {
  return (
    <div className="shop-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        .shop-page {
          --ink: #0f172a;
          --muted: #5b6475;
          --line: #e6eaf0;
          --surface: #ffffff;
          --surface-soft: #f5f8fb;
          --brand: #c1121f;
          --brand-dark: #8e0e19;
          --deep: #111827;
          background: radial-gradient(circle at top right, #edf2f9 0%, #ffffff 38%), #ffffff;
          color: var(--ink);
          font-family: "Manrope", sans-serif;
        }

        .shop-page * {
          box-sizing: border-box;
        }

        .shell {
          width: min(1160px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .top-strip {
          background: var(--deep);
          color: #f8fafc;
          border-bottom: 1px solid #202a3b;
        }

        .top-strip-content {
          min-height: 54px;
          display: grid;
          place-items: center;
          padding: 0.6rem 0;
          text-align: center;
          letter-spacing: 0.02em;
          font-size: 0.82rem;
          line-height: 1.5;
          color: #cbd5e1;
        }

        .hero {
          border-bottom: 1px solid var(--line);
          background: linear-gradient(165deg, #f7fbff 2%, #eef3fb 52%, #f9fbff 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(1.2rem, 3vw, 3rem);
          align-items: center;
          padding: clamp(2rem, 5.5vw, 4.5rem) 0;
        }

        .hero-badge {
          display: inline-block;
          background: linear-gradient(120deg, var(--brand), #ef4444);
          color: #fff;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          margin-bottom: 1.2rem;
        }

        .hero h1 {
          font-family: "Sora", sans-serif;
          font-size: clamp(2rem, 7vw, 4rem);
          line-height: 1.03;
          letter-spacing: -0.04em;
          margin: 0 0 1rem;
        }

        .hero p {
          max-width: 44ch;
          color: var(--muted);
          font-size: clamp(0.96rem, 1.8vw, 1.08rem);
          line-height: 1.75;
          margin: 0 0 1.75rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .button {
          border: none;
          border-radius: 0.72rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.8rem 1.35rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .button-primary {
          color: #fff;
          background: var(--ink);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.2);
        }

        .button-secondary {
          color: var(--ink);
          background: #fff;
          border: 1px solid #c7d2e0;
        }

        .button:hover {
          transform: translateY(-1px);
        }

        .hero-media {
          background: #fff;
          border-radius: 1rem;
          padding: 0.55rem;
          border: 1px solid #dbe3ef;
          box-shadow: 0 22px 45px rgba(15, 23, 42, 0.12);
        }

        .hero-media img {
          width: 100%;
          aspect-ratio: 5 / 4;
          object-fit: cover;
          display: block;
          border-radius: 0.8rem;
        }

        .offers {
          background: var(--deep);
        }

        .offers-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-left: 1px solid #243041;
          border-right: 1px solid #243041;
        }

        .offer-item {
          padding: 1.1rem 1rem;
          border-right: 1px solid #243041;
        }

        .offer-item:last-child {
          border-right: none;
        }

        .offer-item p:first-of-type {
          color: #f8fafc;
          font-weight: 700;
          font-size: 0.84rem;
          margin: 0.2rem 0;
        }

        .offer-item p:last-of-type {
          color: #91a3bb;
          font-size: 0.76rem;
          margin: 0;
        }

        .section-head {
          padding: clamp(2.2rem, 6vw, 4rem) 0 1.2rem;
          border-bottom: 2px solid var(--ink);
          margin-bottom: 0;
        }

        .section-head h2 {
          font-family: "Sora", sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4b5563;
          margin: 0;
        }

        .product-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          border-bottom: 1px solid var(--line);
          background: #fff;
        }

        .product-row.reverse {
          direction: rtl;
        }

        .product-row.reverse > * {
          direction: ltr;
        }

        .product-image-wrap {
          min-height: 300px;
          overflow: hidden;
        }

        .product-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .product-row:hover .product-image-wrap img {
          transform: scale(1.04);
        }

        .product-info {
          padding: clamp(1.25rem, 3vw, 2.6rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .deal-label {
          display: inline-block;
          color: #fff;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          border-radius: 0.35rem;
          padding: 0.38rem 0.75rem;
          margin-bottom: 0.95rem;
          width: fit-content;
        }

        .product-info h3 {
          margin: 0;
          font-family: "Sora", sans-serif;
          font-size: clamp(1.3rem, 2.8vw, 1.9rem);
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .spec-list {
          list-style: none;
          margin: 1rem 0 1.4rem;
          padding: 0;
          display: grid;
          gap: 0.5rem;
        }

        .spec-list li {
          color: #516071;
          font-size: 0.93rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          border-bottom: 1px dashed #e5eaf2;
          padding-bottom: 0.45rem;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 0.7rem;
          flex-wrap: wrap;
          margin-bottom: 0.6rem;
        }

        .current-price {
          font-family: "Sora", sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.35rem);
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .old-price {
          color: #9ca3af;
          text-decoration: line-through;
          font-size: 1rem;
          font-weight: 600;
        }

        .saving-tag {
          display: inline-block;
          background: #fee2e2;
          color: #991b1b;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          border-radius: 999px;
          padding: 0.4rem 0.8rem;
          margin: 0.2rem 0 1.2rem;
          width: fit-content;
        }

        .table-section {
          padding: clamp(2.2rem, 6vw, 4rem) 0;
        }

        .table-wrap {
          margin-top: 1rem;
          border: 1px solid var(--line);
          border-radius: 0.8rem;
          overflow: auto;
          background: #fff;
        }

        .deals-table {
          width: 100%;
          min-width: 760px;
          border-collapse: collapse;
        }

        .deals-table th {
          text-align: left;
          padding: 0.85rem 0.8rem;
          color: #6b7280;
          font-size: 0.69rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid var(--line);
        }

        .deals-table td {
          padding: 0.9rem 0.8rem;
          border-bottom: 1px solid #edf2f7;
          font-size: 0.9rem;
          vertical-align: top;
        }

        .deals-table tr:nth-child(even) {
          background: #f9fbfe;
        }

        .mobile-deals {
          display: none;
          margin-top: 1rem;
          gap: 0.85rem;
        }

        .mobile-deal-card {
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          background: #fff;
          padding: 0.95rem;
        }

        .mobile-deal-card h3 {
          font-size: 1rem;
          line-height: 1.4;
          margin: 0 0 0.55rem;
          font-family: "Sora", sans-serif;
        }

        .mobile-deal-meta {
          color: #58657a;
          font-size: 0.85rem;
          line-height: 1.55;
          margin-bottom: 0.65rem;
        }

        .store {
          background: var(--deep);
          color: #f8fafc;
        }

        .store-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .store-col {
          padding: clamp(1.6rem, 4vw, 3.3rem);
        }

        .store-col:first-child {
          border-right: 1px solid #273345;
        }

        .store-eyebrow {
          font-size: 0.67rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #8fa0b8;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .store h2 {
          font-family: "Sora", sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.12;
          margin: 0 0 1.1rem;
          letter-spacing: -0.03em;
        }

        .store-list {
          display: grid;
          gap: 0.85rem;
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        .offer-amount {
          font-family: "Sora", sans-serif;
          font-size: clamp(2.3rem, 8vw, 3.4rem);
          color: #74f0a9;
          letter-spacing: -0.04em;
          line-height: 1;
          margin: 0.3rem 0 0.65rem;
        }

        @media (max-width: 1024px) {
          .offers-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .offer-item:nth-child(2) {
            border-right: none;
          }

          .offer-item {
            border-bottom: 1px solid #243041;
          }

          .offer-item:nth-last-child(-n + 2) {
            border-bottom: none;
          }
        }

        @media (max-width: 840px) {
          .hero-grid,
          .product-row,
          .store-grid {
            grid-template-columns: 1fr;
          }

          .product-row.reverse {
            direction: ltr;
          }

          .product-image-wrap {
            min-height: 230px;
          }

          .store-col:first-child {
            border-right: none;
            border-bottom: 1px solid #273345;
          }
        }

        @media (max-width: 680px) {
          .shell {
            width: min(1160px, calc(100% - 1.1rem));
          }

          .top-strip-content {
            font-size: 0.72rem;
            padding: 0.72rem 0;
          }

          .offers-grid {
            grid-template-columns: 1fr;
          }

          .offer-item,
          .offer-item:nth-child(2) {
            border-right: none;
          }

          .offer-item {
            border-bottom: 1px solid #243041;
          }

          .offer-item:last-child {
            border-bottom: none;
          }

          .button {
            width: 100%;
            text-align: center;
          }

          .table-wrap {
            display: none;
          }

          .mobile-deals {
            display: grid;
          }
        }

        @media (hover: none) {
          .button:hover {
            transform: none;
          }

          .product-row:hover .product-image-wrap img {
            transform: none;
          }
        }
      `}</style>

      <div className="top-strip">
        <div className="shell top-strip-content">
          📍 Shop No. 12, Main Market, Sector 18, Noida | 📞 +91 98765 43210 | 🕐 Open Daily 10AM - 9PM
        </div>
      </div>

      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <span className="hero-badge">Summer Sale - Upto 40% Off</span>
            <h1>
              Stay Cool
              <br />
              This Summer
            </h1>
            <p>
              Fridges, coolers, fans, ACs, and home essentials at unbeatable prices. Visit our store and take your
              appliance home today.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+919876543210">
                📞 Call Now
              </a>
              <a className="button button-secondary" href="#products">
                View All Deals
              </a>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="https://rajcooling.com/wp-content/uploads/2025/06/3-Industrial-Coolers.jpg.webp"
              alt="Featured Refrigerator"
              onError={(event) => handleImageFallback(event, "Featured Refrigerator")}
            />
          </div>
        </div>
      </section>

      <section className="offers">
        <div className="shell offers-grid">
          {[
            ["💳", "0% EMI Available", "Up to 18 months"],
            ["🔄", "Exchange Offer", "Get up to ₹3,000 extra on old appliance"],
            ["🛠️", "Free Installation", "On AC, Fridge, and Washer"],
            ["🛡️", "Extended Warranty", "1 year free on every item"],
          ].map(([icon, title, desc]) => (
            <article key={title} className="offer-item">
              <div style={{ fontSize: "1.2rem" }}>{icon}</div>
              <p>{title}</p>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="shell">
        <div className="section-head">
          <h2>Current Deals - Visit Store to Avail</h2>
        </div>
      </section>

      {featuredProducts.map((product) => (
        <section key={product.name} className={`shell product-row${product.reverse ? " reverse" : ""}`}>
          <div className="product-image-wrap">
            <img
              src={product.image}
              alt={product.name}
              onError={(event) => handleImageFallback(event, product.name)}
            />
          </div>

          <div className="product-info">
            <span className="deal-label" style={{ background: product.labelColor }}>
              {product.label}
            </span>
            <h3>{product.name}</h3>
            <ul className="spec-list">
              {product.spec.map((spec) => (
                <li key={spec}>
                  <span style={{ color: "#2a9d8f", fontWeight: 800 }}>✓</span>
                  {spec}
                </li>
              ))}
            </ul>

            <div className="price-row">
              <span className="current-price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
            </div>

            <span className="saving-tag">{product.saving}</span>

            <a className="button button-primary" href="tel:+919876543210" style={{ width: "fit-content" }}>
              📞 Enquire Now
            </a>
          </div>
        </section>
      ))}

      <section className="shell table-section">
        <div className="section-head" style={{ paddingTop: 0 }}>
          <h2>More Products Available In Store</h2>
        </div>

        <div className="table-wrap" role="region" aria-label="More deals table" tabIndex={0}>
          <table className="deals-table">
            <thead>
              <tr>
                {["Product", "Specifications", "MRP", "Our Price", "You Save"].map((heading) => (
                  <th key={heading}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {storeDeals.map(([name, spec, mrp, price, save]) => (
                <tr key={name}>
                  <td style={{ fontWeight: 700 }}>{name}</td>
                  <td style={{ color: "#556273" }}>{spec}</td>
                  <td style={{ color: "#9ca3af", textDecoration: "line-through" }}>{mrp}</td>
                  <td style={{ fontWeight: 800, fontSize: "1rem" }}>{price}</td>
                  <td>
                    <span className="saving-tag" style={{ margin: 0 }}>
                      {save}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mobile-deals">
          {storeDeals.map(([name, spec, mrp, price, save]) => (
            <article key={`${name}-mobile`} className="mobile-deal-card">
              <h3>{name}</h3>
              <p className="mobile-deal-meta">{spec}</p>
              <p style={{ margin: "0 0 0.35rem", color: "#9099a9", textDecoration: "line-through" }}>{mrp}</p>
              <p style={{ margin: "0 0 0.45rem", fontWeight: 800, fontSize: "1.05rem" }}>{price}</p>
              <span className="saving-tag" style={{ margin: 0 }}>
                Save {save}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="store">
        <div className="shell store-grid">
          <div className="store-col">
            <p className="store-eyebrow">Come Visit Us</p>
            <h2>
              CoolHome
              <br />
              Appliances
            </h2>
            <div className="store-list">
              <p>📍 Shop No. 12, Main Market, Sector 18, Noida</p>
              <p>📞 +91 98765 43210</p>
              <p>🕐 Open Daily - 10:00 AM to 9:00 PM</p>
            </div>
          </div>

          <div className="store-col" style={{ display: "grid", alignContent: "center" }}>
            <p className="store-eyebrow">Exclusive Offer</p>
            <p style={{ margin: 0, color: "#e2e8f0", fontWeight: 600 }}>Show this page in store and get</p>
            <p className="offer-amount">₹500 OFF</p>
            <p style={{ margin: "0 0 1.4rem", color: "#94a3b8", fontSize: "0.85rem" }}>
              On any purchase above ₹15,000. Valid this month only.
            </p>
            <a
              className="button"
              href="tel:+919876543210"
              style={{
                width: "fit-content",
                color: "#0f172a",
                background: "#ffffff",
                fontWeight: 800,
              }}
            >
              📞 Call Now - +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}