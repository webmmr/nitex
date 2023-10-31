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

export default function Testimonials() {
  return (
    <section className="pt-32 pb-24 text-stone-50" id="testimonial">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl text-stone-900 font-bold mb-4">
          Hear From Our Clients
        </h2>
        <p className="text-lg text-stone-700 text-center max-w-xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
          facilis, in porro esse eveniet.
        </p>

        <div className="grid grid-cols-3 gap-8">
          <div className=" p-8 shadow-sm rounded-lg border">
            <img
              src="/assets/ayro.svg"
              alt="Ayro"
              className="mb-6"
              width={100}
            />

            <p className="leading-6 text-stone-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales
              erat a libero.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center">
                <img
                  src="/assets/image-1.png"
                  alt="Kylo Ren"
                  className="mr-4"
                  width={70}
                />
                <div>
                  <h5 className="font-bold text-lg text-stone-900">Kylo Ren</h5>
                  <p className="text-stone-600"></p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-8 shadow-sm rounded-lg border">
            <img
              src="/assets/lineicon.svg"
              alt="LineIcon"
              className="mb-6"
              width={150}
            />

            <p className="leading-6 text-stone-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet tempus augue, Sed sodales erat a libero. ac venenatis
              lectus tempus ut.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center">
                <img
                  src="/assets/image-2.png"
                  alt="Kevin Bacon"
                  className="mr-4"
                  width={70}
                />
                <div>
                  <h5 className="font-bold text-lg text-stone-900">
                    Kevin Bacon
                  </h5>
                  <p className="text-stone-600">CEO @ LineIcon</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-8 shadow-sm rounded-lg border">
            <img
              src="/assets/tailgrid.svg"
              alt="TailGrid"
              className="mb-6"
              width={100}
            />

            <p className="leading-6 text-stone-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales
              erat a libero.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center">
                <img
                  src="/assets/image-3.png"
                  alt="Maki Zenin"
                  className="mr-4"
                />
                <div>
                  <h5 className="font-bold text-lg text-stone-900">
                    Maki Zenin
                  </h5>
                  <p className="text-stone-600">Founder @ TailGrids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
