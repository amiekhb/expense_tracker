const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
} = require("../controllers/user-controller");
const { auth } = require("../middleware/auth");

const router = Router();

// router.get();
// router.post();
router.route("/profile").get(auth, getCurrentUser);
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
