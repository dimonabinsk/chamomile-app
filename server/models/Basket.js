const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: {
      //   Кто оставил комментарий
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    basket: [
      {
        productId: String,
        quantity: Number,
        price: Number,
        totalPrice: Number,
      },
    ],
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = model("Basket", schema);
