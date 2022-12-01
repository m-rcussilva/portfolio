import "../../assets/styles/Projects/Projects.css"

const Projects = () => {
    return (
        <div className="ProjectsCard">
            <div className="ProjectsTitle">
                <span className="ProjectsDate">01 Dec, 2022</span>
                <h2>Simple CRUD App</h2>
            </div>

            <p>
                Creat, Read, Update e Delete são as funcionalidades mais simples de uma aplicação.
            </p>
            <a href="https://github.com/m-rcussilva/javascript/tree/main/simpleCrudApp" target="_blank">Read more</a>
        </div>
    )
}

export default Projects
