import styles from "./Header.module.css"
import logo from "../../../public/crow_test.png"

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <img src={logo} alt="Logo" className={styles.LogoImg}/>

                <ul>
                    <li>
                        <a href="#footer">You can find me here</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
