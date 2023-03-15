const { Router } = require("express");

const usersRouter = require('./users');
const blogRouter = require('./blogpost');
const commentRouter = require('./comments');

const apiRouter = new Router();

apiRouter