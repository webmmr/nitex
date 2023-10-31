import { BsWindowFullscreen, BsPalette, BsGrid3X3 } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const animationOne = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, translateY: 50 },
};

const animationTwo = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, translateY: 100 },
};

const animationThree = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.9 } },
  hidden: { opacity: 0, translateY: 150 },
};

export default function Why() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="pt-32 pb-24 bg-brand text-stone-50" id="why">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-stone-200 text-center max-w-xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
          facilis, in porro esse eveniet.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationOne}
          >
            <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
              <BsWindowFullscreen className=" text-5xl mb-5" />

              <h3 className="text-2xl font-bold mb-4">SAAS Focused </h3>
              <p className="leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus recusandae molestias vitae sint blanditiis, aliquam
                placeat libero et fuga nostrum.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationTwo}
          >
            <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
              <BsPalette className=" text-5xl mb-5" />

              <h3 className="text-2xl font-bold mb-4">Awesome Design</h3>
              <p className="leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus recusandae molestias vitae sint blanditiis, aliquam
                placeat libero et fuga nostrum.
              </p>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animationThree}
          >
            <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
              <BsGrid3X3 className=" text-5xl mb-5 " />

              <h3 className="text-2xl font-bold mb-4">Ready to Use </h3>
              <p className="leading-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus recusandae molestias vitae sint blanditiis, aliquam
                placeat libero et fuga nostrum.
              </p>
            </div>
          </motion.div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <FaReact className=" text-5xl mb-5 " />

            <h3 className="text-2xl font-bold mb-4">React Js </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <FiLayers className=" text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-4">Essential Sections </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
          <div className=" p-8 shadow-sm rounded-lg bg-brandDark ">
            <HiOutlineRocketLaunch className=" text-5xl mb-5" />

            <h3 className="text-2xl font-bold mb-4">Highly Optimized </h3>
            <p className="leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              recusandae molestias vitae sint blanditiis, aliquam placeat libero
              et fuga nostrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
