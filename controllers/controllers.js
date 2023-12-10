
const User = require('../models/UserModel');



exports.CreateTestimoni = async (req, res) => {
    try {
        
         const { nama, email, notelp, testimonial } = req.body;
         if (!nama || !email || !testimonial) {
            return res.status(400).json({
                status: "fail",
                message: "Nama, email, and testimonial are required fields.",
            });
        }
        const user = await User.create( { nama, email, notelp, testimonial });
        res.status(201).json({
            status: "success",
            data:user

        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
}
