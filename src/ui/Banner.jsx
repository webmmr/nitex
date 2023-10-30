import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="bg-banner bg-contain bg-no-repeat bg-center pt-32 pb-10   -mt-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hero-text">
          <h1 className="text-6xl text-stone-50 font-bold mb-6 leading-[5rem]">
            Launch Your SaaS Website in Minutes!
          </h1>
          <p className="text-stone-200 text-xl mr-20 mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            impedit ipsum nesciunt illo nisi expedita error exercitationem
            maxime voluptate a.
          </p>
          <Link
            to="/#features"
            className=" font-bold border-2 border-stone-50 py-4 px-8 inline-block rounded-full text-stone-50 hover:bg-stone-100 hover:border-stone-100 hover:text-stone-800"
          >
            Get Started
          </Link>
        </div>
        <img
          src="/assets/hero-img.png"
          alt="Hero Image"
          className="object-cover"
        />
      </div>
    </section>
  );
}
