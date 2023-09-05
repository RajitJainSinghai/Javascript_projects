let namstebtn = document.querySelector("button");
namstebtn.addEventListener('click', showmsg);

function showmsg() {
    let name = prompt('enter name');
    namstebtn.textContent = "name is :" + name;
    
}