import { Schema, model } from "mongoose";

const schema = new Schema({
  student_first_name: {
    type: String,
  },
  student_last_name: {
    type: String,
  },
  birth_date: {
    type: Date,
  },
  grade_level: {
    type: [Number],
  },
  parent_first_name: {
    type: String,
  },
  parent_last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  about: {
    type: String,
  },
  fee_type: {
    type: String,
  },
});

export default model("admission", schema);
