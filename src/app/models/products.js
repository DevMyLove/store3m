const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    _id: Schema.ObjectId,
    category: { type: String, default: "shoes", maxlength: 255 },
    description: [
      {
        title: { type: String, default: "Lengendary" },
        content: {
          type: String,
          default: "Very beautyfull and high quality products",
        },
      },
    ],
    gender: { type: String, default: "female" },
    listSize: [
      {
        size: { type: Number, min: 36, max: 47, default: 36 },
        colors: [
          {
            color: { type: String, default: "white" },
            remaining: { type: Number, default: 0 },
          },
        ],
      },
    ],
    name: { type: String, maxlength: 255 },
    style: { type: String, maxlength: 255 },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    price: { type: Number, min: 0, default: 0 },
    image: { wallImage: String, listImage: [String] },
    publisher: { type: String, default: "Nameless" }
    
  },{
    timestamps: true,
  });

module.exports = mongoose.model("Product", productSchema, "products");
