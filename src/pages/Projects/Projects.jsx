import "../../assets/styles/Projects/Projects.css"

const Projects = () => {
    return (
        <div className="ProjectsCard">
            <h2>Projetos em andamento e concluídos</h2>

            <div className="CurrentProjects">
                <h3>Projetos em andamento</h3>
                <ul>
                    <li>
                        <a href="#">api</a> - API
                    </li>
                </ul>
            </div>

            <div className="OldProjects">
                <h3>Projetos concluídos</h3>
                <ul>
                    <li>
                        <a
                            href="https://create-your-avatar.surge.sh/"
                            target="_blank"
                        >
                            create-an-avatar
                        </a>{" "}
                        - Aprendendo os conceitos básicos de VueJS com um
                        pequeno projeto. #just4fun
                    </li>

                    <li>
                        <a
                            href="https://my-simple-calculator.surge.sh/"
                            target="_blank"
                        >
                            my-simple-calculator
                        </a>{" "}
                        - Uma calculadora básica em JavaScript
                    </li>

                    <li>
                        <a
                            href="https://simpecrudapp.surge.sh/"
                            target="_blank"
                        >
                            simple-crud-app
                        </a>{" "}
                        - Um simples CRUD com Vanilla JS
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects
