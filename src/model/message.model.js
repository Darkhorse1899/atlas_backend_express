import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  class: {
    type: String,
  },
  message: {
    type: String,
  },
  type: {
    type: String,
  },
  isview: {
    type: Boolean,
  }
});

export default model("message", schema);
