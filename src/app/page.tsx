"use client";

import { useEffect } from "react";
import { portfolioMarkup, portfolioScripts } from "@/data/portfolioMarkup";

let portfolioScriptsStarted = false;

export default function Home() {
  useEffect(() => {
    if (portfolioScriptsStarted) return;
    portfolioScriptsStarted = true;

    portfolioScripts.forEach((source) => {
      const script = document.createElement("script");
      script.text = source;
      document.head.appendChild(script);
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />;
}
