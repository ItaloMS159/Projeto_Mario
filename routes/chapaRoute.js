const express = require("express");
const router = express.Router();
const candidatoController = require("../controllers/chapaController");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

router.get("/", isAuthenticated, isAdmin, chapaController.getAll);
router.post("/criar", isAuthenticated, isAdmin, chapaController.create);

module.exports = router;
