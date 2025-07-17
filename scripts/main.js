/**
 * Entry point: initializes event listeners and renders tasks on DOM load.
 */

import { renderTasks } from './tasks.js';
import { openModal, closeModal } from './modal.js';

document.getElementById("close-btn").onclick = closeModal;
document.getElementById("modal-backdrop").onclick = closeModal;

document.addEventListener("DOMContentLoaded", () => {
  renderTasks((taskId) => openModal(taskId, renderTasks));
});
