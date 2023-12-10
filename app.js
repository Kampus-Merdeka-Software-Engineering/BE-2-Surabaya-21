require('dotenv').config();

const dotenv = require('dotenv');
const db = require('./config/Database');
const port = process.env.PORT;
const router = require('./routes/routes');
const path = require('path');
const cors = require('cors');



const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
router.use(express.static(path.join(__dirname, './view')));



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

db.sync()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    })
app.use("/api", router);


app.listen(port, console.log(`Server started on port ${port}`));
