# 🖥️ WorkSphere Backend

This directory houses the Express.js API server for **WorkSphere**, structured in a professional, modular MVC (Model-View-Controller) architecture.

---

## 🏗️ Architecture Design

The backend is refactored from a monolithic entrypoint into dedicated configuration, validation, security, database modeling, routing, and controller layers:

```text
backend/
├── config/         # Mongoose & mongoose-auto-increment configurations
├── controllers/    # Route handlers & Business logic (resolves query populates, database calls)
├── middleware/     # Role-based JWT authentication filters
├── models/         # Database collections & Mongoose schemas
├── routes/         # Express endpoint definitions grouped by resource
├── validators/     # Joi validation rules for request payload bodies
└── app.js          # Main minimal server bootstrapper
```

---

## 🔒 Security & Middleware

WorkSphere endpoints are protected by role-based JWT authorization layers defined in `middleware/auth.js`:

*   🔑 `verifyAdmin`: Restricted to Administrator credentials (`Account: 1`).
*   🔑 `verifyHR`: Restricted to HR credentials (`Account: 2`).
*   🔑 `verifyAdminHR`: Accessible by Admins and HR.
*   🔑 `verifyEmployee`: Restricted to the specific logged-in Employee (`Account: 3` and verified ID matching).
*   🔑 `verifyHREmployee`: Accessible by HR, or the employee themselves.

---

## 🗄️ Database Schema & Auto-Increment

WorkSphere uses **MongoDB** as its persistent store via **Mongoose**. 
*   All IDs for key entities (like `Employee`, `Salary`, `LeaveApplication`) auto-increment using the Mongoose auto-increment plugin initialized in `config/db.js`.
*   Relationships (such as connecting an Employee to their department, positions, family details, and work experience logs) are maintained cleanly via Mongoose references and dynamic `.populate()` statements in controllers.

---

## 📥 Request Validation

Every incoming mutation request payload (POST/PUT) is validated at the router layer using **Joi** schemas to prevent SQL/NoSQL injection, enforce data types, and sanitize body parameters. The schemas are compiled in `validators/schemas.js`.

---

## 🚦 Endpoints Structure

The main Express router is mounted under `/api` and routes to:

| Endpoint Path | Description | Access Middleware |
| :--- | :--- | :--- |
| **POST** `/api/login` | Authenticates email/password & signs JWT token | Public |
| **GET** `/api/employee` | Fetches directory of all employees | `verifyHR` |
| **POST** `/api/employee` | Registers a new employee in the organization | `verifyHR` |
| **POST** `/api/salary/:id` | Generates a new pay slip for an employee | `verifyHR` |
| **GET** `/api/leave-application-hr` | Fetches pending leave applications | `verifyHR` |
| **POST** `/api/leave-application-hr/:id` | HR action to Approve/Reject/Pending leaves | `verifyHR` |

---

## 🏃 Local Run

1.  **Configure environment:** Make sure you create a `backend/.env` file with `DATABASEURL` and `JWTKEY`.
2.  **Start server:**
    ```bash
    node app.js
    ```
    *The console should print `Employee management backend running on port 4000!` followed by `db connection successful`.*
