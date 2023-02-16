const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const router = express.Router({ mergeParams: true });
const chalk = require("chalk");

router.post("/:fileName", (req, res) => {
  // console.log(req.body);
  const { fileName } = req.params;
  const name = fileName.split(".")[0];
  // console.log(name);
  //   const randomString = crypto.randomBytes(5).toString("hex");

  const stream = fs.createWriteStream(
    `./public/images/main/${name}/${fileName}`
  );

  stream.on("finish", function () {
    console.log(chalk.yellow("файл был записан"));
    res.end("file has been written");
  });

  stream.write(Buffer.from(req.body), "utf-8");
  stream.end();
});

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
