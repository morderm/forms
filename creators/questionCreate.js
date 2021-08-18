const { connect } = require('./db')
const user = require('./controllers/users')

connect()
    .then(async () => {
        try {
            const res = await user.register({
                questionName: 'aaim nadav gever?',
                questionDescription: 'ulai',
                questionType: 'oneAnswer',
                formDef: 'lalala',
                questionRequire: true,
                questionScore: 10
            })
        } catch (error) {
            console.log(error.message)
        }
    })



