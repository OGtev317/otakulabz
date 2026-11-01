import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import type { Project, Category } from "../data/projects";
import { contact } from "../data/contact";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header"><div className="container header-inner"><Brand />
    <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
    <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${open ? " is-open" : ""}`}>
      {[{ href: "/projects", label: "Projects" }, { href: "/dev-tools", label: "Developer Tools" }, { href: "/lab", label: "The Lab" }].map(link => <NavLink key={link.href} to={link.href} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
      <a href="/#about" onClick={() => setOpen(false)}>About</a><a className="contact-link" href="#contact" onClick={() => setOpen(false)}>Get in touch<Arrow diagonal /></a>
    </nav></div></header>;
}

export function ContactSection() {
  return <section id="contact" className="container contact-section" aria-labelledby="contact-title"><div><p className="eyebrow">LET’S CONNECT</p><h2 id="contact-title">Meet the builder. Explore the work.</h2><p>Browse my public repositories on GitHub, or connect on Discord for a conversation.</p></div><div className="contact-actions"><a className="button button-primary" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub profile<Arrow diagonal /></a><a className="text-link" href={contact.repositories} target="_blank" rel="noopener noreferrer">Browse public repositories<Arrow diagonal /></a>{contact.discord ? <a className="button button-outline" href={contact.discord} target="_blank" rel="noopener noreferrer">Connect on Discord<Arrow diagonal /></a> : <span className="contact-pending">Discord link coming soon</span>}</div></section>;
}

export function SiteFooter() {
  return <footer className="container site-footer"><Brand /><div className="footer-navigation"><a href="/projects">Projects</a><a href="/dev-tools">Developer Tools</a><a href="/lab">The Lab</a><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>{contact.discord && <a href={contact.discord} target="_blank" rel="noopener noreferrer">Discord ↗</a>}</div><a href="#top">Back to top<span aria-hidden="true">↑</span></a></footer>;
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
	return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Brand() {
	return (
		<a className="brand" href="/" aria-label="OtakuLabz home">
			<span className="brand-mark"><img src="/otakulabz.png" alt="" width="2000" height="2000" /></span>
			<span>otaku<span className="brand-light">labz</span><span className="brand-period">.</span></span>
		</a>
	);
}

export function CategoryIcon({ category }: { category: Category }) {
	return (
		<svg aria-hidden="true" width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
			{category === "product" ? <path d="m16 3 12 7v13l-12 7-12-7V10zM4 10l12 7 12-7M16 17v13M10 6l12 7" /> : category === "tool" ? <><rect x="3" y="5" width="26" height="22" rx="3" /><path d="m9 12 4 4-4 4m8 0h6" /></> : <><path d="M11 3h10M13 3v9L5 25a3 3 0 0 0 3 4h16a3 3 0 0 0 3-4l-8-13V3M9 19h14" /><circle cx="15" cy="24" r="1" /></>}
		</svg>
	);
}

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
	return (
		<article className={`project-card${project.logo ? " has-logo" : ""}`}>
			{project.screenshot && <img className="project-screenshot" src={project.screenshot.src} alt={project.screenshot.alt} loading="lazy" width="960" height="600" />}
			<div className="project-layout">
				{project.logo && <img className="project-logo" src={project.logo.src} alt={project.logo.alt} loading="lazy" width="512" height="512" />}
				<div className="project-body">
					<div className="project-topline"><h3>{project.name}</h3><span className="status-label">{project.status}</span></div>
					<p>{project.summary}</p>{!compact && project.why && <p className="project-why"><strong>Why it exists</strong>{project.why}</p>}{!compact && <p className="project-audience">For {project.audience}</p>}
					{project.installation && <pre className="installation"><code>{project.installation}</code></pre>}
					<div className="project-links">{project.links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}<Arrow diagonal /></a>)}</div>
					<p className="project-updated">Updated <time dateTime={project.updatedAt}>{new Date(project.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></p>
				</div>
			</div>
		</article>
	);
}
