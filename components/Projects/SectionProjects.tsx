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
              spaceBetween={2}
              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[Navigation, Autoplay]}
            >
              {projects
                .filter((item) => (contentProject === '' ? true : item.language === contentProject))
                .map((item) => (
                  <SwiperSlide key={item.name}>
                    <div className="card-project">
                      <img className="" src={item.image} alt={item.name} />
                      <div className="wrapper-project">
                        <span>{item.language}</span>
                        <h3>{item.name}</h3>
                        <div className="info-project">
                          <p>{item.text}</p>
                          <div className="view-project">
                            <Link className="links" href={item.url_github} target="blank">
                              <i className="fa-brands fa-github"></i>
                              Ver código
                            </Link>
                            <Link className="links" href={item.url} target="blank">
                              <i className="fa-solid fa-arrow-up-right-from-square"></i>
                              Ir para o site
                            </Link>
                          </div>
                        </div>
                      </div>
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
