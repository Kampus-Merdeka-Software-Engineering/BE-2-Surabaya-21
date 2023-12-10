const express = require("express");
const router = express.Router();
const path = require('path');
const testimoniController = require("../controllers/controllers");
const {CreateTestimoni, getAllTestimoni} = require("../controllers/controllers");


router.post("/CreateTestimoni",testimoniController.CreateTestimoni);
router.get("/getAllTestimoni", testimoniController.getAllTestimoni);

// router.get('/testimoni', (req, res) => {
//     res.sendFile(path.join(__dirname, '../view/index.html'));
// });
router.get('/getAllTestimoni', getAllTestimoni);

module.exports = router;