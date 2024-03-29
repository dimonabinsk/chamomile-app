require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const fileupload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const initDataBase = require("./startUp/initDataBase");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// /api
app.use("/api", routes);
const PORT = config.get("port") ?? 8080;
const MongoDB = process.env.DB_MONGO;

// if (process.env.NODE_ENV === "production") {
// console.log("Production");
// } else {
//     console.log("Development");
// }

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client")));

  const indexPath = path.join(__dirname, "client", "index.html");

  app.get("*", (req, res) => {
    res.sendFile(indexPath);
  });
}

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDataBase();
    });
    await mongoose.connect(MongoDB);
    console.log(chalk.green("MongoDB подключен!"));
    app.listen(PORT, () => {
      console.log(
        chalk.greenBright(`Сервер запущен host: http://localhost:${PORT}/`)
      );
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
}

start();
