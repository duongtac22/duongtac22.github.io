import type { Metadata } from "next";
import Portfolio from "./Portfolio";
import { content } from "./content";

export const metadata: Metadata = {
  ...content.en.meta,
  alternates: { languages: { en: "/", vi: "/vi/" } },
};

export default function Home() {
  return <Portfolio lang="en" />;
}
