// ================================
// Student Course Management System
// ================================

// JSON Data from Local Storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// ================================
// REGISTER VALIDATION
// ================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let studentId = document.getElementById("studentId").value.trim();
        let department = document.getElementById("department").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        let message = document.getElementById("registerMessage");

        // Validation

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            department === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            message.innerHTML = "All fields are required";
            message.style.color = "red";
            return;
        }

        if (password !== confirmPassword) {
            message.innerHTML = "Passwords do not match";
            message.style.color = "red";
            return;
        }

        // JSON Object

        let student = {
            name: name,
            email: email,
            phone: phone,
            studentId: studentId,
            department: department,
            password: password
        };

        students.push(student);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        message.innerHTML =
            "Registration Successful";

        message.style.color = "green";

        registerForm.reset();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    });

}

// ================================
// LOGIN VALIDATION
// ================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let email =
            document.getElementById("loginEmail").value.trim();

        let password =
            document.getElementById("loginPassword").value;

        let message =
            document.getElementById("loginMessage");

        let students =
            JSON.parse(localStorage.getItem("students")) || [];

        let user = students.find(
            student =>
                student.email === email &&
                student.password === password
        );

        if (user) {

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );

            message.innerHTML =
                "Login Successful";

            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);

        } else {

            message.innerHTML =
                "Invalid Email or Password";

            message.style.color = "red";
        }

    });

}

// ================================
// DYNAMIC NAVIGATION
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const navLinks =
        document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            localStorage.setItem(
                "lastVisitedPage",
                this.getAttribute("href")
            );

        });

    });

});

// ================================
// DISPLAY LOGGED USER
// ================================

let currentUser =
    JSON.parse(localStorage.getItem("loggedInUser"));

if (currentUser) {

    console.log(
        "Welcome " + currentUser.name
    );

}

// ================================
// LOGOUT FUNCTION
// ================================

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

}