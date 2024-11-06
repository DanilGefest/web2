function showEditMenu(index) {
    let taskListData = JSON.parse(localStorage.getItem("TaskStorage"));

    const alertContainer = document.getElementById("alert-container")
    alertContainer.innerHTML += `

    <div class="blur">
            <div class="edit-button-container">
                <input class="edit-title-input" type="text" placeholder="Title..." value="` + taskListData[index].title + `"></input>
                <textarea class="edit-about-input" type="text" placeholder="About...">` + taskListData[index].about + `</textarea>

                <div>
                    <button class="no-edit-button">Cancel</button>
                    <button class="yes-edit-button">Save</button>
                </div>
            </div>
        </div>
    `;

    alertContainer.querySelector(".yes-edit-button").addEventListener("click", () => editTask(index));
    alertContainer.querySelector(".no-edit-button").addEventListener("click", closeAlert);
}

function editTask(index) {
    let newTitle = document.querySelector(".edit-title-input").value;
    let newAbout = document.querySelector(".edit-about-input").value;

    let taskListData = JSON.parse(localStorage.getItem("TaskStorage"));
    taskListData[index].title = newTitle;
    taskListData[index].about = newAbout;

    localStorage.setItem("TaskStorage", JSON.stringify(taskListData));
    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = ``;
    location.reload();
}

function closeAlert(){
    document.getElementById("alert-container").innerHTML = ``;
}