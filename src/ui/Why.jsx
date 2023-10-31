import { BsWindowFullscreen, BsPalette, BsGrid3X3 } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

export default function Why() {
  return (
    <section className="pt-32 pb-24 bg-brand text-stone-50">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-stone-200 text-center max-w-xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
          facilis, in porro esse eveniet.
        </p>

        <div className="grid grid-cols-3 gap-8">
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <BsWindowFullscreen className=" text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-4">SAAS Focused </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <BsPalette className=" text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-4">Awesome Design</h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <BsGrid3X3 className=" text-5xl mb-5 " />

            <h3 className="text-2xl font-bold mb-4">Ready to Use </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <FaReact className=" text-5xl mb-5 " />

            <h3 className="text-2xl font-bold mb-4">React Js </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <FiLayers className=" text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-4">Essential Sections </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <HiOutlineRocketLaunch className=" text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-4">Highly Optimized </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
