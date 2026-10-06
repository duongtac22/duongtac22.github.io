import type { Metadata } from "next";
import Portfolio from "../Portfolio";
import { content } from "../content";

export const metadata: Metadata = {
  ...content.vi.meta,
  alternates: { languages: { en: "/", vi: "/vi/" } },
};

export default function HomeVi() {
  return <Portfolio lang="vi" />;
}
