// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ recipes, deleteRecipe }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Recipe Book</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-4">
            <Link
              to={`/edit/${recipe.id}`}
              className="text-blue-500 hover:underline mr-2"
            >
              {recipe.title}
            </Link>
            <button
              onClick={() => deleteRecipe(recipe.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
            <div className="mt-2">
              {recipe.imageUrl && (
                <a
                  href={recipe.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="max-w-full h-auto border rounded-md"
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
