const router = require('express').Router();
const { Location } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const location = await Location.findByPk(id);
    res.json(location);
  } catch (err) {
    next(err);
  }
});
