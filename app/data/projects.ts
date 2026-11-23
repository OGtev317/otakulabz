export type Category = "product" | "commerce" | "blockchain";

export interface Project {
	id: string;
	name: string;
	category: Category;
	status: "Live" | "Pilot" | "Beta" | "Preview" | "Prototype" | "Testnet" | "Mainnet MVP";
	tagline: string;
	summary: string;
	built: string[];
	stack: string[];
	shows: string[];
	featured?: boolean;
	image?: { src: string; alt: string };
	logo?: { src: string; alt: string };
	flow?: string[];
	note?: string;
	links: { label: string; href: string }[];
}

export const categories: { id: Category; title: string; description: string }[] = [
	{ id: "product", title: "Full-stack products", description: "Complete applications with accounts, data, and real workflows." },
	{ id: "blockchain", title: "Blockchain & zero-knowledge", description: "Private payments, proof verification, and on-chain systems." },
	{ id: "commerce", title: "Client & commerce sites", description: "Business websites with bookings, payments, and checkout." },
];

// Keep claims here limited to what the code and live sites can back up.
export const projects: Project[] = [
	{
		id: "zatrix",
		name: "Zatrix",
		category: "product",
		status: "Live",
		featured: true,
		tagline: "Freelance invoicing for web and iPhone.",
		summary: "A focused workspace for managing clients, quotes, invoices, and payment records, with data kept on the device by default.",
		built: [
			"Next.js web app and native SwiftUI iPhone app with matching invoice workflows",
			"Quote and invoice workflows, payment QR codes, and PDF and CSV export",
			"Device-first storage with portable backups, plus optional accounts and client links that are built but not yet enabled",
		],
		stack: ["Next.js", "TypeScript", "SwiftUI", "Supabase", "GitHub Actions"],
		shows: ["Frontend", "Backend", "Database", "Mobile"],
		image: { src: "/projects/zatrix.jpg", alt: "Zatrix invoicing dashboard with outstanding, paid, and draft totals" },
		links: [{ label: "Open Zatrix", href: "https://zatrix.xyz" }],
	},
	{
		id: "roots",
		name: "Roots",
		category: "product",
		status: "Pilot",
		featured: true,
		tagline: "A private home for family connections.",
		summary: "An invitation-based family space with a shared feed, a connected family tree, and gatherings that stay inside each family.",
		built: [
			"Supabase Auth and a PostgreSQL schema with row-level security between families",
			"Database isolation tests run against both local and hosted databases",
			"Connected family tree with kinship and memorial-keeper permission rules",
		],
		stack: ["JavaScript", "Vite", "Supabase", "PostgreSQL", "Resend", "Vitest"],
		shows: ["Frontend", "Backend", "Database"],
		image: { src: "/projects/roots.jpg", alt: "Roots welcome page with a glowing family tree and sign-in form" },
		links: [{ label: "Try the demo", href: "https://otfroots.com/demo.html" }, { label: "Source", href: "https://github.com/OGtev317/OTF" }],
	},
	{
		id: "otakuspace",
		name: "OtakuSpace",
		category: "product",
		status: "Beta",
		featured: true,
		tagline: "A social home for anime fans.",
		summary: "Explore anime, join communities, follow new episodes, and build a customizable profile.",
		built: [
			"Next.js front end with a Fastify and PostgreSQL backend",
			"Anime catalog with broadcast schedules and image attribution",
			"Shared Zod contracts across the stack, tested with Vitest and Playwright",
		],
		stack: ["Next.js", "TypeScript", "Fastify", "PostgreSQL", "Supabase", "Playwright"],
		shows: ["Frontend", "Backend", "Database"],
		logo: { src: "/projects/otakuspace.png", alt: "OtakuSpace beta logo" },
		links: [{ label: "Visit OtakuSpace", href: "https://space.otakulabz.xyz/home" }],
	},
	{
		id: "lumenlenz",
		name: "LumenLenz",
		category: "blockchain",
		status: "Prototype",
		featured: true,
		tagline: "Readable reports for zero-knowledge proofs.",
		summary: "Checks supported proofs and transactions, then reports what passed and what remains unknown. Selected proofs also get a plain-language explanation.",
		built: [
			"Groth16 checks through two independent verifiers, snarkjs and arkworks",
			"Support for Groth16, PLONK, FFLONK, UltraHonk, and RISC Zero receipts",
			"Browser app, command-line tool, and a tool server for AI agents",
		],
		stack: ["TypeScript", "Rust", "WebAssembly", "snarkjs", "arkworks", "Ethereum", "Stellar"],
		shows: ["Frontend", "Developer tools", "Rust/WebAssembly"],
		image: { src: "/projects/lumenlenz.jpg", alt: "LumenLenz page with a field for checking a transaction" },
		note: "Experimental and unaudited.",
		links: [{ label: "Try LumenLenz", href: "https://akashi.zatrix.xyz/" }, { label: "Source", href: "https://github.com/OGtev317/ZK-Proofscan" }],
	},
	{
		id: "basecoin",
		name: "Basecoin",
		category: "blockchain",
		status: "Testnet",
		tagline: "Private payments on Base Sepolia.",
		summary: "A prototype for programmable private payments, where contracts and zero-knowledge circuits enforce the rules while protecting payment details.",
		built: [
			"Solidity contracts and Circom payment circuits using Groth16 proofs",
			"Private deposit, payment, and withdrawal cycle completed on Base Sepolia",
			"Relayed payments trialed on testnet, with a local-custody desktop wallet in development",
		],
		stack: ["Solidity", "Circom", "Groth16", "Rust", "Foundry", "Electron"],
		shows: ["Smart contracts", "Zero-knowledge circuits"],
		flow: ["Shield", "Pay privately", "Withdraw"],
		note: "Test tokens with no value. Unaudited, private source. Independent project, not affiliated with Base or Coinbase.",
		links: [],
	},
	{
		id: "gigstark",
		name: "Gigstark",
		category: "blockchain",
		status: "Mainnet MVP",
		tagline: "Private creator payments on Starknet.",
		summary: "A non-custodial payment interface where a client can shield STRK, pay a registered creator privately, and withdraw.",
		built: [
			"Wallet-signed shield, private transfer, and withdrawal flows",
			"Strict network and privacy-pool checks before any payment action",
			"The connected wallet keeps signing keys, viewing keys, private notes, and witnesses",
		],
		stack: ["TypeScript", "Cairo", "Starknet.js", "Cloudflare Pages"],
		shows: ["Frontend", "Wallet integration"],
		image: { src: "/projects/gigstark.jpg", alt: "Gigstark landing page reading Pay for the work. Hide the relationship." },
		note: "Built for the STRK20 Private Sprint. Internally reviewed, not independently audited.",
		links: [{ label: "View Gigstark", href: "https://gigstark.pages.dev" }, { label: "Source", href: "https://github.com/OGtev317/Gigstark" }],
	},
	{
		id: "service-booking",
		name: "Service Booking Website",
		category: "commerce",
		status: "Preview",
		tagline: "Online booking for a local home-service business.",
		summary: "A client demo where customers request service and simulate a deposit through Stripe test mode, while staff manage requests from a dispatch dashboard.",
		built: [
			"Responsive booking site and password-protected staff dispatch dashboard",
			"Node.js API endpoints backed by Supabase PostgreSQL",
			"Stripe Checkout in test mode, with signed webhooks that confirm deposits",
		],
		stack: ["JavaScript", "Node.js", "Supabase", "PostgreSQL", "Stripe", "Vercel"],
		shows: ["Frontend", "Backend", "Database", "Payments"],
		flow: ["Book", "Test deposit", "Dispatch"],
		note: "Client demo in Stripe test mode. Private source and link.",
		links: [],
	},
	{
		id: "squishylab",
		name: "SquishyLab",
		category: "commerce",
		status: "Live",
		tagline: "A custom Shopify toy storefront.",
		summary: "A playful headless storefront with custom browsing and search, connected to Shopify for products and checkout.",
		built: [
			"Custom React storefront running on Cloudflare Workers",
			"Shopify catalog integration, with Shopify handling checkout",
			"Domain routing between the storefront and the checkout",
		],
		stack: ["React", "TypeScript", "Tailwind CSS", "Shopify", "Cloudflare Workers"],
		shows: ["Frontend", "Commerce API", "Edge hosting"],
		image: { src: "/projects/squishylab.jpg", alt: "SquishyLab storefront with a purple cat squishy in a glass dome" },
		links: [{ label: "Visit SquishyLab", href: "https://squishylab.toys" }],
	},
	{
		id: "otakuskin",
		name: "OtakuSkin",
		category: "commerce",
		status: "Preview",
		tagline: "A Japanese-inspired skincare storefront.",
		summary: "A brand and storefront preview built around a concept skincare collection. Checkout is not open yet.",
		built: [
			"Brand direction, collection pages, and a responsive storefront",
			"Product details covering directions, cautions, and origin",
			"Served from Cloudflare Workers with static assets",
		],
		stack: ["TypeScript", "Cloudflare Workers", "Vitest"],
		shows: ["Frontend", "Edge hosting"],
		image: { src: "/projects/otakuskin-site.jpg", alt: "OtakuSkin storefront with skincare bottles and cherry blossoms" },
		links: [{ label: "Explore OtakuSkin", href: "https://otakuskin.com/" }],
	},
];
