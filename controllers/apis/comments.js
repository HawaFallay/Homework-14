const { Router } = require ('express');
const { Blog, Comment, User } = require('../..models');
const auth = require('../../middlware/auth');
const commentRouter = new Router();

commentRouter.post("/", auth, async (req, res) => {
    const { body, date } = req.body;

    const comment = await Comment.crete({
        body,
        date,
        user_id:  req.user_id,
        blo_id: req.blo_id,
    });

    res.json({
        comment,
    })
});

module.export = commentRouter;