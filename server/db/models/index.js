const User = require('./user');
const Location = require('./location');
const UserLocInput = require('./user-loc-input');
const Service = require('./service');

User.belongsToMany(Location, {
  through: { model: UserLocInput, unique: false },
  constraints: false
});
Location.belongsToMany(User, {
  through: { model: UserLocInput, unique: false },
  constraints: false
});
UserLocInput.belongsToMany(Service, { through: 'userServInput' });
Service.belongsToMany(UserLocInput, { through: 'userServInput' });
Location.belongsToMany(Service, { through: 'finalServices' });
Service.belongsToMany(Location, { through: 'finalServices' });

module.exports = {
  User,
  Location,
  UserLocInput,
  Service
};
