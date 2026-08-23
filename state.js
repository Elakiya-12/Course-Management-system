// Application State

let currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

export function setCurrentUser(user) {
    currentUser = user;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
}

export function getCurrentUser() {
    return currentUser;
}

export function clearCurrentUser() {
    currentUser = null;
    localStorage.removeItem("loggedInUser");
}