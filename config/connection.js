require('dotenv').config();

const Sequelize = require('sequelize');
const { createPool } = require('mysql')

let sequelize;

if (process.env.CLEARDB_DATABASE_URL) {
    Sequelize + new Sequelize(process.env.CLEARDB_DATABASE_URL)
} else {
    sequelize = new Sequelize(
        process.env.DB_DB,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            host: process.env.DB_HOST,
            dialect: 'mysql',
            port: 3306,
        },
    );
}

module.exports = sequelize;