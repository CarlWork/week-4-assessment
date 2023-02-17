
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
        data.forEach(task => {
            const listItem = document.createElement('li')
            listItem.textContent = task
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
    axios.delete(baseURL + `/${evt.target.id}`)
    .then(response => {
        getTasks(response.data)
    })
    .catch(err => console.log(err))
}



getTasksBtn.addEventListener('click', getTasks)
addTaskForm.addEventListener('submit', addTask)







// const getTasks = arr => {
//     taskList.innerHTML = ""
//     axios.get("http://localhost:4004/api/tasks/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };

// taskBtn.addEventListener('click', getTasks)