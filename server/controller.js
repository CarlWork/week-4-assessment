let arr = ['Laundry', 'trash', 'dishes']

module.exports = {
    getTasks: (req, res) => {
        res.status(200).send(arr)
},
    addTask: (req, res) => {
        const newTask = req.body.task
        arr.push(newTask)
        res.status(200).send(arr)
},
    editTask: (req, res) => {
        let { index, newTask } = req.body
        arr.splice(+index, 1, newTask)
        res.status(200).send(arr)
},
    deleteTask: (req, res) => {
        let { index } = req.params
        arr.splice(+index, 1)
        res.status(200).send(arr)
}
}