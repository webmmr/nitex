import { Link } from "react-router-dom";

export default function Button({ type, children }) {
  const base = "font-bold border-2 py-4 px-8 inline-block rounded-full";

  const styles = {
    banner:
      base + " border-stone-50 text-stone-50 hover:bg-brand hover:border-brand",
    primary:
      base + " border-brand text-brand hover:bg-brand hover:text-stone-50",
  };

  return (
    <Link to="/" className={styles[type]}>
      {children}
    </Link>
  );
}
