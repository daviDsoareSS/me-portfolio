import Link from "next/link"

export default function Footer(){
    return(
        <>
            <footer>
                <div className="content-size-section">
                    <h3>desenvolvido por daviDsoareSS</h3>
                    <ul>
                        <li>
                            <a href={process.env.LINK_GITHUB} target='blank'>
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href={process.env.LINK_LINKEDIN} target='blank'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href={process.env.LINK_EMAIL} target='blank'>
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}