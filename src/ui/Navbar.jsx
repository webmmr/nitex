import { useEffect } from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [offset, setOffset] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Adjust the scroll position threshold as needed
        setOffset(true);
      } else {
        setOffset(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`py-6  sticky top-0 ease-in-out z-50 ${
        offset ? "bg-brandDark" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold uppercase text-stone-50">
          Nitex
        </Link>

        {/* Nav Menu */}

        <nav className="hidden sm:block">
          <ul className="flex justify-end">
            <li className="text-stone-50">
              <Link to="/#features">Features</Link>
            </li>
            <li className="ml-4 text-stone-50">
              <Link to="/#about">About</Link>
            </li>
            <li className="ml-4 text-stone-50">
              <Link to="/#why">Why Us</Link>
            </li>
            <li className="ml-4 text-stone-50">
              <Link to="/#price">Price</Link>
            </li>

            <li className="ml-4 text-stone-50">
              <Link to="/#testimonial">Testimonial</Link>
            </li>
            <li className="ml-4 text-stone-50">
              <Link to="/#faq">FAQ</Link>
            </li>
            <li className="ml-4 text-stone-50">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <RxCross1 className="text-stone-50 text-xl font-bold" />
            ) : (
              <FaBars className="text-stone-50 text-xl font-bold" />
            )}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-brand absolute top-16 right-0 mx-4 my-2 w-full`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li className="text-stone-50">
                <Link to="/#features">Features</Link>
              </li>
              <li className="ml-4 text-stone-50">
                <Link to="/#about">About</Link>
              </li>
              <li className="ml-4 text-stone-50">
                <Link to="/#why">Why Us</Link>
              </li>
              <li className="ml-4 text-stone-50">
                <Link to="/#price">Price</Link>
              </li>
              <li className="ml-4 text-stone-50">
                <Link to="/#testimonial">Testimonial</Link>
              </li>
              <li className="ml-4 text-stone-50">
                <Link to="/#faq">FAQ</Link>
              </li>
              <li className="ml-4 text-stone-50">
                <Link to="/#contact">Contact</Link>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
