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
                    Estou cursando Análise e Desenvolvimento de Sistemas,
                    focando atualmente em desenvolvimento backend com Java,
                    Spring e seu ecossistema, Apache Kafka e banco de dados
                    relacionais.
                </p>
            </div>
        </div>
    )
}

export default About
