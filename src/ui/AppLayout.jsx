import { Suspense, lazy } from "react";
import Gallery from "./Gallery";

const Banner = lazy(() => import("./Banner"));
const Navbar = lazy(() => import("./Navbar"));
const Features = lazy(() => import("./Features"));
const About = lazy(() => import("./About"));
const Why = lazy(() => import("./Why"));
const Pricing = lazy(() => import("./Pricing"));
const Testimonials = lazy(() => import("./Testimonials"));
const Faq = lazy(() => import("./FAQ"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const testimonials = [
  {
    image: "/assets/ayro.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamlaoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    personImage: "/assets/image-1.png",
    person: "Kylo Ren",
    designation: "Software Engineer @ Aylo",
  },
  {
    image: "/assets/lineicon.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamlaoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    personImage: "/assets/image-2.png",
    person: "Kevin Bacon",
    designation: "Software Engineer @ Lineicon",
  },
  {
    image: "/assets/tailgrid.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamlaoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    personImage: "/assets/image-3.png",
    person: "Martina hingis",
    designation: "Software Engineer @ TailGrids",
  },
  {
    image: "/assets/uidecks.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullamlaoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    personImage: "/assets/image-4.png",
    person: "Kugisaki Nobara",
    designation: "Software Engineer @ UiDecks",
  },
];

export default function AppLayout() {
  return (
    <>
      {/* <header>
        <Header />
      </header> */}
      <Suspense>
        <Navbar />
      </Suspense>
      <Suspense>
        <Banner />
      </Suspense>
      <main>
        <Suspense>
          <Features />
        </Suspense>
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Why />
        </Suspense>
        <Suspense>
          <Pricing />
        </Suspense>
        <Suspense>
          <Gallery testimonials={testimonials} />
        </Suspense>
        <Suspense>{/* <Testimonials /> */}</Suspense>
        <Suspense>
          <Faq />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
