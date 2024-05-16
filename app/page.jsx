import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Review from "../components/Review";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Review />
      <Contact />
    </main>
  );
}
