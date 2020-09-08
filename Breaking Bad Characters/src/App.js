import React, { useState, useEffect } from 'react';

import axios from './axios_intance';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import Search from './components/Search';

export const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`/characters?name=${query}`);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={(query) => setQuery(query)} />

      <CharacterList isLoading={isLoading} items={items} />
    </div>
  );
};
