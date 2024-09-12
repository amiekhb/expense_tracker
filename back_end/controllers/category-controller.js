const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", categories: data });
};

const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const data =
    await sql`INSERT INTO categories ( name, description, category_image)VALUES(${name},${description},${category_image});`;
  console.log("DATA", data);
  res
    .status(201)
    .json({ message: "Created new category successfully", user: data });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, category_image } = req.body;
  const data =
    await sql`UPDATE categories SET name=${name},description=${description},category_image=${category_image} WHERE id=${id}`;
  console.log("DATA", data);
  res
    .status(200)
    .json({ message: "Updated category successfully", user: data });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE id=${id}`;
  console.log("DATA", data);
  res
    .status(200)
    .json({ message: "Deleted category successfully", user: data });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
