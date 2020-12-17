const express = require("express");
const path = require("path");
const app = express();
const config = require("./config/keys");
var cors = require("cors");

const referralRouter = require("./routes/referral");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/referral", referralRouter);

app.use("/", (req, res) => {
  return res.status(500).json({
    success: false,
    error: "Path is not defined",
  });
});

app.use((error, req, res, next) => {
  return res.status(500).json({
    success: false,
    error: error.toString(),
  });
});

app.listen(config.port);
