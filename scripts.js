function addTask(){

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value;

    if(task===""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        task +
        ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    taskInput.value="";
}
