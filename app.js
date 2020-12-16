var express = require("express");


var app = express();

app.use("/referral", indexRouter);

// error handler
app.use(function (err, req, res, next) {});

app.listen(4000);
