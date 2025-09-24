import "./style.css";
//---------------------
import Todos from "./models/todo";
import Project from "./models/project";
import ProjectList from "./models/projectList";
//---------------------

const setupProcess = (() => {

    function generateDefaults() {
        const deafultLista = new ProjectList()
        const defaultProject = new Project("Default Project")
        const defaultTodo = new Todos("Default Todo")
    }

    return { generateDefaults }
})();






