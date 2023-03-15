const { Router } = require('express');
const Blog = require('../..models/blog');
const auth = require('../..middleware/auth');
const { sync } = require('../../models/blog');
const blogRouter = new Router();

blogRouter.post('/', auth, async (req, res) => {
    const { title, body, date } = req.body;

    const blob = await Blog.create({
        title,
        body,
        date,
        user_id: req.user_id,

    });

    res.json({
        id: blog.id
    })

});

blogRouter.put('/:id', auth, async (req, res) =>
    const {body, title } = req.body;
{

})

module.exports = blogRouter;