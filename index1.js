// JavaScript source code

function dash() {
    var staffname = document.getElementById("staffname").value;
    sessionStorage.setItem('uname', staffname);
    window.location = "dash.html";
}
