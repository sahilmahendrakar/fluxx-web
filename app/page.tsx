import { DemoSection } from "@/components/site/DemoSection";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { getSiteUrls } from "@/content/site";

export default function Home() {
  const urls = getSiteUrls();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <div className="site-ambient pointer-events-none fixed inset-0" aria-hidden />
      <div className="relative z-10 flex flex-1 flex-col">
        <Nav urls={urls} />
        <main className="flex flex-1 flex-col">
          <Hero urls={urls} />
          <DemoSection urls={urls} />
          <Faq />
        </main>
        <Footer urls={urls} />
      </div>
    </div>
  );
}
