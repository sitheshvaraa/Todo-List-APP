const todolist = [
  {
    name: "make dinner",
    date: "2024-03-06",
  },
  {
    name: "watch",
    date: "2024-04-09",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    const { name, date } = todoObject;
    const html = `<div>${name}</div><div>${date}</div><button onclick = "todolist.splice(${i},1); renderTodoList();" class="todo-delete-button">Delete</button>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-input-name");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-input-date");
  const date = dateInputElement.value;
  todolist.push({
    name: name,
    date: date,
  });
  inputElement.value = "";
  renderTodoList();
}
