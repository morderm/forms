const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    answerTitle: {
        type: String,
        required: true
    },
    questionDef: {
        type: String,
        required: true
    },
    isTheAnswer: {
        type: Boolean,
        required: true
    }

})

const UserModel = model('answer', userSchema)

module.exports = UserModel