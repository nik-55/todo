import { set, ref, update, database, onValue } from "./database.mjs"

let addtask = document.getElementsByClassName('addtask')[0];
let todolist_p=document.getElementById("todolist_p");
let todolist_m=document.getElementById("todolist_m");
let todolist_d=document.getElementById("todolist_d");
let add_icon=document.getElementById("add-icon");

document.getElementById('alltab').addEventListener("click", () => {
    addtask.style.display = "none";
    todolist_p.style.display="";
    todolist_m.style.display="";
    todolist_d.style.display="";
    
})

document.getElementById('todotab').addEventListener("click", () => {


    addtask.style.display = "none";
    todolist_p.style.display="";

    todolist_m.style.display="none";
    todolist_d.style.display="none";

})

document.getElementById('missedtab').addEventListener("click", () => {
    
    addtask.style.display = "none";
    todolist_p.style.display="none";
    todolist_m.style.display="";
    todolist_d.style.display="none";
});

document.getElementById('completedtab').addEventListener("click", () => {
  
    addtask.style.display = "none";
    todolist_p.style.display="none";
    todolist_m.style.display="none";
    todolist_d.style.display="";
})



add_icon.addEventListener("click",()=>{
    addtask.style.display = "";
    todolist_p.style.display="none";
    todolist_m.style.display="none";
    todolist_d.style.display="none";
})



let todo_container=document.getElementsByClassName("todo-container")[0];
todo_container.addEventListener("click", taskbutton);
function taskbutton(event) {
    const target = event.target;
    const ptodo = target.parentElement;

    if (target.classList[0] === "remove") {
        console.log(target.value);
        set(ref(database, 'todos/' + "nikhil/" + target.value), {
            description: null,
            time: null,
            remove: null,
            done: null
        });
        ptodo.remove();
    }
    else if (target.classList[0] === "done") {
        update(ref(database, 'todos/nikhil/' + target.value), {
            done: true
        })
        ptodo.remove();
    }

    else if(target.classList[0]==="edit"){
        const tupdate=document.createElement('input');
        tupdate.setAttribute("type","datetime-local");

        const bupdate=document.createElement('button');
        ptodo.appendChild(tupdate);
        ptodo.appendChild(bupdate);
        bupdate.innerText="save";
       
        bupdate.addEventListener("click",()=>{
            let time=tupdate.value;
            update(ref(database, 'todos/nikhil/' + target.value), {
                tasktime:time
            })
            tupdate.value=""
            alert("Rescheduled");
        })
      
    }

}