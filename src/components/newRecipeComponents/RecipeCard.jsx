import "../../App.css";
import React from "react";
import salad from "../../assets/salad.jpg";
import doughnut from "../../assets/doughnut.jpg";
import cheesedog from"../../assets/cheesedog.jpg";
import { Navigate, useNavigate } from "react-router-dom";

function RecipeCard({recipe}) { console.log(recipe)
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
  return (
      <div className="recipeCard">
        <img src={recipe.image_url ? recipe.image_url : doughnut} alt="a doughnut" />
        <h3>{recipe.recipe_name}</h3>
        <button className="blue-btn" onClick={handleClick}>See More</button>
      </div>
  );
}

export default RecipeCard;
