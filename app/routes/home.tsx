import { useEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";
import { projects, type Project, type Category } from "../data/projects";

const description = "An independent home for useful applications, developer tools, and experiments in the lab.";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "OtakuLabz — Independent software. Useful tools." },
		{ name: "description", content: description },
		{ property: "og:title", content: "OtakuLabz — Ideas into useful things." },
		{ property: "og:description", content: description },
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://otakulabz.xyz/" },
		{ property: "og:image", content: "https://otakulabz.xyz/otakulabz.png" },
		{ property: "og:image:alt", content: "The OtakuLabz orange laboratory logo" },
		{ name: "theme-color", content: "#0b1017" },
	];
}

export const links: Route.LinksFunction = () => [
	{ rel: "canonical", href: "https://otakulabz.xyz/" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
	return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Brand() {
	return (
		<a className="brand" href="#top" aria-label="OtakuLabz home">
			<span className="brand-mark"><img src="/otakulabz.png" alt="" width="2000" height="2000" /></span>
			<span>otaku<span className="brand-light">labz</span><span className="brand-period">.</span></span>
		</a>
	);
}

function CategoryIcon({ category }: { category: Category }) {
	return (
		<svg aria-hidden="true" width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
			{category === "product" ? <path d="m16 3 12 7v13l-12 7-12-7V10zM4 10l12 7 12-7M16 17v13M10 6l12 7" /> : category === "tool" ? <><rect x="3" y="5" width="26" height="22" rx="3" /><path d="m9 12 4 4-4 4m8 0h6" /></> : <><path d="M11 3h10M13 3v9L5 25a3 3 0 0 0 3 4h16a3 3 0 0 0 3-4l-8-13V3M9 19h14" /><circle cx="15" cy="24" r="1" /></>}
		</svg>
	);
}

function AtomBackground() {
	return (
		<div className="atom-background" aria-hidden="true">
			<div className="atom-halo" />
			<div className="atom-system">
				{["one", "two", "three"].map(orbit => <div key={orbit} className={`atom-plane plane-${orbit}`}><div className="atom-ring" /><div className="electron-track"><span className="electron" /></div></div>)}
				<div className="atom-nucleus"><img src="/otakulabz.png" alt="" width="2000" height="2000" fetchPriority="high" /></div>
			</div>
		</div>
	);
}

function StudioArtwork() {
	return <div className="studio-art"><AtomBackground /><p>CURIOUS BY NATURE. BUILT WITH PURPOSE.</p></div>;
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<article className={`project-card${project.logo ? " has-logo" : ""}`}>
			{project.screenshot && <img className="project-screenshot" src={project.screenshot.src} alt={project.screenshot.alt} loading="lazy" width="960" height="600" />}
			<div className="project-layout">
				{project.logo && <img className="project-logo" src={project.logo.src} alt={project.logo.alt} loading="lazy" width="512" height="512" />}
				<div className="project-body">
					<div className="project-topline"><h3>{project.name}</h3><span className="status-label">{project.status}</span></div>
					<p>{project.summary}</p>{project.why && <p className="project-why"><strong>Why it exists</strong>{project.why}</p>}<p className="project-audience">For {project.audience}</p>
					{project.installation && <pre className="installation"><code>{project.installation}</code></pre>}
					<div className="project-links">{project.links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}<Arrow diagonal /></a>)}</div>
					<p className="project-updated">Updated <time dateTime={project.updatedAt}>{new Date(project.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p>
				</div>
			</div>
		</article>
	);
}

const navigation = [
	{ href: "#products", label: "Products" },
	{ href: "#tools", label: "Developer Tools" },
	{ href: "#lab", label: "The Lab" },
	{ href: "#about", label: "About" },
];

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [motionPaused, setMotionPaused] = useState(false);
	const menuButton = useRef<HTMLButtonElement>(null);
	const featured = projects.filter(project => project.featured).slice(0, 3);
	const products = projects.filter(project => project.category === "product");
	const tools = projects.filter(project => project.category === "tool");
	const lab = projects.filter(project => project.category === "lab");

	useEffect(() => {
		if (!menuOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); }
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [menuOpen]);

	return (
		<div id="top" className="site-shell" data-motion={motionPaused ? "paused" : "playing"}>
			<a className="skip-link" href="#main">Skip to content</a>
			<header className="site-header"><div className="container header-inner">
				<Brand />
				<button ref={menuButton} className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "−" : "+"}</span></button>
				<nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${menuOpen ? " is-open" : ""}`}>
					{navigation.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
					<a className="contact-link" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk<Arrow diagonal /></a>
				</nav>
			</div></header>

			<main id="main">
				<section className="container hero" aria-labelledby="hero-title">
					<div className="hero-copy">
						<p className="eyebrow"><span className="signal-dot" /> INDEPENDENT SOFTWARE STUDIO</p>
						<h1 id="hero-title">Ideas into<br /><span>useful things.</span></h1>
						<p className="hero-description">Thoughtful software. Tools that get out of your way.<br className="desktop-break" /> A little curiosity about what comes next.</p>
						<div className="hero-actions"><a className="button button-primary" href="#products">Explore the studio<Arrow /></a><a className="text-link" href="https://github.com/OGtev317" target="_blank" rel="noopener noreferrer">Find me on GitHub<Arrow diagonal /></a></div>
					</div><StudioArtwork />
				</section>
				<div className="container motion-control"><button type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}>{motionPaused ? "Resume" : "Pause"} background animation<span aria-hidden="true">{motionPaused ? "▷" : "Ⅱ"}</span></button><span className="reduced-motion-note">Motion reduced to match your device settings.</span></div>
				<div className="container studio-strip"><span>SMALL STUDIO. OPEN POSSIBILITIES.</span><div><span>Build with intention</span><i /><span>Share what’s useful</span><i /><span>Stay curious</span></div></div>

				{featured.length > 0 && <section className="container featured-section" aria-labelledby="featured-title"><p className="eyebrow">SELECTED WORK</p><h2 id="featured-title">A few worth exploring.</h2><div className="project-grid">{featured.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>}

				<section id="products" className="container products-section" aria-labelledby="products-title">
					<div className="section-heading"><div><p className="eyebrow"><span>01 /</span> PRODUCTS</p><h2 id="products-title">Software, made useful.</h2></div><p>Applications for real problems.<br />Built for the people on the other side of the screen.</p></div>
					{products.length ? <div className="project-grid">{products.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="product-empty"><div className="empty-emblem"><CategoryIcon category="product" /></div><div><span className="empty-label">THE COLLECTION STARTS HERE</span><h3>Good things take a little building.</h3><p>Products will appear here when they’re ready to explore.</p></div><span className="empty-tag">No products listed yet</span></div>}
				</section>

				<div className="container exploration-grid">
					<section id="tools" className="exploration-section" aria-labelledby="tools-title">
						<p className="eyebrow"><span>02 /</span> DEVELOPER TOOLS</p><div className="exploration-title"><h2 id="tools-title">Less friction.<br />More building.</h2><CategoryIcon category="tool" /></div><p className="section-description">Libraries, utilities and integrations for the developer’s everyday toolkit. Clear documentation and installation guides, right alongside the code.</p>
						{tools.length ? <div className="project-grid">{tools.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="compact-empty"><span className="empty-symbol" aria-hidden="true">&gt;_</span><div><h3>The toolbox is taking shape.</h3><p>No tools listed yet. Watch this space.</p></div></div>}
					</section>
					<section id="lab" className="exploration-section lab-section" aria-labelledby="lab-title">
						<p className="eyebrow"><span>03 /</span> THE LAB</p><div className="exploration-title"><h2 id="lab-title">Room to<br />experiment.</h2><CategoryIcon category="lab" /></div><p className="section-description">A home for the what-ifs. Prototypes, research and early explorations—with a clear distinction between what works today and what’s still an idea.</p>
						{lab.length ? <div className="project-grid">{lab.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="compact-empty"><span className="empty-symbol lab-symbol" aria-hidden="true">✳</span><div><h3>Curiosity has a home here.</h3><p>No experiments published yet.</p></div></div>}
					</section>
				</div>

				<section id="about" className="container about-section" aria-labelledby="about-title"><div><p className="eyebrow"><span>04 /</span> BEHIND THE BUILDS</p><h2 id="about-title">Independent spirit.<br />Practical purpose.</h2></div><div className="about-copy"><p>OtakuLabz is my space for building software, sharing useful tools, and following ideas a little further.</p><p>The approach is simple: start with a real problem, make something thoughtful, and keep learning along the way. This is where the finished work—and the work in progress—will live.</p><a className="text-link" href="https://github.com/OGtev317" target="_blank" rel="noopener noreferrer">Follow the work on GitHub<Arrow diagonal /></a></div></section>
				<section id="contact" className="container contact-section" aria-labelledby="contact-title"><div><p className="eyebrow">A CONVERSATION IS A GOOD START</p><h2 id="contact-title">Something on your mind?</h2><p>A question, a collaboration, or just a good idea. Let’s connect.</p></div><a className="button button-primary" href="https://x.com/OtakuLabz" target="_blank" rel="noopener noreferrer">Say hello on X<Arrow diagonal /></a></section>
			</main>
			<footer className="container site-footer"><Brand /><p>Independent software. Useful tools. Open possibilities.</p><a href="#top">Back to top<span aria-hidden="true">↑</span></a></footer>
		</div>
	);
}
