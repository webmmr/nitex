import { SiTailwindcss } from "react-icons/si";
import { AiOutlineLayout, AiOutlineCoffee } from "react-icons/ai";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1531674451676!2d90.41124127579461!3d23.77755948773235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80a2d1a3ead%3A0x86fa43623a76a327!2sNITEX!5e0!3m2!1sen!2sbd!4v1698735355069!5m2!1sen!2sbd"
        width="100%"
        height="800px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0"
      ></iframe>

      <div className="absolute z-10  right-0">
        <div className=" p-8 bg-brandDark opacity-90 rounded-lg shadow-sm border">
          <form action="#" className="flex flex-col gap-8">
            <input
              type="text"
              id="name"
              name="name"
              className="p-4 rounded-lg"
              placeholder="Your Name"
              required
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-4 rounded-lg"
              placeholder="Your Phone Number"
            />

            <input
              type="email"
              id="email"
              name="email"
              className="p-4 rounded-lg"
              placeholder="Your Email Address"
              required
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-4 rounded-lg"
              placeholder="Your Message"
              required
            ></textarea>

            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
