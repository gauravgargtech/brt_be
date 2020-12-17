const mysqlCon = require("../adapters/mysql");
const referralModel = require("../models/referrals")(mysqlCon);
const firebase = require("../adapters/firebase");
const moment = require("moment");

module.exports = {
  // this api is of no use for now, but can be used as a fallback option can be called if we dont gete data from firebase or
  // firebase is down
  listing: async (req, res) => {
    try {
      let records = await referralModel.findAll();

      return res.status(200).json({
        success: true,
        data: records,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },

  create: async (req, res) => {
    try {
      let values = req.body;
      values.image_url = req.body.avatar;
      values.created_at = moment().format("YYYY-MM-DD HH:mm:ss");

      let referral = await referralModel.create(values);

      await firebase
        .database()
        .ref("/referrals/" + referral.id)
        .set(values);

      return res.status(200).json({
        success: true,
        data: referral.id,
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
