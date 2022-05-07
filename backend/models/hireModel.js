const mongoose = require("../connection");

const schema = new mongoose.Schema({
  staff: { type: mongoose.Types.ObjectId, ref: "StaffMembers" },
  user: { type: mongoose.Types.ObjectId, ref: "Users" },
  created: Date,
  data: Object,
  isrent: Boolean,
});

const model = mongoose.model("Hires", schema);

module.exports = model;
