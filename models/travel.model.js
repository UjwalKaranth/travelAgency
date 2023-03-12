const mongoose = require('mongoose')

const Schema = mongoose.Schema

const travelSchema = new Schema({
    userId: {
        type: Number,
        unique: true,
        required: true,
        ref: "user",
    },
    destination: {
        type: String,
        required: true, 
        trim: true,
        unique: false,
    },
    date: {
        type: Date,
        unique: false,
        trim: true,
        required: true,
    },
    days: {
        type: Number,
        required: true,
        unique: false,
    },
    noOfPeoples: {
        type: Number,
        unique: false,
        required: true,
    },
    vacationType: {
        type: String,
        unique: false,
        trim: true,
        required: true,
    },
    hotelId: {
        type: Number,
        unique: true,
        required: true,
        ref: "hotel",
    },
},
{
    timestamps: true
   },
)

const Travel = mongoose.model("Travel", travelSchema);

model.exports = Travel;


