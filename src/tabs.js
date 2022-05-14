import { set, ref, update, database, auth } from "./database.js"

let addtask = document.getElementsByClassName('addtask')[0];
let todolist_p = document.getElementById("todolist_p");
let todolist_m = document.getElementById("todolist_m");
let todolist_d = document.getElementById("todolist_d");
let add_icon = document.getElementById("add-icon");
let piechart = document.getElementById("piechart");

document.getElementById('alltab').addEventListener("click", () => {
    addtask.style.display = "none";
    todolist_p.style.display = "";
    todolist_m.style.display = "";
    todolist_d.style.display = "";
    piechart.style.display = "none";
})

document.getElementById('todotab').addEventListener("click", () => {


    addtask.style.display = "none";
    todolist_p.style.display = "";
    piechart.style.display = "none";
    todolist_m.style.display = "none";
    todolist_d.style.display = "none";

})

document.getElementById('missedtab').addEventListener("click", () => {

    addtask.style.display = "none";
    todolist_p.style.display = "none";
    todolist_m.style.display = "";
    todolist_d.style.display = "none";
    piechart.style.display = "none";
});

document.getElementById('completedtab').addEventListener("click", () => {

    addtask.style.display = "none";
    todolist_p.style.display = "none";
    todolist_m.style.display = "none";
    todolist_d.style.display = "";
    piechart.style.display = "none";
})



add_icon.addEventListener("click", () => {
    addtask.style.display = "";
    todolist_p.style.display = "none";
    todolist_m.style.display = "none";
    todolist_d.style.display = "none";
    piechart.style.display = "none";
})


document.getElementById("loggedinemail").addEventListener("click", () => {
    addtask.style.display = "none";
    todolist_p.style.display = "none";
    todolist_m.style.display = "none";
    todolist_d.style.display = "none";
    piechart.style.display = "";
})



let todo_container = document.getElementsByClassName("todo-container")[0];
todo_container.addEventListener("click", taskbutton);
function taskbutton(event) {
    const target = event.target;
    const ptodo = target.parentElement;

    if (target.classList[0] === "remove") {
        console.log(target.value);
        set(ref(database, 'todos/' + auth.currentUser.uid + "/" + target.value), {
            description: null,
            time: null,
            remove: null,
            done: null
        });
        document.location.reload(true);
    }
    else if (target.classList[0] === "done") {
        update(ref(database, 'todos/' + auth.currentUser.uid + '/' + target.value), {
            done: true
        })
        document.location.reload(true);
    }

    else if (target.classList[0] === "edit") {


        if (target.classList.length === 3) {
            const tupdate = document.createElement('input');
            tupdate.setAttribute("type", "datetime-local");

            const bupdate = document.createElement('button');

            ptodo.appendChild(tupdate);
            ptodo.appendChild(bupdate);
            bupdate.innerText = "save";
            target.classList.add("active");

            bupdate.addEventListener("click", () => {
                let time = tupdate.value;
                if (time !== "") {
                    update(ref(database, 'todos/' + auth.currentUser.uid + '/' + target.value), {
                        tasktime: time
                    })
                    tupdate.value = ""
                    alert("Rescheduled");
                    document.location.reload(true);
                }
                else alert("Field Cannot be left Empty");
            })

        }
        else {
            target.classList.remove("active");

            ptodo.removeChild(ptodo.lastChild);
            ptodo.removeChild(ptodo.lastChild);
        }

    }

}

