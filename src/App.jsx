import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import About from "./pages/About/About"

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
