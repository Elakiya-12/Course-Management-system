let user =
JSON.parse(
    localStorage.getItem("loggedInUser")
);

let enrollments =
JSON.parse(
    localStorage.getItem("enrollments")
) || [];

let myCourses =
enrollments.filter(
    course => course.student === user.email
);

let courseList =
document.getElementById("courseList");

if(myCourses.length === 0){

    courseList.innerHTML =
    "<p class='empty'>No Courses Enrolled Yet</p>";

}
else{

    myCourses.forEach(course => {

        courseList.innerHTML += `

        <div class="course-card">

            <h3>${course.course}</h3>

            <p>✅ Enrolled Successfully</p>

        </div>

        `;

    });

}