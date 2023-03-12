const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema({
    roomNo: {
        type: String,
        unique: true,
        required: true,
    },
    noOfPeoplesInRoom: {
        type: Number,
        unique: false,
        required: true,
    },
    userId: {
        type: Number,
        unique: true,
        required: true,
        ref: "user",
    },
},
{
    timestamps: true
   },
)

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

    