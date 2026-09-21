
/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

test("adds a valid task to the list", () => {

    // 1. Load our HTML
    const html = fs.readFileSync(
        path.join(__dirname, "../index.html"),
        "utf8"
    );

    document.body.innerHTML = html;

    // 2. Load our JavaScript
    const script = fs.readFileSync(
        path.join(__dirname, "../script.js"),
        "utf8"
    );

    eval(script);

    // 3. Simulate entering a task
    const input = document.getElementById("taskInput");

    input.value = "Buy groceries";

    // 4. Simulate clicking Add Task
    document.getElementById("addTaskBtn").click();

    // 5. Verify the result
    const taskList = document.getElementById("taskList");

    expect(taskList.textContent).toContain("Buy groceries");

});

test("shows an error for an empty task", () => {

    // Load the HTML
    const html = fs.readFileSync(
        path.join(__dirname, "../index.html"),
        "utf8"
    );

    document.body.innerHTML = html;

    // Load the JavaScript
    const script = fs.readFileSync(
        path.join(__dirname, "../script.js"),
        "utf8"
    );

    eval(script);

    // Enter an empty task
    const input = document.getElementById("taskInput");
    input.value = "";

    // Click Add Task
    document.getElementById("addTaskBtn").click();

    // Check the error message
    const error = document.getElementById("errorMessage");

    expect(error.textContent).toBe("Please enter a task.");

    // Verify that no task was added
    const taskList = document.getElementById("taskList");

    expect(taskList.children.length).toBe(0);


});


test("marks a task as complete", () => {

    // Load the HTML
    const html = fs.readFileSync(
        path.join(__dirname, "../index.html"),
        "utf8"
    );

    document.body.innerHTML = html;

    // Load the JavaScript
    const script = fs.readFileSync(
        path.join(__dirname, "../script.js"),
        "utf8"
    );

    eval(script);

    // Enter and add a task
    const input = document.getElementById("taskInput");
    input.value = "Finish homework";

    document.getElementById("addTaskBtn").click();

    // Find the task's checkbox and description
    const checkbox = document.querySelector(
        "#taskList input[type='checkbox']"
    );

    const taskText = document.querySelector(
        "#taskList span"
    );

    // Simulate completing the task
    checkbox.click();

    // Verify that the task is crossed out
    expect(checkbox.checked).toBe(true);
    expect(taskText.style.textDecoration).toBe("line-through");

});