import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.AboutContainer}>
                <div className={styles.AboutContainerBox}>
                    <p>Formação acadêmica em andamento</p>
                    <span>Análise e Desenvolvimento de Sistemas</span>
                </div>
                <div className={styles.AboutContainerBox}>
                    <p>...</p>
                    <span>...</span>
                </div>
                <div className={styles.AboutContainerBox}>
                    <p>...</p>
                    <span>...</span>
                </div>
            </div>
        </div>
    )
}

export default About
