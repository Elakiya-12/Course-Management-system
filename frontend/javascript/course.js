const courses = document.querySelectorAll(".course-card");

courses.forEach(course => {

    course.addEventListener("click", () => {

        const courseName =
            course.getAttribute("data-course");

        alert("You selected: " + courseName);

        localStorage.setItem(
            "selectedCourse",
            courseName
        );

    });

});