import React, { useState } from 'react';
import './index.css';
import useMutateWithForm from '../../../hooks/useMutationWIthFile';
import Loading from '../../utils/Loading';
import Error from '../../utils/Error';
import Success from '../../utils/Success';

const PostCarForm = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [age, setAge] = useState('');
  const [count, setCount] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const {mutate, loading, error, success} = useMutateWithForm('http://localhost:5000/posts', {
    method: 'POST',
    headers: {
        'Authorization': "Bearer " + localStorage.getItem('accessToken')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('brand', brand);
    formData.append('model', model);
    formData.append('age', age);
    formData.append('count', count);

    formData.append('price', price);
    formData.append('description', description);
    if (photo) formData.append('photo', photo);
    console.log('formData', formData)


    mutate(formData)
  };

  return (
    <div className='post-container'>
    <div className="form-container">
      <h2>Post a Car for Rent</h2>
      <form onSubmit={handleSubmit} className="post-car-form">
        <label>Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />

        <label>Model</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Count</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required
        />

        <label>Price per Day (ETB)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        ></textarea>

        <label>Upload Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />

        {loading && <Loading />}
        {error && <Error message={error}/>}
        {success && <Success />}

        <button type="submit" className="submit-btn">Post Car</button>
      </form>
    </div>
    </div>
  );
};

export default PostCarForm;
