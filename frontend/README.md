# 💻 WorkSphere Frontend

This directory houses the React-based client web application for **WorkSphere**, offering highly interactive and responsive dashboards for Administrators, HR personnel, and Employees.

---

## 🎨 Design & Visual Features

*   **Modular Dashboards**: Segmented views and sidebars tailored specifically to User roles (Admin, HR, and Employee).
*   **Structured Tables**: Dynamic and search-friendly data viewing tables powered by `ag-grid-react`.
*   **Modern Styling**: Styled using custom, responsive CSS components integrated with Bootstrap (React-Bootstrap) for fluid layouts.
*   **Intuitive Portals**: Interactive forms for managing organizational hierarchies, employee records, payroll slips, and leave requests.

---

## 📂 React Client Directory Structure

```text
frontend/
├── public/             # Static HTML entry, favicon, and manifest assets
└── src/                # Core application source code
    ├── component/      # UI Components (Admin, HR, Employee subfolders)
    ├── img/            # Static image assets and logo
    ├── App.js          # Core routing and authentication state management
    ├── index.js        # React client entry point
    └── index.css       # Core styling definitions
```

---

## 🚦 Navigation & Pages

The client application mounts routes dynamically depending on the active user's permissions:

*   🔒 `/admin`: Opens the **DashboardAdmin** panel offering full system configuration controls (Branches, Cities, Security Roles, Project Bidding).
*   🔒 `/hr`: Opens the **DashboardHR** panel managing employee profile creation, paycheck processing, and leave reviews.
*   🔒 `/employee`: Opens the **DashboardEmployee** self-service dashboard to file leaves and view personal pay slip histories.

---

## 🏃 Local Run

Make sure you are in the `frontend/` directory and run:

1.  **Start development server:**
    ```bash
    npm start
    ```
    *This runs the React dev server locally. The browser should open and load the login page at [http://localhost:3000](http://localhost:3000).*

---

## 📦 Major Dependencies

*   `react` & `react-dom` (v16.8)
*   `react-router-dom` (v5.2)
*   `react-bootstrap` & `bootstrap` (v4)
*   `ag-grid-react` & `ag-grid-community` (v21)
*   `axios` (v0.21)
*   `@fortawesome/react-fontawesome`
