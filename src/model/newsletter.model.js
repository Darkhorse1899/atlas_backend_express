import { Schema, model } from "mongoose";

const schema = new Schema({
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
  },
});

export default model("newsletter", schema);
