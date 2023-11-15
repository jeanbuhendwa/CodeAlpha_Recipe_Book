import React from "react";
import { Link } from "react-router-dom";

const Home = ({ recipes, deleteRecipe }) => {
  return (
    <div className="pt-[100px] px-3 md:px-[120px] flex flex-col items-center justify-center">
      <h1 className="text-[#461212] font-bold text-3xl my-5">Recipe Book</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="mb-4 border-4 border-red-950 bg-primary bg-opacity-[0.1] backdrop-blur-sm rounded-[8px] py-2 px-4 grid grid-rows-3"
          >
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
