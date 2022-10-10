import "./App.css";
import React from "react";
import {Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import RecipeCard from "./components/newRecipeComponents/RecipeCard";

function App() {
  
  return (
    <div className="App">
      <Header className="header" />
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="newRecipe" element={<NewRecipeScreen />} />
          <Route path="recipe/:id" element={<DetailScreen />} />
        </Routes>
        {/* <RecipeCard/> */}
   
      <Footer />
    </div>
  );
}

export default App;
