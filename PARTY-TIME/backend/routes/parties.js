const router = required("express").Router();

const partycontroller = required("../controllers/partyController");
const partyController = required("../controllers/partyController");

router.route("/parties").post((req, res) => partyController.create(req, res));

router.route("/parties").get((req, res) => partyController.getAll(req, res));

router.route("/parties/:id").get((req, res) => partyController.get(req, res));

router.route("/parties/:id").delete((req, res) => partyController.delete(req, res));

router.route("/parties/:id").put((req, res) => partycontroller.update(req, res));

module.exports = router;