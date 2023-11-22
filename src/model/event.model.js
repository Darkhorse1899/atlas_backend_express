import {Schema, model} from "mongoose"

const schema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    start_time: {
        type: Date,
    },
    end_time: {
        type: Date,
    },
    address: {
        type: String,
    },
    author: {
        type: String
    }
})

export default model("event", schema);