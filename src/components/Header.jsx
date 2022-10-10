import "../App.css";
import React from "react";
import { Outlet, Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <h2>Devmountain Eatery</h2>
      <div className="headerLinks">
      <nav>
          <Link to="/" >
            <button className="headerBtn">Home</button>
          </Link>
          <Link to="/newRecipe" >
            <button className="headerBtn">Add Recipe</button>
          </Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
