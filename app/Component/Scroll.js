// pages/index.js
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Scroll.module.css';
import Link from "next/link";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray("#panel");
      console.log(panels);
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div id="work_route" className={styles.main}>
      <div className={styles.main1}>
        <div className={styles.App} ref={component}>
          <div className={styles.firstContainer}>
            <div className={styles.headin0}>Our Services</div>
            <div>
              <Image
                style={{ width: "600px", height: "350px" }}
                className={styles.img1}
                src="/images/robotics.jpg"
                alt="AI image"
                width={600}
                height={350}
              />
            </div>
            <div className={styles.headin}>
              Our comprehensive range of the cutting-edge services includes Hotel <br /> Robots &amp; Dokat Robots for enhanced hospitality experiences,
              F1 and <br /> Flight Motion Simulators for realistic and thrilling simulations, Hot Air <br />Balloon adventures providing breathtaking views,
              and innovative <br />solutions like Dotkeeper, Dotwaiter, and Dot Teleport revolutionizing <br />security and service industries.
            </div>
            <div>
              <Image
                style={{ width: "600px", height: "350px" }}
                className={styles.img2}
                src="/images/ai.jpg"
                alt="AI image"
                width={600}
                height={350}
              />
            </div>
            <div className={styles.headin1}>
              Engaging in groundbreaking research on the Humanoid robots, we aim <br /> to combine AI and robotics seamlessly. Further, our offerings
              extend to <br /> Autonomous Mobile Robots, People Counters, and SAAS-based Video <br /> Analytics under the KIOT umbrella, transforming
              industries with <br /> efficient logistics, smart space management, and intelligent data-driven <br /> decision-making.
            </div>
          </div>
          <div ref={slider} className={styles.container}>
            <div></div>
            <div id="panel" className={`${styles.description} ${styles.panel} ${styles.blue}`}>
              <div className={styles.headin2}>
                HOTEL ROBOTS
                <div className={styles.scroll}>
                  <div className={styles.arrow}></div>
                </div>
              </div>
              <div>
                <Image
                  style={{ width: "500px", height: "300px" }}
                  className={styles.img2}
                  src="/images/hotel_robot.webp"
                  alt="AI image"
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.headin3}>
                Delivery amenities to your guest fast and quick.
              </div>
              <div className={styles.headin40}>
                Our room service robot&apos;s main function is to deliver items from the service <br /> desk
                or store room to the guest&apos;s door. It can travel autonomously and dock <br /> itself to
                charge when it needs to. It can be accessed by the Digital Concierge <br /> app and is
                also compatible with our Vending Machine. Our vending machine <br /> automatically connects
                with the hotel robot to dispense the specific item to it. <br />It has three delivery points
                for the three trays that the hotel robot has. It is fully <br />automated, from collecting the orders
                to releasing the items that range from <br /> food items to soaps, towels, and other amenities.
              </div>
            </div>
            <div id="panel" className={`${styles.panel} ${styles.red}`}>
              <div className={styles.headin2}>
                HOT AIR BALLOON
              </div>
              <div>
                <Image
                  style={{ width: "500px", height: "300px" }}
                  className={styles.img2}
                  src="/images/balloon_home.png"
                  alt="AI image"
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.headin3}>
                Floating through flame-powered flight.
              </div>
              <div className={styles.headin41}>
                A hot air balloon consists of a fabric envelope filled with heated air,
                a propane <br />-powered burner, and a basket for passengers. When the burner
                heats the air <br /> inside the envelope, the balloon becomes buoyant and rises.
                The pilot can <br /> control altitude by adjusting the burner intensity. Safety
                measures include pilot <br /> licensing and adherence to weather conditions.
                Hot air ballooning is a popular <br /> recreational activity and sport, offering
                a serene and scenic flight experience. <br /> Hot air balloons are used for a variety of purposes,
                including recreational flights, <br /> sightseeing tours, advertising, and even competitions.
              </div>
            </div>
            <div id="panel" className={`${styles.panel} ${styles.orange}`}>
              <div className={styles.headin2}>
                AUTONOMOUS MOBILE ROBOTS
              </div>
              <div>
                <Image
                  style={{ width: "500px", height: "300px" }}
                  className={styles.img2}
                  src="/images/mobilerobot0.jpg"
                  alt="AI image"
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.headin3}>
                Self-navigating robotic systems for mobility and automation.
              </div>
              <div className={styles.headin42}>
                Our mobile robots boast autonomous navigation, effortlessly exploring novel <br /> environments
                through a streamlined setup. With a robust foundation, they <br /> demonstrate remarkable high
                payload pulling capacity while ensuring consistent <br /> performance from no load to full load scenarios.
                These versatile systems are <br /> equipped for autonomous movement, effectively overcoming obstacles on their <br />
                route, facilitating seamless transitions from one location to another. Autonomous <br /> mobile robots automate tasks,
                enhancing efficiency and safety across industries <br /> through flexibility and precision in navigation and operations.
              </div>
            </div>
            <div id="panel" className={`${styles.panel} ${styles.purple}`}>
              <div className={styles.headin2}>
                HUMANOID ROBOTS (UNDER RESEARCH)
              </div>
              <div>
                <Image
                  style={{ width: "500px", height: "300px" }}
                  className={styles.img2}
                  src="/images/roboface.jpg"
                  alt="AI image"
                  width={500}
                  height={300}
                />
              </div>
              <div className={styles.headin3}>
                Realistic humanoid for research and development.
              </div>
              <div className={styles.headin43}>
                Humanoid robots, designed with human-like features and capabilities, play <br /> pivotal roles across diverse domains.
                They facilitate research in human-robot <br /> interaction, cognitive sciences, and psychology. In healthcare, they aid in patient <br /> care,
                rehabilitation, and companionship, augmenting the capabilities of medical <br /> professionals. In education, they engage students in
                STEM fields, fostering <br /> innovative learning experiences. Additionally, humanoid robots find applications <br /> in entertainment,
                exhibitions, and theme parks, captivating audiences as performers <br /> and interactive exhibits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
