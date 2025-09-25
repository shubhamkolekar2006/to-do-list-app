// Debug: Check if script is loaded
console.log("Script loaded successfully!");

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded!");
    
    // Get HTML elements
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.getElementById('empty-image');
    
    // Debug: Check if elements are found
    console.log("Task Input:", taskInput);
    console.log("Add Task Button:", addTaskBtn);
    console.log("Task List:", taskList);
    console.log("Empty Image:", emptyImage);
    
    // Load tasks when page loads
    loadTasks();
    
    // Function to add a new task
    function addTask(event) {
        console.log("Add task function called!");
        event.preventDefault();
        
        const taskText = taskInput.value.trim();
        console.log("Task text:", taskText);
        
        // If empty input, do nothing
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }
        
        // Create task element
        const li = document.createElement('li');
        
        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        // Add click event to toggle completion
        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });
        
        // Task actions
        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';
        
        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.className = 'complete-btn';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
            updateEmptyState();
            saveTasks();
        });
        
        // Append everything
        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);
        li.appendChild(taskSpan);
        li.appendChild(taskActions);
        taskList.appendChild(li);
        
        console.log("Task added to list!");
        
        // Clear input
        taskInput.value = '';
        
        // Update empty state and save tasks
        updateEmptyState();
        saveTasks();
    }
    
    // Function to update empty state
    function updateEmptyState() {
        if (taskList.children.length === 0) {
            emptyImage.classList.remove('hidden');
            console.log("Empty state shown");
        } else {
            emptyImage.classList.add('hidden');
            console.log("Empty state hidden");
        }
    }
    
    // Function to save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        const taskItems = document.querySelectorAll('#task-list li');
        
        taskItems.forEach(item => {
            tasks.push({
                text: item.querySelector('.task-text').textContent,
                completed: item.classList.contains('completed')
            });
        });
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log("Tasks saved to localStorage:", tasks);
    }
    
    // Function to load tasks from localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log("Loaded tasks from localStorage:", tasks);
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            
            if (task.completed) {
                li.classList.add('completed');
            }
            
            const taskSpan = document.createElement('span');
            taskSpan.textContent = task.text;
            taskSpan.className = 'task-text';
            
            // Add click event to toggle completion
            taskSpan.addEventListener('click', () => {
                li.classList.toggle('completed');
                saveTasks();
            });
            
            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';
            
            // Complete button
            const completeBtn = document.createElement('button');
            completeBtn.innerHTML = '<i class="fas fa-check"></i>';
            completeBtn.className = 'complete-btn';
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
                saveTasks();
            });
            
            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                li.remove();
                updateEmptyState();
                saveTasks();
            });
            
            taskActions.appendChild(completeBtn);
            taskActions.appendChild(deleteBtn);
            li.appendChild(taskSpan);
            li.appendChild(taskActions);
            taskList.appendChild(li);
        });
        
        updateEmptyState();
    }
    
    // Event listeners
    addTaskBtn.addEventListener('click', (event) => {
        console.log("Add button clicked!");
        addTask(event);
    });
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            console.log("Enter key pressed!");
            addTask(e);
        }
    });
    
    console.log("Event listeners attached!");
});