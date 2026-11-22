export type Category = "product" | "tool" | "lab";
export interface Project {
	id: string;
	name: string;
	category: Category;
	status: "Live" | "Beta" | "Preview" | "Prototype" | "Research";
	summary: string;
	audience: string;
	updatedAt: string;
	featured?: boolean;
	screenshot?: { src: string; alt: string };
	logo?: { src: string; alt: string };
	why?: string;
	installation?: string;
	links: { label: "Try it" | "Visit OtakuSpace" | "Explore OtakuSkin" | "Documentation" | "Source"; href: string }[];
}

// Publish only approved builds with real images, working links, an accurate
// status and a meaningful update date.
export const projects: Project[] = [
	{
		id: "otakuspace",
		name: "OtakuSpace",
		category: "product",
		status: "Beta",
		summary: "Your fandom, your space. Explore anime, discover communities, and express your interests through a customizable profile in an anime-focused social space.",
		why: "To give anime fans a place to discover their next series, connect around shared interests, and make their fandom feel like home.",
		audience: "anime fans looking for discovery, community, and a space of their own",
		updatedAt: "2026-11-01",
		logo: { src: "/projects/otakuspace.png", alt: "OtakuSpace beta logo" },
		links: [{ label: "Visit OtakuSpace", href: "https://space.otakulabz.xyz/home" }],
	},
	{
		id: "otakuskin",
		name: "OtakuSkin",
		category: "product",
		status: "Preview",
		summary: "A Japanese-inspired skincare collection built around thoughtful daily rituals. Explore botanical and serum-inspired photography, product descriptions, directions, cautions, and transparent origin information.",
		why: "To make choosing skincare more considered: discover a ritual through ingredients and textures, then read the product details before deciding what belongs on your shelf.",
		audience: "skincare enthusiasts exploring the collection. Products are in sample review; checkout is not yet available",
		updatedAt: "2026-11-01",
		screenshot: { src: "/projects/otakuskin.jpg", alt: "Cherry blossom photography from the OtakuSkin collection preview" },
		links: [{ label: "Explore OtakuSkin", href: "https://otakuskin.com/" }],
	},
];
