const mysqlCon = require("../adapters/mysql");
const referralModel = require("../models/referrals")(mysqlCon);

module.exports = {
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
  create: (req, res) => {},
};
