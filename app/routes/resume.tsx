import { Arrow, ContactSection, SiteFooter, SiteHeader } from "../components/site";
import { contact } from "../data/contact";
import { pageMeta, profile } from "../data/profile";

const description = "Education, experience, projects, and technical skills for Tevin Smith, a full-stack developer.";

export const meta = () => pageMeta({ title: `Résumé | ${profile.name}`, description, path: "/resume" });
export const links = () => [{ rel: "canonical", href: `${profile.url}/resume` }];

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
				<section className="container resume-preview" aria-label="Résumé preview">
					<a href={contact.resume} target="_blank" rel="noopener noreferrer" aria-label="Open Tevin Smith's résumé as a PDF">
						<img src="/tevin-smith-resume-preview.png" alt="Preview of Tevin Smith's one-page résumé" width="1190" height="1540" />
					</a>
				</section>
				<ContactSection />
			</main>
			<SiteFooter />
		</div>
	);
}
