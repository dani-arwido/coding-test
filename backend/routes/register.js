const express = require('express');
const registerController = require('../controllers/register');
const { celebrate, Joi, Segments } = require('celebrate');

const router = express.Router();
router.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      pNumber: Joi.string().required(),
      fName: Joi.string().required(),
      lName: Joi.string().required(),
      dobDay: Joi.string().allow(''),
      dobMonth: Joi.string().allow(''),
      dobYear: Joi.string().allow(''),
      gender: Joi.string().allow(''),
      email: Joi.string().email().required(),
    }),
  }),
  registerController.register
);

module.exports = router;
