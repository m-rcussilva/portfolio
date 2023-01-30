import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./global.css"
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
