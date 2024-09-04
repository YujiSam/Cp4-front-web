import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Contato from "./components/Contato"

const App=()=>{

  return (
    <>
      <Nav/>
      <Outlet/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
