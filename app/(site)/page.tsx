import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import Contact from "@/app/components/Contact";

const roles = [
  "full stack developer",
  "software engineer",
  "web designer",
  "freelancer",
  "systems architect",
];

export default function Home() {
  return (
    <main className="">
      <Hero roles={roles} />
      <About />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
