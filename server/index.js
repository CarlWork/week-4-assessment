const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


Const = {
    getTasks,
    addTask,
    editTask,
    deleteTask
} = require('./controller.js')

app.get('/api/tasks', getTasks)
app.post('/api/tasks', addTask)
app.put('/api/tasks', editTask)
app.delete('/api/tasks/:index', deleteTask)

app.listen(4004, console.log("server is up on 4004"))