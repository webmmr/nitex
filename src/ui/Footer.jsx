import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import { HashLink as Link } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-footer bg-contain bg-left bg-no-repeat pt-72 pb-12 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-16 mx-16">
          <div>
            <h2 className="text-3xl font-bold text-stone-50 mb-4">Nitex</h2>
            <p className="leading-6 mb-8 text-stone-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              obcaecati praesentium incidunt? Quod quo iure odit voluptate dicta
              neque consequatur.
            </p>
            {/* Social Links */}
            <ul className="flex gap-4">
              <li>
                <Link to="/">
                  <CiFacebook className="text-3xl text-stone-100" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiTwitter className="text-3xl text-stone-100" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiInstagram className="text-3xl text-stone-100" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiLinkedin className="text-3xl text-stone-100" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-4 font-bold text-stone-50">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-4 text-stone-50 ">
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#features">Features</Link>
              </li>
              <li>
                <Link to="/#why">Why Us</Link>
              </li>
              <li>
                <Link to="/#price">Price</Link>
              </li>
              <li>
                <Link to="/#testimonial">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-4 font-bold text-stone-50">Features</h2>
            <ul className="flex flex-col gap-4 text-stone-50 ">
              <li>
                <Link to="/"> How It Works</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl mb-4 font-bold text-stone-50">
              Contact Us
            </h2>
            <ul className="flex flex-col gap-4 text-stone-50 ">
              <li>
                <Link to="/">
                  House 7, Road 7, Gulshan-1, Dhaka-1212, Bangladesh
                </Link>
              </li>
              <li>
                <Link to="mailto:support@nitex.info">support@nitex.info</Link>
              </li>
              <li>
                <Link to="tel:+8801947633443">+8801947633443</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
