import { Arrow, ContactSection, SiteFooter, SiteHeader } from "../components/site";
import { contact } from "../data/contact";
import { coursework, pageMeta, profile } from "../data/profile";
import { resume } from "../data/resume";

const description = "Education, experience, projects, and technical skills for Tevin Smith, a full-stack developer.";

export const meta = () => pageMeta({ title: `Résumé | ${profile.name}`, description, path: "/resume" });
export const links = () => [{ rel: "canonical", href: `${profile.url}/resume` }];

function ResumeEntry({ entry }: { entry: { name: string; description: string; link?: { text: string; href: string }; detail?: string; bullets: string[] } }) {
	return (
		<div className="resume-entry">
			<div className="resume-entry-head">
				<h3>{entry.name}<span>, {entry.description}</span></h3>
				{entry.link ? <a href={entry.link.href} target="_blank" rel="noopener noreferrer">{entry.link.text}</a> : entry.detail && <span>{entry.detail}</span>}
			</div>
			<ul>{entry.bullets.map(item => <li key={item}>{item}</li>)}</ul>
		</div>
	);
}

export default function Resume() {
	return (
		<div id="top" className="site-shell">
			<a className="skip-link" href="#main">Skip to content</a>
			<SiteHeader />
			<main id="main" className="collection-main">
				<section className="container collection-intro">
					<a className="text-link" href="/">← Back to home</a>
					<p className="eyebrow">EDUCATION, EXPERIENCE, AND SKILLS</p>
					<h1>Résumé</h1>
					<p>My education, work experience, projects, and technical skills on one page.</p>
				</section>
				<div className="container resume-actions">
					<a className="button button-primary" href={contact.resume} download>Download PDF<Arrow /></a>
					<a className="button button-outline" href={contact.resume} target="_blank" rel="noopener noreferrer">Open PDF<Arrow diagonal /></a>
				</div>
				<div className="container">
					<article className="resume-document" aria-labelledby="resume-name">
						<p id="resume-name" className="resume-name">{profile.name}</p>
						<ul className="resume-contact">
							<li>{resume.location}</li>
							<li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
							<li><a href={profile.url}>otakulabz.xyz</a></li>
							<li><a href={contact.github} target="_blank" rel="noopener noreferrer">github.com/OGtev317</a></li>
						</ul>
						<section className="resume-block" aria-labelledby="resume-summary"><h2 id="resume-summary">Summary</h2><p>{resume.summary}</p></section>
						<section className="resume-block" aria-labelledby="resume-skills"><h2 id="resume-skills">Technical Skills</h2><ul className="resume-skills">{resume.skills.map(skill => <li key={skill.label}><strong>{skill.label}:</strong> {skill.text}</li>)}</ul></section>
						<section className="resume-block" aria-labelledby="resume-projects"><h2 id="resume-projects">Projects</h2>{resume.projects.map(entry => <ResumeEntry key={entry.name} entry={entry} />)}<p className="resume-additional"><strong>Additional work:</strong> <a href={resume.additional.href} target="_blank" rel="noopener noreferrer">{resume.additional.name}</a>{resume.additional.text}</p></section>
						<section className="resume-block" aria-labelledby="resume-experience"><h2 id="resume-experience">Experience</h2>{resume.experience.map(entry => <ResumeEntry key={entry.name} entry={entry} />)}</section>
						<section className="resume-block" aria-labelledby="resume-education"><h2 id="resume-education">Education</h2><ResumeEntry entry={resume.education} /></section>
					</article>
				</div>
				<section className="container coursework-section" aria-labelledby="coursework-title">
					<p className="eyebrow">INDIANA UNIVERSITY</p>
					<h2 id="coursework-title">What I’ve studied so far.</h2>
					<p>{coursework.degree}</p>
					<div className="coursework-grid">
						{coursework.courses.map(course => (
							<article className="skill-card coursework-card" key={course.title}>
								<h3>{course.title}</h3>
								{course.status && <p className="course-status">{course.status}</p>}
								<dl>{course.details.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}</dl>
							</article>
						))}
					</div>
				</section>
				<ContactSection />
			</main>
			<SiteFooter />
		</div>
	);
}
