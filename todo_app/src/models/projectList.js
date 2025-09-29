import Project from "./project";

class ProjectList {
    constructor(project) {
        this.list = [];
    }

    makeProject(title) {
        const newProject = new Project(title)
        this.list.push(newProject)
        return newProject;
    }
    deleteProject(index) {
        this.list.splice(index, 1);
    }
}
export default ProjectList;