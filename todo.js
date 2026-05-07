const mainTag = document.querySelector("#main-container");

async function fetchTodoApi() {
  try {
    let resp = await fetch("https://dummyjson.com/todos");
    let { todos } = await resp.json();
    displayTodos(todos);
  } catch (error) {
    console.log(error);
  }
}

function displayTodos(allTodos) {
  console.log(allTodos); // [{},{},{}....] ==> 30

  allTodos.map((ele) => {
    const todoContainer = document.createElement("section");
    todoContainer.className = "todo-container";
    todoContainer.innerHTML = `
    <p>${ele.id}</p>
    <h2>${ele.todo}</h2>
    <p>${ele.completed ? "Completed" : "Pending"}</p>
    `;
    mainTag.append(todoContainer);
  });
}

fetchTodoApi();
