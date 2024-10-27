// import React from 'react';
// import './index.css';

// import CarCard from '../posts/card';
// import useFetch from '../../hooks/useFetch';
// import Loading from '../utils/Loading';
// import Error from '../utils/Error';


// const Dashboard = () => {

//   const carsPosted = 10;
//   const carsRented = 7;
//   const totalEarnings = 1500;
//   const activeRentals = [
//     { carModel: "Toyota Camry", rentalDate: "2024-10-20", status: "Ongoing" },
//     { carModel: "Honda Accord", rentalDate: "2024-10-18", status: "Returned" },
//     { carModel: "Ford Mustang", rentalDate: "2024-10-15", status: "Ongoing" },
//   ];

//   const {loading, error, success, data} = useFetch('http://localhost:5000/posts/current-user')
//   const {loading: loadingRent, error: errorRent, success: successRent, data: rent} = useFetch('http://localhost:5000/rents/current-user')
//   const {loading: loadingSummary, error: errorSummary, success: successSummary, data: summary} = useFetch('http://localhost:5000/users/summary')

//   const username = localStorage.getItem('username')

//   return (
//     <div className="dashboard-container">
//       <h1>Welcome, {username}</h1>
//         {summary && 
//            <div className="dashboard-stats">
//            <div className="stat-card">
//              <h2>{summary.data.posts}</h2>
//              <p>Cars Posted</p>
//            </div>
//            <div className="stat-card">
//              <h2>{summary.data.rented}</h2>
//              <p>Rented</p>
//            </div>
//            <div className="stat-card">
//              <h2>{summary.data.income} ETB</h2>
//              <p>Total Earnings</p>
//            </div>
//          </div>
//         }

//         {loadingRent && <Loading />}
//         {errorRent && <Error message={carError} />}
//         {rent && 
//             <div className="active-rentals">
//             <h2>Rentals</h2>
//             <table className="rentals-table">
//               <thead>
//                 <tr>
//                   <th>Car Model</th>
//                   <th>Rental Date</th>
//                   <th>Role</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rent.data.map((rental, index) => (
//                   <tr key={index}>
//                     <td>{rental.car.model}</td>
//                     <td>{new Date(rental.rentedAt).toDateString()}</td>
//                     <td>{rental.rentee === username ? 'rentee' : 'renter'}</td>
//                     <td>{rental.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             </div>
        
//         }



        
      
      

//       <h1>Your Cars</h1>

//     {data &&  
//         data.data.map((car) => {

//             return <CarCard key={car._id} car={car} />
//         })
//     }
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import './index.css';
import CarCard from '../posts/card';
import useFetch from '../../hooks/useFetch';
import RentalsTable from '../rent/rentals-table'; 

const Dashboard = () => {
  const { loading: loadingSummary, error: errorSummary, data: summary } = useFetch('http://localhost:5000/users/summary');
  const username = localStorage.getItem('username');
  const { loading, error, success, data } = useFetch('http://localhost:5000/posts/current-user');

  return (
    <div className="dashboard-container">
      <h1>Welcome, {username}</h1>
      {summary && (
        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>{summary.data.posts}</h2>
            <p>Cars Posted</p>
          </div>
          <div className="stat-card">
            <h2>{summary.data.rented}</h2>
            <p>Rented</p>
          </div>
          <div className="stat-card">
            <h2>{summary.data.income} ETB</h2>
            <p>Total Earnings</p>
          </div>
        </div>
      )}

      <RentalsTable username={username} /> 

      <h1>Your Cars</h1>
      {data && data.data.map((car) => (
        <CarCard key={car._id} car={car} />
      ))}
    </div>
  );
};

export default Dashboard;

