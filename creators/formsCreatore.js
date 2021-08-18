const { connect } = require('./db')
const user = require('./controllers/users')

const dateNow = new Date()


connect()
    .then(async () => {
        try {
            const res = await user.register({
                formTitle: 'Nadav a gever',
                formDescription: 'nadav au gever?',
                formName: 'nadav',
                formCreateDate: dateNow,
                formDeadLine: dateNow + '50d',
                isFormActive: true,
                formType: 'exam',
                formStatus: 'active',
                isFormShared: true,
                urlLink: 'http://google.com',
                howManyCameFromUrl: 0,
            })
        } catch (error) {
            console.log(error.message)
        }
    })