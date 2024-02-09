export default function Resume(){
    return(
        <section className="section-work">
            <div className="content-size-section">
                <h2 className="title-section">Resumo</h2>
                <div className="wrapper-info">
                    <div className="education">
                    <h3 className="subtitle-card">
                        Educação
                    </h3>
                    {/* <div className="card">
                        <h2>Universidade São Judas Tadeu</h2>
                        <h3> Engenharia de Software</h3>
                        <small>Janeiro 2023 - 2027</small>
                    </div>   */}
                    <div className="card">
                        <h2>ETEC Zona Leste</h2>
                        <h3>Desenvolvimento de Sistemas</h3>
                        <small>Julho 2021 - Dezembro 2022</small>
                    </div>
                    <div className="card">
                        <h2>Senac Jabaquara</h2>
                        <h3>Design para web – Produção e criação</h3>
                        <small>Junho 2022 - Julho 2022</small>
                    </div>
                    </div>
                    <div className="work">
                    <h3 className="subtitle-card">
                        Experiência
                    </h3>
                    <div className="card">
                        <h2>Engenho de Imagens</h2>
                        <h3>Programador de Internet</h3>
                        <small>Abril 2023</small>
                    </div>
                    <div className="card">
                        <h2>CTRL Ser</h2>
                        <h3>Desenvolvedor Front-End</h3>
                        <small>Julho 2022 - Fevereiro 2023</small>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}