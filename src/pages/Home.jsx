// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ recipes, deleteRecipe }) => {
  return (
    <div>
      <h1>Recipe Book</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-4">
            <div className="mt-2">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-auto border rounded-md"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">{recipe.title}</h2>
              <p>{recipe.instructions}</p>
              <p>Ingredients: {recipe.ingredients}</p>
            </div>
            <div>
              <Link to={`/edit/${recipe.id}`}>Edit</Link>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
