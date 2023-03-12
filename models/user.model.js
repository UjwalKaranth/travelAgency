const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    resId: {
        type: Number,
        required: true,
        unique: true,
        ref: "vehicleReservation",
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    userPhNo: {
        type: Number,
        required: true,
        unique: true,
        maxLength: 10,
    },
    userCity: {
        type: String,
        required: true,
        unique: false,
    },
    budget: {
        type: Number,
        required: true,
        unique: false,
    },
    veg: {
        type: String,
        required: true,
        unique: false,
        maxLength: 1,
    },
},
  {
    timestamps: true
   },
)

const User = mongoose.model("User", userSchema);

model.exports = User;