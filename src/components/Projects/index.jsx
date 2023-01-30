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
                            href="https://create-your-avatar.surge.sh/"
                            target="_blank"
                        >
                            Crie um avatar - Aprendendo os conceitos básicos de
                            VueJS
                        </a>
                        <hr />
                    </article>

                    <article>
                        <a
                            href="https://my-simple-calculator.surge.sh/"
                            target="_blank"
                        >
                            Calculadora - Uma calculadora simples com Vanilla JS
                        </a>
                        <hr />
                    </article>

                    <article>
                        <a
                            href="https://simpecrudapp.surge.sh/"
                            target="_blank"
                        >
                            Crud App - Um App simples feito com JS puro que
                            permite escrever, editar e excluir mensagens
                        </a>
                        <hr />
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Projects
