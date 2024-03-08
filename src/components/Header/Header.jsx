import { useEffect } from "react"
import styles from "./Header.module.css"
import logo from "../../../src/assets/crow.png"

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");

            if (window.scrollY > 0) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
