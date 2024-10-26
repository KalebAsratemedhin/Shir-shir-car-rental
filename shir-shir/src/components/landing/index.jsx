import  './index.css'
import Card from '../posts/card'
import car1 from '../assets/car-1.jfif'
import car2 from '../assets/car-2.jfif'
import car3 from '../assets/car-3.jfif'
import car4 from '../assets/car-4.jfif'
import car5 from '../assets/car-5.jfif'


const cars = [car1, car2, car3, car4, car5]

const Landing = () => {
  return (
    <div className='landing'>
    <div className="car-show ">
        <h1>cars for rent</h1>
    </div>
    <h1>Your posts</h1>
    <div className="car-show cars-posted">
        

        {
            cars.map((car) => {
                return <Card image={car} /> 
            })
            
        }



    </div>

    <div className="car-show cars-posted">
        <h1>Rent History</h1>
        {
            cars.map((car) => {
                return <Card image={car} /> 
            })
            
        }

    </div>



    </div>
  )
}

export default Landing