const service = require('../service/subject.service')
const mensagemErro = "Error request"

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}
const getOne = (req,res) => {
    
    if(!validId(req.params.id)){        
        return res.status(404).send(mensagemErro)
    }
    res.status(200).send(service.getOne(req.params.id))
}
const create = (req,res) => {

    const body = req.body
    if (!validBody(body)) {
        return res.status(404).send(mensagemErro)
    }
    service.create(body)
    res.status(200).send("Subject created successfuly!!")
}
const update = (req,res) => {
    if(!validId(req.params.id)){        
        return res.status(404).send(mensagemErro)
    }
    service.update(req.params.id, req.body)
    res.status(200).send("Subject actualized successfuly!!")
}
const remove = (req,res) => {
    if(!validId(req.params.id)){        
        return res.status(404).send(mensagemErro)
    }
    service.remove(req.params.id)    
    res.status(200).send("Subject removed successfuly!!")
}

const validBody = (body) => {
    const {id, name, workload, teacherName} = body
    let isValid = true
    if (id === undefined || name === undefined || workload === undefined || teacherName === undefined) {
        isValid = false
        return isValid
    }
    return isValid
}

const validId = (subjectId) => {
    let subjects = []
    let isValid = true
    subjects = service.getAll()
    const i = subjects.findIndex (sub => sub.id == subjectId)
    console.log(i)
    if (i === -1){
        console.log("passei")
        isValid = false
        console.log(isValid)
        return isValid
    }
    return isValid
}

module.exports={
    getAll,
    getOne,
    create,
    update,
    remove   
}