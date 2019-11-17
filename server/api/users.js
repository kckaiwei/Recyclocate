const router = require('express').Router();
const { User } = require('../db/models');
module.exports = router;

// Need to add middleware for logged in user

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields
      attributes: ['id', 'username']
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// loggin in user privilege
router.get('/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const data = await User.findByPk(userId, {
      attributes: ['id', 'username', 'email']
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
});
