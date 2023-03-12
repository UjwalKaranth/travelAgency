const mongoose = require('mongoose')

const Schema = mongoose.Schema

const driverSchema = new Schema({
    driverName: {
        type: String,
        unique: false,
        trim: true,
        required: true,
    },
    driverPhNo: {
        type: Number,
        unique: true,
        required: true,
        maxLength: 10,
    },
    userPhNo: {
        type: Number,
        unique: true,
        required: true,
        maxLength: 10,
        ref: "user",
    },
    driverId: {
        type: Number,
        unique: true,
        required: true,
    },
},
{
    timestamps: true
   },
)

const Driver = mongoose.model("Driver", DriverSchema);

module.exports = Driver;


