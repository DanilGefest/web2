document.querySelectorAll(".button-del").forEach((element, index) => {
    element.addEventListener("click", () => {
        let alert = document.getElementById("alert-container")
        alert.innerHTML = `
        <button id="yes-del-button">Yes</button>
        <button id="no-del-button">No</button>
        `;

        alert.querySelector("#yes-del-button").addEventListener("click", ()=>delTask(index));
        alert.querySelector("#no-del-button").addEventListener("click", ()=>{
            alert.innerHTML = ``;
        })
    })
});

function delTask(index){
    let taskListData = JSON.parse(localStorage.getItem('TaskStorage'));
    taskListData.splice(index, 1);
    localStorage.setItem('TaskStorage', JSON.stringify(taskListData));
    location.reload();
}