import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import "./assets/global.css"
import Gallery from "./Pages/Gallery/Gallery"
import Home from "./Pages/Home/Home"
import Blog from "./Pages/Blog/Blog"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
       <Header />
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
