# Employee Management System

A simple and user-friendly Employee Management System built using React.js, Node.js, Express.js, and MongoDB. This project allows users to manage employee records with CRUD operations.

## Features

- View all employees
- Add a new employee
- Update employee details
- Delete employee records
- Manage employee information
- Department and status selection
- API integration using Axios
- React Router for navigation
- Loading and error handling
- Responsive user interface using Bootstrap

## Technologies Used

### Frontend
- React.js
- JavaScript
- React Router DOM
- Axios
- Bootstrap
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

## Employee Details

The application manages the following employee information:

- Name
- Employee ID
- Email
- Mobile Number
- Designation
- Department
- Salary
- Employment Status

## CRUD Operations

| Operation | Description |
|---|---|
| Create | Add a new employee |
| Read | Display all employee records |
| Update | Edit existing employee details |
| Delete | Remove an employee record |

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/chavdaamit/node.js.git
```

### 2. Install Dependencies

Open the frontend and backend folders separately in your terminal and run:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the frontend project and add:

```env
VITE_BASE_URL=http://localhost:5000
```

Make sure this URL matches your backend server and API configuration.

Configure your backend `.env` file with your MongoDB connection string and port as required by your backend code.

### 4. Run the Application

Start the backend server:

```bash
npm run dev
```

Start the frontend development server from the frontend project folder:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/all-Employee` | Get all employees |
| POST | `/add` | Add a new employee |
| GET | `/:id` | Get an employee by ID |
| PATCH | `/:id` | Update employee details |
| DELETE | `/:id` | Delete an employee |

**Note:** The API endpoints should match the routes configured in your backend.

## Project Structure

```text
employee-management-system/
├── src/
│   ├── api/
│   │   └── studentaxios.js
│   ├── components/
│   │   ├── AddEmployee.jsx
│   │   └── Employee.jsx
│   ├── routes/
│   │   └── MainLayout.jsx
│   ├── ui/
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

