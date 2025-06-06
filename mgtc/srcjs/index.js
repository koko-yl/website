let select = document.querySelector("select");
window.onload = _ => {
    let n = num_tasks();
    for(let i = 0; i < n;i++) {
        let opt = document.createElement("option");
        opt.value = "Task " + (i + 1);
        opt.innerText = "Task " + (i + 1);
        select.appendChild(opt);
    }
    select.value = "Task " + n;
    let c = colors();
    for(let k of Object.keys(c)) {
        document.querySelector(".roles").innerHTML += `<div class='role'><div class='circle' style='background-color:rgb(${c[k].join(", ")})'> </div> ${k}</div>`
    }
    load_task(n);
    
}
select.onchange = function () {
    load_task(parseInt(select.value.split(" ").pop()))
}
function load_task(n) {
    // I could use eval but nah
    switch(n) {
        case 1:
            task_1();
            break;
        case 2:
            task_2();
            break;
        case 3:
            task_3();
            break;
        case 4:
            task_4();
            break;
        case 5:
            task_5();
            break;
        case 6:
            task_6();
            break;
        case 7:
            task_7();
            break;
	case 8:
	    task_8();
	    break;
        case 9:
            task_9();
            break;
    }
}
