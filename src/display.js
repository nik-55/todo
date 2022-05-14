import { database, set, ref, update, onValue, auth, onAuthStateChanged } from "./database.js"
import { time, loadtimeout } from "./extra.js";
import { timeout } from "./create.js";

document.getElementById('add-btn').addEventListener("click", () => {
    let dateTime = time();
    let taskinput = document.getElementById('taskinput');
    let tasktime = document.getElementById('tasktime');
    if (taskinput.value !== "" && tasktime.value !== "") {
        console.log("Reached");
        set(ref(database, 'todos/' + auth.currentUser.uid + "/" + dateTime), {
            description: taskinput.value,
            time: dateTime,
            tasktime: tasktime.value,
            done: false,
            missed: false
        });

        taskinput.value = '';
        tasktime.value = '';
        document.location.reload(true);
    }

    else alert("Field Cannot be left Empty");
})


let arr = [];



onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('loggedin').style.display = "";
        document.getElementById('loggedout').style.display = "none";
        document.getElementById("loggedinemail").innerText = auth.currentUser.email;
        try {
            let dateTime = time();
            onValue(ref(database, 'todos/' + auth.currentUser.uid), (snapshot) => {
                snapshot.forEach(childsnapshot => {
                    if (!(new Date(childsnapshot.val().tasktime) > new Date(dateTime)) && !childsnapshot.val().done) {
                        update(ref(database, "todos/" + auth.currentUser.uid + "/" + childsnapshot.val().time), {
                            missed: true
                        });
                        let obj = childsnapshot.val();
                        obj.missed = true;
                        arr.push(obj);
                    }
                    else arr.push(childsnapshot.val());
                });
            }, {
                onlyOnce: true
            });
        }

        catch (err) {
            console.log("Error :" + err);
        }
    } else {
        console.log("Please Login In...")
        document.getElementById('loggedout').style.display = "";
        document.getElementById('loggedin').style.display = "none";
    }
});


timeout();
loadtimeout();

export { arr };


