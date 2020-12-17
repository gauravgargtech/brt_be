const firebase = require("firebase");
const config = require("../config/keys");

firebase.initializeApp({
  databaseURL: config.firebaseDbUrl,
});

module.exports = firebase;
