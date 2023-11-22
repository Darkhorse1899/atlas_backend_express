import {Schema, model} from "mongoose"

const schema = new Schema({
    username:{
        type: String,
    },
    password: {
        type: String,
    }
});
export default model("user", schema);