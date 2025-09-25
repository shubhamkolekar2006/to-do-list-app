document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image');
    
    // Load tasks from localStorage when page loads
    loadTasks();
    
    // Function to add a new task
    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        
        if (!taskText) {
            return;
        }
        
        // Create task element
        const li = document.createElement('li');
        
        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        // Task actions (complete and delete buttons)
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
        
        // Append elements
        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);
        li.appendChild(taskSpan);
        li.appendChild(taskActions);
        taskList.appendChild(li);
        
        // Clear input
        taskInput.value = '';
        
        // Update empty state and save tasks
        updateEmptyState();
        saveTasks();
    };
    
    // Function to update empty state (show/hide empty image)
    const updateEmptyState = () => {
        if (taskList.children.length === 0) {
            emptyImage.classList.remove('hidden');
        } else {
            emptyImage.classList.add('hidden');
        }
    };
    
    // Function to save tasks to localStorage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('.task-text').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    
    // Function to load tasks from localStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        tasks.forEach(task => {
            // Create task element
            const li = document.createElement('li');
            
            if (task.completed) {
                li.classList.add('completed');
            }
            
            // Task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = task.text;
            taskSpan.className = 'task-text';
            
            // Task actions (complete and delete buttons)
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
            
            // Append elements
            taskActions.appendChild(completeBtn);
            taskActions.appendChild(deleteBtn);
            li.appendChild(taskSpan);
            li.appendChild(taskActions);
            taskList.appendChild(li);
        });
        
        updateEmptyState();
    };
    
    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(e);
        }
    });
});