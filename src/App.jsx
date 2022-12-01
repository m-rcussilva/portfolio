import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Blog from "./pages/Blog/Blog"
import ErrorPage from './pages/ErrorPage/ErrorPage'

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
