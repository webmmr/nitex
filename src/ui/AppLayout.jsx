import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Faq from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";

import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Why from "./Why";

export default function AppLayout() {
  return (
    <>
      {/* <header>
        <Header />
      </header> */}
      <Navbar />
      <Banner />
      <main>
        <Features />
        <About />
        <Why />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
