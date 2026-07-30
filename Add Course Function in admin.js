function addCourse(){

let courseName =
document.getElementById(
"courseName"
).value;

let courses =
JSON.parse(
localStorage.getItem("courses")
) || [];

courses.push(courseName);

localStorage.setItem(
"courses",
JSON.stringify(courses)
);

location.reload();

}