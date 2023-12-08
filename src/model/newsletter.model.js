import { Schema, model } from "mongoose";

const schema = new Schema({
  period: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

export default model("newsletter", schema);
