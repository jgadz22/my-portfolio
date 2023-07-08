import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiMysql } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeftBanner = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  const [text] = useTypewriter({
    words: [
      "Desktop App Programmer.",
      "Front-End Web Developer.",
      "Professional Coder.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    if (inView1) {
      animation1.start({
        y: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
        },
      });
    } else {
      animation1.start({
        y: "-100vw",
      });
    }
  }, [inView1, animation1]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.3,
        },
      });
    } else {
      animation2.start({
        x: "-100vw",
      });
    }
  }, [inView2, animation2]);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div ref={ref1}>
        <motion.div animate={animation1}>
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
            <h1 className="text-5xl mdl:text-6xl font-bold text-white">
              Hi, I'm
              <span className="text-designColor capitalize"> Joseph</span>
            </h1>
            <h2 className="text-xl mdl:text-3xl xl:text-4xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#46eb34"
              />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
              I bring a creative flair and technical expertise to craft visually
              stunning and responsive web interfaces. Committed to continuous
              learning, I stay up to date with the latest technologies, driving
              innovation and exceeding expectations in every project.
            </p>
          </div>
        </motion.div>
      </div>
      <div ref={ref2}>
        <motion.div animate={animation2}>
          <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between">
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <a href="https://www.facebook.com/joseph.gadiaza/">
                    <FaFacebookF />
                  </a>
                </span>
                <span className="bannerIcon">
                  <a href="https://www.github.com/jgadz22">
                    <FaGithub />
                  </a>
                </span>
                <span className="bannerIcon">
                  <a href="https://www.linkedin.com/in/joseph-gadiaza-31b7311a1/">
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                Best Skill on
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaReact />
                </span>
                <span className="bannerIcon">
                  <SiTailwindcss />
                </span>
                <span className="bannerIcon">
                  <SiLaravel />
                </span>
                <span className="bannerIcon text-4xl">
                  <SiMysql />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftBanner;
