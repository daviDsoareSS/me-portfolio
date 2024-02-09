import Link from "next/link";

export default function Header(){
  return(
    <div className="sticky-header">
    <header>
      <div className="content-header">
        <div className="wrapper-left-logo">
          <Link className="my-email" href="mailto:davidsoares2156@gmail.com">
            <p><i className="fa-regular fa-envelope"></i>davidsoares2156@gmail.com</p>
          </Link>
        </div>
        <div className="wrapper-right-links">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="">Resumo</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>
        <button className="menu-header">Menu</button>
      </div>
    </header>
  </div>
  )
}