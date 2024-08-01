let input =document.querySelector(".input")
let submit =document.querySelector(".add")
let tasksDiv =document.querySelector(".tasks")

// empty array to store the taskes
let arryOfTasks=[];

if (localStorage.getItem("tasks")){
    arryOfTasks=JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLocalStorage();

submit.onclick=function(){
    if(input.value !=='')
    {
        addTaskToArray(input.value);
        input.value=" ";
    }
}

tasksDiv.addEventListener("click",(e)=> {
    if(e.target.classList.contains("del")){
        deletaTaskWith(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains(task));
    {
        togglestatustaskwith(e.target.getAttribute("data-id"));
        e.target.classList.toggle("done");
    }
})

function addTaskToArray(taskText){
    const task ={
    id: Date.now(),
    title: taskText,
    completed:false,
    }
    arryOfTasks.push(task);
    addElementsToPageFrom(arryOfTasks);
    addDataToLocalStorageFrom(arryOfTasks);
}

function addElementsToPageFrom(arryOfTasks){
    tasksDiv.innerHTML='';
    arryOfTasks.forEach((task) => {
        let div=document.createElement("div");
        div.className="task";
        if(task.completed){
            div.className="task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        let span=document.createElement("span");
        span.className= "del";
        span.appendChild(document.createTextNode("delete"));
        div.appendChild(span);
        tasksDiv.appendChild(div);
    });
}

function addDataToLocalStorageFrom(){
    window.localStorage.setItem( "tasks" , JSON.stringify(arryOfTasks));
}

function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks");
    if (data){
        let tasks =JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}

function deletaTaskWith(taskId){
    arryOfTasks=arryOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arryOfTasks);
}

function togglestatustaskwith(taskId){
    for( let i=0;i<arryOfTasks.length;i++){
        if(arryOfTasks[i].id==taskId){
            arryOfTasks[i].completed==false?(arryOfTasks[i].completed=true):(arryOfTasks[i].complete=false);
        }
    }
    addDataToLocalStorageFrom(arryOfTasks);
}