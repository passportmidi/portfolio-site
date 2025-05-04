import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";

export default function HomePage() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
