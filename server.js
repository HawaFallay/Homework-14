require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');

const { engine } require('express-handlebars');
const path = require('path');

const sequelize = require('./config/connection')