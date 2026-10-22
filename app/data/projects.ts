export type Category = "product" | "tool" | "lab";
export interface Project {
	id: string;
	name: string;
	category: Category;
	status: "Live" | "Beta" | "Prototype" | "Research";
	summary: string;
	audience: string;
	updatedAt: string;
	featured?: boolean;
	screenshot?: { src: string; alt: string };
	logo?: { src: string; alt: string };
	why?: string;
	installation?: string;
	links: { label: "Try it" | "Documentation" | "Source"; href: string }[];
}

// Publish only approved builds with real images, working links, an accurate
// status and a meaningful update date.
export const projects: Project[] = [
	{
		id: "basecash",
		name: "BaseCash",
		category: "product",
		status: "Beta",
		summary: "Experimental shielded payments on Base Sepolia. Shield tUSDC or tBCS, send an encrypted payment for a recipient to claim, or unshield back to a regular wallet. Zero-knowledge proofs are generated in your browser; fee-paying wallet addresses and timing remain public.",
		why: "On public blockchains, anyone can see who paid whom and how much. BaseCash was built to make private payments on Base simple enough for everyday people, and it is being tested in the open with free test tokens before any real money is involved.",
		audience: "anyone curious about private payments on Base. Testnet only: free test tokens, no real funds, not audited",
		updatedAt: "2026-10-21",
		logo: { src: "/projects/basecash.png", alt: "BaseCash logo" },
		links: [
			{ label: "Try it", href: "https://basecash.io/" },
			{ label: "Documentation", href: "https://basecash.io/how-it-works" },
			{ label: "Source", href: "https://basecash.io/licenses" },
		],
	},
];
