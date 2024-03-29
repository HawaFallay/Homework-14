const { Router } = require("express");

const usersRouter = require('./users');
const blogRouter = require('./blogpost');
const commentRouter = require('./comments');

const apiRouter = new Router();

apiRouter.use('/user', usersRouter);
apiRouter.use('/blogpost', blogRouter);
apiRouter.use('/comments', commentRouter);

module.ecports = apiRouter;