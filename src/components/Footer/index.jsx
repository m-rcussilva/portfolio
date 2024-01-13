import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.Footer} id="foote">
            <div className={styles.FooterContainer}>
                <p className={styles.FooterMadeBy}>©2024 MS</p>

                <ul>
                    <li>
                        <a
                            href="https://twitter.com/marcusluis_s"
                            target="_blank"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/m-rcussilva"
                            target="_blank"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.last.fm/user/m-rcusluis"
                            target="_blank"
                        >
                            Last.fm
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
