import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
