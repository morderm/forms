const UserModel = require('../models/users')
const bcryptjs = require('bcryptjs')
const { createToken, verifyToken } = require('../jtw')



async function create(data) {
    const isExist = await UserModel.findOne({ email: data.email })
    if (isExist) {
        console.log("this email already exists")
    }
    else {
        data.userPassword = await bcryptjs.hashSync(data.userPassword)
        const newCategory = await UserModel.create(data)
        return newCategory
    }
}
exports.create = create

async function readOne(filter, projection) {
    return UserModel.findOne(filter, projection)
}
exports.readOne = readOne

async function read(filter, projection) {
    return UserModel.findOne(filter, projection)
}
exports.read = read


async function update(_id, newData) {
    return UserModel.findByIdAndUpdate(_id, newData, { new: true })
}
exports.update = update

async function login(email, userPassword) {
    console.log(userPassword)
    const user = await UserModel.findOne({ email: email.email }, '+password')
    console.log(user.userPassword)
    console.log(userPassword.userPassword)
    if (!bcryptjs.compareSync(userPassword.userPassword, user.userPassword))
        throw 'Faild to login'

    const token = createToken(user._id)
    user.token = token

    const updatedUser = await update(user._id, user)
    updatedUser.token = token


    return updatedUser
}
exports.login = login