import { SiTailwindcss } from "react-icons/si";
import { AiOutlineLayout, AiOutlineCoffee } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const animationFeatureOne = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, translateY: 50 },
};

const animationFeatureTwo = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, translateY: 100 },
};

const animationFeatureThree = {
  visible: { opacity: 1, translateY: 0, transition: { duration: 0.9 } },
  hidden: { opacity: 0, translateY: 150 },
};

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-32" id="features">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center gap-8">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationFeatureOne}
        >
          <div className=" text-center p-8 bg-white rounded-lg shadow-sm flex-1 border">
            <SiTailwindcss className="m-auto text-5xl mb-5 text-brand" />

            <h3 className="text-2xl font-bold mb-4">Build with Tailwind </h3>
            <p className="leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              sint quo beatae. Dolorum laboriosam libero, cum accusamus optio
              iure dolores.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationFeatureTwo}
        >
          <div className=" text-center p-8 bg-white rounded-lg shadow-sm flex-1 border">
            <AiOutlineLayout className="m-auto text-5xl mb-5 text-brand" />

            <h3 className="text-2xl font-bold mb-4">Clean Layout</h3>
            <p className="leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              sint quo beatae. Dolorum laboriosam libero, cum accusamus optio
              iure dolores.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationFeatureThree}
        >
          <div className=" text-center p-8 bg-white rounded-lg shadow-sm flex-1 border">
            <AiOutlineCoffee className="m-auto text-5xl mb-5 text-brand" />

            <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
            <p className="leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              sint quo beatae. Dolorum laboriosam libero, cum accusamus optio
              iure dolores.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
