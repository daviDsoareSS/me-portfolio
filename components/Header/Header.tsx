"use client";

import { useEffect, useState } from 'react';
import Links from 'next/link';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header(){
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setVisible(currentScrollTop < lastScrollTop || currentScrollTop < 10);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return(
    <div className="sticky-header">
      <header className={visible ? '' : 'hidden'}>
        <div className="content-header">
          <div className="wrapper-left-logo">
            <Links className="my-email" href='mailto:davidsoares2156@gmail.com'>
              <p><i className="fa-regular fa-envelope"></i>davidsoares2156@gmail.com</p>
            </Links> 
          </div>
          <div className="wrapper-right-links">
            <ul>
              <li>
                <Link 
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}
                  to="about">
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-35}
                  duration={1200}
                  to="projects">
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  to="resume"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}>
                  Resumo
                </Link>
              </li>
              <li>
                <Link 
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <button className="menu-header">Menu</button>
        </div>
      </header>
    </div>
  )
}