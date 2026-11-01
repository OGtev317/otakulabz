import { CollectionPage } from "../components/collection-page";
export const meta = () => [{ title: "The Lab — OtakuLabz" }, { name: "description", content: "Early prototypes, research, and experiments from OtakuLabz, with clear development status." }];
export const links = () => [{ rel: "canonical", href: "https://otakulabz.xyz/lab" }];
export default function Lab() { return <CollectionPage category="lab" />; }
