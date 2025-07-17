import { initialTasks } from './tasks.js';

/**
 * Opens the modal for editing a task.
 * @param {number} taskId - ID of the task to edit.
 * @param {Function} renderTasks - Function to re-render tasks.
 */
export function openModal(taskId, renderTasks) {
  const task = initialTasks.find(t => t.id === taskId);
  document.getElementById("modal-title").value = task.title;
  document.getElementById("modal-desc").value = task.description;
  document.getElementById("modal-status").value = task.status;

  document.getElementById("task-modal").classList.remove("hidden");
  document.getElementById("modal-backdrop").classList.remove("hidden");

  document.getElementById("save-btn").onclick = () => {
    updateTask(taskId);
    closeModal();
    renderTasks((taskId) => openModal(taskId, renderTasks));
  };
}

/**
 * Updates the task with new values from the modal.
 * @param {number} taskId - ID of the task to update.
 */
function updateTask(taskId) {
  const task = initialTasks.find(t => t.id === taskId);
  task.title = document.getElementById("modal-title").value;
  task.description = document.getElementById("modal-desc").value;
  task.status = document.getElementById("modal-status").value;
}

/**
 * Closes the modal and its backdrop.
 */
export function closeModal() {
  document.getElementById("task-modal").classList.add("hidden");
  document.getElementById("modal-backdrop").classList.add("hidden");
}
