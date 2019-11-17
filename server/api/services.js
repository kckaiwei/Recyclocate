const router = require('express').Router();
const { Service } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const service = await Service.findByPk(id);
    res.json(service);
  } catch (err) {
    next(err);
  }
});
