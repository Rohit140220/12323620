# Customer Relationship Management (CRM) System

A robust, role-based Customer Relationship Management system featuring full CRUD capabilities, secure authentication, and distinct access levels for administrators and standard users. 

## 🚀 Project Purpose

This project implements a secure CRM backend where administrators manage master data and standard users perform day-to-day operations. The system uses JSON Web Tokens (JWT) to secure all routes, with custom role-based middleware to strictly restrict administrative operations to authorized personnel.

## ✨ Key Features

* **Role-Based Access Control (RBAC):** Distinct permissions for `Admin` and `User` roles.
* **Secure Authentication:** Password hashing and JWT-based session management.
* **Full CRUD Operations:** Complete Create, Read, Update, and Delete capabilities for CRM records.
* **Protected Routes:** Custom middleware verifies token validity and user roles before granting access to specific endpoints.

## 🗂️ Main Modules / Collections

The system is built around four primary data modules:

1.  **Users:** Handles user profiles, roles (`Admin` / `User`), and authentication credentials.
2.  **CRM:** Core customer data, interactions, and management records.
3.  **Reports:** Generated analytics and system usage data.
4.  **Settings:** Global application configurations and master data (Admin only).

## 🔒 JWT Authentication Flow

The security of the application follows a standard token-based architecture:

1.  **Registration:** User registers account -> Password is cryptographically hashed -> Saved in the database.
2.  **Authentication:** User logs in with credentials -> Server validates and generates a JWT.
3.  **Storage:** The client receives the JWT and stores it locally (e.g., in `localStorage` or a secure cookie).
4.  **Transmission:** The token is sent in the `Authorization` header (`Bearer <token>`) for every subsequent HTTP request.
5.  **Verification:** Backend middleware intercepts the request, verifying both token validity and the user's role.
6.  **Resolution:** If valid, the request proceeds. If invalid, tampered, or lacking permissions, the server returns a `401 Unauthorized` or `403 Forbidden` error.

## 🔌 API Endpoints Reference

Below are the sample REST APIs for the core CRM module. All endpoints require a valid JWT.

| Method | Endpoint | Description | Role Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/crm` | Create a new CRM record | User / Admin |
| `GET` | `/api/crm` | Retrieve all CRM records | User / Admin |
| `PUT` | `/api/crm/:id` | Update an existing CRM record | User / Admin |
| `DELETE`| `/api/crm/:id` | Delete a specific CRM record | Admin |

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/yourusername/your-repo-name.git)
