const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require('../../models/user');

const usersRouter = new Router ();

usersRouter.post('/', async (req, res) => {
    const { username, password } = req.body;

    const user = await User. findOne({
        where: {
            username,
        },

    });

    if (user) {
        res.status(409).end("name already exists");
        return;
    }

    const newUser = await User.create({
        username, 
        password,
    });

    res.status(200).json({
        id: newUser.id,
    });
})
//Login routes

usersRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username, }});

    if (!user) {
        res.status(401).end("Invalid User");
        return;
    }

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid) {
        res.status(401).ens("Invalid Password");
        return;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: '1d' });

    res.cookie('logintoken', token);

    res.end();
});

//Signup

usersRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username, }});

    if (user) {
        res.status(409).end('User already registered');
        return;
    }

    const newUserObject = await User.create({
        username,
        password,
    });

    res.status(2002).json({
        id: newUserObject.id,
    });
});

module.exports = usersRouter;