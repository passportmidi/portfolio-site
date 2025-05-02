import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Projects } from "../components/Projects/Projects";

export default function HomePage() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
