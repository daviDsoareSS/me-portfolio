'use client'
import React, { useState } from 'react';
import Link from "next/link";

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
      <section className="section-projects">
        <div className="wrapper-projects">
          <div className="content-size-section">
            <h2>Projetos</h2>
            <p>Aqui estão alguns projetos pessoais e profissionais.</p>
          </div>

          <div className="content">
            <div className="content-size-section">
              <ul className="filter-projects">
                <li className={`repos-php ${contentProject === '' ? 'active' : ''}`} onClick={filterAll}>
                  Todos
                </li>
                <li className={`repos-js ${contentProject === 'React JS' ? 'active' : ''}`} onClick={filterJS}>
                  Javascript
                </li>
                <li className={`repos-php ${contentProject === 'Laravel PHP' ? 'active' : ''}`} onClick={filterPHP}>
                  Laravel PHP
                </li>
              </ul>
            </div>

            <Swiper
              className="grid-projects"
              navigation={true}
              spaceBetween={30}
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
                .map((item) => (
                  <SwiperSlide key={item.name}>
                    <div className="card-project">
                      <img className="" src={item.image} alt={item.name} />
                    </div>
                    <div className="wrapper-project">
                      <div className="header">
                        <h3>{item.name}</h3>
                        <div className="line"></div>
                        <div className="view-project">
                          <Link className="links" href={item.url_github} target="blank">
                            <i className="fa-brands fa-github"></i>
                          </Link>
                          <Link className="links" href={item.url} target="blank">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </Link>
                        </div>
                      </div>
                      <span>{item.language}</span>
                      <p>{item.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
