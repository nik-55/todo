import { database, set, ref, update, onValue } from "./database.mjs"
import { time,loadtimeout } from "./extra.mjs";
import { timeout } from "./create.mjs"

document.getElementById('add-btn').addEventListener("click", () => {
    let dateTime = time();
    let taskinput = document.getElementById('taskinput');
    let tasktime = document.getElementById('tasktime');
    if(taskinput.value!==""&&tasktime.value!==""){
    console.log("Reached");
    set(ref(database, 'todos/' + "nikhil/" + dateTime), {
        description: taskinput.value,
        time: dateTime,
        tasktime: tasktime.value,
        done: false,
        missed: false
    });

    taskinput.value = '';
    tasktime.value = '';
    document.location.reload(true); }

    else alert("Field Cannot be left Empty");
})


let arr = [];
try {
    let dateTime = time();
    onValue(ref(database, 'todos/nikhil'), (snapshot) => {
        snapshot.forEach(childsnapshot => {
            if (!(new Date(childsnapshot.val().tasktime) > new Date(dateTime)) && !childsnapshot.val().done) {
                update(ref(database, "todos/nikhil/" + childsnapshot.val().time), {
                    missed: true
                });
                let obj=childsnapshot.val();
                obj.missed=true;
                arr.push(obj);
            }
            else arr.push(childsnapshot.val());
        });
    },{
        onlyOnce: true
    });
}
catch (err) {
    console.log("Error :" + err);
}
timeout();
loadtimeout();

export { arr };


