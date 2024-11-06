document.querySelectorAll(".button-del").forEach((element, index) => {
    element.addEventListener("click", () => {
        let alert = document.getElementById("alert-container")
        alert.innerHTML = `
        <div class="del-blur">
            <div class="del-alert-container">
                Delete this task ?
                <div class="del-button-section">
                    <button id="yes-del-button">Yes</button>
                    <button id="no-del-button">No</button>
                </div>
            </div>
        </div>
        `;

        alert.querySelector("#yes-del-button").addEventListener("click", ()=>delTask(index));
        alert.querySelector("#no-del-button").addEventListener("click", closeAlert)
    })
});

function delTask(index){
    let taskListData = JSON.parse(localStorage.getItem('TaskStorage'));
    taskListData.splice(index, 1);
    localStorage.setItem('TaskStorage', JSON.stringify(taskListData));
    location.reload();
}