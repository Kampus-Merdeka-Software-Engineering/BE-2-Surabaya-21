const express = require("express");
const router = express.Router();
const path = require('path');

const { CreateTestimoni } = require("../controllers/controllers");
const { getTestimoni } = require("../controllers/testimonicontrollers");


router.post("/CreateTestimoni", CreateTestimoni);
router.get("/getTestimoni", getTestimoni);
router.get('/testimoni', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});

module.exports = router;