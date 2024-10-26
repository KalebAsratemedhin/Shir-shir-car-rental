import Header from "./header/index.jsx"
import Footer from "./footer/index.jsx"
import { Outlet } from "react-router-dom"
import './index.css'

const Layout = () => {
  return (
    <div className="layout">
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
     
        <Footer /> 
    </div>
  )
}

export default Layout