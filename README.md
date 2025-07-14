# 📌 Kanban Board – Launch Career Edition

A browser-based task management system built with **vanilla JavaScript** that simulates a basic Kanban workflow. It enables users to add tasks, validate input, and view filtered results—all via browser prompts and console outputs.

---

## 📝 Project Overview

This project is part of the **CodeSpace Academy JavaScript curriculum**. It introduces students to:

- Structuring data with objects and arrays
- Handling real-time user input using `prompt()` and `alert()`
- Implementing input validation through loops
- Filtering tasks by status (`todo`, `doing`, `done`)
- Writing clean, modular functions with clear purpose

This version is a **console-driven** simulation of a Kanban board, ideal for building foundational logic before progressing to UI-based interfaces.

---

## 🛠 Technologies Used

- **HTML5** – Basic document setup
- **CSS3** – Minimal layout and branding
- **JavaScript (ES6+)** – Logic, array manipulation, user interaction

---

## ✅ Features

- Tasks are stored as structured objects in an array
- Add up to **3 new tasks** using `prompt()`
- Each new task gets a unique, auto-incremented ID
- Input validation restricts `status` to: `todo`, `doing`, or `done`
- Console logs show:
  - 📋 **All Tasks**
  - ✅ **Completed Tasks** (where `status === "done"`)
- User is alerted when the maximum of 9 tasks is reached
- Clean modular functions handle adding, validating, and filtering

---

## 📦 File Structure

```
├── index.html         # Basic HTML scaffold
├── script.js          # Core JavaScript logic
└── README.md          # Project documentation
```

---

## ⚙️ Setup Instructions

1. **Clone or download** the repository:

   ```bash
   git clone https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSL03-2025.git
   ```

2. Open `index.html` in your browser.

3. Follow the prompts and open the **Developer Console** to view the results.

---

## 💡 Usage Examples

### ➕ Adding Tasks

1. You'll be prompted to enter:
   - `title`
   - `description`
   - `status` (`todo`, `doing`, or `done`)
2. Invalid statuses will re-prompt until valid.
3. Once 3 new tasks are added and the total hits 9, you'll see:
   ```
   There are enough tasks on your board, please check them in the console.
   ```

### 🧪 Example Console Output

```js
📋 All Tasks:
[
  { id: 1, title: "Gym", status: "todo" },
  { id: 9, title: "Buy groceries", status: "done" }
]

✅ Completed Tasks:
[
  { id: 3, title: "Sleep", status: "done" },
  { id: 9, title: "Buy groceries", status: "done" }
]
```

---

## 📋 Interaction Instructions

- **Prompt-based input** only — no buttons or UI.
- To use:
  1. Open browser
  2. Run `index.html`
  3. Respond to input prompts
  4. Open **Developer Console** to view:
     - All Tasks
     - Completed Tasks

---

## ❌ Input Validation Example

If user enters invalid status like `"completed"`:

```
Enter task status (todo, doing, done):
> completed
Invalid. Please try again.
```

Loop continues until a valid status is entered.

---

## 👩‍💻 Author

**Vanessa Baart**  
[GitHub](https://github.com/VanessaDa/VANBAA25089_PTO2502_GroupA_VanessaBaart_JSL04.git)  
[LinkedIn](https://www.linkedin.com/in/vanessa-gwama-50841ab7)

---

## 📎 Notes

This solution is part of the **JSL03 Challenge** and supports key learning outcomes in:

- Arrays & objects
- Input validation
- Looping logic
- Function reuse
- Output structuring via console

> Ideal as a stepping stone to building full-featured UI task boards like JSL04.

---
