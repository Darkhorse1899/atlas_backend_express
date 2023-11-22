import {Schema, model} from "mongoose"

const schema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    posted_by: {
        type: String,
    },
    created_at: {
        type: Date,
    },
    files: {
        type: [String],
    },
    type: {
        type: String,
    }
});

export default model("news", schema);