// Get elements
var addBtn = document.getElementById('add-btn');
var deleteAllBtn = document.getElementById('delete-all-btn');
var todoInput = document.getElementById('todo-input');
var todoList = document.getElementById('todo-list');

// Add button 
addBtn.onclick = function () {
  var taskText = todoInput.value;

  if (taskText.trim() === '') {
    alert('Please write something!');
    return;
  }

  // Create list
  var li = document.createElement('li');

  // Create span for task text
  var taskSpan = document.createElement('span');
  taskSpan.innerText = taskText;
  li.appendChild(taskSpan);

  //  div for edit & delete buttons
  var buttonGroup = document.createElement('div');
  buttonGroup.className = 'button-group';

  //  Edit button
  var editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.onclick = function () {
    var newTask = prompt('Edit your task:', taskSpan.innerText);
    if (newTask !== null && newTask.trim() !== '') {
      taskSpan.innerText = newTask;
    }
  };
  buttonGroup.appendChild(editBtn);

  // Delete button
  var delBtn = document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = function () {
    todoList.removeChild(li);
  };
  buttonGroup.appendChild(delBtn);

  // Add buttons 
  li.appendChild(buttonGroup);

  // Add list
  todoList.appendChild(li);

  // Clear input
  todoInput.value = '';
};

// Delete All button 
deleteAllBtn.onclick = function () {
  todoList.innerHTML = '';
};
