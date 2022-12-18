import "../../assets/styles/Nav/Nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/">Home</Link>

            <ul className="NavUl">
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
