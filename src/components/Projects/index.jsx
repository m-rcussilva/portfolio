import styles from "./Projects.module.css"

function Projects() {
    return (
        <div className={styles.Projects}>
            <div className={styles.ProjectsContainer}>
                <header>
                    <h4>Projetos</h4>
                </header>
                <section>
                    <article className={styles.Article}>
                        <p className={styles.YearPublished}>Ano: 2023</p>

                        <a
                            href="https://github.com/m-rcussilva/admin-panel"
                            target="_blank"
                        >
                            Painel Administrativo para gerenciamento de
                            funcionários
                        </a>
                    </article>
                    <article className={styles.Article}>
                        <p className={styles.YearPublished}>Ano: 2023</p>

                        <a
                            href="https://github.com/m-rcussilva/favorite-reads"
                            target="_blank"
                        >
                            Projeto de Gestão de Leituras com Spring Boot e
                            Thymeleaf
                        </a>
                    </article>
                    <article className={styles.Article}>
                        <p className={styles.YearPublished}>Ano: 2023</p>

                        <a
                            href="https://github.com/m-rcussilva/rest-api-sa-countries"
                            target="_blank"
                        >
                            Consumo de uma API simples contendo informações
                            sobre países da América do Sul
                        </a>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Projects
