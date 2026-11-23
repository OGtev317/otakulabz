import { useEffect, useId, useRef, useState } from "react";
import { NavLink } from "react-router";
import { contact } from "../data/contact";
import { profile } from "../data/profile";
import type { Project } from "../data/projects";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const button = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (!open) return;
		const close = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				button.current?.focus();
			}
		};
		document.addEventListener("keydown", close);
		return () => document.removeEventListener("keydown", close);
	}, [open]);
	const closeMenu = () => setOpen(false);
	return (
		<header className="site-header">
			<div className="container header-inner">
				<Brand />
				<button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
					{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span>
				</button>
				<nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${open ? " is-open" : ""}`}>
					<NavLink to="/projects" onClick={closeMenu}>Work</NavLink>
					<a href="/#skills" onClick={closeMenu}>Skills</a>
					<a href="/#about" onClick={closeMenu}>About</a>
					{contact.resume && <a href={contact.resume} download onClick={closeMenu}>Résumé</a>}
					<a className="contact-link" href="#contact" onClick={closeMenu}>Get in touch<Arrow /></a>
				</nav>
			</div>
		</header>
	);
}

export function ContactSection() {
	return (
		<section id="contact" className="container contact-section" aria-labelledby="contact-title">
			<div>
				<p className="eyebrow">GET IN TOUCH</p>
				<h2 id="contact-title">Let’s build something useful.</h2>
				<p>I’m open to full-time roles, founding teams, and freelance or contract projects.</p>
			</div>
			<div className="contact-actions">
				{contact.email && <a className="button button-primary" href={`mailto:${contact.email}`}>Email me<Arrow /></a>}
				{contact.resume && <a className="button button-outline" href={contact.resume} download>Download résumé<Arrow /></a>}
				<a className={`button ${contact.email ? "button-outline" : "button-primary"}`} href={contact.github} {...external}>GitHub<Arrow diagonal /></a>
				<a className="button button-outline" href={contact.discord} {...external}>Discord<Arrow diagonal /></a>
			</div>
		</section>
	);
}

export function SiteFooter() {
	return (
		<footer className="container site-footer">
			<Brand />
			<div className="footer-navigation">
				<a href="/projects">Work</a>
				<a href="/#skills">Skills</a>
				<a href="/#about">About</a>
				<a href={contact.github} {...external}>GitHub ↗</a>
				<a href={contact.discord} {...external}>Discord ↗</a>
			</div>
			<a href="#top">Back to top<span aria-hidden="true">↑</span></a>
		</footer>
	);
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
	return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Brand() {
	return (
		<a className="brand" href="/" aria-label={`${profile.name}, OtakuLabz home`}>
			<span className="brand-mark"><img src="/otakulabz.png" alt="" width="2000" height="2000" /></span>
			<span className="brand-text"><strong>{profile.name}</strong><small>otakulabz<i>.</i></small></span>
		</a>
	);
}

function ProjectBreakdown({ project }: { project: Project }) {
	const labelId = useId();
	const { label, steps } = project.breakdown;
	return (
		<div className="project-breakdown">
			<h4 id={labelId}>{label}</h4>
			<ol aria-labelledby={labelId}>{steps.map((step, index) => <li key={step}><span aria-hidden="true">{index + 1}</span>{step}</li>)}</ol>
		</div>
	);
}

function ProjectMedia({ project }: { project: Project }) {
	if (project.image) return <img className="project-media" src={project.image.src} alt={project.image.alt} loading="lazy" width="1280" height="800" />;
	if (project.logo) return <div className="project-media media-logo"><img src={project.logo.src} alt={project.logo.alt} loading="lazy" width="512" height="512" /></div>;
	return (
		<div className="project-media media-flow">
			<ol aria-label={`${project.name} workflow`}>{project.flow?.map(step => <li key={step}>{step}</li>)}</ol>
		</div>
	);
}

export function ProjectCard({ project, detailed = false }: { project: Project; detailed?: boolean }) {
	return (
		<article className="project-card">
			<ProjectMedia project={project} />
			<div className="project-body">
				<div className="project-topline"><h3>{project.name}</h3><span className="status-label">{project.status}</span></div>
				<p className="project-tagline">{project.tagline}</p>
				<p className="project-summary">{project.summary}</p>
				<ProjectBreakdown project={project} />
				{detailed && <div className="project-built"><h4>What I built</h4><ul>{project.built.map(item => <li key={item}>{item}</li>)}</ul></div>}
				<p className="project-shows"><strong>Shows</strong> {project.shows.join(" · ")}</p>
				<ul className="stack-list" aria-label={`${project.name} technologies`}>{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
				{project.note && <p className="project-note">{project.note}</p>}
				{project.links.length > 0 && <div className="project-links">{project.links.map(link => <a href={link.href} key={link.href} {...external}>{link.label}<Arrow diagonal /></a>)}</div>}
			</div>
		</article>
	);
}
