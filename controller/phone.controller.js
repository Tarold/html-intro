const createHttpError = require('http-errors');
const mongoose = require('mongoose');
const _ = require('lodash');
const { Phone, User } = require('../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return next(createHttpError(400, 'Bad Request'));
    }

    res.status(201).send({ data: createdPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { limit = 10 } = req.query;

  try {
    const foundPhone = await Phone.find().sort({ _id: 1 }).limit(limit).skip(0);

    res.status(200).send({ data: foundPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await Phone.findById(phoneId);
    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
    const updatedPhone = await Phone.findByIdAndUpdate(phoneId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }
    res.status(200).send({ data: updatedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const deletedPhone = await Phone.findByIdAndDelete(phoneId);

    if (!deletedPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports.createUserPhone = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;

  try {
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, 'User Not Found'));
    }

    const newPhone = {
      ...body,
      userId: new mongoose.Types.ObjectId(userId),
    };

    const createdPhone = await Phone.create(newPhone);

    if (!createdPhone) {
      return next(createHttpError(400, 'Bad Request'));
    }

    const preparedPhone = _.omit(createdPhone.toObject(), ['updatedAt']);

    res.status(201).send({ data: preparedPhone });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserPhones = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const foundPhones = await User.aggregate()
      .match({ _id: new mongoose.Types.ObjectId(userId) })
      .lookup({
        from: 'phones',
        localField: '_id',
        foreignField: 'userId',
        as: 'userPhones',
      })
      .project({ userPhones: 1, _id: 0 });

    if (!foundPhones.length) {
      return next(createHttpError(404, 'User Not Found'));
    }

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};
