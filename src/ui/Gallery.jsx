import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "./Testimonial";

export default function Galley({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    // hiddenRight: {
    //   x: "100%",
    //   opacity: 0,
    // },
    // hiddenLeft: {
    //   x: "-100%",
    //   opacity: 0,
    // },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
      },
    },
  };
  const slidersVariants = {
    hover: {
      backgroundColor: "#2944D9",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <section className="pt-32 pb-24 text-stone-50" id="testimonial">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl text-stone-900 font-bold mb-4">
          Hear From Our Clients
        </h2>
        <p className="text-lg text-stone-700 text-center max-w-xl mx-auto mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nostrum
          facilis, in porro esse eveniet.
        </p>

        <div className="">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="w-1/2 mx-auto"
            >
              {testimonials.map((item, index) => {
                if (currentIndex === index)
                  return <Testimonial key={index} item={item} />;
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="carousel-indicator">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
