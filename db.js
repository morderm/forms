const mongoose = require('mongoose')


const mongoUserName = 'morderm'
const mongoPassword = 'q1w2e3r4'
const connectionString = `mongodb+srv://${mongoUserName}:${mongoPassword}@cluster0.1rhsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

exports.connect = async function connect() {
    try {
        console.log('connecting ..')
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        },
            // err => { if (err){ throw err} }
        )

        //success
        console.log('Mongo connected!')
    } catch (error) {
        console.error('Not Connected', error.message)
    }
}