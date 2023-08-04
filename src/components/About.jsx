/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a young and skilled frontend engineer, I am passionate about crafting
        visually stunning and user-centric web experiences. My expertise spans a
        wide range of frontend frameworks and languages, enabling me to build
        dynamic and responsive websites with ease. My creative flair and
        attention to detail shine through in every project, making sure each
        design is not only aesthetically pleasing but also optimized for
        seamless user interactions. With a hunger for continuous learning, I
        thrive on staying up-to-date with the latest industry trends and best
        practices, ensuring that I deliver cutting-edge solutions to my clients.
        I take pride in my ability to effectively collaborate with
        cross-functional teams and my commitment to delivering high-quality work
        on time. From turning ideas into code to leaving a lasting impact on
        users, I am dedicated to pushing the boundaries of frontend development
        to create digital experiences that truly captivate and inspire. &nbsp;<a href="https://gainful-verdict-1e4.notion.site/Victor-07dd8b3b68454785b6ee40d915b1154e" className="text-[#7ac142] underline">read more</a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
