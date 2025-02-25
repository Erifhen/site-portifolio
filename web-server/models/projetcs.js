const mongoose = require('mongoose');

const ProjetcsSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
name: {
    type: String,
    required: true
},
imgcapa: {
    type: String,
    required: true
},
tag: {
    type: String,
    required: true
},
gallery: {
    type: [String], 
    required: true 
}
});

module.exports = mongoose.model('Projects', ProjetcsSchema);