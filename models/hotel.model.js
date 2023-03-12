const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hotelSchema = new Schema({
    hotelId: {
        type: Number,
        unique: true,
        required: true,
    },
    roomNo: {
        type: String,
        unique: true,
        required: true,
    },
    hotelName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minLength: 10,
    },
},
{
    timestamps: true
   },
)

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;

