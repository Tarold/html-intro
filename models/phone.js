const mongoose = require('mongoose');

const { PHONE_VALIDATION_SCHEMA } = require('./../utils/validationSchemas');

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 64,
    validate: {
      validator: v => PHONE_VALIDATION_SCHEMA.name.isValidSync(v),
    },
  },
  brand: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 64,
    validate: {
      validator: v => PHONE_VALIDATION_SCHEMA.brand.isValidSync(v),
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  userId: {
    type: mongoose.ObjectId,
    ref: 'User',
  },
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
