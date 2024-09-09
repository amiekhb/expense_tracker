const { Router } = require("express");
const {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
  getInfo,
} = require("../controllers/record-controller");

const router = Router();

// router.get();
// router.post();
router.route("/info").get(getInfo);
router.route("/").get(getAllRecords).post(createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
