import { Outlet } from "react-router-dom"
import Error from "./components/utils/Error"

const Protected = () => {
    const token = localStorage.getItem('accessToken')

    if(!token){
        return <Error message={'You are not authorized.'} />
    }
  return (
    <div>
        <Outlet />

    </div>
  )
}

export default Protected