import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.AboutContainer}>
                <div>
                    <p>Formação acadêmica em andamento</p>
                    <span>Análise e Desenvolvimento de Sistemas</span>
                </div>
                <div>
                    <p>🙂</p>
                    <span>
                        ...
                    </span>
                </div>
                <div>
                    <p>🙂</p>
                    <span>...</span>
                </div>
            </div>
        </div>
    )
}

export default About
