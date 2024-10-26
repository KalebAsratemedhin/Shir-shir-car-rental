import Header from "./header/index.jsx"
import Footer from "./footer/index.jsx"
import { Outlet } from "react-router-dom"
import './index.css'
import useFetch from "../../hooks/useFetch.js"
import Loading from "../utils/Loading/index.jsx"
import Error from "../utils/Error/index.jsx"

const Layout = () => {
  const {data, loading, error} = useFetch('http://localhost:5000/current-user')


  if(loading)
    return <Loading />

  if(error)
    return <Error />

  if(data){
    const user = data.data

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
}

export default Layout