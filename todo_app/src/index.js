import "./style.css";
//---------------------
import Project from "./models/project";
import domElements from "./models/dom";
//---------------------

let projectList = []

function setupDefaults() {
    const defProject = new Project("Default")
    projectList.push(defProject)
    const defTodo = defProject.makeTodo("Default")
    domElements.navBarSetup(projectList)
}
setupDefaults();

