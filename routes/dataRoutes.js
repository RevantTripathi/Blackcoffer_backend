const express = require("express");
const router = express.Router();

const dataController = require('../controllers/dataController')

// router.get("/",dataController.getData);
router.get("/", (req, res) => {
    console.log("/data route hit");
    dataController.getData(req, res);
});

module.exports = router;