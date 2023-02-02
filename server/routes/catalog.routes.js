const express = require("express");
const Catalog = require("../models/Catalog");

const router = express.Router({ mergeParams: true });

// /api/
router.get("/", async (req, res) => {
  try {
    const list = await Catalog.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      massage: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
