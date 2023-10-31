import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Why from "./Why";

export default function AppLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Features />
        <About />
        <Why />
        <Pricing />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
