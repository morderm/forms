const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        selected: false

    },
    userPassword: {
        type: String,
        required: true,
        selected: false
    },
    isUserActive: {
        type: Boolean,
        default: true
    },
    token: {
        type: String

    }

})

const UserModel = model('users', userSchema)

module.exports = UserModel