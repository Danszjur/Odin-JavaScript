
const displayElement = document.getElementById("displayElement")

const domElements = (() => {
    const form = (() => {

        const newProjectForm = () => {
            const dialogProject = document.createElement("dialog");
            dialogProject.id = "projectform";
            const h1 = document.createElement("h1");
            h1.textContent = "Title of the new Project:"
            const input = document.createElement("input");
            input.type = "text";
            input.id = "titleOfProject";

            const subdiv1 = document.createElement("div");
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "Save";
            saveBtn.addEventListener(onclick, () => {
                hideFormAndSave("projectform");
            });
            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener(onclick, () => {
                hideFormCancel("projectform");
            });
            subdiv1.appendChild(saveBtn);
            subdiv1.appendChild(cancelBtn);
            dialogProject.appendChild(h1);
            dialogProject.appendChild(input);
            dialogProject.appendChild(subdiv1);

            displayElement.appendChild(dialogProject);
        }

        const newTodoForm = (projectslist) => {
            const dialogTodo = document.createElement("dialog");
            dialogTodo.id = "todoform";
            //---------------------------------------------------------
            const selectDiv = document.createElement("div");

            const projectSelector = document.createElement("select");
            projectSelector.id = "selector";
            for (const project of projectslist.list) {
                const option = document.createElement("option");
                option.textContent = project.title;
                projectSelector.appendChild(option);
            }

            selectDiv.appendChild(projectSelector);
            dialogTodo.appendChild(selectDiv)
            //---------------------------------------------------------
            const descriptionDiv = document.createElement("div");

            const descriptioninput = document.createElement("input");
            descriptioninput.type = "text";

            dialogTodo.appendChild(descriptionDiv);
            //---------------------------------------------------------
            const dueDateDiv = document.createElement("div");
            const dueDateInput = document.createElement("input");
            dueDateInput.type = "date";

            dueDateDiv.appendChild(dueDateInput);
            dialogTodo.appendChild(dueDateDiv);
            //---------------------------------------------------------
            const priorityLevelDiv = document.createElement("div");
            const PrioritySelector = document.createElement("select");
            const levels = ["1 - Critical", "2 - Moderate", "3 - Minor"];
            for (const level of levels) {
                const option = document.createElement("option");
                option.textContent = level;
                PrioritySelector.appendChild(option);
            }
            priorityLevelDiv.appendChild(PrioritySelector);
            dialogTodo.appendChild(priorityLevelDiv);
            //---------------------------------------------------------
            const isDoneDiv = document.createElement("div");
            const isDoneInput = document.createElement("input");
            isDoneInput.type = "checkbox";

            isDoneDiv.appendChild(isDoneInput);
            dialogTodo.appendChild(isDoneDiv);
            //---------------------------------------------------------
            const notesDiv = document.createElement("div");
            const noteInput = document.createElement("textarea");

            notesDiv.appendChild(noteInput);
            dialogTodo.appendChild(notesDiv);
            //---------------------------------------------------------
            const buttonsDiv = document.createElement("div");

            const saveBtn = document.createElement("button")
            saveBtn.textContent = "Save";
            saveBtn.addEventListener("click", () => {
                hideFormAndSave("todoform");
            });

            const cancelBtn = document.createElement("button")
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", () => {
                hideFormCancel("todoform");
            });
            buttonsDiv.appendChild(saveBtn);
            buttonsDiv.appendChild(cancelBtn);
            dialogTodo.appendChild(buttonsDiv);
            //---------------------------------------------------------

            displayElement.appendChild(dialogTodo);
        }

        function hideFormAndSave(idslector) {
            console.log("saving...");
            const inputForm = document.querySelector(`#${idslector}`).close();
        }
        function hideFormCancel(idslector) {
            const inputForm = document.querySelector(`#${idslector}`).close();
        }
        function showForm(idslector) {
            const inputForm = document.querySelector(`#${idslector}`).showModal();

        }

        return { newProjectForm, newTodoForm, showForm }
    })();
    return { form }
})();

export default domElements;