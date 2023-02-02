const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    method: [],
    group: String,
    genus: String,
    family: String,
    name: String,
    images: [],
    price: Number,
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = model("Catalog", schema);
