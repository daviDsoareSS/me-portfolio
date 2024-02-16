import { motion } from "framer-motion";

export default function Resume(){
    return(
        <section className="section-work" id="resume">
            <div className="content-size-section">
                <motion.h2 className="title-section"
                    initial= {{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4}}
                >
                Resumo
                </motion.h2>
                <div className="wrapper-info">
                    <motion.div className="education"
                        initial= {{ opacity: 0, x: -100, scale: 0 }}
                        whileInView={{ opacity: 1, x: 0 , scale: 1}}
                        exit={{ opacity: 0, x: 0}}
                        transition={{ duration: 0.3, delay: 0.2}}
                    >
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
                    </motion.div>
                    <motion.div className="work"
                         initial= {{ opacity: 0, x: 100, scale: 0 }}
                         whileInView={{ opacity: 1, x: 0 , scale: 1}}
                         exit={{ opacity: 0, x: 0}}
                         transition={{ duration: 0.4, delay: 0.3}}
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    )
}