import {Schema, model} from "mongoose"

const schema = new Schema({
    email: {
        type: String,
    },
    distinction: {
        type: String,
    },
    likeItem: {
        type: String,
    },
    dislikeItem: {
        type: String,
    }
});

export default model("isright", schema)