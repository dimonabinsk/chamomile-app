const express = require("express");
const auth = require("../middleware/auth.middleware");
const Basket = require("../models/Basket");

const router = express.Router({ mergeParams: true });

router.get("/", auth, async (req, res) => {
  try {
    console.log(req);
    const list = await Basket.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const newBasket = await Basket.create(req.body);
    res.status(201).send(newBasket);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(req.user);
    console.log(userId);
    if (userId === req.user._id) {
      const updateBasket = await Basket.findOneAndUpdate(userId, req.body, { new: true });
      res.status(201).send(updateBasket);
    }
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
