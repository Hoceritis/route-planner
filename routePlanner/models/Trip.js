const { Schema, model } = require("mongoose");

const tripSchema = new Schema({
    title: String,
    Description: String,
    Distance: Number,
    District: String,
    Address: String,
    Picture: {
        type: String,
        default: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619439475/Route%20Planner/addpicture_r5ymge.png'
    },
    Mode: {
        type: String,
        enum: ['Hike', 'Bike']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
});

//supports queries that calculate geometries on an Earth-like sphere - Necessary!
tripSchema.index({ location: '2dsphere' });

const Trip = model("Trip", tripSchema);
module.exports = Trip;
