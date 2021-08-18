const { connect } = require('./db')
const user = require('./controllers/users')

const dateNow = new Date()

connect()
    .then(async () => {
        try {
            const res = await user.register({
                userDef: 'nadav',
                formDef: 'aaim nadav gever',
                grade: 100,
                formStatus: true,
                formHandOver: dateNow,
                dateOfFormStart: dateNow,
                assignedAnswers: {
                    question1: '3',
                    question2: '2'
                }

            })
        } catch (error) {
            console.log(error.message)
        }
    })

