const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");
const { auth } = require("../middleware/auth");

const router = Router();

router.route("/").get(auth, getAllCategory).post(auth, createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
