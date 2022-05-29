const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ouvrageSchema = new Schema({
  libele: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  front_image: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: false,
    default: null,
  },
  prix: {
    type: Number,
    required: false,
    default: null,
  },
  date_creation: {
    type: Date,
    default: Date.now,
  },
});

const Ouvrage = mongoose.model("Ouvrage", ouvrageSchema);
module.exports = Ouvrage;
