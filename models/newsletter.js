const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema(
  {
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Newsletter", newsletterSchema);