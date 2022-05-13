import { arr } from './index.mjs';
import {tstring} from "./extra.mjs"

function create(nclass, i, isdone, isremove,isedit,aparent) {
    const nparent=document.getElementById(aparent);
    const tododiv_c = document.createElement('div');

    tododiv_c.classList.add(nclass);

    const todoitem = document.createElement('li');
    todoitem.innerHTML="<h4>"+arr[i].description+"</h4>"+tstring(i,isdone);

    tododiv_c.appendChild(todoitem);
    if(isedit){
        const edit = document.createElement('button');
        edit.classList.add("edit","fa-solid","fa-pen");
        edit.setAttribute("value", arr[i].time)
        tododiv_c.appendChild(edit);
    }

    if (isdone) {
        const done = document.createElement('button');
        done.setAttribute("value", arr[i].time)
        done.classList.add('done');
        done.classList.add('fa-solid','fa-check');
        tododiv_c.appendChild(done);
    }

    if (isremove) {
        const remove = document.createElement('button');
        remove.setAttribute("value", arr[i].time)
        remove.classList.add("remove","fa-solid","fa-trash");
        tododiv_c.appendChild(remove);
    }

    nparent.appendChild(tododiv_c);
}

let timeout = () => setTimeout(() => {

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].done && !arr[i].missed) create("tododiv_p",i,true,true,true,"todolist_p");
                          
        if(arr[i].missed) create("tododiv_m",i,false,false,false,"todolist_m");
        if(arr[i].done)  create("tododiv_d",i,false,false,false,"todolist_d");
    }
}
    , 3000);
export { timeout };