const mongoose = require('mongoose')

const Schema = mongoose.Schema

const placesSchema = new Schema({
    placeName: {
        type: String,
        unique: false,
        trim: true,
        required: true,
    },
    placeDescription: {
        type: String,
        unique: false,
        trim: true,
        required: true,
        minLength: 10,
    },
    packageId: {
        type: Number,
        unique: false,
        required: true,
        ref: "package",
    },
    mapsUrl: {
        type: String,
        unique: false,
        trim: true,
        required: true,
    },
},
{
    timestamps: true
   },
)

const Place = mongoose.model("Driver", PlaceSchema);

model.exports = Place;
