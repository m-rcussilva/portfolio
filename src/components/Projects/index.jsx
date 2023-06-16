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
                            href="#"
                            target="_blank"
                        >
                            Test
                        </a>
                        <hr />
                    </article> 
                </section>
            </div>
        </div>
    )
}

export default Projects
