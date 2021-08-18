const UserModel = require('./controllers/users')
const FormModel = require('./controllers/formsCreatore')
const QuestionModel = require('./controllers/questionCreator')


module.exports = function Router(app) {



    // user router

    app.put('/edit', async function (req, res) {
        const qoqo = await UserModel.update({ _id: req.body._id }, { userName: req.body.userName })
        res.send(qoqo)
    })

    app.post('/create', async function (req, res) {
        console.log(req.body)
        const jojo = await UserModel.create(req.body)
        res.send(jojo)
    })

    app.get('/users', async function (req, res) {
        console.log(req.query)
        const list = await UserModel.read(req.query)
        res.send(list)
    })

    app.put('/logged', async function (req, res) {
        console.log(req.body)
        const qoqo = await UserModel.login({ email: req.body.email }, { userPassword: req.body.userPassword })
        res.send(qoqo)

    })


    // form creator

    app.post('/createForm', async function (req, res) {
        console.log(req.body);
        const formie = await FormModel.createForm(req.body)
        res.send(formie)
    })

    app.get('/showForm', async function (req, res) {
        console.log(req.query)
        const formList = await FormModel.readOne(req.query)
        res.send(formList)
    })

    // question creator

    app.post('/questionCreate', async function (req, res) {
        console.log(req.body);
        const questnionie = await QuestionModel.createQuestion(req.body)
        res.send(questnionie)
    })

    app.get('/showQuestion', async function (req, res) {
        console.log(req.query)
        const formList = await QuestionModel.readOne(req.query)
        res.send(formList)
    })

}

