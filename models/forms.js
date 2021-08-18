const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    formTitle: {
        type: String,
        required: true
    },
    formDescription: {
        type: String,
        required: true
    },
    formUser_id: {
        type: String,
        required: false
    },
    formCreateDate: {
        type: Date,
        default: Date.now
    },
    formDeadLine: {
        type: Date,
        required: false
    },
    isFormActive: {
        type: Boolean,
        default: true
    },
    formType: {
        type: String,
        enum: ['suervey', 'exam'],
        default: 'exam'
    },
    formStatus: {
        type: String,
        enum: ['active', 'closed', 'full', 'draft'],
        default: 'draft'
    },
    isFormShared: {
        type: Boolean,
        required: false
    },
    urlLink: {
        type: String,
        required: false
    },
    howManyCameFromUrl: {
        type: Number,
        required: false,
        default: 0
    }
})

const FormModel = model('formBuilder', userSchema)

module.exports = FormModel