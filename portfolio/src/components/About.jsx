// src/components/About.jsx
import React, { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { delay, motion, useInView } from "framer-motion";

// TODO: Need to animate About Section

const About = () => {
  const h2Ref = useRef(null);
  const imgRef = useRef(null);
  const pRef = useRef(null);
  const isH2InView = useInView(h2Ref, { once: true, amount: "all" });
  const isImgInView = useInView(imgRef, { once: true, amount: "some" });
  const isPInView = useInView(pRef, { once: true, amount: "some" });

  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="container mx-auto scroll-mt-24 px-6">
      <motion.h2
        ref={h2Ref}
        variants={variant}
        initial="hidden"
        animate={isH2InView ? "visible" : ""}
        className="mb-6 text-3xl font-bold text-white"
      >
        About Me
      </motion.h2>
      <div className="mb-8 flex flex-col items-center md:flex-row">
        <motion.div
          ref={imgRef}
          variants={variant}
          initial="hidden"
          animate={isImgInView ? "visible" : ""}
        >
          <FaUserCircle className="mb-6 h-32 w-32 md:mb-0 md:mr-8 md:h-48 md:w-48" />
        </motion.div>
        <motion.p
          ref={pRef}
          variants={variant}
          initial="hidden"
          animate={isPInView ? "visible" : ""}
          className="text-xl text-gray-400"
        >
          I'm a Fullstack Developer with a passion for creating efficient and
          scalable web applications. With a solid foundation in both front-end
          and back-end technologies, I love bringing ideas to life in the
          browser.
          <br /> I am currently pursuing a Bachelor's Degree in Computer
          Science, with my expected graduation date to be Fall 2024.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
