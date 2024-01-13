import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <p>🐦‍⬛</p>

                <ul>
                    <li>
                        <a href="#footer">Connect with me</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
