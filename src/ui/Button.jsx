import { Link } from "react-router-dom";

export default function Button({ children }) {
  return (
    <Link
      to="/"
      className=" font-bold border-2 border-stone-700 py-4 px-8 inline-block rounded-full text-stone-700 hover:bg-stone-900 hover:border-stone-900 hover:text-stone-50"
    >
      {children}
    </Link>
  );
}
