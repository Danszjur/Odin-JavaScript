import "./style.css";
//--------------------------------------------
import Project from "./models/project";
import domElements from "./models/dom";
import ProjectList from "./models/projectList";
//--------------------------------------------
const NewTodoBtn = document.getElementById("NewTodoBtn");
const NewProjectBtn = document.getElementById("NewProjectBtn");
//--------------------------------------------
const ProjectListDefault = new ProjectList();
const projectDefault = ProjectListDefault.makeProject("default");

domElements.froms.projectAndTodoFormDisplay();

const select = document.getElementById("todo-project");
select.addEventListener("change", () => {
  console.log(select.value);
});
const projectTitleInput = document.getElementById("project-title");
const projectForm = document.getElementById("project-form");
const todoForm = document.getElementById("todo-form");

const saveProjectBtn = document.getElementById("save-project-btn");
const cancelProjectBtn = document.getElementById("cancel-project-btn");

const saveTodoBtn = document.getElementById("save-todo-btn");
const cancelTodoBtn = document.getElementById("cancel-todo-btn");

//--------------------------------------------
NewProjectBtn.onclick = () => {
  showDialog("project-form-dialog");
};
NewTodoBtn.onclick = () => {
  showDialog("todo-form-dialog");
};

saveProjectBtn.onclick = () => {
  const newTitle = getFormDataProject();
  if (!newTitle) {
    return;
  }
  makeNewProject(newTitle);
  populateProjectsSelect();
  hideSaveDialog("project-form-dialog");
};
saveTodoBtn.onclick = () => {
  hideSaveDialog("todo-form-dialog");
};

cancelProjectBtn.onclick = () => hideCancelDialog("project-form-dialog");
cancelTodoBtn.onclick = () => hideCancelDialog("todo-form-dialog");
//--------------------------------------------

function getFormDataTodo() {
  const formData = new FormData(todoForm);
  const todoData = Object.fromEntries(formData.entries());

  todoData.todoIsDone = todoForm.elements["todoIsDone"].checked;

  return todoData;
}
function getFormDataProject() {
  const projectTitleInput = document.getElementById("project-title");
  return projectTitleInput.value;
}
function showDialog(dialogID) {
  const dialogBox = document.getElementById(`${dialogID}`);
  dialogBox.showModal();
}
function hideCancelDialog(dialogID) {
  const dialogBox = document.getElementById(`${dialogID}`);
  dialogBox.close();
}
function hideSaveDialog(dialogID) {
  const dialogBox = document.getElementById(`${dialogID}`);
  dialogBox.close();
}
function makeNewProject(title) {
  const newProject = ProjectListDefault.makeProject(title);
  return newProject;
}
function populateProjectsSelect() {
  select.innerHTML = ""; // előző opciók törlése

  // ITT A JAVÍTÁS: 'list' helyett 'projects'
  ProjectListDefault.list.forEach((proj) => {
    const option = document.createElement("option");

    // Itt feltételezem, hogy a Project objektumnak van 'title' tulajdonsága
    option.value = proj.title;
    option.textContent = proj.title;

    select.appendChild(option);
  });
}
