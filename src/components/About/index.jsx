import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.About}>
            <div className={styles.AboutContainer}>
                <div>
                    <p>Estudando</p>
                    <span>Análise e Desenvolvimento de Sistemas</span>
                </div>
                <div>
                    <p>Nível ninja: Genin, aka Programador Jr</p>
                    <span>
                        Tenho conhecimento básico em JavaScript, TypeScript,
                        React, Node.js e Java
                    </span>
                </div>
                <div>
                    <p>Aprendendo</p>
                    <span>React Native e Machine Learning com Python</span>
                </div>
            </div>
        </div>
    )
}

export default About
