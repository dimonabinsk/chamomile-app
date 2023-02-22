const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const router = express.Router({ mergeParams: true });
const chalk = require("chalk");



router
  .get("/main/:fileName", (req, res) => {
    const { fileName } = req.params;
    const dirname = req.url.split("/")[1];
    const name = fileName.split(".")[0];

    const img = fs.readFileSync(
      `./public/images/${dirname}/${name}/${fileName}`
    );

    res.send(img);
  })

  .get("/banner/:fileName", (req, res) => {
    const { fileName } = req.params;
    const dirname = req.url.split("/")[1];
    const name = fileName.split(".")[0];

    const img = fs.readFileSync(
      `./public/images/${dirname}/${name}/${fileName}`
    );

    res.send(img);
  })

  .get("/bg-link/:fileName", (req, res) => {
    const { fileName } = req.params;
    const dirname = req.url.split("/")[1];
    const name = fileName.split(".")[0];

    const img = fs.readFileSync(
      `./public/images/${dirname}/${name}/${fileName}`
    );

    res.send(img);
  })

  .get("/catalog/:fileName", (req, res) => {
    const { fileName } = req.params;
    const dirname = req.url.split("/")[1];
    const name = fileName.split(".")[0].split("-")[0];

    const img = fs.readFileSync(
      `./public/images/${dirname}/${name}/${fileName}`
    );

    res.send(img);
  });

module.exports = router;
