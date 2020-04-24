const User = require('../models/user');
const bcrypt = require('bcryptjs');

const createUser = async (req, res, next) => {
    const { name, email, password, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, type});

    await user.save((err) => {
        if (err) {
            const error  = new Error('User could not be created.');
            error.status = 406;
            return next(err, error);
        }
        return res.json({
            message: 'Success! User added successfully.',
            user,
        });
    });
};

module.exports = { createUser };