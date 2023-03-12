const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminHotelSchema = new Schema({
    hotelId: {
        type: Number,
        unique: true,
        required: true,
    },
    hotelName: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    hotelAddress: {
        type: String,
        unique: false,
        required: true,
        trim: true,
    },
    roomNo: {
        type: String,
        unique: true,
        required: true,
        ref: "room",
    },
},   
    {
        timestamps: true
       },
    )
    
    const AdminHotel = mongoose.model("Admin Hotel", adminHotelSchema);
    
    model.exports = adminHotel;
    
