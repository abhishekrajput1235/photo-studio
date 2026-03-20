// import { Camera, Instagram, Mail } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface TeamMember {
// 	name: string;
// 	role: string;
// 	bio: string;
// 	image: string;
// 	specialties: string[];
// }

// const teamMembers: TeamMember[] = [
// 	{
// 		name: 'Alex Thompson',
// 		role: 'Lead Photographer',
// 		bio: 'Known for cinematic wedding frames and emotionally rich storytelling that feels timeless.',
// 		image:
// 			'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=900',
// 		specialties: ['Weddings', 'Editorial', 'Destination Shoots'],
// 	},
// 	{
// 		name: 'Sofia Martinez',
// 		role: 'Portrait Specialist',
// 		bio: 'Crafts natural portraits with soft direction, clean compositions, and a luxury studio finish.',
// 		image:
// 			'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900',
// 		specialties: ['Portraits', 'Maternity', 'Family Sessions'],
// 	},
// 	{
// 		name: 'Daniel Lee',
// 		role: 'Event Cinematographer',
// 		bio: 'Blends movement, light, and atmosphere to capture high-energy events with polished detail.',
// 		image:
// 			'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=900',
// 		specialties: ['Corporate', 'Engagement', 'Aftermovies'],
// 	},
// ];

// const OurTeam = () => {
// 	return (
// 		<section className="relative py-20 bg-black overflow-hidden">
// 			<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(234,179,8,0.14),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(234,179,8,0.12),transparent_30%)]" />
// 			<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_35%,rgba(255,255,255,0.02))]" />

// 			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="text-center mb-14">
// 					<p className="text-yellow-500 tracking-[0.2em] uppercase text-xs mb-3">Meet The Team</p>
// 					<h2 className="text-4xl md:text-5xl font-bold text-white mb-5">Artists Behind Guddu Raj</h2>
// 					<p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
// 						Every frame we deliver is shaped by a team that understands light, emotion, and story. Our photographers
// 						work together to make your moments look unforgettable.
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 					{teamMembers.map((member) => (
// 						<article
// 							key={member.name}
// 							className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-yellow-500/40 transition-all duration-300"
// 						>
// 							<div className="relative h-80 overflow-hidden">
// 								<img
// 									src={member.image}
// 									alt={member.name}
// 									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// 								/>
// 								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

// 								<div className="absolute left-5 bottom-5 right-5">
// 									<div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-yellow-400/90 mb-2">
// 										<Camera className="w-4 h-4" />
// 										<span>{member.role}</span>
// 									</div>
// 									<h3 className="text-2xl font-semibold text-white">{member.name}</h3>
// 								</div>
// 							</div>

// 							<div className="p-6">
// 								<p className="text-gray-300 leading-relaxed mb-4">{member.bio}</p>

// 								<div className="flex flex-wrap gap-2 mb-5">
// 									{member.specialties.map((item) => (
// 										<span
// 											key={item}
// 											className="text-xs px-3 py-1 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-yellow-300"
// 										>
// 											{item}
// 										</span>
// 									))}
// 								</div>

// 								<div className="flex items-center gap-4 text-gray-300">
// 									<button
// 										type="button"
// 										className="p-2 rounded-full border border-white/20 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
// 										aria-label={`Open ${member.name} Instagram profile`}
// 									>
// 										<Instagram className="w-4 h-4" />
// 									</button>
// 									<button
// 										type="button"
// 										className="p-2 rounded-full border border-white/20 hover:border-yellow-500 hover:text-yellow-500 transition-colors"
// 										aria-label={`Send email to ${member.name}`}
// 									>
// 										<Mail className="w-4 h-4" />
// 									</button>
// 								</div>
// 							</div>
// 						</article>
// 					))}
// 				</div>

// 				<div className="text-center mt-12">
// 					<Link
// 						to="/booking"
// 						className="inline-flex items-center justify-center bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300"
// 					>
// 						Work With Our Team
// 					</Link>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default OurTeam;



import { useEffect } from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
	name: string;
	role: string;
	bio: string;
	image: string;
	specialties: string[];
}

const teamMembers: TeamMember[] = [
	{
		name: 'Alex Thompson',
		role: 'Lead Photographer',
		bio: 'Known for cinematic wedding frames and emotionally rich storytelling that feels timeless.',
		image:
			'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=900',
		specialties: ['Weddings', 'Editorial', 'Destination Shoots'],
	},
	{
		name: 'Sofia Martinez',
		role: 'Portrait Specialist',
		bio: 'Crafts natural portraits with soft direction, clean compositions, and a luxury studio finish.',
		image:
			'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900',
		specialties: ['Portraits', 'Maternity', 'Family Sessions'],
	},
	{
		name: 'Daniel Lee',
		role: 'Event Cinematographer',
		bio: 'Blends movement, light, and atmosphere to capture high-energy events with polished detail.',
		image:
			'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=900',
		specialties: ['Corporate', 'Engagement', 'Aftermovies'],
	},
];

const CARD_TILTS = [-4, 1.5, -2.5];

/* ── Ornate SVG corner flourish ── */
const CornerFlourish = ({ flip }: { flip?: boolean }) => (
	<svg
		width="44"
		height="44"
		viewBox="0 0 44 44"
		fill="none"
		style={{ transform: flip ? 'scaleX(-1)' : undefined }}
	>
		<path d="M3 41 L3 3 L41 3" stroke="#D4A843" strokeWidth="1.8" strokeLinecap="round" fill="none" />
		<circle cx="3" cy="3" r="3" fill="#D4A843" />
		<path d="M3 3 L14 14" stroke="#D4A843" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
		<path
			d="M10 3 L13 6 L10 9 L7 6 Z"
			fill="#D4A843"
			opacity="0.75"
		/>
		<circle cx="18" cy="3" r="1.2" fill="#D4A843" opacity="0.5" />
		<circle cx="3" cy="18" r="1.2" fill="#D4A843" opacity="0.5" />
	</svg>
);

/* ── Bottom-corner variant (rotated 180°) ── */
const CornerFlourish180 = ({ flip }: { flip?: boolean }) => (
	<svg
		width="44"
		height="44"
		viewBox="0 0 44 44"
		fill="none"
		style={{ transform: `rotate(180deg)${flip ? ' scaleX(-1)' : ''}` }}
	>
		<path d="M3 41 L3 3 L41 3" stroke="#D4A843" strokeWidth="1.8" strokeLinecap="round" fill="none" />
		<circle cx="3" cy="3" r="3" fill="#D4A843" />
		<path d="M3 3 L14 14" stroke="#D4A843" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
		<path d="M10 3 L13 6 L10 9 L7 6 Z" fill="#D4A843" opacity="0.75" />
		<circle cx="18" cy="3" r="1.2" fill="#D4A843" opacity="0.5" />
		<circle cx="3" cy="18" r="1.2" fill="#D4A843" opacity="0.5" />
	</svg>
);

/* ── Thin decorative divider ── */
const GoldDivider = () => (
	<svg width="120" height="10" viewBox="0 0 120 10" fill="none" className="mx-auto my-2">
		<line x1="0" y1="5" x2="48" y2="5" stroke="#D4A843" strokeWidth="0.8" opacity="0.6" />
		<path d="M54 5 L57 2 L60 5 L57 8 Z" fill="#D4A843" opacity="0.85" />
		<circle cx="60" cy="5" r="1.5" fill="#D4A843" />
		<path d="M63 5 L66 2 L69 2.5" stroke="#D4A843" strokeWidth="0.8" opacity="0.5" fill="none" />
		<line x1="72" y1="5" x2="120" y2="5" stroke="#D4A843" strokeWidth="0.8" opacity="0.6" />
	</svg>
);

const OurTeam = () => {
	useEffect(() => {
		const link = document.createElement('link');
		link.href =
			'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:wght@300;400&display=swap';
		link.rel = 'stylesheet';
		document.head.appendChild(link);
		return () => {
			document.head.removeChild(link);
		};
	}, []);

	return (
		<section className="relative py-24 bg-[#080604] overflow-hidden">
			{/* Ambient glows */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(212,168,67,0.08),transparent_45%),radial-gradient(ellipse_at_80%_85%,rgba(212,168,67,0.06),transparent_40%)]" />
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px)',
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* ── Section header ── */}
				<div className="text-center mb-20">
					<p
						className="text-[#D4A843] tracking-[0.35em] uppercase mb-3"
						style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '13px', letterSpacing: '0.32em' }}
					>
						— The Artists —
					</p>
					<h2
						className="text-5xl md:text-6xl text-white mb-5 leading-tight"
						style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
					>
						Behind{' '}
						<span className="italic" style={{ color: '#D4A843' }}>
							Guddu Raj
						</span>
					</h2>
					<GoldDivider />
					<p
						className="text-gray-400 max-w-xl mx-auto leading-relaxed mt-4"
						style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 300 }}
					>
						Every frame we deliver is shaped by a team that understands light, emotion, and story.
					</p>
				</div>

				{/* ── Photo frame grid ── */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20 items-start">
					{teamMembers.map((member, index) => (
						<div
							key={member.name}
							className="group flex flex-col items-center"
							style={{
								transform: `rotate(${CARD_TILTS[index]}deg)`,
								transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLDivElement).style.transform = 'rotate(0deg) translateY(-6px)';
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLDivElement).style.transform = `rotate(${CARD_TILTS[index]}deg)`;
							}}
						>
							{/* ══ OUTER FRAME ══ */}
							<div
								style={{
									position: 'relative',
									padding: '14px',
									background:
										'linear-gradient(135deg, #f0d878 0%, #c8921a 12%, #7a5208 28%, #c09020 45%, #7a5208 62%, #c8921a 78%, #f0d878 100%)',
									boxShadow:
										'0 8px 32px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,235,130,0.4), inset 0 -1px 0 rgba(80,50,0,0.5)',
									borderRadius: '3px',
									width: '100%',
								}}
							>
								{/* Corner flourishes */}
								<div style={{ position: 'absolute', top: '4px', left: '4px' }}>
									<CornerFlourish />
								</div>
								<div style={{ position: 'absolute', top: '4px', right: '4px' }}>
									<CornerFlourish flip />
								</div>
								<div style={{ position: 'absolute', bottom: '4px', left: '4px' }}>
									<CornerFlourish180 />
								</div>
								<div style={{ position: 'absolute', bottom: '4px', right: '4px' }}>
									<CornerFlourish180 flip />
								</div>

								{/* ── INNER MAT ── */}
								<div
									style={{
										background: '#0d0a05',
										border: '1px solid rgba(212,168,67,0.25)',
										padding: '10px 10px 20px 10px',
										boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.8)',
									}}
								>
									{/* Photo */}
									<div
										style={{
											position: 'relative',
											overflow: 'hidden',
											aspectRatio: '4/5',
											border: '1px solid rgba(212,168,67,0.15)',
										}}
									>
										<img
											src={member.image}
											alt={member.name}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												display: 'block',
												filter: 'sepia(15%) contrast(1.05)',
												transition: 'transform 0.6s ease',
											}}
											className="group-hover:scale-105"
										/>
										{/* Vignette overlay */}
										<div
											style={{
												position: 'absolute',
												inset: 0,
												background:
													'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
												pointerEvents: 'none',
											}}
										/>
									</div>

									{/* Mat label area */}
									<div className="text-center pt-4 pb-1">
										<p
											style={{
												fontFamily: "'Cormorant Garamond', serif",
												fontSize: '11px',
												letterSpacing: '0.28em',
												color: '#D4A843',
												textTransform: 'uppercase',
												opacity: 0.85,
												marginBottom: '4px',
											}}
										>
											{member.role}
										</p>
										<h3
											style={{
												fontFamily: "'Playfair Display', Georgia, serif",
												fontWeight: 400,
												fontSize: '22px',
												color: '#f5ead8',
												letterSpacing: '0.02em',
												margin: 0,
											}}
										>
											{member.name}
										</h3>
									</div>
								</div>
							</div>

							{/* ── INFO SECTION (below frame) ── */}
							<div
								className="w-full mt-6 px-1"
								style={{
									opacity: 0,
									transform: 'translateY(8px)',
									transition: 'opacity 0.4s ease, transform 0.4s ease',
								}}
								ref={(el) => {
									if (el) {
										const parent = el.closest('.group') as HTMLDivElement | null;
										if (parent) {
											parent.addEventListener('mouseenter', () => {
												el.style.opacity = '1';
												el.style.transform = 'translateY(0)';
											});
											parent.addEventListener('mouseleave', () => {
												el.style.opacity = '0';
												el.style.transform = 'translateY(8px)';
											});
										}
									}
								}}
							>
								<p
									className="text-center text-gray-400 leading-relaxed mb-4"
									style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 300 }}
								>
									{member.bio}
								</p>

								<div className="flex flex-wrap justify-center gap-2 mb-4">
									{member.specialties.map((item) => (
										<span
											key={item}
											style={{
												fontSize: '10px',
												letterSpacing: '0.15em',
												textTransform: 'uppercase',
												padding: '4px 12px',
												border: '1px solid rgba(212,168,67,0.35)',
												color: '#D4A843',
												background: 'rgba(212,168,67,0.07)',
												borderRadius: '2px',
												fontFamily: "'Cormorant Garamond', serif",
											}}
										>
											{item}
										</span>
									))}
								</div>

								<div className="flex items-center justify-center gap-3">
									<button
										type="button"
										style={{
											padding: '8px',
											borderRadius: '50%',
											border: '1px solid rgba(255,255,255,0.18)',
											background: 'transparent',
											color: '#9ca3af',
											cursor: 'pointer',
											transition: 'border-color 0.2s, color 0.2s',
										}}
										onMouseEnter={(e) => {
											(e.currentTarget as HTMLButtonElement).style.borderColor = '#D4A843';
											(e.currentTarget as HTMLButtonElement).style.color = '#D4A843';
										}}
										onMouseLeave={(e) => {
											(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
											(e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
										}}
										aria-label={`Open ${member.name} Instagram profile`}
									>
										<Instagram size={14} />
									</button>
									<button
										type="button"
										style={{
											padding: '8px',
											borderRadius: '50%',
											border: '1px solid rgba(255,255,255,0.18)',
											background: 'transparent',
											color: '#9ca3af',
											cursor: 'pointer',
											transition: 'border-color 0.2s, color 0.2s',
										}}
										onMouseEnter={(e) => {
											(e.currentTarget as HTMLButtonElement).style.borderColor = '#D4A843';
											(e.currentTarget as HTMLButtonElement).style.color = '#D4A843';
										}}
										onMouseLeave={(e) => {
											(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
											(e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
										}}
										aria-label={`Send email to ${member.name}`}
									>
										<Mail size={14} />
									</button>
								</div>
							</div>

							{/* Always-visible specialties for non-hover (static) */}
							<div className="w-full mt-4 px-1 group-hover:hidden">
								<div className="flex flex-wrap justify-center gap-1">
									{member.specialties.map((item) => (
										<span
											key={item}
											style={{
												fontSize: '9px',
												letterSpacing: '0.12em',
												textTransform: 'uppercase',
												padding: '3px 8px',
												border: '1px solid rgba(212,168,67,0.25)',
												color: 'rgba(212,168,67,0.65)',
												background: 'transparent',
												fontFamily: "'Cormorant Garamond', serif",
											}}
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* ── CTA ── */}
				<div className="text-center mt-24">
					<div
						className="inline-block"
						style={{
							padding: '1px',
							background: 'linear-gradient(90deg, #7a5208, #D4A843, #7a5208)',
						}}
					>
						<Link
							to="/booking"
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: '10px',
								padding: '14px 40px',
								background: '#080604',
								color: '#D4A843',
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: '14px',
								letterSpacing: '0.28em',
								textTransform: 'uppercase',
								textDecoration: 'none',
								transition: 'background 0.3s, color 0.3s',
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLAnchorElement).style.background = '#D4A843';
								(e.currentTarget as HTMLAnchorElement).style.color = '#080604';
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLAnchorElement).style.background = '#080604';
								(e.currentTarget as HTMLAnchorElement).style.color = '#D4A843';
							}}
						>
							Work With Our Team
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
