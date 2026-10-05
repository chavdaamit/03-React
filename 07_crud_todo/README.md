# 📝 React CRUD Todo App

A simple and responsive **Todo CRUD Application** built with **React.js** and **Vite**.

This project was created to practice important React concepts such as **useState, useEffect, Props, Event Handling, Conditional Rendering, and CRUD operations**.

---

## 🚀 Live Project :- https://crud-todo-live.netlify.app/

---

## ✨ Features

* ➕ Add new Todo
* 📋 Display all Todos
* ✏️ Edit existing Todo
* 🗑️ Delete Todo
* ✅ Mark Todo as Completed
* ⏳ Track Pending Todos
* 📊 Show All / Completed / Pending task counts
* 📱 Responsive UI
* 🎨 Bootstrap-based styling
* ⚡ Fast development with Vite

---

## 🛠️ Technologies Used

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **Bootstrap**
* **React-Bootstrap**
* **HTML5**
* **CSS3**

---

## ⚛️ React Concepts Practiced

### `useState`

Used for managing Todo data and form input.

```jsx
const [todos, setTodos] = useState([]);
```

### `useEffect`

Used to handle side effects such as loading edit data into the form.

```jsx
useEffect(() => {
  if (editVal) {
    setInput(editVal);
  }
}, [editVal]);
```

### Props

Data and functions are passed between components using props.

Example:

```jsx
<AddTodo handelAdd={handelAdd} editVal={editVal} />
```

### CRUD Operations

| Operation  | Description           |
| ---------- | --------------------- |
| **Create** | Add a new Todo        |
| **Read**   | Display Todo list     |
| **Update** | Edit an existing Todo |
| **Delete** | Remove a Todo         |

---

## 📂 Project Structure

```text
07_crud_todo/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Addtodo.jsx
│   │   ├── ListTodo.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   └── ...
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/chavdaamit/03-React.git
```

### 2. Navigate to Project

```bash
cd 03-React/07_crud_todo
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

The application will run on the local Vite development server.

---

## 🎯 How It Works

### 1. Add Todo

Enter:

* Task
* Description

and click the **Add Todo** button.

### 2. View Todos

All added tasks are displayed in a table/list.

### 3. Edit Todo

Click the **Edit** button to load the selected Todo into the form.

After modifying the task, submit the form to update it.

### 4. Delete Todo

Click the **Delete** button to remove a Todo from the list.

### 5. Complete Todo

Use the checkbox to mark a task as completed.

The dashboard displays:

```text
All Tasks
Completed Tasks
Pending Tasks
```

---

## 📸 Application Preview

### Dashboard

The application provides a simple dashboard to track:

* Total Tasks
* Completed Tasks
* Pending Tasks

### Todo Management

Users can easily:

```text
Add → View → Edit → Complete → Delete
```

---

## 📚 What I Learned

While building this project, I practiced:

* React Functional Components
* JSX
* `useState`
* `useEffect`
* Props
* Event Handling
* Controlled Forms
* Array `map()`
* Array `filter()`
* Conditional Rendering
* CRUD Logic
* Component Communication
* Bootstrap & React-Bootstrap
* Basic responsive UI design

---

## 👨‍💻 Author

**Amit Chavda**

🔗 GitHub:
https://github.com/chavdaamit

🔗 LinkedIn:
https://www.linkedin.com/in/amit1201/

---

## ⭐ If You Like This Project

If you find this project useful for learning React, consider giving the repository a ⭐ on GitHub.

---

### 📌 Project Status

**Completed ✅**

Built as a React learning and practice project.
