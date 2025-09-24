class ProjectList {
    constructor() {
        this.list = []
    }

    addProject(project) {
        this.list.push(project)
    }
    getProjects() {
        return this.list;
    }

}

export default ProjectList