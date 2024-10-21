const zeroTaskContainer = document.querySelector('.zero-task-container')
const taskContainer = document.querySelector('.to-do-list-container')
const inputTitle = document.getElementById('input-title')
const inputAbout = document.getElementById('input-about')
const addTaskButton = document.getElementById('add-task-button')


class Task{
    title; 
    about;
    constructor(title, about){
        this.title = title
        this.about = about
    }
}   

loadTask();
function loadTask(){
    let taskListData = JSON.parse(localStorage.getItem("TaskStorage"))
    const taskContainer = document.getElementById("task-container")
    console.log(taskListData.length)

    if(taskListData.length > 0){
        for(let i = 0 ; i < taskListData.length; i++){
            taskContainer.innerHTML += `
            <div>
                <div class="text-task"> 
                    <h2> ${taskListData[i].title}</h2> 
                    <p> ${taskListData[i].about}</p>
                </div>
                <div class="delete-button">
                    <button class="button-del"> <img src="src/assets/images/button-dell.svg" alt=""></button>
                </div>
            </div>`
        }
    } else {
        zeroTaskContainer.innerHTML = '<div class="zero-container"> <hr> <p>No tasks</p> <hr> </div>'
    }
}

document.querySelectorAll('.button-del').forEach((element, index) => {
    element.addEventListener('click', () => {
        delTask(index);
    })
})

addTaskButton.addEventListener('click', ()=>{
    const title = inputTitle.value
    const about = inputAbout.value
   
    // const task = document.createElement('div')

    if (title && about) {
        let taskListData = JSON.parse(localStorage.getItem('TaskStorage'));
        let taskExemp = new Task(title, about);
        taskListData.unshift(taskExemp);
        localStorage.setItem('TaskStorage', JSON.stringify(taskListData));   
        location.reload();
    }
})

function delTask(index){
    let taskListData = JSON.parse(localStorage.getItem('TaskStorage'));
    taskListData.splice(index, 1);
    localStorage.setItem('TaskStorage', JSON.stringify(taskListData));
    location.reload();
}

// addTaskButton.onclick = function () {
// let taskListData = JSON.parse(localStorage.getItem('TaskStorage'));

//     const title = inputTitle.value;
//     const about = inputAbout.value;
   
//     // const task = document.createElement('div')

    
//     if (title && about) {
//         let taskExemp = new Task(title, about);
//         taskListData.push(taskExemp);

//         // zeroTaskContainer.innerHTML = ''
//         // task.innerHTML = `
//         //     <div class="text-task"> 
//         //         <h2> ${title} </h2> 
//         //         <p> ${about} </p>
//         //     </div>
//         //     <div class="delete-button">
//         //         <button class="button-del"> <img src="src/assets/images/button-dell.svg" alt=""></button>
//         //     </div>`
//         // taskContainer.appendChild(task)
//         // inputTitle.value = ''
//         // inputAbout.value = ''

//         // const closeButton = task.querySelector('.button-del')
//         // closeButton.addEventListener('click', () => {
//         //     taskContainer.removeChild(task)
//         // })

//     } else {
//         alert('Введите титул и описание!')
//     }


// }



