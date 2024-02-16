"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About(){
  return(
    <section className="section-about" id="about">
      <div className="content-size-section">
        <motion.div className="wrapper-about"
           initial= {{ opacity: 0, y: 150 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 0 }}
           transition={{ duration: 0.8}}
        >
          <h2>Um pouco sobre mim</h2>
          <p>Aqui estão minhas habilidades técnicas e pessoais, junto com um esboço das coisas que me motivam e experiências que tive.</p>
          
          <div className="content">
            <motion.div className="group-info"
              initial= {{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0}}
              transition={{ duration: 0.1, delay: 0.2}}
            >
              <span><i className="fa-solid fa-brush"></i></span>
              <div className="text">
                <h3>Criatividade</h3>
                <p>Sem dúvida, meu grande diferencial é a criatividade. Consigo visualizar diversas formas de realizar minhas tarefas, entregando sempre algo a mais.</p>
              </div>
            </motion.div>  

            <motion.div className="group-info"
              initial= {{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0}}
              transition={{ duration: 0.15, delay: 0.25}}
            >
              <span><i className="fa-solid fa-comment"></i></span>
              <div className="text">
                <h3>Comunicativo</h3>
                <p>Minha capacidade de expressão clara me ajuda a compreender as necessidades dos demais e contribuir de maneira positiva para o sucesso de projetos e iniciativas.</p>
              </div>
            </motion.div>

            <motion.div className="group-info"
              initial= {{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0}}
              transition={{ duration: 0.20, delay: 0.30}}
            >
              <span><i className="fa-solid fa-user-tie"></i></span>
              <div className="text">
                <h3>Prestativo</h3>
                <p>Adoro colaborar em equipe, seja no trabalho ou entre amigos. Sempre estou disponível para oferecer suporte e garantir o bom andamento das atividades em grupo.</p>
              </div>
            </motion.div>  

            <motion.div className="group-info"
              initial= {{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0}}
              transition={{ duration: 0.25, delay: 0.35}}
            >
              <span><i className="fa-solid fa-microchip"></i></span>
              <div className="text">
                <h3>Amante da tecnologia</h3>
                <p>Adoro explorar novas ferramentas, aprender sobre novas tendências e até mesmo criar minhas próprias soluções.</p>
              </div>
            </motion.div>

            <motion.div className="group-info"
              initial= {{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0}}
              transition={{ duration: 0.30, delay: 0.40}}
            >
              <span><i className="fa-solid fa-user-graduate"></i></span>
              <div className="text">
                <h3>Téc. Desenvolvimento de Sistemas</h3>
                <p>Sou formado em Desenvolvimento de Software e é minha paixão! Adoro criar códigos, resolver problemas e ver minhas ideias se transformarem em soluções incríveis.</p>
              </div>
            </motion.div>

            <motion.div className="group-info"
              initial= {{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0}}
              transition={{ duration: 0.35, delay: 0.45}}
            >
              <span><i className="fa-solid fa-code"></i></span>
              <div className="text">
                <h3>Criação de layous UI/UX</h3>
                <p>É gratificante exercer a criatividade no design e, em seguida, transformá-lo em uma experiência funcional e atraente.</p>
              </div>
            </motion.div> 

          </div>
        </motion.div>
      </div>
        <div className="wrapper-languages">
          <div className="content-size-section">
            <motion.h2
              initial= {{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0}}
              transition={{ duration: 0.5, delay: 0.2}}
            >
              Hard skills
            </motion.h2>
            <motion.ul className="languages"
               initial= {{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 0 }}
               transition={{ duration: 0.5}}
            >
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" width={70} height={70}/>
                <div className="tooltip">HTML</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" width={70} height={70}/>
                <div className="tooltip">CSS</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="Javascript" width={70} height={70}/>
                <div className="tooltip">Javascript</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React JS" width={70} height={70}/>
                <div className="tooltip">React JS</div>
              </li>
              <li>
                <Image className="next" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="Next JS" width={70} height={70}/>
                <div className="tooltip">Nextjs</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" width={70} height={70}/>
                <div className="tooltip">PHP</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" width={70} height={70}/>
                <div className="tooltip">Laravel</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" width={70} height={70}/>
                <div className="tooltip">Figma</div>
              </li>
              <li>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" width={70} height={70}/>
                <div className="tooltip">Photoshop</div>
              </li>
            </motion.ul>
        </div>
      </div>
    </section>
  )
}