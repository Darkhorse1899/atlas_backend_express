import { Schema, model } from "mongoose";

const schema = new Schema({
  email: String,
});

export default model("subscriber", schema);
