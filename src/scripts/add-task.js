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

if(JSON.parse(localStorage.getItem("TaskStorage")) == null){
    let arr = [];
    localStorage.setItem("TaskStorage", JSON.stringify(arr))
}

loadTask();
function loadTask(){
    let taskListData = JSON.parse(localStorage.getItem("TaskStorage"))
    const taskContainer = document.getElementById("task-container")
    console.log(taskListData.length)

    if(taskListData.length > 0){
        for(let i = 0 ; i < taskListData.length; i++){
            taskContainer.innerHTML += `
            <div class="task">
                <div class="text-task"> 
                    <h2> ${taskListData[i].title}</h2> 
                    <p> ${taskListData[i].about}</p>
                </div>
                <div class="delete-button">
                    <button class="button-del"> <img src="src/assets/images/button-dell.svg" alt=""></button>
                </div>

                <div class="interact-task-buttons">
                    
                </div>
            </div>`;
        }

        document.querySelectorAll(".task").forEach((element, index)=>{
            element.addEventListener("click", ()=>{
                let interactButtons = element.querySelector(".interact-task-buttons")

                if(interactButtons.querySelector("button")){
                    interactButtons.innerHTML = ``;
                } else {
                    interactButtons.innerHTML+=`
                    <button class="share-button">share</button>
                    <button>info</button>
                    <button class="edit-button">edit</button>
                    `;

                    interactButtons.querySelector(".edit-button").addEventListener("click", ()=>showEditMenu(index));
                }
            });
        });

    } else {
        zeroTaskContainer.innerHTML = '<div class="zero-container"> <hr> <p>No tasks</p> <hr> </div>'
    }
}


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
