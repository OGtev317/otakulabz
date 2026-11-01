import { CollectionPage } from "../components/collection-page";
export const meta = () => [{ title: "Projects — OtakuLabz" }, { name: "description", content: "Explore OtakuSpace, OtakuSkin, BaseCash, and the purpose behind each OtakuLabz project." }];
export const links = () => [{ rel: "canonical", href: "https://otakulabz.xyz/projects" }];
export default function Projects() { return <CollectionPage category="product" />; }
