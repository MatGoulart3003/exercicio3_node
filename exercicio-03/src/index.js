const express = require('express')
const router = require('./router/subject.router')
const app = express()
app.use(express.json())
const port = 8087

const subjects = []

app.use('/subject', router)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
