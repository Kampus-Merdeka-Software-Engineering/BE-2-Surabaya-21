const express = require("express");
const router = express.Router();
const path = require('path');
const {CreateTestimoni} = require("../controllers/controllers");


router.post("/CreateTestimoni",CreateTestimoni);
router.get('/testimoni', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});
module.exports = router;