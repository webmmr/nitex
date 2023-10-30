import { SiTailwindcss } from "react-icons/si";
import { AiOutlineLayout, AiOutlineCoffee } from "react-icons/ai";

export default function Features() {
  return (
    <section className="py-32">
      <div className="container mx-auto flex justify-between items-center gap-8">
        <div className=" text-center p-8 bg-white rounded-lg shadow-sm flex-1">
          <SiTailwindcss className="m-auto text-5xl mb-5 text-brand" />

          <h3 className="text-2xl font-bold mb-4">Build with Tailwind </h3>
          <p className="leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            sint quo beatae. Dolorum laboriosam libero, cum accusamus optio iure
            dolores.
          </p>
        </div>

        <div className=" text-center p-8 bg-white rounded-lg shadow-sm flex-1">
          <AiOutlineLayout className="m-auto text-5xl mb-5 text-brand" />

          <h3 className="text-2xl font-bold mb-4">Clean Layout</h3>
          <p className="leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            sint quo beatae. Dolorum laboriosam libero, cum accusamus optio iure
            dolores.
          </p>
        </div>

        <div className=" text-center p-8 bg-white rounded-lg shadow-sm flex-1">
          <AiOutlineCoffee className="m-auto text-5xl mb-5 text-brand" />

          <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
          <p className="leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            sint quo beatae. Dolorum laboriosam libero, cum accusamus optio iure
            dolores.
          </p>
        </div>
      </div>
    </section>
  );
}
