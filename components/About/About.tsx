export default function About(){
  return(
    <section className="section-about">
      <div className="content-size-section">
        <div className="wrapper-about">
          <h2>Um pouco sobre mim</h2>
          <p>Aqui estão minhas habilidades técnicas e pessoais, junto com um esboço das coisas que me motivam e experiências que tive.</p>
          <div className="content">
            <div className="group-info">
              <span><i className="fa-solid fa-brush"></i></span>
              <div className="text">
                <h3>Criatividade</h3>
                <p>Sem dúvida, meu grande diferencial é a criatividade. Consigo visualizar diversas formas de realizar minhas tarefas, entregando sempre algo a mais.</p>
              </div>
            </div>          
            <div className="group-info">
              <span><i className="fa-solid fa-comment"></i></span>
              <div className="text">
                <h3>Comunicativo</h3>
                <p>Minha capacidade de expressão clara me ajuda a compreender as necessidades dos demais e contribuir de maneira positiva para o sucesso de projetos e iniciativas.</p>
              </div>
            </div>          
            <div className="group-info">
              <span><i className="fa-solid fa-user-tie"></i></span>
              <div className="text">
                <h3>Prestativo</h3>
                <p>Adoro colaborar em equipe, seja no trabalho ou entre amigos. Sempre estou disponível para oferecer suporte e garantir o bom andamento das atividades em grupo.</p>
              </div>
            </div>          
            <div className="group-info">
              <span><i className="fa-solid fa-microchip"></i></span>
              <div className="text">
                <h3>Amante da tecnologia</h3>
                <p>Adoro explorar novas ferramentas, aprender sobre novas tendências e até mesmo criar minhas próprias soluções.</p>
              </div>
            </div>          
            <div className="group-info">
              <span><i className="fa-solid fa-user-graduate"></i></span>
              <div className="text">
                <h3>Téc. Desenvolvimento de Sistemas</h3>
                <p>Sou formado em Desenvolvimento de Software e é minha paixão! Adoro criar códigos, resolver problemas e ver minhas ideias se transformarem em soluções incríveis.</p>
              </div>
            </div>          
            <div className="group-info">
              <span><i className="fa-solid fa-code"></i></span>
              <div className="text">
                <h3>Criação de layous UI/UX</h3>
                <p>É gratificante exercer a criatividade no design e, em seguida, transformá-lo em uma experiência funcional e atraente.</p>
              </div>
            </div>          
          </div>
        </div>
      </div>
        <div className="wrapper-languages">
          <div className="content-size-section">
            <h2>Hard skills</h2>
            <ul className="languages">
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <div className="tooltip">HTML</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <div className="tooltip">CSS</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <div className="tooltip">Javascript</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <div className="tooltip">React JS</div>
              </li>
              <li>
                <img className="next" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />   
                <div className="tooltip">Nextjs</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                <div className="tooltip">Laravel</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                <div className="tooltip">PHP</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                <div className="tooltip">Figma</div>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
                <div className="tooltip">Photoshop</div>
              </li>
            </ul>
        </div>
      </div>
    </section>
  )
}