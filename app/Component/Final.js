import React from 'react';
import styles from '../styles/Final.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';


const FinalPage = () => {
    return (
        <div id="contact_route" className={styles.final_container}>
            <div id={styles.new1}>

                <div className={styles.headin1}>
                    WE WOULD LOVE TO HEAR FROM YOU. < br />
                    LET'S WORK--TOGETHER.

                </div>

                <div className={styles.headin2}>
                    <div style={{ padding: "14px" }}>Lets Talk</div>
                </div>


                <div id={styles.new2}>

                    <div className={styles.headin3}>
                        Email
                    </div>
                    <div className={styles.headin4}>

                        <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="mailto:hello@dotworld.in"
                        >
                            hello@dotworld.in
                        </a>
                    </div>

                    <div className={styles.headin5}>
                        Contact Us
                    </div>
                    <div className={styles.headin6}>
                        +91 88070 44987
                    </div>

                    <div className={styles.heads}>

                        <div className={styles.headin7}>
                            Visit Us
                        </div>
                        <div className={styles.headin8}>

                            <a
                                style={{ textDecoration: "none", color: "white" }}
                                href="https://maps.app.goo.gl/dK4j2yrg6dtAUBBw8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                SF No.348,1A3, <br />
                                Thanneer Pandhal Road <br />
                                Sri Lakshmi Nagar || <br />
                                Peelamedu,Coimbatore <br />
                                Tamilnadu - 641 004
                            </a>
                        </div>


                    </div>


                    <div className={styles.heads1}>

                        <div className={styles.headin9}>
                            Site Map
                        </div>
                        <div className={styles.headin10}>
                            Products <br />
                            About Us<br/>
                            Careers <br/>
                            <div>
                                <Link className="top_nav1" id='services' smooth={true} offset={-50} duration={500} to="service_route">
                                    Services
                                </Link>
                            </div>
                            <div>
                                <Link className="top_nav1" id='home' smooth={true} offset={0} duration={500} to="home_route"
                                >
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link className="top_nav1" id='scroll' smooth={true} offset={0} duration={500} to="work_route">
                                    Work
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.headin10} style={{ position: "absolute", marginLeft: "1000px", marginTop: "-195px" }}>
                        <h3 style={{ color: "gray", fontSize: "16px", fontWeight: "normal" }}> Connect us</h3>
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.instagram.com/dotworldindia?igsh=bW5oejZicGF5a3A4" target="_blank" rel="noopener noreferrer" >Instagram</a><br />
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.facebook.com/DotworldTechIndia?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">Facebook</a> <br />
                        <a style={{ textDecoration: "none", color: "white" }} href="https://x.com/DotworldIndia?t=LhewyYG0Ri5E6GBYy_Nyiw&s=09" target="_blank" rel="noopener noreferrer">Twitter</a> <br />
                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.linkedin.com/company/dotworldindia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                    </div>


                    <div style={{ position: "absolute", marginLeft: "1350px", marginTop: "40px", color: "white" }}>
                        Privacy Policy
                    </div>

                    <div style={{ position: "absolute", marginTop: "40px", marginLeft: "50px", color: "white" }}>
                        2023 All Rights Reserved
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FinalPage;