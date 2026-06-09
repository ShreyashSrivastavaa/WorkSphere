# 🌐 WorkSphere

WorkSphere is a modern, full-stack Employee, Organization, and Payroll Management System designed to streamline workplace workflows. Built using a robust MVC architecture on Node.js/Express, a responsive React client, and a MongoDB Atlas data layer, WorkSphere provides high-performance administrative portals for organizations of any scale.

---

## 🚀 Key Features

WorkSphere segments privileges and interfaces across three roles, each protected by robust middleware authentication:

### 👑 Administrator Portal
*   **Organization Management**: Configure corporate profiles, define branches, and set up departments.
*   **Geographical Controls**: Configure Country, State, and City parameters for multi-regional branch offices.
*   **Access Control**: Dynamically create security roles, define positions, and configure resource access.
*   **Project Portal**: Oversee project bidding, logs, and client communications.

### 👥 HR Portal
*   **Employee Directory**: Register, update, and manage comprehensive digital profiles for employees.
*   **Payroll Configuration**: Run paychecks, manage salaries, and track payroll logs.
*   **Leave Management**: Act on employee leave applications (approve/reject/pending states).

### 💼 Employee Portal
*   **Personal Dashboard**: View profile details, track family info, work history, and educational records.
*   **Self-Service Leave Filing**: Submit digital leave applications directly to HR and track their status in real-time.
*   **Paycheck Portal**: Access and inspect monthly pay slips and history.

---

## 🛠️ Technology Stack

WorkSphere leverages modern, stable web technologies:

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | **React.js** (v16.8), CSS3 (Flexbox/Grid), Bootstrap, FontAwesome |
| **Backend** | **Node.js** (v16), **Express.js** (MVC), Joi validation, JWT security |
| **Database** | **MongoDB** (Mongoose with `mongoose-auto-increment`) |
| **Containerization** | **Docker**, Docker Compose |

---

## 📁 System Architecture

The project is structured as a monorepo splitting client and server logic cleanly:

```text
WorkSphere/
├── backend/            # Express Backend (MVC Architecture)
│   ├── config/         # Database and plugin initializations
│   ├── controllers/    # Core business logic and controllers
│   ├── middleware/     # Role-based JWT verification middlewares
│   ├── models/         # Mongoose schemas and relationships
│   ├── routes/         # Express router endpoints
│   ├── validators/     # Joi payload schemas
│   └── app.js          # Clean boot entrypoint
├── frontend/           # React Client (Components & Views)
│   ├── public/         # Static entry HTML
│   └── src/            # Components, styles, and state management
└── docker-compose.yml  # Orchestrates MongoDB and Backend services
```

---

## 🏃 Getting Started Locally

WorkSphere includes a local portable Node.js environment so you do not need global Node installations or administrator permissions.

### Prerequisites
1. Ensure you have **Git** installed.
2. Ensure you have your local port `3000` (frontend) and `4000` (backend) available.

### Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ShreyashSrivastavaa/WorkSphere.git
   cd WorkSphere
   ```

2. **Initialize the Environment:**
   Run the local setup script to download the portable Node runtime and install dependencies:
   ```powershell
   # Run in the root of the project
   .\setup_node_env.ps1
   ```

3. **Configure Environment Variables:**
   Create a `backend/.env` file with your connection strings:
   ```env
   DATABASEURL=mongodb+srv://<username>:<password>@cluster0.liwlutb.mongodb.net/emp?retryWrites=true&w=majority
   JWTKEY=your_secure_jwt_key
   ```
   > [!IMPORTANT]
   > Make sure to URL-encode any special characters in your database password (e.g., replace `@` with `%40`).

4. **Run the Application:**
   * **Start Backend:**
     In a terminal inside `backend/`, run:
     ```bash
     $env:PATH = 'D:\Employee-management-System\.node\node-v16.20.2-win-x64;' + $env:PATH
     node app.js
     ```
   * **Start Frontend:**
     In a terminal inside `frontend/`, run:
     ```bash
     $env:PATH = 'D:\Employee-management-System\.node\node-v16.20.2-win-x64;' + $env:PATH
     npm start
     ```

---

## 🐳 Running with Docker

You can run the entire database and backend stack inside isolated Docker containers:

```bash
# In the root folder containing docker-compose.yml
docker-compose up --build
```

---

## 📸 Screenshots

### Admin Home Page
![Admin Home Page](https://user-images.githubusercontent.com/60690698/166950000-ede8ba88-af25-4e5d-9c70-3e3e000b6f84.png)

### HR Home Page
![HR Home Page](https://user-images.githubusercontent.com/60690698/166950118-90f60a74-17e2-44db-bf5a-d0116c4c171f.png)
