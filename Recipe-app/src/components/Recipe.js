import React, { useState, useEffect } from "react";
import axios from "axios";

import API_KEY from "../key";

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const title = props.location.state.recipe;

      const { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${API_KEY}&q=${title}`
      );
      setActiveRecipe(data.recipes[0]);
    };
    fetchRecipe();
  }, []);

  // Push history object "/" to go home page
  const goHome = () => props.history.push("/");

  const { image_url, title, publisher, publisher_url } = activeRecipe;

  return (
    <div className="container">
      {activeRecipe.length !== 0 && (
        <div className="active-recipe">
          <img className="active-recipe__img" src={image_url} alt={title} />
          <h3 className="active-recipe__title">{title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>{publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:{" "}
            <span>
              <a href={publisher_url}>{publisher_url}</a>
            </span>
          </p>
          <button onClick={goHome} className="active-recipe__button">
            Go Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipe;
