import styles from "./Header.module.css"
import { ArrowDownRight } from "phosphor-react"

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <ArrowDownRight size={32} />
            </div>
        </header>
    )
}

export default Header
