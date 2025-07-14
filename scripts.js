/**
 * Array of task objects used to initialize the Kanban board.
 * Each task contains an id, title, description, and status.
 * @type {Array<{ id: number, title: string, description: string, status: string }>}
 */
const initialTasks = [
  { id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate with others in the software development community", status: "done" },
  { id: 4, title: "Understand Databases", description: "Learn SQL and NoSQL systems", status: "todo" },
  { id: 5, title: "Crush Frameworks", description: "React, Vue, Angular mastery", status: "todo" },
  { id: 6, title: "Never Give Up", description: "Consistent progress every day", status: "doing" }
];

/**
 * Creates a DOM element for a single task and attaches the modal open handler.
 * @param {{ id: number, title: string, description: string, status: string }} task - The task object to render.
 * @returns {HTMLDivElement} - A div element representing the task card.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.addEventListener("click", () => openModal(task.id));
  return taskDiv;
}

/**
 * Renders all tasks into their corresponding Kanban columns on the DOM.
 * Clears the existing content and re-appends task elements based on their status.
 */
function renderTasks() {
  const containers = {
    todo: document.querySelector('[data-status="todo"] .tasks-container'),
    doing: document.querySelector('[data-status="doing"] .tasks-container'),
    done: document.querySelector('[data-status="done"] .tasks-container')
  };

  Object.values(containers).forEach(c => c.innerHTML = "");

  initialTasks.forEach(task => {
    const taskElement = createTaskElement(task);
    containers[task.status].appendChild(taskElement);
  });
}
