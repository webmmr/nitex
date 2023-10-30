import { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">
          Our Pricing Plan
        </h2>
        <p className="text-lg text-stone-700 text-center max-w-xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
          facilis, in porro esse eveniet.
        </p>

        <div className=" rounded-lg flex justify-center p-4 mb-12">
          <p
            className={` font-bold text-xl ${
              toggle ? "text-stone-900" : "text-brand"
            }`}
          >
            Monthly
          </p>
          <div className="flex items-center justify-center mx-5">
            <label
              htmlFor="toggleB"
              className="flex items-center cursor-pointer hover:pointer "
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  onChange={() => setToggle((toggle) => !toggle)}
                />

                <div className="block bg-brand w-12 h-6 rounded-full"></div>

                <div
                  className={`dot absolute top-1  bg-white w-4 h-4 rounded-full transition ${
                    !toggle ? "translate-x-1 " : "translate-x-7"
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <p
            className={` font-bold text-xl ${
              !toggle ? "text-stone-900" : "text-brand"
            }`}
          >
            Yearly
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div className="py-8 px-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4">Intro</h3>
            <h2 className="mb-4 text-3xl font-bold">
              {!toggle ? "$19" : "$219"}
              <span className="font-normal">
                {" "}
                / {!toggle ? "month" : "year"}
              </span>
            </h2>
            <p className="leading-6 mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Single User</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Limited Storage</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">24/7 Support</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineClose className="mr-4 text-red-800" />
                </span>
                <p className="">Unlimited Access</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineClose className="mr-4 text-red-800 " />
                </span>
                <p className="">Free Future Updates</p>
              </li>
            </ul>
            <Link
              to="/"
              className=" font-bold border-2 border-stone-700 py-4 px-8 inline-block rounded-full text-stone-700 hover:bg-stone-900 hover:border-stone-900 hover:text-stone-50"
            >
              Choose Plan
            </Link>
          </div>
          <div className="py-8 px-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4">Basic</h3>
            <h2 className="mb-4 text-3xl font-bold">
              {!toggle ? "$39" : "$459"}
              <span className="font-normal">
                {" "}
                / {!toggle ? "month" : "year"}
              </span>
            </h2>
            <p className="leading-6 mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Multiple Users</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Limited Storage</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">24/7 Support</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineClose className="mr-4 text-red-800" />
                </span>
                <p className="">Unlimited Access</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineClose className="mr-4 text-red-800 " />
                </span>
                <p className="">Free Future Updates</p>
              </li>
            </ul>
            <Link
              to="/"
              className=" font-bold border-2 border-stone-700 py-4 px-8 inline-block rounded-full text-stone-700 hover:bg-stone-900 hover:border-stone-900 hover:text-stone-50"
            >
              Choose Plan
            </Link>
          </div>
          <div className="py-8 px-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4">Popular</h3>
            <h2 className="mb-4 text-3xl font-bold">
              {!toggle ? "$49" : "$579"}
              <span className="font-normal">
                {" "}
                / {!toggle ? "month" : "year"}
              </span>
            </h2>
            <p className="leading-6 mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Multiple Users</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Unlimited Storage</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">24/7 Support</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand" />
                </span>
                <p className="">Unlimited Access</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineClose className="mr-4 text-red-800 " />
                </span>
                <p className="">Free Future Updates</p>
              </li>
            </ul>
            <Link
              to="/"
              className=" font-bold border-2 border-stone-700 py-4 px-8 inline-block rounded-full text-stone-700 hover:bg-stone-900 hover:border-stone-900 hover:text-stone-50"
            >
              Choose Plan
            </Link>
          </div>
          <div className="py-8 px-6 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-4">Enterprise</h3>
            <h2 className="mb-4 text-3xl font-bold">
              {!toggle ? "$99" : "$1179"}
              <span className="font-normal">
                {" "}
                / {!toggle ? "month" : "year"}
              </span>
            </h2>
            <p className="leading-6 mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Multiple Users</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Unlimited Storage</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">24/7 Support</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand" />
                </span>
                <p className="">Unlimited Access</p>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <AiOutlineCheck className="mr-4 text-brand " />
                </span>
                <p className="">Free Future Updates</p>
              </li>
            </ul>
            <Link
              to="/"
              className=" font-bold border-2 border-stone-700 py-4 px-8 inline-block rounded-full text-stone-700 hover:bg-stone-900 hover:border-stone-900 hover:text-stone-50"
            >
              Choose Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
