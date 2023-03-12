const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicleReservationSchema = new Schema({
    resId: {
        type: Number,
        unique: true,
        required: true,
   },
   seatDescription: {
        type: String,
        unique: false,
        required: true,
   },
},
{
    timestamps: true
   },
)

const VehicleReservation = mongoose.model("Vehicle Reservation", vehicleReservationSchema);

module.exports = VehicleReservation;
