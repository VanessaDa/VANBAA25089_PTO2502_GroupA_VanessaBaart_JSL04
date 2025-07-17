/**
 * Initial set of tasks for the Kanban board.
 * @type {Array<{id: number, title: string, description: string, status: string}>}
 */
export const initialTasks = [
  { id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate with others in the software development community", status: "done" },
  { id: 4, title: "Understand Databases", description: "Learn SQL and NoSQL systems", status: "todo" },
  { id: 5, title: "Crush Frameworks", description: "React, Vue, Angular mastery", status: "todo" },
  { id: 6, title: "Never Give Up", description: "Consistent progress every day", status: "doing" }
];

/**
 * Creates a DOM element for a task.
 * @param {{id: number, title: string, description: string, status: string}} task - The task to create.
 * @param {Function} openModal - Function to open the modal.
 * @returns {HTMLDivElement} The task element.
 */
export function createTaskElement(task, openModal) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.addEventListener("click", () => openModal(task.id));
  return taskDiv;
}

/**
 * Renders tasks into their corresponding columns.
 * @param {Function} openModal - Function to open modal with task details.
 */
export function renderTasks(openModal) {
  const containers = {
    todo: document.querySelector('[data-status="todo"] .tasks-container'),
    doing: document.querySelector('[data-status="doing"] .tasks-container'),
    done: document.querySelector('[data-status="done"] .tasks-container')
  };

  Object.values(containers).forEach(c => c.innerHTML = "");

  initialTasks.forEach(task => {
    const taskElement = createTaskElement(task, openModal);
    containers[task.status].appendChild(taskElement);
  });
}
