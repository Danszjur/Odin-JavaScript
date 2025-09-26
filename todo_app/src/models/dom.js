import Todos from "./todo";
import Project from "./project";
//-----------------------------------------------------------------
const displayElement = document.getElementById("displayElement")
const projectLists = document.getElementById("project-lists")
const listOfTodos = document.getElementById("list-of-todos")

const NewTodoBtn = document.getElementById("NewTodoBtn")
const NewProjectBtn = document.getElementById("NewProjectBtn")

const domElements = (() => {

    function addTodoElement(todoObj) {

        /* const todoObj = new Todos("title") */

        const todoContainer = document.createElement("div")
        todoContainer.className = "todo-element";

        const todoHeader = document.createElement("div")
        todoHeader.className = "todo-header"

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        const subdiv1 = document.createElement("div");

        const h1Title = document.createElement("h1");
        h1Title.textContent = todoObj.title;

        const pDescription = document.createElement("p");
        pDescription.textContent = todoObj.description;

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details"
        detailsButton.addEventListener("click", () => {
            const footer = todoContainer.querySelector(".todo-footer")
            let state = 0;
            if (footer.style.display === "none") {
                footer.style.display = "block";
            } else {
                footer.style.display = "none";
            }

        })


        todoHeader.appendChild(checkBox)
        subdiv1.appendChild(h1Title)
        subdiv1.appendChild(pDescription)
        todoHeader.appendChild(subdiv1)
        todoHeader.appendChild(detailsButton)

        //----------------------------------------------------------
        const todoFooter = document.createElement("div")
        todoFooter.className = "todo-footer";
        todoFooter.style.display = "none";

        const ul = document.createElement("ul");
        ul.innerHTML = `
        <li>Title: ${todoObj.title}</li>
        <li>Description: ${todoObj.description}</li>
        <li>Due Date: ${todoObj.dueDate}</li>
        <li id="priotity-part">
            <select>
                <option value="1">Level 1 - Ugrent</option>
                <option value="2" selected>Level 2 - Moderated</option>
                <option value="3">Level 3 - Informal</option>
            </select>
        </li>
        <li>Status: ${todoObj.status}</li>
        <li id="checklist-part">Checklist:
            <ol>
                <li>Teeni 1</li>
                <li>Teeni 2</li>
                <li>Teeni 3</li>
            </ol>
        </li>
        <li id="notes-part"><textarea name="notes-of-todo" id="notes-of-todo" placeholder="notes">${todoObj.notes}</textarea>
        </li>
        <li><button>Save changes</button></li>
        <li><button>Modify</button></li>
        `

        todoFooter.appendChild(ul)

        //----------------------------------------------------------
        todoContainer.appendChild(todoHeader)
        todoContainer.appendChild(todoFooter)

        displayElement.appendChild(todoContainer)

    }

    function navBarSetup(projectList) {


        for (const project of projectList) {
            const projectBlock = document.createElement("div")

            const titleOfProject = document.createElement("p")


            for (const todo of project.todosList) {
                const titleOfTodo = document.createElement("p")
            }
        }
    }

    return { addTodoElement, navBarSetup }
})();

export default domElements