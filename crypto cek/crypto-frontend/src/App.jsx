import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Index"
import Home from "./pages/Home"
import './App.css'
import Price from "./pages/Price"
import Converter from "./pages/Converter"

function App() {

  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
