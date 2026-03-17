// import { useState } from 'react';
// import { X } from 'lucide-react';

// interface GalleryImage {
//   id: number;
//   url: string;
//   category: string;
//   alt: string;
// }

// interface GalleryGridProps {
//   images: GalleryImage[];
// }

// const GalleryGrid = ({ images }: GalleryGridProps) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [filter, setFilter] = useState('All');

//   const categories = ['All', 'Wedding', 'Birthday', 'Baby', 'Events'];

//   const filteredImages = filter === 'All'
//     ? images
//     : images.filter(img => img.category === filter);

//   return (
//     <div>
//       <div className="flex justify-center gap-4 mb-8 flex-wrap">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setFilter(category)}
//             className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//               filter === category
//                 ? 'bg-yellow-500 text-black shadow-lg'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredImages.map((image) => (
//           <div
//             key={image.id}
//             className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
//             onClick={() => setSelectedImage(image.url)}
//           >
//             <img
//               src={image.url}
//               alt={image.alt}
//               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button
//             className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X className="w-8 h-8" />
//           </button>
//           <img
//             src={selectedImage}
//             alt="Full size"
//             className="max-w-full max-h-full object-contain"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryGrid;



import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
	id: number;
	url: string;
	category: string;
	alt: string;
}

interface GalleryGridProps {
	images: GalleryImage[];
}

/* Slight random tilt per card — deterministic from id */
const getTilt = (id: number) => {
	const tilts = [-3, 1.5, -1, 2.5, -2, 1, -3.5, 2, -1.5, 3];
	return tilts[id % tilts.length];
};

/* Washi-tape strip colours */
const TAPE_COLORS = [
	'rgba(212,168,67,0.55)',
	'rgba(180,120,80,0.45)',
	'rgba(140,160,100,0.45)',
	'rgba(160,130,170,0.45)',
	'rgba(100,150,160,0.45)',
];
const getTapeColor = (id: number) => TAPE_COLORS[id % TAPE_COLORS.length];

/* Pencil-sketch corner SVG */
const SketchCorner = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		<path d="M1 17 L1 1 L17 1" stroke="#8B6F3E" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeDasharray="2 1.5" opacity="0.6" />
	</svg>
);

const GalleryGrid = ({ images }: GalleryGridProps) => {
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
	const [filter, setFilter] = useState('All');
	const [visible, setVisible] = useState<Set<number>>(new Set());

	const categories = ['All', 'Wedding', 'Birthday', 'Baby', 'Events'];

	const filteredImages =
		filter === 'All' ? images : images.filter((img) => img.category === filter);

	/* Staggered reveal on filter change */
	useEffect(() => {
		setVisible(new Set());
		filteredImages.forEach((img, i) => {
			setTimeout(() => {
				setVisible((prev) => new Set(prev).add(img.id));
			}, i * 60);
		});
	}, [filter]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setSelectedImage(null);
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, []);

	return (
		<div
			style={{
				background: '#f7f2ea',
				minHeight: '100vh',
				padding: '48px 24px',
				fontFamily: "'Georgia', serif",
				position: 'relative',
			}}
		>
			{/* Subtle kraft paper texture */}
			<div
				style={{
					position: 'fixed',
					inset: 0,
					backgroundImage:
						'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'300\' height=\'300\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			<div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
				{/* ── Section label ── */}
				<div style={{ textAlign: 'center', marginBottom: '40px' }}>
					<p
						style={{
							fontSize: '11px',
							letterSpacing: '0.3em',
							textTransform: 'uppercase',
							color: '#8B6F3E',
							marginBottom: '8px',
						}}
					>
						our gallery
					</p>
					<h2
						style={{
							fontSize: '36px',
							fontWeight: 400,
							color: '#2c1f0e',
							fontStyle: 'italic',
							lineHeight: 1.2,
							marginBottom: '10px',
						}}
					>
						Captured Moments
					</h2>
					{/* Hand-drawn underline SVG */}
					<svg width="160" height="12" viewBox="0 0 160 12" style={{ display: 'block', margin: '0 auto' }}>
						<path
							d="M4 8 C30 4, 60 10, 90 6 C115 3, 140 9, 156 6"
							stroke="#8B6F3E"
							strokeWidth="1.5"
							fill="none"
							strokeLinecap="round"
							opacity="0.6"
						/>
					</svg>
				</div>

				{/* ── Filter tabs ── */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '10px',
						marginBottom: '44px',
						flexWrap: 'wrap',
					}}
				>
					{categories.map((cat) => {
						const active = filter === cat;
						return (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								style={{
									padding: '7px 22px',
									border: active ? '1.5px solid #8B6F3E' : '1.5px dashed rgba(139,111,62,0.45)',
									borderRadius: '2px',
									background: active ? '#8B6F3E' : 'transparent',
									color: active ? '#f7f2ea' : '#6b5230',
									fontSize: '12px',
									letterSpacing: '0.15em',
									textTransform: 'uppercase',
									cursor: 'pointer',
									fontFamily: "'Georgia', serif",
									transition: 'all 0.25s ease',
									position: 'relative',
								}}
							>
								{cat}
							</button>
						);
					})}
				</div>

				{/* ── Polaroid grid ── */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
						gap: '40px 32px',
						alignItems: 'start',
					}}
				>
					{filteredImages.map((image, index) => {
						const tilt = getTilt(image.id);
						const tapeColor = getTapeColor(image.id);
						const isVisible = visible.has(image.id);

						return (
							<div
								key={image.id}
								onClick={() => setSelectedImage(image)}
								style={{
									position: 'relative',
									cursor: 'pointer',
									opacity: isVisible ? 1 : 0,
									transform: isVisible
										? `rotate(${tilt}deg)`
										: `rotate(${tilt}deg) translateY(16px)`,
									transition: `opacity 0.35s ease ${index * 0.04}s, transform 0.45s cubic-bezier(.34,1.56,.64,1) ${index * 0.04}s, box-shadow 0.3s ease`,
								}}
								onMouseEnter={(e) => {
									const el = e.currentTarget as HTMLDivElement;
									el.style.transform = 'rotate(0deg) translateY(-5px)';
									el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.18)';
									el.style.zIndex = '10';
								}}
								onMouseLeave={(e) => {
									const el = e.currentTarget as HTMLDivElement;
									el.style.transform = `rotate(${tilt}deg)`;
									el.style.boxShadow = '';
									el.style.zIndex = '';
								}}
							>
								{/* Washi tape strip across top */}
								<div
									style={{
										position: 'absolute',
										top: '-10px',
										left: '50%',
										transform: 'translateX(-50%)',
										width: '60px',
										height: '20px',
										background: tapeColor,
										zIndex: 2,
										backdropFilter: 'blur(1px)',
									}}
								/>

								{/* Polaroid card */}
								<div
									style={{
										background: '#fffef8',
										padding: '10px 10px 28px',
										boxShadow: '0 4px 18px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
										position: 'relative',
									}}
								>
									{/* Sketch corners */}
									<div style={{ position: 'absolute', top: '8px', left: '8px' }}>
										<SketchCorner />
									</div>
									<div style={{ position: 'absolute', top: '8px', right: '8px', transform: 'scaleX(-1)' }}>
										<SketchCorner />
									</div>
									<div style={{ position: 'absolute', bottom: '8px', left: '8px', transform: 'scaleY(-1)' }}>
										<SketchCorner />
									</div>
									<div style={{ position: 'absolute', bottom: '8px', right: '8px', transform: 'scale(-1)' }}>
										<SketchCorner />
									</div>

									{/* Photo */}
									<div
										style={{
											position: 'relative',
											overflow: 'hidden',
											aspectRatio: '1',
											background: '#e8e0d4',
										}}
									>
										<img
											src={image.url}
											alt={image.alt}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												display: 'block',
												filter: 'contrast(1.02) saturate(0.9)',
												transition: 'transform 0.5s ease',
											}}
										/>
										{/* Hover zoom hint */}
										<div
											className="zoom-overlay"
											style={{
												position: 'absolute',
												inset: 0,
												background: 'rgba(44,31,14,0)',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												transition: 'background 0.3s',
											}}
										>
											<ZoomIn
												size={28}
												color="#fffef8"
												style={{ opacity: 0, transition: 'opacity 0.3s' }}
												className="zoom-icon"
											/>
										</div>
									</div>

									{/* Handwritten-style caption */}
									<div
										style={{
											textAlign: 'center',
											paddingTop: '10px',
										}}
									>
										<p
											style={{
												fontSize: '13px',
												color: '#5a4020',
												fontStyle: 'italic',
												letterSpacing: '0.02em',
												opacity: 0.75,
											}}
										>
											{image.category}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* ── Lightbox ── */}
			{selectedImage && (
				<div
					style={{
						position: 'fixed',
						inset: 0,
						background: 'rgba(20,14,6,0.96)',
						zIndex: 100,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '24px',
					}}
					onClick={() => setSelectedImage(null)}
				>
					{/* Lightbox polaroid */}
					<div
						style={{
							position: 'relative',
							background: '#fffef8',
							padding: '14px 14px 52px',
							boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
							maxWidth: '560px',
							width: '100%',
							animation: 'popIn 0.3s cubic-bezier(.34,1.56,.64,1)',
						}}
						onClick={(e) => e.stopPropagation()}
					>
						{/* Tape on lightbox */}
						<div
							style={{
								position: 'absolute',
								top: '-12px',
								left: '50%',
								transform: 'translateX(-50%)',
								width: '80px',
								height: '24px',
								background: getTapeColor(selectedImage.id),
								zIndex: 2,
							}}
						/>

						<img
							src={selectedImage.url}
							alt={selectedImage.alt}
							style={{
								width: '100%',
								display: 'block',
								filter: 'contrast(1.02) saturate(0.9)',
							}}
						/>

						<p
							style={{
								position: 'absolute',
								bottom: '16px',
								left: 0,
								right: 0,
								textAlign: 'center',
								fontStyle: 'italic',
								color: '#5a4020',
								fontSize: '15px',
								opacity: 0.7,
							}}
						>
							{selectedImage.alt}
						</p>

						{/* Close button */}
						<button
							onClick={() => setSelectedImage(null)}
							style={{
								position: 'absolute',
								top: '8px',
								right: '8px',
								background: 'transparent',
								border: 'none',
								cursor: 'pointer',
								color: '#8B6F3E',
								padding: '4px',
								lineHeight: 1,
								opacity: 0.7,
								transition: 'opacity 0.2s',
							}}
							onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
							onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.7')}
							aria-label="Close"
						>
							<X size={20} />
						</button>
					</div>

					<style>{`@keyframes popIn{from{opacity:0;transform:scale(0.88) rotate(-2deg)}to{opacity:1;transform:scale(1) rotate(0deg)}}`}</style>
				</div>
			)}

			{/* Hover CSS for zoom overlay */}
			<style>{`
				div:hover .zoom-overlay { background: rgba(44,31,14,0.28) !important; }
				div:hover .zoom-icon { opacity: 1 !important; }
			`}</style>
		</div>
	);
};

export default GalleryGrid;
