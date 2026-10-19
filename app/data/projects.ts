export type Category = "product" | "tool" | "lab";
export interface Project {
	id: string;
	name: string;
	category: Category;
	status: "Live" | "Beta" | "Prototype" | "Research";
	summary: string;
	audience: string;
	updatedAt: string;
	featured?: boolean;
	screenshot?: { src: string; alt: string };
	installation?: string;
	links: { label: "Try it" | "Documentation" | "Source"; href: string }[];
}

// Intentionally empty: publish only approved builds with real screenshots,
// working links, an accurate status and a meaningful update date.
export const projects: Project[] = [];
