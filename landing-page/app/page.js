import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Signatures from "./components/Signatures.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Signatures />
      <About />
      <Footer />
    </main>
  );
}
