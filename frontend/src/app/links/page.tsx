import type { Metadata } from "next";
import { linksTheme } from "./links-theme";
import LinksContentClient from "./LinksContentClient";

export const metadata: Metadata = {
  title: "links",
  description: "All my important links in one place.",
};

export default function LinksPage() {
  return (
    <div className={`${linksTheme.fullBleed} ${linksTheme.pageBackground}`}>
      <LinksContentClient />
    </div>
  );
}

