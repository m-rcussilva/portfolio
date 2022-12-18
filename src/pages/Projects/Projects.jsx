import "../../assets/styles/Projects/Projects.css"

const Projects = () => {
    return (
        <div className="ProjectsCard">
            <h2>Projetos Atuais e Antigos</h2>

            <div className="CurrentProjects">
                <h3>Projetos atuais</h3>
                <ul>
                    <li>
                        <a href="#">api-fps-games</a> - Uma API de jogos FPS
                        (First-Person Shooter)
                    </li>
                </ul>
            </div>

            <div className="OldProjects">
                <h3>Projetos antigos</h3>
                <ul>
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
