const { Schema, model } = require("mongoose");

const tripSchema = new Schema({
    title: String,
    Description: String,
    Distance: Number,
    District: String,
    Adress: String,
    Picture: {
        type: String,
        default: 'https://res.cloudinary.com/chocogrenouille/image/upload/v1619439475/Route%20Planner/addpicture_r5ymge.png'
    },
    Mode: {
        type: String,
        enum: ['Hike', 'Bike']
    },
    Map: [Number]
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
