import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.AboutContainer}>
                <p>
                    Olá, eu me chamo Marcus Silva. Seja bem-vindo(a) ao meu
                    portfólio!
                </p>
                <p>
                    Estou cursando Análise e Desenvolvimento de Sistemas,<br/>
                    focando atualmente em desenvolvimento backend com Go,<br/>
                    Java, C e Banco de Dados Relacionais SQL.
                </p>
            </div>
        </div>
    )
}

export default About
