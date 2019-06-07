import React, { Component } from "react";
import axios from "axios";

import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Header from "./components/Header";
import API_KEY from "./key";
import "./App.css";

class App extends Component {
  state = {
    recipes: []
  };
  componentDidMount() {
    const jsonStr = localStorage.getItem("recipes");
    if (jsonStr) {
      const recipes = JSON.parse(jsonStr);
      this.setState({ recipes });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // We stringify state to store in localStorage
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}?count=5`
    );
    this.setState({
      recipes: data.recipes
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
