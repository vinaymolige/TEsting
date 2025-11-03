const API_URL = '/api/tasks';

// Load tasks when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

// Load all tasks
async function loadTasks() {
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error('Error loading tasks:', error);
        alert('Failed to load tasks. Please try again.');
    }
}

// Display tasks in the UI
function displayTasks(tasks) {
    const container = document.getElementById('tasksContainer');
    container.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskElement.innerHTML = `
            <h3>${escapeHtml(task.title)}</h3>
            <p>${escapeHtml(task.description)}</p>
            <div class="task-actions">
                <button class="btn-complete" onclick="toggleTask(${task.id}, ${!task.completed})">
                    ${task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        container.appendChild(taskElement);
    });
}

// Create a new task
async function createTask() {
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();

    if (!title) {
        alert('Please enter a task title');
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                completed: false
            })
        });

        if (response.ok) {
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
            loadTasks();
        } else {
            alert('Failed to create task');
        }
    } catch (error) {
        console.error('Error creating task:', error);
        alert('Failed to create task. Please try again.');
    }
}

// Toggle task completion status
async function toggleTask(id, completed) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const task = await response.json();

        const updateResponse = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: task.title,
                description: task.description,
                completed: completed
            })
        });

        if (updateResponse.ok) {
            loadTasks();
        } else {
            alert('Failed to update task');
        }
    } catch (error) {
        console.error('Error updating task:', error);
        alert('Failed to update task. Please try again.');
    }
}

// Delete a task
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadTasks();
        } else {
            alert('Failed to delete task');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete task. Please try again.');
    }
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
