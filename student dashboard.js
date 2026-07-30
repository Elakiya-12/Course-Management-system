const currentUser =
JSON.parse(
localStorage.getItem("loggedInUser")
);

if(currentUser){

document.getElementById(
"welcomeStudent"
).innerHTML =
"Welcome " + currentUser.name + " 👋";

}

let enrolled =
JSON.parse(
localStorage.getItem("enrollments")
) || [];

document.getElementById(
"enrolledCount"
).innerHTML =
enrolled.length;

document.getElementById(
"completedCount"
).innerHTML = 0;

document.getElementById(
"progressPercent"
).innerHTML =
(enrolled.length * 10) + "%";

function logoutStudent(){

localStorage.removeItem(
"loggedInUser"
);

window.location.href =
"login.html";

}