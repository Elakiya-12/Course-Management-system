const adminEmail = "admin@gmail.com";
const adminPassword = "admin123";

const form =
document.getElementById("adminLoginForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let email =
document.getElementById("adminEmail").value;

let password =
document.getElementById("adminPassword").value;

if(
email===adminEmail &&
password===adminPassword
){

localStorage.setItem(
"adminLoggedIn",
"true"
);

window.location.href=
"admin-dashboard.html";

}
else{

document.getElementById(
"adminMessage"
).innerHTML=
"Invalid Admin Login";

}

});

}

function logoutAdmin(){

localStorage.removeItem(
"adminLoggedIn"
);

window.location.href=
"admin-login.html";

}