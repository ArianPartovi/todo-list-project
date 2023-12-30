function addTask() {
    var taskText = document.getElementById('todo-input').value;
    if (taskText.trim() !== '') {
        var listItem = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'task-' + Date.now();
        checkbox.classList.add('task-checkbox');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                listItem.classList.add('fade-out');
                setTimeout(function() { listItem.remove(); }, 500); // Delay for the fade-out animation
            }
        });

        var label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.classList.add('custom-checkbox');

        var taskLabel = document.createElement('span');
        taskLabel.innerText = taskText;

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(taskLabel);
        listItem.classList.add('fade-in');
        document.getElementById('todo-list').appendChild(listItem);
        document.getElementById('todo-input').value = '';
    }
}

document.getElementById('add-todo').addEventListener('click', addTask);

document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        var listItem = event.target.parentElement;
        listItem.classList.add('fade-out');
        setTimeout(function() { listItem.remove(); }, 500); // Match the duration of the fadeOut animation
    }
});

