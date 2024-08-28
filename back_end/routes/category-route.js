const { CategoryRouter } = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");

const router = Router();

// router.get();
// router.post();
router.route("/").get(getAllCategory).post(createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = CategoryRouter;
