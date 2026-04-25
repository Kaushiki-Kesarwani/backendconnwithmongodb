
const{Schema,model} = require("mongoose");

const mySchema = new Schema({
    name:{
       type: String,
        required: true,
        maxlength: 50

    },
    creditedAt:{
        type: Date,
    default: Date.now,//Sets the time the document was created
    },
});

const TaskModel = model("test",mySchema)

module.exports = TaskModel