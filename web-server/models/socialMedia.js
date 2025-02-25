const mongoose = require('mongoose');

const SocialMediaSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    redenome: {
        type: String,
        required: true
    },
    handle: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('SocialMedia', SocialMediaSchema);
