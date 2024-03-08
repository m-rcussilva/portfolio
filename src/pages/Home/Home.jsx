import About from "../../components/About"
import styles from "./Home.module.css"
import Header from "../../components/Header/Header"
import Projects from "../../components/Projects"
import Footer from "../../components/Footer"

function Home() {
    return (
        <>
            <Header />
            <div className={styles.Home}>
                <About />
                <Projects />
                <Footer />
            </div>
        </>
    )
}

export default Home
