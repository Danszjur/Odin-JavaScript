class Todos {
    constructor() {
        this.title = null;
        this.description = null;
        this.dueDate = new Date;
        this.priority = null;
        this.status = false;

        this.notes = null;
        this.checklists = null;

    }

    staticsetTitle(newTitle) { this.title = newTitle }
    getTitle() { return this.title }

    setDescription(newDescription) { this.description = newDescription }
    getDescription() { this.description }

    setDueDate(newDueDate) { this.dueDate = newDueDate }
    getDueDate() { return this.dueDate }

    setPriority(newPriority) { this.priority = newPriority }
    getPriority() { return this.priority }

    setStatus(newStatus) { this.status = newStatus }
    getStatus() { return this.status }
}

export default Todos