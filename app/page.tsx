import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";
import { Blog } from "../components/Blog/Blog";
import { GetInTouch } from "../components/GetInTouch/GetInTouch";

export default function HomePage() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Blog />
        <GetInTouch />
      </main>
    </div>
  );
}
