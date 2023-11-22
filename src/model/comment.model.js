import {Schema, model} from "mongoose"

const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    },
    message: {
        type: String,
    },
    parent: {
        type: String,
    },
    date: {
        type: Date,
    }
});

export default model("comment", schema);