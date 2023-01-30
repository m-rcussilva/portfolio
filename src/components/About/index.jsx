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
                    <p>Resumo de habilidades como Dev de Front-end</p>
                    <span>
                        HTML, CSS, JavaScript, TypeScript e
                        frameworks/Bibliotecas JS como React
                    </span>
                </div>
                <div>
                    <p>Aprendendo</p>
                    <span>Three.js e Blender</span>
                </div>
            </div>
        </div>
    )
}

export default About
