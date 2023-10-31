import { AiFillCheckCircle } from "react-icons/ai";
import Button from "./Button";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const animationOpacityLeft = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, translateX: -100 },
};

const animationOpacityRight = {
  visible: { opacity: 1, translateX: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, translateX: 100 },
};

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-32" id="about">
      <div className="container mx-auto">
        <div id="online" className="flex items-center mb-16">
          <div className="flex-1 relative">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={animationOpacityLeft}
            >
              <img
                src="/assets/about-left-shape.svg"
                alt="About left shape"
                className="absolute top-0 left-0 -z-20"
              />
              <img
                src="/assets/about-1.png"
                alt="About Image"
                className=" py-32 m-auto"
              />
              <img
                src="/assets/left-dots.svg"
                alt="Left Dots"
                className="absolute bottom-10 right-32 -z-10"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">
              Perfect Solution Thriving Online Business
            </h2>
            <p className="text-stone-700 leading-8 mb-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem.
            </p>
            <Button type="primary">Discover More</Button>
          </div>
        </div>
        <div id="features" className="flex items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-stone-900">
              Easy to Use with Tons of Awesome Features
            </h2>
            <p className="text-stone-700 leading-8 mb-4 mr-20">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              dinonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <ul className="mb-8 ml-4">
              <li className="flex items-center mb-6">
                <span>
                  <AiFillCheckCircle className="mr-4 text-brand text-xl" />
                </span>
                <p className="text-lg">Quick Access</p>
              </li>
              <li className="flex items-center mb-6">
                <span>
                  <AiFillCheckCircle className="mr-4 text-brand text-xl" />
                </span>
                <p className="text-lg">Easily to Manage</p>
              </li>
              <li className="flex items-center mb-6">
                <span>
                  <AiFillCheckCircle className="mr-4 text-brand text-xl" />
                </span>
                <p className="text-lg">24/7 Support</p>
              </li>
            </ul>
            <Button type="primary">Discover More</Button>
          </div>
          <div className="flex-1 relative">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={animationOpacityRight}
            >
              <img
                src="/assets/about-right-shape.svg"
                alt="About right shape"
                className="absolute top-0 right-0  -z-20"
              />
              <img
                src="/assets/about-2.png"
                alt="About Image"
                className=" py-32 m-auto"
              />
              <img
                src="/assets/right-dots.svg"
                alt="Right Dots"
                className="absolute bottom-10 left-32 -z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
