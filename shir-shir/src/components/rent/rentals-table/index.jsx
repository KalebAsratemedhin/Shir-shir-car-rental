import React from 'react';
import './index.css';
import useFetch from '../../../hooks/useFetch';
import useMutate from '../../../hooks/useMutation';
import Loading from '../../utils/Loading';
import Error from '../../utils/Error';

const RentalsTable = ({ username }) => {
  const { loading: loadingRent, error: errorRent, data: rent } = useFetch('http://localhost:5000/rents/current-user');

  const { mutate: approveRent } = useMutate('http://localhost:5000/rents/approve', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });

  const { mutate: confirmReturn } = useMutate('http://localhost:5000/rents/returned', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    },
  });

  const handleApprove = (rentId) => {
    approveRent({ rentId });
  };

  const handleConfirmReturn = (rentId) => {
    confirmReturn({ rentId });
  };

  return (
    <div className="active-rentals">
      <h2>Rentals</h2>
      {loadingRent && <Loading />}
      {errorRent && <Error message={errorRent} />}
      {rent && (
        <table className="rentals-table">
          <thead>
            <tr>
              <th>Car Model</th>
              <th>Rental Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rent.data.map((rental) => (
              <tr key={rental._id}>
                <td>{rental.car.model}</td>
                <td>{new Date(rental.rentedAt).toDateString()}</td>
                <td>{rental.rentee === username ? 'Rentee' : 'Renter'}</td>
                <td>{rental.status}</td>
                <td>
                  {rental.renter === username && rental.status === 'pending' && (
                    <button onClick={() => handleApprove(rental._id)}>Approve</button>
                  )}
                  {rental.renter === username && rental.status === 'active' && (
                    <button onClick={() => handleConfirmReturn(rental._id)}>Confirm Return</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RentalsTable;
