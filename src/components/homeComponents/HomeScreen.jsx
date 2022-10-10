import "../../App.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import RecipeCard from "../newRecipeComponents/RecipeCard";

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const url = `https://recipes.devmountain.com`

  const searchedRecipe = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });
  const getAllRecipes = () => {
    axios.get(`${url}/recipes`).then((response) => {
      setRecipes(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getAllRecipes();
  }, []);
  return (
    <div>
      <AdBanner classname="banner" />
      <div className="homeSearch">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for a Recipe"
        />
      </div>
      <div className="srchRecipe">{searchedRecipe}</div>
    </div>
  );
};

export default HomeScreen;
