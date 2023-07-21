import styles from "./Projects.module.css"

function Projects() {
    return (
        <div className={styles.Projects}>
            <div className={styles.ProjectsContainer}>
                <header>
                    <h4>Projetos</h4>
                </header>
                <section>
                    <article>
                        <a
                            href="https://github.com/m-rcussilva/rest-api-sa-countries/tree/main"
                            target="_blank"
                        >
                            API de Informações sobre Países da América do Sul usando Java Spring Boot e Vue.js
                        </a>
                        <hr />
                    </article> 
                </section>
            </div>
        </div>
    )
}

export default Projects
