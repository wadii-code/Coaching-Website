import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Transformations } from "@/components/sections/transformations";
import { Gallery } from "@/components/sections/gallery";
import { Programs } from "@/components/sections/programs";
import { Process } from "@/components/sections/process";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Faq } from "@/components/sections/faq";
import { GooeyAccent } from "@/components/sections/gooey-accent";
import { Newsletter } from "@/components/sections/newsletter";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Transformations />
        <Gallery />
        <Programs />
        <Process />
        <BlogPreview />
        <Faq />
        <GooeyAccent />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
