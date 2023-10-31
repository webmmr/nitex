import { SiTailwindcss } from "react-icons/si";
import { AiOutlineLayout, AiOutlineCoffee } from "react-icons/ai";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="py-32 " id="contact">
      <div className="container mx-auto">
        <div className="p-16 bg-contact bg-cover bg-no-repeat bg-center rounded-lg">
          <h2 className="text-center text-3xl text-stone-50 font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-stone-200 text-center max-w-xl mx-auto mb-16">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
            facilis, in porro esse eveniet.
          </p>

          <form
            action="#"
            className="flex flex-col gap-8 md:w-3/5 w-full mx-auto "
          >
            <input
              type="text"
              id="name"
              name="name"
              className="p-4 rounded-lg border"
              placeholder="Your Name"
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-4 rounded-lg border"
              placeholder="Your Phone Number"
            />

            <input
              type="email"
              id="email"
              name="email"
              className="p-4 rounded-lg border"
              placeholder="Your Email Address"
              required
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-4 rounded-lg border"
              placeholder="Your Message"
              required
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className="font-bold border-2 py-4 px-8 rounded-full border-stone-50 text-stone-50 mx-auto hover:bg-brand hover:border-brand hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
