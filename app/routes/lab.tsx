import { redirect } from "react-router";

// Keeps the old public URL working now that all work is on one page.
export const loader = () => redirect("/projects", 301);
