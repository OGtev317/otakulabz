import { projects, type Category } from "../data/projects";
import { contact } from "../data/contact";
import { Arrow, ContactSection, ProjectCard, SiteFooter, SiteHeader } from "./site";

const collections = {
  product: { title: "Projects", eyebrow: "BUILT WITH PURPOSE", heading: "Ideas you can explore.", description: "Communities, collections, and applications from OtakuLabz. Discover what each project does, who it is for, and where it stands today.", empty: "Projects will appear here when they are ready to explore." },
  tool: { title: "Developer Tools", eyebrow: "FOR THE EVERYDAY BUILDER", heading: "Less friction. More building.", description: "A home for reusable libraries, utilities, and integrations. Each published tool will include its purpose, setup instructions, and a link to its public source or documentation.", empty: "No standalone developer tools are listed yet. You can explore my public repositories on GitHub while the toolbox takes shape." },
  lab: { title: "The Lab", eyebrow: "CURIOSITY IN PROGRESS", heading: "Room to experiment.", description: "Early prototypes, research, and ideas under exploration. Lab work is clearly labeled so you can distinguish an experiment from a ready-to-use project.", empty: "No experiments are published here yet. Follow the public work on GitHub for a look at what is taking shape." },
};

export function CollectionPage({ category }: { category: Category }) {
  const page = collections[category];
  const items = projects.filter(project => project.category === category);
  return <div id="top" className="site-shell"><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main" className="collection-main"><section className="container collection-intro"><a className="text-link" href="/">← Back to the studio</a><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><h2>{page.heading}</h2><p>{page.description}</p></section><section className="container collection-content" aria-label={page.title}>{items.length ? <div className="project-grid">{items.map(project => <ProjectCard key={project.id} project={project} />)}</div> : <div className="collection-empty"><p className="eyebrow">IN THE MAKING</p><h2>A thoughtful start.</h2><p>{page.empty}</p><a className="text-link" href={contact.repositories} target="_blank" rel="noopener noreferrer">Browse public repositories<Arrow diagonal /></a></div>}</section><ContactSection /></main><SiteFooter /></div>;
}
