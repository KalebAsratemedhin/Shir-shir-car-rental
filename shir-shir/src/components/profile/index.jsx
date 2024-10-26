import React, { useState, useEffect } from 'react';
import './index.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetch('http://localhost:5000/api/user/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching profile:', error));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    // Submit updated user data
    fetch('http://localhost:5000/api/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsEditing(false);
        setUser(data);
        console.log('Profile updated:', data);
      })
      .catch((error) => console.error('Error updating profile:', error));
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <h3>{user.username}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
      </div>

      {isEditing && (
        <form onSubmit={handleUpdate} className="edit-form">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />

          <button type="submit" className="submit-btn">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
