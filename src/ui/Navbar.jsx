import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="container mx-auto py-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold uppercase text-stone-50">
        Nitex
      </Link>

      {/* Nav Menu */}
      <nav>
        <ul className="flex justify-end">
          <li className="text-stone-50">
            <NavLink>Features</NavLink>
          </li>
          <li className="ml-4 text-stone-50">
            <NavLink>About</NavLink>
          </li>
          <li className="ml-4 text-stone-50">
            <NavLink>Why Us</NavLink>
          </li>
          <li className="ml-4 text-stone-50">
            <NavLink>Price</NavLink>
          </li>
          <li className="ml-4 text-stone-50">
            <NavLink>FAQ</NavLink>
          </li>
          <li className="ml-4 text-stone-50">
            <NavLink>Testimonial</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
