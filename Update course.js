const courses =
document.querySelectorAll(".course-card");

courses.forEach(course=>{

course.addEventListener("click",function(){

let courseName =
this.querySelector("h3").innerText;

let user =
JSON.parse(
localStorage.getItem("loggedInUser")
);

let enrollments =
JSON.parse(
localStorage.getItem("enrollments")
) || [];

enrollments.push({

student:user.email,
course:courseName

});

localStorage.setItem(
"enrollments",
JSON.stringify(enrollments)
);

alert("Course Enrolled Successfully");

});

});