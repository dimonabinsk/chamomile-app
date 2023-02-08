const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    image: String,
    login: String,
    basket: [],
    buy: [],
    license: Boolean,
    staySystem: Boolean
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = model("User", schema);