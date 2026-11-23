export const profile = {
	name: "Tevin Smith",
	role: "Full-stack developer",
	summary: "I build complete products, from the interface and database to deployment, payments, and zero-knowledge systems.",
	url: "https://otakulabz.xyz",
};

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }) {
	const url = `${profile.url}${path}`;
	return [
		{ title },
		{ name: "description", content: description },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: url },
		{ property: "og:image", content: `${profile.url}/og.png` },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
		{ property: "og:image:alt", content: `${profile.name}, ${profile.role}` },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "theme-color", content: "#0b1017" },
	];
}

export const skills = [
	{ group: "Frontend", items: ["TypeScript", "React", "Next.js", "React Router", "Vite", "Tailwind CSS"], proof: "Zatrix, OtakuSpace, SquishyLab" },
	{ group: "Backend & data", items: ["Node.js", "Fastify", "PostgreSQL", "Supabase", "Row-level security", "Zod"], proof: "OtakuSpace, Roots, Service Booking" },
	{ group: "Blockchain & ZK", items: ["Solidity", "Circom", "Groth16", "Cairo", "Starknet", "EVM / Base"], proof: "Basecoin, LumenLenz, Gigstark" },
	{ group: "Mobile & systems", items: ["SwiftUI", "Rust", "WebAssembly", "Electron"], proof: "Zatrix, LumenLenz, Basecoin" },
	{ group: "Cloud & commerce", items: ["Cloudflare Workers", "Vercel", "GitHub Actions", "Stripe", "Shopify", "Resend"], proof: "Service Booking, SquishyLab, Roots" },
	{ group: "Testing & quality", items: ["Vitest", "Playwright", "Foundry", "Database isolation tests"], proof: "Roots, OtakuSpace, Basecoin" },
];

export const principles = [
	{ title: "Start with the real problem", text: "I work out who a product is for and what it has to do before choosing the technology." },
	{ title: "Test what could go wrong", text: "Permissions, payments, and failure cases get tests of their own, because those are the parts people depend on." },
	{ title: "Be clear about status", text: "Every project here says whether it is live, in beta, or still a prototype." },
];
