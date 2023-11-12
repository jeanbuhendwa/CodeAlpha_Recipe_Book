import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes, onDelete }) => {
  return (
    <section>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
            <button onClick={() => onDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeList;
