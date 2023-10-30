import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Pricing from "./Pricing";
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
