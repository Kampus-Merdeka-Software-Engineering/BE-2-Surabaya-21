const { User } = require('../models');


class TestimoniController {
    async CreateTestimoni(req, res) {
        try {
            const { nama, email, notelp, testimonial } = req.body;
            if (!nama || !email || !testimonial) {
                return res.status(400).json({
                    status: "fail",
                    message: "Nama, email, and testimonial are required fields.",
                });
            }
            const user = await User.create({ nama, email, notelp, testimonial });
            res.status(201).json({
                status: "success",
                data: user

            });
        } catch (err) {
            res.status(400).json({
                status: "fail",
                message: err.message
            });
        }
    }
    
    static async getAllTestimoni(req, res) {
        try {
            const user = await User.findAll({
                include: {
                    model: User,
                    attributes: ['nama', 'email', 'notelp', 'testimonial'],
                },
            });
            res.json(user);
        } catch (error) {
            res.status(500).json({
                status: "fail",
                message: error.message,
            });
        }
    }
}
module.exports = TestimoniController;

// exports.CreateTestimoni = async (req, res) => {
//     try {
        
//          const { nama, email, notelp, testimonial } = req.body;
//          if (!nama || !email || !testimonial) {
//             return res.status(400).json({
//                 status: "fail",
//                 message: "Nama, email, and testimonial are required fields.",
//             });
//         }
//         const user = await User.create( { nama, email, notelp, testimonial });
//         res.status(201).json({
//             status: "success",
//             data:user

//         });
//     } catch (err) {
//         res.status(400).json({
//             status: "fail",
//             message: err.message
//         });
//     }
// }
