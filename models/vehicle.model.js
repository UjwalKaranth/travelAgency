const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
    vehicleNumber: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    driverId: {
        type: Number,
        unique: true,
        required: true,
        ref: "driver",
    },
    vehicleType: {
        type: String,
        unique: false,
        trim: true,
        required: true,
    },
    vehicleCapacity: {
        type: Number,
        unique: false,
        required: true,
    },
    vehicleAvailaibilty: {
        type: Boolean,
        unique: false,
        required: true,
    },
},
{
    timestamps: true
   },
)

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

model.exports = Vehicle;
