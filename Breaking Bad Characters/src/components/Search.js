import React, { useState } from 'react';

const Search = ({ setQuery }) => {
  const [text, setText] = useState('');

  const searchChangeHandler = (e) => {
    setText(e.target.value);

    setQuery(e.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          type="text"
          name="search"
          value={text}
          onChange={searchChangeHandler}
          id="search"
        />
      </form>
    </section>
  );
};

export default Search;
