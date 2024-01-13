import About from "../../components/About"
import styles from "./Home.module.css"
import Header from "../../components/Header/Header"
import Projects from "../../components/Projects"

function Home() {
    return (
        <div className={styles.Home}>
            <Header />
            <About />
            <Projects />
        </div>
    )
}

export default Home
