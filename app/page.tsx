import Introduction from "@/app/components/introduction";
import Navbar from "@/app/components/navbar";
import Projects from "@/app/components/projects";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
import Curtain from "@/app/components/curtain";
import About from "@/app/components/about";

export default function Home() {
  return (
      <main className="flex flex-col bg-black container mx-auto font-sans scroll-smooth">
          <Curtain />
          <div className="min-h-screen">
              <Navbar />
              <div className="mt-24">
                <Introduction />
              </div>
          </div>
          <div id="about" className="">
              <About />
          </div>
          <div id="projects" className="">
              <Projects />
          </div>
          <div id="contact" >
              <Contact />
          </div>
          <Footer />
      </main>
  );
}
