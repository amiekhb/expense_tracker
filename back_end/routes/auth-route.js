const { Router } = require("express");
const { signUp, logIn } = require("../controllers/auth-controller");

const router = Router();

// router.get();
// router.post();
router.route("/signup").post(signUp);
router.route("/login").post(logIn);

module.exports = router;
