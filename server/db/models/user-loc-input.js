const Sequelize = require('sequelize');
const db = require('../db');

const UserLocInput = db.define('userLocInput', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  proposedImage: {
    type: Sequelize.STRING,
    defaultValue: '/images/recycling-symbol.png'
  }
});

module.exports = UserLocInput;
