const zeroTaskContainer = document.querySelector('.zero-task-container')
const taskContainer = document.querySelector('.to-do-list-container')
const inputTitle = document.getElementById('input-title')
const inputAbout = document.getElementById('input-about')
const addTaskButton = document.getElementById('add-task-button')

zeroTaskContainer.innerHTML = '<div class="zero-container"> <hr> <p>No tasks</p> <hr> </div>'

addTaskButton.onclick = function () {

    const title = inputTitle.value
    const about = inputAbout.value
    const task = document.createElement('div')
    
    if (title && about) {

        zeroTaskContainer.innerHTML = ''
        task.innerHTML = ` <div class="text-task"> <h2> ${title} </h2> <p> ${about} </p> </div>
        <div class="delete-button"> <button> <img src="src/assets/images/button-dell.svg" alt=""> </button> </div>`
        taskContainer.appendChild(task)
        inputTitle.value = ''
        inputAbout.value = ''

        const closeButton = task.querySelector('.delete-button')
        closeButton.addEventListener('click', () => {
            taskContainer.removeChild(task)
        })

    } else {
        alert('Введите титул и описание!')
    }


}



