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
                            href="https://unsplashapi-app-searchimages.surge.sh/"
                            target="_blank"
                        >
                            App que busca por fotos utilizando unsplash api
                        </a>
                        <hr />
                    </article>

                    <article>
                        <a
                            href="https://avatar-editor-vuejs.surge.sh/"
                            target="_blank"
                        >
                            Crie um avatar - Fundamentos básicos do VueJS 2
                        </a>
                        <hr />
                    </article>

                    <article>
                        <a
                            href="https://calcculator-js.surge.sh/"
                            target="_blank"
                        >
                            Uma calculadora modesta com Vanilla JS
                        </a>
                        <hr />
                    </article>

                    <article>
                        <a
                            href="https://simpecrudapp.surge.sh/"
                            target="_blank"
                        >
                            Um App simples feito com JS puro que permite
                            escrever, editar e excluir mensagens
                        </a>
                        <hr />
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Projects
