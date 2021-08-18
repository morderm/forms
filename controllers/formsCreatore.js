const FormModel = require('../models/forms')
const UserModel = require('../models/users')

const dateNow = Date.now();


async function createForm(data) {
    data.formCreateDate = dateNow
    // user id 
    const newForm = await FormModel.create(data)
    return newForm
}
exports.createForm = createForm


async function readOne(filter, projection) {
    return FormModel.findOne(filter, projection)
}
exports.readOne = readOne


