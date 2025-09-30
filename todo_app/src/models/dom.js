const displayElement = document.getElementById("displayElement");

const domElements = (() => {
  const froms = (() => {
    const projectForm = document.createElement("dialog");
    projectForm.id = "project-form-dialog";
    const todoForm = document.createElement("dialog");
    todoForm.id = "todo-form-dialog";

    projectForm.innerHTML = `
    <form id="project-form" method="dialog">
        <h2>Új Projekt Létrehozása</h2>
        <div class="form-group">
            <label for="project-title">Title:</label>
            <input type="text" id="project-title" name="projectTitle" required>
        </div>
        <div class="form-actions">
            <button type="submit" id="save-project-btn">Save</button>
            <button type="button" id="cancel-project-btn">Cancel</button>
        </div>
    </form>
`;
    todoForm.innerHTML = `
    <form id="todo-form" method="dialog">
        <h2>Add new todo:</h2>

        <div class="form-group">
            <select id="todo-project" name="todoProject" required>
            <option value="" disabled selected>-- Choose project --</option>
            </select>
        </div>


        <div class="form-group">
            <label for="todo-title">Title:</label>
            <input type="text" id="todo-title" name="todoTitle" required>
        </div>

        <div class="form-group">
            <label for="todo-description">Description:</label>
            <input type="text" id="todo-description" name="todoDescription">
        </div>

        <div class="form-group-inline">
        <label for="todo-isdone">Is Done?</label>
            <input type="checkbox" id="todo-isdone" name="todoIsDone">
        </div>

        <div class="form-group">
            <label for="todo-duedate">Due Date:</label>
            <input type="date" id="todo-duedate" name="todoDueDate">
        </div>

        <div class="form-group">
            <label for="todo-priority">Priority Level (1-3):</label>
            <select id="todo-priority" name="todoPriority">
                <option value="1">1 (Low)</option>
                <option value="2" selected>2 (Medium)</option>
                <option value="3">3 (High)</option>
            </select>
        </div>

        <div class="form-group">
            <label for="todo-notes">Notes:</label>
            <textarea id="todo-notes" name="todoNotes" rows="4"></textarea>
        </div>

        <div class="form-actions">
            <button type="submit" id="save-todo-btn">Save Todo</button>
            <button type="button" id="cancel-todo-btn">Cancel</button>
        </div>
    </form>
`;
    function projectAndTodoFormDisplay() {
      displayElement.appendChild(todoForm);
      displayElement.appendChild(projectForm);
    }
    return { projectAndTodoFormDisplay };
  })();
  return { froms };
})();

export default domElements;
