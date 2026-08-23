// Local Storage Management

export function getStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

export function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedInUser")) || null;
}

export function saveLoggedInUser(user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
}

export function removeLoggedInUser() {
    localStorage.removeItem("loggedInUser");
}