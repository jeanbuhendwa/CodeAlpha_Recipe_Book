import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = ({ recipes, editRecipe }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
  });

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id === parseInt(id, 10));
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
    }
  }, [id, recipes]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editRecipe(parseInt(id, 10), recipe);
    navigate("/");
  };
  return (
    <div className="pt-[100px] px-3 md:mx-[120px] flex flex-col justify-center items-center">
      <h1 className="text-[#461212] font-bold text-3xl my-5">Edit Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[60%] flex flex-col justify-center gap-y-5"
      >
        <div className="flex items-center justify-start gap-10">
          <label className="block text-lg font-semibold text-primary w-[25%]">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="flex items-center justify-start gap-10">
          <label className="block text-lg font-semibold text-primary w-[25%]">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-start gap-10">
          <label className="block text-lg font-semibold text-primary w-[25%]">
            Instructions
          </label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-start gap-10">
          <label className="block text-lg font-semibold text-primary w-[25%]">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#461212] font-semibold py-3 px-5 rounded-lg hover:bg-[#ffffff00] hover:text-[#461212] hover:border-2 border-[#461212] transition-all duration-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
