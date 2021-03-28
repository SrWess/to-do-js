const descriptionTask = document.querySelector(".add-task input");
const submitForm = document.querySelector(".add-task button");
const tasksList = document.querySelector(".tasks");
const task = document.querySelectorAll(".tasks li");
const counterTask = document.getElementById("counter");

let progress = document.getElementById("progress-value");

let taskLenght = task.length;

const templateTask = (description) => {
  const html = `
  <li>
    <input type="checkbox" id="todo_${taskLenght}" />
    <label for="todo_${taskLenght}">
      <span class="check"></span>
      ${description}
    </label>
    <a href="#" class="delete-task">
      <img src="/icons/delete.svg" alt="Delete">
    </a>
  </li>
  `;

  tasksList.innerHTML += html;
};

function addTask(event) {
  event.preventDefault();

  if (taskLenght <= 3) {
    const task = descriptionTask.value.trim();

    if (task.length) {
      taskLenght++;
      counterTask.innerText++;
      templateTask(task);
      descriptionTask.value = "";
    }

    if (taskLenght >= 10) {
      progress.style.width = `100%`;
    } else {
      progress.style.width = `${taskLenght}0%`;
    }
  }
}

submitForm.addEventListener("click", addTask);

function deleteTask(event) {
  if (event.target.classList.contains("delete-task")) {
    event.target.parentElement.remove();
    counterTask.innerText--;
  }
}

tasksList.addEventListener("click", deleteTask);
