document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from local storage
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        // Add the new task to the top of the list
        const taskList = document.getElementById('taskList');
        taskList.insertBefore(listItem, taskList.firstChild);

        // Clear the input field
        taskInput.value = '';

        // Save tasks to local storage
        saveTasks();
    }
}

function deleteTask(button) {
    const listItem = button.parentNode;
    const taskList = listItem.parentNode;
    taskList.removeChild(listItem);

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', taskList);
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
}
