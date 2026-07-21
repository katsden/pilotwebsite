import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Signatures from "./components/Signatures.js";
import About from "./components/About";
import Footer from "./components/Footer";

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
