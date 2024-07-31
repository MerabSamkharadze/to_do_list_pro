document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const removeAllButton = document.getElementById("remove-all-button");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = "";
  });

  removeAllButton.addEventListener("click", function () {
    todoList.innerHTML = "";
  });

  function addTodo(task) {
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
