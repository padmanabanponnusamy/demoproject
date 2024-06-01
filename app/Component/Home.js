import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link, animateScroll as scroll } from 'react-scroll';
import SplitText from 'gsap-trial/SplitText';
import styles from '../styles/Home.module.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePage = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const mySplitText = new SplitText(".headin", { type: "words,chars" });
    const chars = mySplitText.chars;

    gsap.set(".headin", { perspective: 400 });

    gsap.from(chars, {
      duration: 0.2,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.005,

    });

  },
    [])





  return (

    <div>

      <div>
        <div className={styles.heading0}>DOTWORLD <br />
        </div>

        <div className={styles.heading1}>TECHNOLOGIES <br />
        </div>
      </div>
      <div id="home_route" className={styles.home_container}>



        <div className={`styles.headin headin`}>
          <div className={styles.heading2}> We create clean-cut solutions <br /> for online destinations
          </div>

          <div>
            <hr className={styles.horizontal} />
          </div>

          <div className={styles.heading4}>
            Our Services
          </div>

          <div className={styles.heading5}>
            At Dotworld, our suites of services are designed to propel your business into the forefront of technological <br /> advancement. With a commitment to excellence and a passion for innovation, we offer a diverse range of <br /> cutting-edge services that cater to the evolving needs of the digital landscape.
          </div>
        </div>

        <div>
          <img style={{ width: "1518px", height: "650px" }} className={styles.img2} src="./images/image4.webp" alt="AI image" />

        </div>
      </div>


    </div>

  );
};

export default HomePage;