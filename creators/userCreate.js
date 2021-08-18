const { connect } = require('./db')
const user = require('./controllers/users')

connect()
    .then(async () => {
        try {
            const res = await user.register({
                userName: 'nadav',
                email: 'nadavandsimon@gmail.com',
                userPassword: 'simonismylove',
                isUserActive: true
            })
        } catch (error) {
            console.log(error.message)
        }
    })



