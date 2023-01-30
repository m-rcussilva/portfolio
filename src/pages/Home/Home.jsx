import About from "../../components/About"
import styles from "./Home.module.css"
import Header from "../../components/Header/Header"
import Projects from "../../components/Projects"

function Home() {
    return (
        <div className={styles.Home}>
            <Header />
            <div className={styles.HomeMyNameContainer}>
                <span>Marcus</span>
                <span>Silva</span>
                <p className={styles.HomeAboutMe}>Front-end Developer</p>
            </div>
            <About />
            <Projects />
        </div>
    )
}

export default Home
