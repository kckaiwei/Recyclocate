const Sequelize = require('sequelize')
const pkg = require('../../package.json')
require('../../secrets')
require('dotenv').config()

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.REACT_APP_DATABASE_URL ||
    `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    }
  }
)
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
