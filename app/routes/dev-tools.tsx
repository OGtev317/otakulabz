import { CollectionPage } from "../components/collection-page";
export const meta = () => [{ title: "Developer Tools — OtakuLabz" }, { name: "description", content: "Developer utilities, public repositories, and reusable tools from OtakuLabz." }];
export const links = () => [{ rel: "canonical", href: "https://otakulabz.xyz/dev-tools" }];
export default function Tools() { return <CollectionPage category="tool" />; }
