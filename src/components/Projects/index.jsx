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
                            href="https://github.com/m-rcussilva/favorite-reads/tree/main"
                            target="_blank"
                        >
                            Spring Boot & Thymeleaf app. Add book name, author and publication date
                        </a>
                        <hr />
                    </article>
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
