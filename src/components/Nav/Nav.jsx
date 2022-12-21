import "../../assets/styles/Nav/Nav.css"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/" className="NavLi">
                Home
            </Link>

            <ul className="NavUl">
                <li>
                    <Link to="/about" className="NavLi">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="NavLi">
                        Projetos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
