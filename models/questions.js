const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    questionName: {
        type: String,
        required: true
    },
    questionDescription: {
        type: String,
        required: true
    },
    questionType: {
        type: String,
        enum: ['oneAnswer', 'twoAnswers', 'multiAnswers'],
        required: false
    },
    formDef: {
        type: String,
        required: false
    },
    questionRequire: {
        type: Boolean,
        required: true
    },
    questionScore: {
        type: Number,
        required: true
    },
    answers: [
        { type: String },
        {
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
        }
    ]
})

const QuestionModel = model('questions', userSchema)

module.exports = QuestionModel