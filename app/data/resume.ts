// Public résumé text. Keep the phone number out of this file.
export const resume = {
	location: "Carmel, IN",
	summary: "Full-stack developer and Indiana University computer science student who builds web apps with React, TypeScript, and PostgreSQL. Fiber optic technician who diagnoses connection problems and explains technical issues to customers. Uses AI tools such as Claude and Codex to build and review software.",
	skills: [
		{ label: "Frontend", text: "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, responsive design" },
		{ label: "Accessibility", text: "semantic HTML, ARIA, skip links, keyboard focus states, reduced motion" },
		{ label: "Backend and data", text: "Node.js, Fastify, REST APIs, JSON, SQL, PostgreSQL, Supabase, Stripe" },
		{ label: "Languages and tools", text: "Java, Rust, SwiftUI, WebAssembly, Git" },
		{ label: "Hosting and testing", text: "GitHub Actions, Cloudflare Workers, Vercel, DNS, HTTPS, Vitest, Playwright" },
		{ label: "Networking and support", text: "fiber connectivity, speed and service troubleshooting, customer education" },
		{ label: "AI tools", text: "Claude, Claude Code, Codex" },
	],
	projects: [
		{ name: "Zatrix", description: "freelance invoicing for web and iPhone", link: { text: "zatrix.xyz", href: "https://zatrix.xyz" }, bullets: ["Built a Next.js web app and native SwiftUI iPhone app to manage clients, quotes, and invoices.", "Added PDF and CSV export, payment QR codes, backups, and automated CI with GitHub Actions."] },
		{ name: "Roots", description: "private family network (pilot)", link: { text: "otfroots.com", href: "https://otfroots.com" }, bullets: ["Built mobile-friendly family spaces with Supabase Auth and PostgreSQL row-level security.", "Managed PostgreSQL migrations and tested family-data isolation locally and on a hosted database."] },
		{ name: "Service Booking Website", description: "client demo for a local home-service business", detail: "Private demo", bullets: ["Built a responsive booking site, staff dashboard, and Node.js API backed by Supabase.", "Integrated Stripe Checkout in test mode with signed webhooks that confirm deposits."] },
		{ name: "OtakuSpace", description: "social platform for anime fans (beta)", link: { text: "space.otakulabz.xyz", href: "https://space.otakulabz.xyz/home" }, bullets: ["Developed a Next.js front end and Fastify REST API backed by PostgreSQL.", "Managed database migrations and tested the application with Vitest and Playwright."] },
		{ name: "LumenLenz", description: "zero-knowledge proof explorer (prototype)", link: { text: "akashi.zatrix.xyz", href: "https://akashi.zatrix.xyz/" }, bullets: ["Built a TypeScript app, CLI, and tool server that check supported proofs and explain selected ones.", "Compiled a Rust verifier to WebAssembly and cross-checked Groth16 proofs with snarkjs."] },
		{ name: "SquishyLab", description: "custom Shopify storefront", link: { text: "squishylab.toys", href: "https://squishylab.toys" }, bullets: ["Built a React and TypeScript storefront on Cloudflare Workers with Shopify products and checkout.", "Launched it on a custom domain with HTTPS and security headers."] },
	] as { name: string; description: string; link?: { text: string; href: string }; detail?: string; bullets: string[] }[],
	additional: { name: "Gigstark", href: "https://gigstark.pages.dev", text: ", a non-custodial private payments app on Starknet." },
	experience: [
		{ name: "Fiber Optic Technician", description: "Metronet (T-Mobile)", detail: "2026 to Present", bullets: ["Troubleshoot fiber connections to help ensure customers receive the speeds and data they pay for.", "Diagnose customer-reported connection problems and work them through to resolution.", "Explain how fiber service works to customers in clear, nontechnical language."] },
		{ name: "City Carrier", description: "United States Postal Service", detail: "2021 to 2026", bullets: ["Delivered mail and packages on city routes in Plainfield, Indiana, for 5 years."] },
	],
	education: { name: "Indiana University", description: "Bachelor's degree in Computer Science", detail: "Expected 2029", bullets: ["Completed Introduction to Artificial Intelligence (AII-I 100): prompt design, ethics, and data.", "Delivered a final report and presentation applying AI to a real-world problem.", "Java coursework: OOP, abstract data types, exceptions, file I/O, and a group banking system."] },
};
