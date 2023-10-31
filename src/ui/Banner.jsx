import Button from "./Button";

export default function Banner() {
  return (
    <section className="bg-banner md:bg-contain bg-cover bg-no-repeat md:bg-center bg-top pt-32 pb-10 -mt-24">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center">
        <div className="hero-text text-center mdLtext-left">
          <h1 className="md:text-6xl text-3xl text-stone-50 font-bold mb-6 leading-[5rem]">
            Launch Your SaaS Website in Minutes!
          </h1>
          <p className="text-stone-200 text-xl md:mr-20 mb-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            impedit ipsum nesciunt illo nisi expedita error exercitationem
            maxime voluptate a.
          </p>
          <Button type="banner">Get Started</Button>
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
