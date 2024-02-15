"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string, subject: string} {
    return 'value' in e && 'name' in e
}

export default function Contact(){

    const [state, setState] = useState<string>(); 
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowPopup(showPopup);
            console.log('teste')
        }, 2000);
  
      return () => clearInterval(intervalId);
    }, []); 


    async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault();
        
        const formData: Record<string, string> = {};

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) =>{
            if(!field.name) return;
            formData[field.name] = field.value;
            formData[field.subject] = field.value;
        });

        try {
            const response: Response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.name,
                    subject: formData.subject,
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
            }

            setSuccess(true);

        } catch (error: any) { // Explicitamente tipando 'error' como 'any'
            setError(error.message);
        }
    }


    return(
        <>  
            {error && (
                <div className={showPopup ? "popup error active" : "popup error"}>
                    <div className="icon">
                        <i className="fa-solid fa-circle-exclamation"></i>
                    </div>
                    <div className="popup-content">
                        <span className="close" onClick={() => setError(null)}>&times;</span>
                        <h3>Falhou</h3>
                        <p>Algo deu errado ao enviar...</p>
                        <button onClick={() => setError(null)}>Fechar</button>
                    </div>
                </div>
            )}
            {success && (
                <div className={showPopup ? "popup active" : "popup"}>
                    <div className="icon">
                        <i className="fa-regular fa-circle-check"></i>
                    </div>
                    <div className="popup-content">
                        <span className="close" onClick={() => setSuccess(false)}>&times;</span>
                        <h3>Sucesso</h3>
                        <p>E-mail enviado.</p>
                        <button onClick={() => setSuccess(false)}>Fechar</button>
                    </div>
                </div>
            )}
            
            <section 
                className="lead"
                id="contact"
                
            >
                <div className="content-size-section">
                    <motion.div 
                        className="wrapper-lead"
                        initial= {{ opacity: 0, y: 100, scale: 0 }}
                        whileInView={{ opacity: 1, y: 0 , scale: 1}}
                        exit={{ opacity: 0, y: 0 , scale: 0}}
                        transition={{ duration: 0.5, delay: 0.2}}
                        >
                            
                        <h2 className="title-section">Entre em contato comigo</h2>
                        <Link className="location" href="https://maps.app.goo.gl/ndi3xCKPMW9Zkbvt8" target="blank">
                            <p>Rua Recife, Vila Seabra</p>
                            <p>São Paulo - SP 08180-425</p>
                        </Link>
                        <form id="form" onSubmit={handleOnSubmit} className="form-lead">
                            <div className="group-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="name" id="name"/>
                            </div>
                            <div className="group-input">
                                <label htmlFor="subject">Assunto</label>
                                <textarea name="subject" id="subject" rows={5} cols={40}></textarea>
                            </div>
                            <div className="group-button">
                                <button id="buttonSubmit" type="submit">Enviar</button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    )
}