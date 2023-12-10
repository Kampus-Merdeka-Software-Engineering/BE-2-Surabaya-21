const express = require("express");
const router = express.Router();
const path = require('path');
const TestimoniController = require("../controllers/controllers");



router.post("/CreateTestimoni",TestimoniController.CreateTestimoni);
router.get("/getTestimoni", TestimoniController.getTestimoni);

// router.get('/testimoni', (req, res) => {
//     res.sendFile(path.join(__dirname, '../view/index.html'));
// });
// router.get('/getAllTestimoni', getAllTestimoni);

module.exports = router;