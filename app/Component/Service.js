import styles from '../styles/Service.module.css';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';


const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ServicePage = () => {


  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };
  console.log(setIsHovered2);
  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };

  const handleMouseOver4 = () => {
    setIsHovered4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovered4(false);
  };



  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const quotes = document.querySelectorAll("#heaad");

    function setupSplits() {
      quotes.forEach(heaad => {
        if (heaad.anim) {
          heaad.anim.progress(1).kill();
          heaad.split.revert();
        }

        heaad.split = new SplitText(heaad, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        heaad.anim = gsap.from(heaad.split.chars, {
          scrollTrigger: {
            trigger: heaad,
            toggleActions: "restart pause resume reverse",
            start: "top 96%",
          },
          duration: 0.4,
          ease: "circ.out",
          y: -80,
          stagger: 0.02,
          opacity: 0
        });
      });
    }

    ScrollTrigger.addEventListener("refresh", setupSplits);
    setupSplits();



    const quotes1 = document.querySelectorAll("#heaad1");

    function setSplits() {
      quotes1.forEach(heaad1 => {
        if (heaad1.anim) {
          heaad1.anim.progress(1).kill();
          heaad1.split.revert();
        }

        heaad1.split = new SplitText(heaad1, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });

        heaad1.anim = gsap.from(heaad1.split.chars, {
          scrollTrigger: {
            trigger: heaad1,
            toggleActions: "restart pause resume reverse",
            start: "top 96%",
          },
          duration: 0.4,
          ease: "circ.out",
          y: 80,
          stagger: 0.02,
          opacity: 0
        });
      });
    }

    ScrollTrigger.addEventListener("refresh", setSplits);
    setSplits();

  },
    [])


  return (

    <div id="service_route" className={`styles.service_container service_container`}>
      <div id={styles.new}>

        <div className={styles.headinn}>
          <h3 style={{ margin: "0" }}>A</h3>

          <div className={styles.heading66}>
            <h3 id='heaad' > AUGMENTED & VIRTUAL REALITY(AR/VR)</h3>
          </div>

          <p id='heaad1' className={styles.heading7}>
            Step into the next dimension with our AR/VR solutions.Elevate user experiences <br />
            enhance training programs , and unlock realms of interaction through <br />
            immersive technologies.
          </p>


          <div id='heaad1' className={styles.movement}>
            <div className={styles.heading8}>Immersive AR/VR Applications</div>

            <div className={styles.heading9}>AR/VR Content Creation</div>

            <div className={styles.heading10}>3D Modeling & Visualization</div>

            <div className={styles.heading11}>Training Simulation</div>

            <div className={styles.heading12}>Interactive Virtual Tours</div>
          </div>

          <div className={styles.vid} >
            <DynamicReactPlayer
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              url="https://youtu.be/vz0UUVDt2ps?si=m7ggHntlQgCAoxAg"
              width="500px"
              controls
              playing={isHovered}
            />
          </div>

          <div className={styles.heading3}>
            <hr className={styles.horizontal} />
          </div>

        </div>

        <div className={styles.headinn0}>

          <div>
            <div className={`styles.paran paran`}>

              <div className={styles.heading13}>
                <h3 id='heaad' > ARTIFICAL INTELLIGENCE & MACHINE LEARNING(AI&ML)</h3>
              </div>

              <p id='heaad1' className={styles.heading14}>
                Unleash the power of intelligence automation with our AI & ML services.From <br />
                predictive analytics to smart decision-making ,we empower your business with the <br />
                latest in artifical inteliigence</p>

            </div>

            <div id='heaad1' className={styles.movement}>

              <div className={styles.heading15}>Predictive Analytics</div>

              <div className={styles.heading16}>Intelligence Automation Solutions</div>

              <div className={styles.heading17}>Natural Language Processing</div>

              <div className={styles.heading18}>Machine Learning Models</div>

              <div className={styles.heading19}>AL-Powered Decision Support System</div>
            </div>

            <div className={styles.vid} >
              <DynamicReactPlayer
                onMouseOver={handleMouseOver1}
                onMouseOut={handleMouseOut1}
                url="https://www.youtube.com/embed/lTzHlU3OrXs?si=qkNzU-5nkl8LPIpm"
                width="500px"
                controls
                playing={isHovered1}
              />
            </div>

          </div>

          <div className={styles.heading3}>
            <hr className={styles.horizontal} />
          </div>
        </div>

        <div className={styles.headinn1}>

          <div className={`styles.paran paran`}>

            <div className={styles.heading20}>
              <h3 id='heaad' > ROBOTICS </h3>
            </div>

            <p id='heaad1' className={styles.heading21}>
              Redefine efficiency and precision with our  Robotic solutions.From Autonomous <br />
              Systems to Colloborative robots,we engineer automation that transforms <br />
              industries.
            </p>

          </div>

          <div id='heaad1' className={styles.movement}>
            <div className={styles.heading22}>Autonomous Robotic Systems</div>

            <div className={styles.heading23}>Robotic Integration Services</div>

            <div className={styles.heading24}>Custom Robotic Solutions</div>

            <div className={styles.heading25}>Colloborative Robots(cobots)</div>

            <div className={styles.heading26}>Robotic Process Animation(RPA)</div>

          </div>

          <div className={styles.vid} >
            <DynamicReactPlayer
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
              url="https://www.youtube.com/embed/htjRUL3neMg?si=awILA1mwlddDWAGo"
              width="500px"
              controls
              playing={isHovered2}
            />
          </div>

          <div className={styles.heading3}>
            <hr className={styles.horizontal} />
          </div>

        </div>

        <div className={styles.headinn2}>

          <div className={`styles.paran paran`}>

            <div className={styles.heading27}>
              <h3 id='heaad' > INTERNET OF THINGS (IOT)</h3>
            </div>

            <p id='heaad1' className={styles.heading28}>
              Connect,control and conquer with our IOT services.Transform your business <br />
              opertions through the seamless integration of smart devices  and data-driven <br />
              insights.
            </p>
          </div>

          <div id='heaad1' className={styles.movement}>
            <div className={styles.heading29}> IOT Strategy and Consulting </div>

            <div className={styles.heading30}>IOT Security Solutions</div>

            <div className={styles.heading31}>Data Analytics for IOT</div>

            <div className={styles.heading32}>Connected Device Development</div>

            <div className={styles.heading33}>IOT Platform Integration</div>

          </div>
          <div className={styles.vid} >
            <DynamicReactPlayer
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
              url="https://www.youtube.com/embed/LlhmzVL5bm8?si=RvKWWFU6YodS-Jfy"
              width="500px"
              controls
              playing={isHovered3}
            />
          </div>

          <div className={styles.heading3}>
            <hr className={styles.horizontal} />
          </div>
        </div>

        <div className={styles.headinn3}>

          <div className={`styles.paran paran`}>

            <div className={styles.heading34}>
              <h3 id='heaad' > WEB & APP DEVELOPMENT </h3>
            </div>

            <p id='heaad1' className={styles.heading35}>
              Crafting digital experiences that resonate.Our Web & App Development Services <br />
              mary innovation with functionality ,creating platforms that captivate and deliver <br />
              results.
            </p>
          </div>

          <div id='heaad1' className={styles.movement}>
            <div className={styles.heading36}> Native and Cross-Platform App Development </div>

            <div className={styles.heading37}>Backend Development and Integration</div>

            <div className={styles.heading38}>Responsive Web Development</div>

            <div className={styles.heading39}>Quality Assurance and Testing</div>

            <div className={styles.heading40}>UI/UX Design and Prototyping</div>

          </div>

          <div className={styles.vid} >
            <DynamicReactPlayer
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
              url="https://www.youtube.com/embed/videoseries?si=97wq8ItvR4MDG-g0&amp;list=PLKDx0iHXzgE19L7sb4Fe-lqvEwQO3DUzP"
              width="500px"
              controls
              playing={isHovered4}
            />
          </div>

          <div className={styles.heading3}>
            <hr className={styles.horizontal} />
          </div>
        </div>

      </div>
    </div>
  );
}
export default ServicePage;