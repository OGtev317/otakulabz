import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("projects", "routes/projects.tsx"), route("dev-tools", "routes/dev-tools.tsx"), route("lab", "routes/lab.tsx")] satisfies RouteConfig;
