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
            className="mb-4 shadow-inner bg-primary bg-opacity-[0.1] backdrop-blur-sm rounded-[8px] py-2 px-4 pb-5"
          >
            <div className="mt-2">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-[200px] border rounded-md mb-4"
              />
            </div>

            <div className="h-[130px]">
              <h2 className="text-lg font-bold text-[#461212] mb-2">
                {recipe.title}
              </h2>
              <p className="text-primary font-semibold mb-2 text-sm">
                {recipe.instructions}
              </p>
              <p className="text-primary font-semibold mb-4">
                Ingredients:{" "}
                <span className="italic font-normal mb-2">
                  {recipe.ingredients}
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Link
                to={`/edit/${recipe.id}`}
                className="text-red-500 border-2 border-red-500 py-1 px-5 rounded-lg"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteRecipe(recipe.id)}
                className="text-white bg-red-500 py-1 px-5 rounded-lg"
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
