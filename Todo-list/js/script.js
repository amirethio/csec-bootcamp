let add_todo = document.querySelector("#add-task");
let add_todo_btn = document.querySelector(".add-todo");
let tasks_container = document.querySelector(".tasks-container");
let tasks = document.getElementsByClassName("tasks");
let completed_todos = document.getElementsByClassName("todo-paras");
let total_todos = document.querySelector(".total");
let completed = document.querySelector(".completed");
let clear_all_btn = document.querySelector(".clear-btn");
let no_todo = document.querySelector(".none");

function checklist(no) {
  if (no > 0) {
    no_todo.classList.remove("no-todo");
  } else if (no == 0) {
    no_todo.classList.add("no-todo");
  }
}

add_todo_btn.addEventListener("click", () => {
  let new_content = add_todo.value;

  if (new_content === "") {
    alert("please inter a valid input");
  } else {
    add_todo.value = "";

    //   creating html tags
    const tasks_div = document.createElement("div");
    const list_para = document.createElement("p");
    const list_span = document.createElement("span");
    const completed_btn = document.createElement("button");
    const delete_btn = document.createElement("button");

    // formating with correct html stracture
    tasks_div.appendChild(list_para);
    tasks_div.appendChild(list_span);
    list_span.appendChild(completed_btn);
    list_span.appendChild(delete_btn);

    //   inserting contents
    list_para.textContent = new_content;
    completed_btn.textContent = "Complete";
    delete_btn.textContent = "Delete";

    // adding css class names
    tasks_div.classList.add("tasks");alert()//");
    list_span.classList.add("lists-button");
    completed_btn.classList.add("completed-btn", "btn");
    delete_btn.classList.add("btn", "delete-btn");

    //   appending the final content
    tasks_container.append(tasks_div);

    // **  delete functionlity listner
    delete_btn.addEventListener("click", () => {
      tasks_container.removeChild(tasks_div);
      total_todos.innerTextasks_container.removeChild(tasks_div);
      total_todos.innerText = tasks.length;
      completed.innerText = completed_todos.length;
      checklist(tasks.length);t = tasks.length;
      completed.innerText = completed_todos.length;
      checklist(tasks.length);
    });

    // ** completed functionlity
    completed_btn.addEventListener("click", () => {
      tasks_div.classList.add("todo-paras");
      completed_btn.textContent = "Completed";
      completed.innerText = completed_todos.length;
    });

    //   ** counting functinlity for footer components **
    total_todos.innerText = tasks.length;

    checklist(tasks.length);
  }
});

//   clear all funcionlity

clear_all_btn.addEventListener("click", () => {
  checklist(0);
  tasks_container.innerHTML = "";
  total_todos.innerText = tasks.length;
  completed.innerText = completed_todos.length;
});
