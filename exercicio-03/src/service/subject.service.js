const subjects = []

const getAll = () => {
    return subjects
}
const getOne = (subjectId) => {
    const i = subjects.findIndex(sub => sub.id == subjectId)
    let subSearched = subjects[i]
    return subSearched
}
const create = (subject) => {
    subjects.push(subject)
}
const update = (subjectId, subject) =>{
    const i = subjects.findIndex(sub => sub.id == subjectId)
    subjects[i] = subject
}
const remove = (subjectId) => {
    const i = subjects.findIndex(sub => sub.id == subjectId)
    subjects.splice(i,1)
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
    
}