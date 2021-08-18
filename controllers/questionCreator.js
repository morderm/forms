const FormModel = require('../models/forms')
const UserModel = require('../models/users')
const QuestionModel = require('../models/questions')

async function createQuestion(data) {
    // Form def _id
    const newQuestion = await QuestionModel.create(data)
    return newQuestion
}
exports.createQuestion = createQuestion


async function readOne(filter, projection) {
    return QuestionModel.findOne(filter, projection)
}
exports.readOne = readOne


