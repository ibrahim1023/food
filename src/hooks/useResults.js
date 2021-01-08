import { useEffect, useState } from 'react';

import yelp from '../api/YelpAPI';

export default () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const { data } = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);
};
