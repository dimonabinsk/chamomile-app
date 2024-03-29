const express = require("express");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const router = express.Router({ mergeParams: true });
const User = require("../models/User");
const { generateUserData } = require("../utils/helpers");
const tokenService = require("../services/token.service");
const Basket = require("../models/Basket");

const validations = [
  check("email").normalizeEmail().isEmail().withMessage("Некорректный email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Минимальная длина пароля 8 символов")
    .matches(/\d/)
    .withMessage("Пароль должен содержать число"),
];

// /api/auth/signUp
// 1. get data from req (email, password, sex, profession, quality[], name)
// 2. check is users already exists
// 3. hash password
// 4. create user
// 5. generate tokens
router.post("/signUp", ...validations, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: {
          message: "INVALID_DATA",
          code: 400,
          errors: errors.array(),
        },
      });
    }
    const { email, password } = req.body;
    // console.log(req.body);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: {
          message: "EMAIL_EXISTS",
          code: 400,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      ...generateUserData(),
      ...req.body,
      password: hashedPassword,
    });

    const tokens = tokenService.generate({
      _id: newUser._id,
    });
    await tokenService.save(newUser._id, tokens.refreshToken);

    res.status(201).send({
      ...tokens,
      userId: newUser._id,
    });
    await Basket.create({
      email: email,
      userId: newUser._id,
      totalQuantity: 0,
      totalPrice: 0,
      basket: { product: false },
    });
  } catch (error) {
    res.status(500).json({
      massage: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

// /api/auth/signInWithPassword
// 1. Validate
// 2. find user
// 3. compare hashed password
// 4. generate token
// 5. return data
router.post("/signInWithPassword", ...validations, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: {
          message: "INVALID_DATA",
          code: 400,
          errors: errors.array(),
        },
      });
    }
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).send({
        error: {
          message: "EMAIL_NOT_FOUND",
          code: 400,
          errors: errors.array(),
        },
      });
    }

    const isPasswordEqual = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordEqual) {
      return res.status(400).send({
        error: {
          message: "INVALID_PASSWORD",
          code: 400,
          errors: errors.array(),
        },
      });
    }

    const tokens = tokenService.generate({
      _id: existingUser._id,
    });

    await tokenService.save(existingUser._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: existingUser._id });
  } catch (error) {
    res.status(500).json({
      massage: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

// /api/auth/token
function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);
    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const tokens = await tokenService.generate({ _id: data._id });
    await tokenService.save(data._id, tokens.refreshToken);
    res.status(200).send({ ...tokens, userId: data._id });
  } catch (error) {
    res.status(500).json({
      massage: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
