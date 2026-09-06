import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "../components/sections/nav";
import { Hero } from "../components/sections/hero";
import { Timeline } from "../components/sections/timeline";
import { Expertise } from "../components/sections/expertise";
import { Achievements } from "../components/sections/achievements";
import { Certifications } from "../components/sections/certifications";
import { Vision } from "../components/sections/vision";
import { Contact } from "../components/sections/contact";
import { Footer } from "../components/sections/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oleh Mordach, PMP — Delivery Manager | Warsaw" },
      {
        name: "description",
        content:
          "Personal website of Oleh Mordach, PMP — Delivery Manager building predictable delivery for complex technology products.",
      },
      { property: "og:title", content: "Oleh Mordach, PMP — Delivery Manager" },
      {
        property: "og:description",
        content: "Building predictable delivery for complex technology products.",
      },
      { name: "twitter:title", content: "Oleh Mordach, PMP — Delivery Manager" },
      {
        name: "twitter:description",
        content: "Building predictable delivery for complex technology products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Nav />
      <Hero />
      <Timeline />
      <Expertise />
      <Achievements />
      <Certifications />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
