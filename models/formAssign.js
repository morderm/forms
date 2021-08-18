const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    userDef: {
        type: String,
        required: true
    },
    formDef: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    formStatus: {
        type: Boolean,
        required: true
    },
    formHandOver: {
        type: Date,
        required: true
    },
    dateOfFormStart: {
        type: Object,
        required: true
    },
    assignedAnswers: {
        type: Object,
        required: true
    },

})

const UserModel = model('answer', userSchema)

module.exports = UserModel