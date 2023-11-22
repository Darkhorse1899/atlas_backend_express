import {Schema, model} from "mongoose"

const schema = new Schema({
    date: {
        type: Date,
    },
    schedules: [String],
    grade: {
        type: Number,
    }
});

export default model("calendar", schema);