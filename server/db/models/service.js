const Sequelize = require('sequelize');
const db = require('../db');

const Service = db.define('service', {
  category: {
    type: Sequelize.STRING
  },
  imageIcon: {
    type: Sequelize.STRING,
    defaultValue: '/images/recycling-symbol.png'
  }
  // weight: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true
  //   }
  // }
});

module.exports = Service;
