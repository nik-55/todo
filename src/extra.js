import { arr } from "./display.js";

export function time(){
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}

let loadtimeout=()=>setTimeout(()=>{
    document.getElementById("loader").style.display="none";
},2990);

function tstring(i,isdone){
    let nt=(new Date(arr[i].tasktime))-new Date(time());
    let rt=(nt/1000)/(60*60);
    let rth=parseInt(rt);
    let rtm=parseInt((rt-rth)*(60));
    if(rth<0||rtm<0||!isdone) return "";
    else return("<small>"+rth+" hrs "+rtm+" minutes Remaining</small>");
}

export { loadtimeout,tstring };