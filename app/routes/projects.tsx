import { ContactSection, ProjectCard, SiteFooter, SiteHeader } from "../components/site";
import { pageMeta, profile } from "../data/profile";
import { categories, projects } from "../data/projects";

const description = "Full-stack products, client and commerce websites, and zero-knowledge tools built by Tevin Smith.";

export const meta = () => pageMeta({ title: `Work | ${profile.name}`, description, path: "/projects" });
export const links = () => [{ rel: "canonical", href: `${profile.url}/projects` }];

export default function Projects() {
	return (
		<div id="top" className="site-shell">
			<a className="skip-link" href="#main">Skip to content</a>
			<SiteHeader />
			<main id="main" className="collection-main">
				<section className="container collection-intro">
					<a className="text-link" href="/">← Back to home</a>
					<p className="eyebrow">SELECTED WORK</p>
					<h1>Work</h1>
					<p>What each project does, what I built, the technology behind it, and where it stands today.</p>
				</section>
				{categories.map(category => (
					<section className="container collection-group" key={category.id} aria-labelledby={`${category.id}-title`}>
						<h2 id={`${category.id}-title`}>{category.title}</h2>
						<p>{category.description}</p>
						<div className="project-grid">{projects.filter(project => project.category === category.id).map(project => <ProjectCard key={project.id} project={project} detailed />)}</div>
					</section>
				))}
				<ContactSection />
			</main>
			<SiteFooter />
		</div>
	);
}
