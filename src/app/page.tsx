"use client";

import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";

import About from '../../components/About/About';
import SectionProjects from '../../components/Projects/SectionProjects';
import Resume from '../../components/Resume/Resume';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  
  return (
    <main id="main">
      <div className="main-content">
        <Link 
          className="button-floating"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1200}
          to="main">
          <i className="fa-solid fa-angles-up"></i>
        </Link>

        <motion.div className="wrapper-content"
          initial= {{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="header-content"
            initial= {{ opacity: 0, y: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 280, scale: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            <img src="/img/banner/eu.webp" alt="" />
            <p>olá me chamo David Soares Silva</p>
            <h3>Desenvolvedor <span>Front-end</span></h3>
          </motion.div>
          <div className="footer-content">
            <button>Download CV</button>
            <ul>
              <li>
                <a href={process.env.LINK_GITHUB} target='blank'>
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href={process.env.LINK_LINKEDIN} target='blank'>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={process.env.LINK_EMAIL} target='blank'>
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <p id="view-more">
            <Link
              spy={true}
              smooth={true}
              offset={25}
              duration={1000}
              to="about">
              Ver mais <i className="fa-solid fa-angle-down"></i>
            </Link>
          </p>
        </motion.div>
      </div>

      <About />

      <SectionProjects />

      <Resume />

      <Contact />

      <Footer/>
      
    </main>
  )

}
