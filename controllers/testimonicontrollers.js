const User = require('../models/UserModel');

exports.getTestimoni = async (req, res) => {
    try {
        const awaitUser = await User.findAll();
        res.status(200).json({
            status: "success",
            data: awaitUser
        });
    }

        catch(err) {
            res.status(400).json({
                status: "fail",
                message: err.message
            });
        }
    
    }