import { useState } from "react";
import { Arrow, ContactSection, ProjectCard, SiteFooter, SiteHeader } from "../components/site";
import { contact } from "../data/contact";
import { pageMeta, principles, profile, skills } from "../data/profile";
import { projects } from "../data/projects";

const title = `${profile.name} | Full-Stack Developer`;

export function meta() {
	return [
		...pageMeta({ title, description: profile.summary, path: "/" }),
		{ "script:ld+json": { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Full-Stack Developer", url: profile.url, sameAs: [contact.github] } },
	];
}

export const links = () => [{ rel: "canonical", href: `${profile.url}/` }];

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

export default function Home() {
	const [motionPaused, setMotionPaused] = useState(false);
	const featured = projects.filter(project => project.featured);
	const openToday = projects.filter(project => project.links.some(link => link.label !== "Source")).length;
	const stats = [
		{ value: projects.length, label: "products and prototypes" },
		{ value: openToday, label: "you can open today" },
		{ value: 4, label: "blockchain networks" },
	];

	return (
		<div id="top" className="site-shell" data-motion={motionPaused ? "paused" : "playing"}>
			<a className="skip-link" href="#main">Skip to content</a>
			<SiteHeader />
			<main id="main">
				<section className="container hero" aria-labelledby="hero-title">
					<div className="hero-copy">
						<p className="eyebrow"><span className="signal-dot" /> OPEN TO FULL-TIME AND CONTRACT WORK</p>
						<h1 id="hero-title">{profile.name}</h1>
						<p className="hero-role">{profile.role}</p>
						<p className="hero-description">{profile.summary}</p>
						<div className="hero-actions">
							<a className="button button-primary" href="/projects">View my work<Arrow /></a>
							{contact.email && <a className="text-link" href={`mailto:${contact.email}`}>Email me<Arrow /></a>}
							<a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub<Arrow diagonal /></a>
						</div>
					</div>
					<div className="studio-art"><AtomBackground /></div>
				</section>
				<div className="container motion-control">
					<button type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused(!motionPaused)}>{motionPaused ? "Resume" : "Pause"} animation<span aria-hidden="true">{motionPaused ? "▷" : "Ⅱ"}</span></button>
				</div>
				<dl className="container stats-strip">{stats.map(stat => <div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt></div>)}</dl>

				<section id="work" className="container page-section" aria-labelledby="work-title">
					<div className="section-heading">
						<div><p className="eyebrow"><span>01 /</span> SELECTED WORK</p><h2 id="work-title">Products I’ve built.</h2></div>
						<a className="text-link" href="/projects">See all {projects.length} projects<Arrow /></a>
					</div>
					<div className="project-grid">{featured.map(project => <ProjectCard key={project.id} project={project} />)}</div>
				</section>

				<section id="skills" className="container page-section" aria-labelledby="skills-title">
					<div className="section-heading"><div><p className="eyebrow"><span>02 /</span> SKILLS</p><h2 id="skills-title">What I work with.</h2></div><p>Each group lists where you can see those skills in use.</p></div>
					<div className="skills-grid">
						{skills.map(skill => <article className="skill-card" key={skill.group}><h3>{skill.group}</h3><ul className="stack-list">{skill.items.map(item => <li key={item}>{item}</li>)}</ul><p><strong>Used in</strong> {skill.proof}</p></article>)}
					</div>
				</section>

				<section id="about" className="container page-section about-section" aria-labelledby="about-title">
					<div><p className="eyebrow"><span>03 /</span> ABOUT</p><h2 id="about-title">From first idea to live product.</h2></div>
					<div className="about-copy">
						<p>OtakuLabz is my independent studio, where I turn ideas into working software.</p>
						<p>I like owning a product end to end: shaping the experience, designing the data model, testing the risky parts, and getting it in front of real people.</p>
						<p>I’m studying computer science at Indiana University, with graduation expected in 2029. I also work as a fiber optic technician, diagnosing connection problems and explaining technical issues to customers.</p>
						<ul className="principles">{principles.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>)}</ul>
					</div>
				</section>
				<ContactSection />
			</main>
			<SiteFooter />
		</div>
	);
}
