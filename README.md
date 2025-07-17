# 📌 JSL04 – Kanban Board: Dynamic Task Display & Modal View

A responsive browser-based Kanban board built with **vanilla JavaScript**, dynamically rendering tasks to the DOM based on their status. Tasks are interactive — clicking a task opens a modal where users can view and edit details such as title, description, and status.

---

## 📝 Project Overview

This project is part of the **CodeSpace Academy JavaScript curriculum (JSL04 Challenge)**. It builds upon earlier logic-focused challenges to now include **DOM manipulation**, **event-driven interaction**, and **responsive UI design**. Students deepen their understanding of JavaScript by dynamically generating HTML content and linking it with modal interactions — all without using any external libraries or frameworks.

---

## 🛠 Technologies Used

- **HTML5** – Semantic structure and layout
- **CSS3** – Responsive and Figma-aligned styling
- **JavaScript (ES6+)** – DOM manipulation, modular functions, event handling

---

## ✅ Features

- Dynamically renders tasks from a predefined array to the DOM
- Auto-sorts tasks into correct Kanban columns: `To Do`, `Doing`, `Done`
- Clickable task cards open a modal with:
  - Editable input fields for title and description
  - A dropdown to change task status
- Fully functional Save and Close modal buttons
- Responsive layout for desktop and mobile
- Clean, modular JavaScript code with single-responsibility functions
- Modal backdrop ensures user focus and accessibility

---

## 📦 File Structure

```
├── index.html         # Markup structure with Kanban layout and modal
├── styles.css         # Styling: layout, modal, responsive rules
├── scripts/
│   ├── main.js        # Initializes board, attaches event listeners
│   ├── modal.js       # Modal open/close logic, updates tasks
│   └── tasks.js       # Task rendering and creation logic
└── README.md          # Project documentation
```

---

## ⚙️ Setup Instructions

1. **Clone or download** the repository:

```bash
git clone https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSL04.git
```

2. Open `index.html` in your preferred browser.

3. Tasks will automatically appear under their corresponding status columns.

4. Click on any task card to open the modal and view/edit task details.

---

## 💡 Usage Examples

### 👀 Default Tasks

```js
[
  { id: 1, title: "Launch Epic Career", status: "todo" },
  { id: 2, title: "Master JavaScript", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", status: "done" },
];
```

### ✍️ Editing a Task

1. Click a task like `"Master JavaScript"`.
2. The modal opens with:
   - Title: `Master JavaScript`
   - Description: `Get comfortable with the fundamentals`
   - Status: `doing`
3. Edit fields and click **Save**.
4. The updated task is re-rendered in its appropriate column.

---

## 🧩 Interaction Instructions

- No prompts or buttons outside of the modal.
- Click task → Edit → Save → View changes in real-time.
- Modal can be closed via the `✕` button or backdrop click.

---

## 🖼 Responsive UI

- Grid layout for desktop (3 columns)
- Adaptive layout for tablet (2 columns)
- Single-column scroll view on mobile
- Modal adapts to screen size with backdrop dimming

---

## 👩‍💻 Author

**Vanessa Baart**  
[GitHub](https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSL04.git)
[LinkedIn](https://www.linkedin.com/in/vanessa-gwama-50841ab7)

---

## 📎 Notes

This solution fulfills all **JSL04 Challenge** requirements:

- Modular, maintainable JavaScript code
- DOM interaction and real-time updates
- Editable task modal with full styling
- Responsive design matching provided Figma template

> Ideal stepping stone towards full CRUD-based task management systems.

---
