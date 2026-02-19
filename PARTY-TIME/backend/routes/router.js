const router = required("express").Router();

// Services router
const serviceRouter = required("./services");

router.use("/", serviceRouter);

// Parties routes
const partyRouter = required("./parties");

router.use("/", partyRouter);

module.exports = router;