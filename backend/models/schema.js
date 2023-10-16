const mongoose = require('mongoose');



const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    },
    travelDestinations: [{
        type: String
    }],
    package: {
        type: String,
        enum: ['Bronze', 'Silver', 'Gold', 'Platinum'],
        required: true
    }
});

const Registration = mongoose.model('Registration', registrationSchema);





module.exports = {Registration};

