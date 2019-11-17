const Sequelize = require('sequelize');
const db = require('../db');

const Location = db.define('location', {
  latitude: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  longitude: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  finalImage: {
    type: Sequelize.STRING,
    defaultValue: '/images/recycling-symbol.png'
  }
});

module.exports = Location;
