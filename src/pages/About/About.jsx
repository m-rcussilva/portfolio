import "../../assets/styles/About/About.css"

const About = () => {
    return (
        <div className="AboutCard">
            <h2>Sobre mim</h2>
            <p className="AboutInfo">
                Olá, eu sou Marcus Silva, moro em Salgueiro - PE e atualmente
                curso Análise e Desenvolvimento de Sistemas no Senac.
            </p>

            <p className="AboutInfo">
                Linguagens de programação as quais possuo conhecimento básico:
                JavaScript e Ruby.
            </p>
            <p>Atualmente estou aprendendo a programar em Rust</p>

            <div>
                <h3>Link para minha conta no Github</h3>
                <a href="https://github.com/m-rcussilva" target="_blank">
                    Github
                </a>
            </div>

            <div>
                <h3>Contato</h3>
                <address>
                    <a href="mailto:marcusluis.mail@gmail.com">
                        Envie-me um email
                    </a>
                </address>
            </div>
        </div>
    )
}

export default About
