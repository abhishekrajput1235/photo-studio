import { useEffect } from "react";

interface HeroProps {
  title: string;
  titleEmphasis?: string;
  eyebrow?: string;
  subtitle?: string;
  backgroundImage: string;
  badge?: string;
  stats?: { value: string; label: string }[];
}

export default function Hero({
  title,
  titleEmphasis,
  eyebrow = "The Summit Collection",
  subtitle,
  backgroundImage,
  badge,
  stats,
}: HeroProps) {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Jost:wght@200;300;400&display=swap";
    document.head.appendChild(link);

    return () => link.remove();
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:h-screen flex items-end overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] scale-105 transition-transform duration-[8000ms] ease-out hover:scale-100"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Vertical Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Cinematic Light Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_50%)]" />

      {/* Badge */}
      {badge && (
        <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[10px] tracking-[0.18em] uppercase text-amber-300/70 border border-amber-300/30 px-3 py-1 md:px-4 md:py-2 font-light">
          {badge}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 pb-16 max-w-3xl top-[-100px] md:top-[-120px]">

        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4 md:mb-6 text-amber-300/80 uppercase tracking-[0.2em] text-[10px] md:text-xs font-light">
            <div className="w-10 md:w-16 h-[1px] bg-amber-300/60"></div>
            <span>{eyebrow}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] font-light text-white">
          {title}
          {titleEmphasis && (
            <span className="text-amber-400 italic"> {titleEmphasis}</span>
          )}
        </h1>

        {/* Divider */}
        <div className="w-10 md:w-12 h-[1px] bg-amber-400/60 mt-4 md:mt-6 mb-4 md:mb-6"></div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs md:text-sm text-white/70 tracking-wide leading-relaxed max-w-md">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">

          <button className="bg-amber-400 text-black text-xs tracking-widest uppercase px-6 md:px-8 py-3 hover:bg-amber-300 transition">
            Explore Now
          </button>

          <button className="border border-white/30 text-white text-xs tracking-widest uppercase px-6 md:px-8 py-3 hover:border-white transition">
            View Gallery
          </button>

        </div>
      </div>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="hidden lg:flex absolute bottom-16 right-20 items-center gap-10 text-center mt-[-20px] md:mt-[-40px]">

          {stats.map((st, i) => (
            <div key={i} className="flex items-center gap-10">

              {i !== 0 && (
                <div className="w-[1px] h-10 bg-amber-400/30"></div>
              )}

              <div>
                <div className="text-2xl text-amber-400 font-light">
                  {st.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                  {st.label}
                </div>
              </div>

            </div>
          ))}

        </div>
      )}

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 right-10 flex-col items-center gap-2 text-amber-300/60">

        <span className="text-[10px] uppercase tracking-[0.2em] rotate-180 [writing-mode:vertical-rl]">
          Scroll
        </span>

        <div className="w-[1px] h-10 bg-gradient-to-b from-amber-400 to-transparent animate-bounce"></div>

      </div>

    </section>
  );
}