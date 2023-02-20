

const getTasksBtn = document.getElementById('getTasksBtn')
const addTaskForm = document.getElementById('addTaskForm')
const newTaskInput = document.getElementById('newTaskInput')

const baseURL = 'http://localhost:4004/api/tasks'

function getTasks() {
    axios.get('http://localhost:4004/api/tasks/')
    .then(response => response.data)
    .then(data => {
        const taskList = document.getElementById('taskList')
        taskList.innerHTML = ''
        data.forEach((task, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = task
            listItem.id = index
            listItem.addEventListener('click', deleteTask)
            taskList.appendChild(listItem)
        })
    })
    .catch(err => console.error(err))
}

//somehow this works
const addTask = evt => {
    evt.preventDefault()
    const newTask = newTaskInput.value.trim()

    if (newTask) {
        axios.post(baseURL, {task: newTask })
        .then(response => {
            getTasks(response.data)
        })
        .catch(err => console.log(err))
        newTaskInput.value = ''
    }
}

const deleteTask = evt => {
    console.log(evt.target)
    const taskId = evt.target.id
    axios.delete(`${baseURL}/${taskId}`)
    .then(response => {
        getTasks(response.data)
    })
    .catch(err => console.log(err))
}


getTasksBtn.addEventListener('click', getTasks)
addTaskForm.addEventListener('submit', addTask)



// const getTasksBtn = document.getElementById('getTasksBtn')
// const addTaskForm = document.getElementById('addTaskForm')
// const newTaskInput = document.getElementById('newTaskInput')

// const baseURL = 'http://localhost:4004/api/tasks'

// function getTasks() {
//     axios.get(`${baseURL}`)
//     .then(response => response.data)
//     .then(data => {
//         const taskList = document.getElementById('taskList')
//         taskList.innerHTML = ''
//         data.forEach(task => {
//             const listItem = document.createElement('li')
//             listItem.textContent = task.task
//             listItem.id = task.id
//             listItem.addEventListener('click', evt => deleteTask(evt))
//             taskList.appendChild(listItem)
//         })
//     })
//     .catch(err => console.error(err))
// }

// const addTask = evt => {
//     evt.preventDefault()
//     const newTask = newTaskInput.value.trim()

//     if (newTask) {
//         axios.post(baseURL, {task: newTask})
//         .then(response => {
//             getTasks(response.data)
//         })
//         .catch(err => console.log(err))
//         newTaskInput.value = ''
//     }
// }

// const deleteTask = evt => {
//     const taskId = evt.target.id
//     axios.delete(`${baseURL}/${taskId}`)
//     .then(response => {
//         getTasks(response.data)
//     })
//     .catch(err => console.log(err))
// }

// getTasksBtn.addEventListener('click', getTasks)
// addTaskForm.addEventListener('submit', addTask)


// const getTasksBtn = document.getElementById('getTasksBtn')
// const addTaskForm = document.getElementById('addTaskForm')
// const newTaskInput = document.getElementById('newTaskInput')
// const newTimeInput = document.getElementById('newTimeInput')

// const baseURL = 'http://localhost:4004/api/tasks'



// function getTasks() {
//     axios.get('http://localhost:4004/api/tasks/')
//     .then(response => response.data)
//     .then(data => {
//         const taskList = document.getElementById('taskList')
//         taskList.innerHTML = ''
//         data.forEach(task => {
//             const listItem = document.createElement('li')
//             const taskTime = document.createElement('span')
//             taskTime.textContent = task.time
//             listItem.appendChild(taskTime)
//             listItem.textContent += ' ' + task.task
//             listItem.id = task.id
//             listItem.addEventListener('click', evt => deleteTask(evt))
//             taskList.appendChild(listItem)
//         })
//     })
//     .catch(err => console.error(err))
// }

// //somehow this works
// const addTask = evt => {
//     evt.preventDefault()
//     const newTask = newTaskInput.value.trim()
//     const newTime = newTimeInput.value.trim()

//     if (newTask && newTime) {
//         axios.post(baseURL, {task: newTask, time: newTime })
//         .then(response => {
//             getTasks(response.data)
//         })
//         .catch(err => console.log(err))
//         newTaskInput.value = ''
//         newTimeInput.value = ''
//     }
// }

// const deleteTask = evt => {
//     const taskId = evt.target.id
//     axios.delete(`${baseURL}/${taskId}`)
//     .then(response => {
//         getTasks(response.data)
//     })
//     .catch(err => console.log(err))
// }





// getTasksBtn.addEventListener('click', getTasks)
// addTaskForm.addEventListener('submit', addTask)







// const getTasks = arr => {
//     taskList.innerHTML = ""
//     axios.get("http://localhost:4004/api/tasks/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// taskBtn.addEventListener('click', getTasks)