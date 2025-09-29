import "./style.css";
//--------------------------------------------
import Project from "./models/project";
import domElements from "./models/dom";
import ProjectList from "./models/projectList"
//--------------------------------------------
const NewTodoBtn = document.getElementById("NewTodoBtn")
const NewProjectBtn = document.getElementById("NewProjectBtn")
//--------------------------------------------
const ProjectListDefault = new ProjectList()
//--------------------------------------------

function defaultSetup() {
    const defaultProject = ProjectListDefault.makeProject("default");
    domElements.form.newProjectForm();
    domElements.form.newTodoForm(ProjectListDefault);
}

defaultSetup();

NewProjectBtn.onclick = () => {
    domElements.form.showForm("projectform");
}
NewTodoBtn.onclick = () => {
    domElements.form.showForm("todoform");
}