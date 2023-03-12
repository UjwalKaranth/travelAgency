const mongoose = require('mongoose')

const Schema = mongoose.Schema

const packageSchema = new Schema({
    packageId: {
        type: Number,
        required: true,
        unique: true,
    },
    packageName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    destination: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        ref: "travel"
    },
    duration: {
        type: Number,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 10,
    },
    vacationType: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        ref: "travel",
    },
    amount: {
        type: Number,
        required: true,
        unique: false,
    },
    transportType: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        ref: "vehicle"
    },
 },
 {
    timestamps: true
   },
)

const Package = mongoose.model("Package", packageSchema);

model.exports = Package;

