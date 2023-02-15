const express = require("express");
const router = express.Router({ mergeParams: true });

// /api/auth
router.use("/auth", require("./auth.routes"));

// /api/catalog
router.use("/catalog", require("./catalog.routes"));

// /api/basket
router.use("/basket", require("./basket.routes"));

// /api/buying
router.use("/buying", require("./buying.routes"));

// /api/user
router.use("/user", require("./user.routes"));

// /api/upload_avatar
router.use("/images", require("./images.routes"));

module.exports = router;
