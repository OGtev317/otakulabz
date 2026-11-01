import { useState } from "react";
import { Arrow, CategoryIcon, ProjectCard, SiteHeader, SiteFooter, ContactSection } from "../components/site";
import type { Route } from "./+types/home";
import { projects } from "../data/projects";

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

export default function Home() {
	const [motionPaused, setMotionPaused] = useState(false);
	const featured = projects.filter(project => project.featured).slice(0, 3);
	const products = projects.filter(project => project.category === "product");
	const tools = projects.filter(project => project.category === "tool");
	const lab = projects.filter(project => project.category === "lab");

	return (
		<div id="top" className="site-shell" data-motion={motionPaused ? "paused" : "playing"}>
			<a className="skip-link" href="#main">Skip to content</a>
			<SiteHeader />

			<main id="main">
				<section className="container hero" aria-labelledby="hero-title">
					<div className="hero-copy">
						<p className="eyebrow"><span className="signal-dot" /> INDEPENDENT SOFTWARE STUDIO</p>
						<h1 id="hero-title">Ideas into<br /><span>useful things.</span></h1>
						<p className="hero-description">Thoughtful software. Tools that get out of your way.<br className="desktop-break" /> A little curiosity about what comes next.</p>
						<div className="hero-actions"><a className="button button-primary" href="/projects">Explore the projects<Arrow /></a><a className="text-link" href="https://github.com/OGtev317" target="_blank" rel="noopener noreferrer">Find me on GitHub<Arrow diagonal /></a></div>
					</div><StudioArtwork />
				</section>
				<div className="container motion-control"><button type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}>{motionPaused ? "Resume" : "Pause"} background animation<span aria-hidden="true">{motionPaused ? "▷" : "Ⅱ"}</span></button><span className="reduced-motion-note">Motion reduced to match your device settings.</span></div>
				<div className="container studio-strip"><span>SMALL STUDIO. OPEN POSSIBILITIES.</span><div><span>Build with intention</span><i /><span>Share what’s useful</span><i /><span>Stay curious</span></div></div>

				{featured.length > 0 && <section className="container featured-section" aria-labelledby="featured-title"><p className="eyebrow">SELECTED WORK</p><h2 id="featured-title">A few worth exploring.</h2><div className="project-grid">{featured.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>}

				<section id="products" className="container products-section" aria-labelledby="products-title">
					<div className="section-heading"><div><p className="eyebrow"><span>01 /</span> PROJECTS</p><h2 id="products-title">Built with purpose.</h2><a className="text-link" href="/projects">View all projects<Arrow /></a></div><p>Explore our communities, collections, and applications.<br />Discover what each project is here to do.</p></div>
					{products.length ? <div className="project-grid">{products.map(project => <ProjectCard project={project} key={project.id} compact />)}</div> : <div className="product-empty"><div className="empty-emblem"><CategoryIcon category="product" /></div><div><span className="empty-label">THE COLLECTION STARTS HERE</span><h3>Good things take a little building.</h3><p>Products will appear here when they’re ready to explore.</p></div><span className="empty-tag">No products listed yet</span></div>}
				</section>

				<div className="container exploration-grid">
					<section id="tools" className="exploration-section" aria-labelledby="tools-title">
						<p className="eyebrow"><span>02 /</span> DEVELOPER TOOLS</p><div className="exploration-title"><h2 id="tools-title">Less friction.<br />More building.</h2><CategoryIcon category="tool" /></div><p className="section-description">Libraries, utilities and integrations for the developer’s everyday toolkit. Clear documentation and installation guides, right alongside the code.</p><a className="text-link" href="/dev-tools">Explore Developer Tools<Arrow /></a>
						{tools.length ? <div className="project-grid">{tools.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="compact-empty"><span className="empty-symbol" aria-hidden="true">&gt;_</span><div><h3>The toolbox is taking shape.</h3><p>No tools listed yet. Watch this space.</p></div></div>}
					</section>
					<section id="lab" className="exploration-section lab-section" aria-labelledby="lab-title">
						<p className="eyebrow"><span>03 /</span> THE LAB</p><div className="exploration-title"><h2 id="lab-title">Room to<br />experiment.</h2><CategoryIcon category="lab" /></div><p className="section-description">A home for the what-ifs. Prototypes, research and early explorations—with a clear distinction between what works today and what’s still an idea.</p><a className="text-link" href="/lab">Step inside the Lab<Arrow /></a>
						{lab.length ? <div className="project-grid">{lab.map(project => <ProjectCard project={project} key={project.id} />)}</div> : <div className="compact-empty"><span className="empty-symbol lab-symbol" aria-hidden="true">✳</span><div><h3>Curiosity has a home here.</h3><p>No experiments published yet.</p></div></div>}
					</section>
				</div>

				<section id="about" className="container about-section" aria-labelledby="about-title"><div><p className="eyebrow"><span>04 /</span> BEHIND THE BUILDS</p><h2 id="about-title">Independent spirit.<br />Practical purpose.</h2></div><div className="about-copy"><p>OtakuLabz is my space for building software, sharing useful tools, and following ideas a little further.</p><p>The approach is simple: start with a real problem, make something thoughtful, and keep learning along the way. This is where the finished work—and the work in progress—will live.</p><a className="text-link" href="https://github.com/OGtev317" target="_blank" rel="noopener noreferrer">Follow the work on GitHub<Arrow diagonal /></a></div></section>
				<ContactSection />
			</main>
			<SiteFooter />
		</div>
	);
}
