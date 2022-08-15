function login() {


let usern = document.getElementById('username').value;
let pass = document.getElementById('pass').value;
if(usern=='rajit','jagrati','fruity' && pass=='12345','123') {
    location.assign('http://127.0.0.1:5500/login_form/page.html')
}
else {
    alert('please put the correct credential')
}
}