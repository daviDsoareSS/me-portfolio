'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

import { motion } from 'framer-motion';

import { projects } from "./Projects";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function SectionProjects() {
  const [contentProject, setContentProject] = useState('');

  const filterAll = () => {
    setContentProject('');
  };

  const filterJS = () => {
    setContentProject('React JS');
  };

  const filterPHP = () => {
    setContentProject('Laravel PHP');
  };

  return (
    <>
      <section className="section-projects" id='projects'>
        <div className="wrapper-projects">
          <div className="content-size-section">
            <motion.h2
              initial= {{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4}}
            >
              Projetos
            </motion.h2>
            <motion.p
               initial= {{ opacity: 0, y: 150 }}
               whileInView={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 0 }}
               transition={{ duration: 0.4, delay: 0.2}}
            >
            Aqui estão alguns projetos pessoais e profissionais.            
            </motion.p>
          </div>

          <div className="content">
            <div className="content-size-section">
              <ul className="filter-projects">
                <motion.li className={`repos-php ${contentProject === '' ? 'active' : ''}`} onClick={filterAll}
                  initial= {{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0}}
                  transition={{ duration: 0.15, delay: 0.25}}
                >
                  Todos
                </motion.li>
                
                <motion.li className={`repos-js ${contentProject === 'React JS' ? 'active' : ''}`} onClick={filterJS}
                  initial= {{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0}}
                  transition={{ duration: 0.30, delay: 0.40}}
                >
                  Javascript
                </motion.li>

                <motion.li className={`repos-php ${contentProject === 'Laravel PHP' ? 'active' : ''}`} onClick={filterPHP}
                  initial= {{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0}}
                  transition={{ duration: 0.40, delay: 0.50}}
                >
                  Laravel PHP
                </motion.li>
              </ul>
            </div>

            <Swiper
              className="grid-projects"
              navigation={true}
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Autoplay]}
            >
              {projects
                .filter((item) => (contentProject === '' ? true : item.language === contentProject))
                .map((item, i) => (
                  <SwiperSlide className="slide" key={item.name}>
                    <Link href={item.url} target='blank'>
                      <motion.div className="card-project"
                        initial= {{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0}}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.1}}
                      >
                        <Image className="image-project" src={item.image} alt={item.name} width={410} height={250}/>
                        {/* <img className="" src={item.image} alt={item.name} /> */}
                      </motion.div>
                    </Link>

                    <motion.div className="wrapper-project"
                      initial= {{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0}}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05}}
                    >
                      <div className="header">
                        <h3>{item.name}</h3>
                        <div className="line"></div>
                        <div className="view-project">
                          {/* <Link className="links" href={item.url_github} target="blank">
                            <i className="fa-brands fa-github"></i>
                          </Link> */}
                          <Link className="links" href={item.url} target="blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </Link>
                        </div>
                      </div>
                      <span>{item.language}</span>
                      <p>{item.text}</p>
                    </motion.div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
