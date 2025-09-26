import Todos from "./todo";

class Project {
    constructor(title) {
        this.title = title;
        this.todosList = []
    }

    addTodo(todo) {
        this.todosList.push(todo)
    }
    removeTodo(index) {
        this.todosList.splice(index, 1)
    }
    makeTodo(title) {
        const todo1 = new Todos(title);
        this.todosList.push(todo1)
        return todo1;
    }

}

export default Project