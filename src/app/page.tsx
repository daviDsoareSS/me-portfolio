
import About from '../../components/About/About';
import SectionProjects from '../../components/Projects/SectionProjects';
import Resume from '../../components/Resume/Resume';
import Contact from '../../components/Contact/Contact';
import { useRef } from 'react';

export default function Home() {
  
  return (
    <main>
      <div className="main-content">
        <div className="wrapper-content">
          <div className="header-content">
            <img src="/img/banner/eu.webp" alt="" />
            <p>olá me chamo David Soares Silva</p>
            <h3>Desenvolvedor <span>Front-end</span></h3>
          </div>
          <div className="footer-content">
            <button>Download CV</button>
            <ul>
              <li>
                <a href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href={process.env.LINK_LINKEDIN}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <p id="view-more">
            <a href="">Ver mais <i className="fa-solid fa-angle-down"></i></a>
          </p>
        </div>
      </div>

      <About />

      <SectionProjects />

      <Resume />

      <Contact />


      
    </main>
  )

}
