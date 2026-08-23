// ================================
// APPLICATION STATE MODULE
// ================================

import {
    getData,
    setData,
    removeData
} from "./storage.js";


// Central application state
let appState = {
    students: getData("students", []),
    loggedInUser: getData("loggedInUser", null),
    lastVisitedPage: localStorage.getItem("lastVisitedPage") || null
};


// ================================
// GET APPLICATION STATE
// ================================

export function getState() {
    return appState;
}


// ================================
// UPDATE STUDENTS
// ================================

export function setStudents(students) {

    appState.students = students;

    setData("students", students);
}


// ================================
// UPDATE LOGGED-IN USER
// ================================

export function setLoggedInUser(user) {

    appState.loggedInUser = user;

    if (user) {

        setData("loggedInUser", user);

    } else {

        removeData("loggedInUser");
    }
}


// ================================
// UPDATE LAST VISITED PAGE
// ================================

export function setLastVisitedPage(page) {

    appState.lastVisitedPage = page;

    localStorage.setItem(
        "lastVisitedPage",
        page
    );
}


// ================================
// LOGOUT USER
// ================================

export function logoutUser() {

    appState.loggedInUser = null;

    removeData("loggedInUser");
}