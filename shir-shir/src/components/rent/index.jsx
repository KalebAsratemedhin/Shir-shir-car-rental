import Loading from "../utils/Loading"
import Error from "../utils/Error"
import CarCard from "../posts/card"
import useFetch from "../../hooks/useFetch"
import './index.css'


const CarsList = () => {
  const {data, loading, error} = useFetch('http://localhost:5000/posts/')

  if(loading)
    return <Loading />

  if(error)
    return <Error message={error} />


  if(data){
    
  return (
    <div>
        <section className="home-container">
        <h2>Available Cars for Rent</h2>
        <div className="search-filter">
          <input type="text" placeholder="Search cars..." className="search-bar" />
          <select className="filter-dropdown">
            <option value="">Filter by Type</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
          </select>
        </div>
        <div className="car-list">
            {
                data.data.map((car) => {

                   return <CarCard key={car._id} car={car} />

                })
            }
          
          
        </div>
      </section>
    </div>
  )}
}

export default CarsList