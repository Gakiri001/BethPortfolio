import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import "./assets/global.css"
import Gallery from "./Pages/Gallery/Gallery"

function App() {

  return (
    <BrowserRouter>
       <Header />
       <Routes>
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
