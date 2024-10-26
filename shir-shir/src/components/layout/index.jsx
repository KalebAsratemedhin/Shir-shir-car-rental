import Header from "./header/header"
import { Outlet } from "react-router-dom"
import './index.css'

const Layout = () => {
  return (
    <div className="layout">
        <Header />
        <div className="outlet">   
             <Outlet />
        </div>
    </div>
  )
}

export default Layout