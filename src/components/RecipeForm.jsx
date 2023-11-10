import { useState } from "react";

const RecipeForm = ({ onSubmit, initialValues }) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.value]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title || ""}
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={values.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            name="image"
            value={values.image || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </section>
  );
};

export default RecipeForm;
