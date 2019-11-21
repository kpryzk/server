// 'use strict'

// // The sole purpose of this module is to establish a connection to your
// // Postgres database by creating a Sequelize instance (called `db`).
// // You shouldn't need to make any modifications here.

// const chalk = require('chalk')
// const Sequelize = require('sequelize')
// const pkg = require('../../package.json')

// console.log(chalk.yellow('Opening database connection'))

// // create the database instance that can be used in other database files
// const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
//   logging: false, // so we don't see all the SQL queries getting made
// })

// module.exports = db


const Sequelize = require('sequelize')
const pkg = require('../../package.json')
const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}-test` : pkg.name
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const client = new Sequelize(dbUrl, { logging: false, operatorsAliases: false })

module.exports = client
