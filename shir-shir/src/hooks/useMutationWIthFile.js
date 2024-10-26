import { useState } from 'react';

function useMutateWithForm(url, options = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(null);
  


  const mutate = async (payload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(url, {
        ...options,
        body: payload
      });
      const data = await response.json()
      if (!response.ok) {
        throw new Error(`Error: ${data.message}`);
      }
      setSuccess(true);
      setData(data)

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error, success, data };
}

export default useMutateWithForm;
