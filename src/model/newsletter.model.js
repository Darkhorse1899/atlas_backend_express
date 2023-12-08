import { Schema, model } from "mongoose";

const schema = new Schema({
  period: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
});

export default model("newsletter", schema);
