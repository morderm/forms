const { connect } = require('./db')
const user = require('./controllers/users')

connect()
    .then(async () => {
        try {
            const res = await user.register({
                answerTitle: '50',
                questionDef: 'nadav ha gever',
                isTheAnswer: true,
            })
        } catch (error) {
            console.log(error.message)
        }
    })



