import {Schema, model} from "mongoose"

const schema = new Schema({
    pagename: {
        type: String,
        unique: true,
        require: true
    },
    detail: {
        type: Object,
    }
});

export default model("page", schema);