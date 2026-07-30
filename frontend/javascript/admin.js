const adminForm = document.getElementById("adminLoginForm");

if (adminForm) {

    adminForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let email =
            document.getElementById("adminEmail").value.trim();

        let password =
            document.getElementById("adminPassword").value;

        let message =
            document.getElementById("adminMessage");

        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {

            localStorage.setItem(
                "adminLoggedIn",
                "true"
            );

            message.innerHTML =
                "Login Successful";

            message.style.color =
                "green";

            setTimeout(() => {

                window.location.href =
                    "admin dashboard.html";

            }, 1000);

        }
        else {

            message.innerHTML =
                "Invalid Email or Password";

            message.style.color =
                "red";

        }

    });

}

function logoutAdmin() {

    localStorage.removeItem(
        "adminLoggedIn"
    );

    window.location.href =
        "admin-login.html";

}