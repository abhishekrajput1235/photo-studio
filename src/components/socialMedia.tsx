import { useMemo, useState } from 'react';
import { Facebook, Instagram, Linkedin, Share2, X, Youtube, type LucideIcon } from 'lucide-react';

interface SocialItem {
	name: string;
	href: string;
	icon: LucideIcon;
	bgClass: string;
}

const socialButtonClass =
	'absolute left-0 bottom-0 inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400';

const SocialMedia = () => {
	const [isOpen, setIsOpen] = useState(false);

	const socialItems = useMemo<SocialItem[]>(
		() => [
			{
				name: 'Instagram',
				href: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
				icon: Instagram,
				bgClass: 'bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-400',
			},
			{
				name: 'Facebook',
				href: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com',
				icon: Facebook,
				bgClass: 'bg-[#1877F2]',
			},
			{
				name: 'YouTube',
				href: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com',
				icon: Youtube,
				bgClass: 'bg-[#FF0000]',
			},
			{
				name: 'LinkedIn',
				href: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
				icon: Linkedin,
				bgClass: 'bg-[#0A66C2]',
			},
		],
		[]
	);

	return (
		<div className="fixed bottom-8 left-5 z-50 md:left-8">
			<div className="">
				{socialItems.map((item, index) => {
					const Icon = item.icon;
					const angle = (Math.PI / 2 / (socialItems.length - 1)) * index;
					const x = Math.cos(angle) * 110;
					const y = Math.sin(angle) * 110;

					return (
						<a
							key={item.name}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className={`${socialButtonClass} ${item.bgClass} ${
								isOpen
									? 'opacity-100 pointer-events-auto'
									: 'opacity-0 pointer-events-none'
							}`}
							style={{
								transform: isOpen
									? `translate(${x}px, ${-y}px) scale(1)`
									: 'translate(0, 0) scale(0.4)',
								transitionDelay: `${index * 40}ms`,
							}}
							aria-label={`Open ${item.name}`}
						>
							<Icon size={20} />
						</a>
					);
				})}

				<button
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					className="absolute left-0 bottom-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black text-yellow-500 shadow-xl hover:bg-yellow-500 hover:text-black transition-all duration-300"
					aria-label={isOpen ? 'Close social links' : 'Open social links'}
				>
					{isOpen ? <X size={24} /> : <Share2 size={24} />}
				</button>
			</div>
		</div>
	);
};

export default SocialMedia;
