# 📚 Nalanda Library Management System – Backend API

This is a backend system for managing a digital library named **Nalanda**, built as part of a backend developer assessment for **Heumn Interactive Pvt. Ltd.**  
It provides secure user authentication, role-based access control, book management, borrowing system, and detailed reporting using MongoDB aggregations.

---

## 🔧 Tech Stack

- Node.js (v18+)
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Role-Based Access Control (Admin/Member)
- Postman (for API testing)

---

## ⚙️ Project Setup

### 📁 Clone the repo:

```bash
git clone
cd nalanda-library-backend
```

### 📦 Install dependencies:

```bash
npm install
```

### ⚙️ Configure Environment Variables:

Create a `.env` file in root:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/nalanda_library
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
```

### 🚀 Start the server:

```bash
npm run dev
```

---

## 🔑 Authentication & Roles

- User Roles: `admin`, `member`

- Auth endpoints:

  - `POST /api/auth/register`
  - `POST /api/auth/login`

- Use JWT token in `Authorization: Bearer <token>` header

---

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint             | Access | Description                     |
| ------ | -------------------- | ------ | ------------------------------- |
| POST   | `/api/auth/register` | Public | For registering a new user      |
| POST   | `/api/auth/login`    | Public | For logging in an existing user |

---

### 📚 Book Routes

| Method | Endpoint         | Access     | Description                 |
| ------ | ---------------- | ---------- | --------------------------- |
| POST   | `/api/books`     | Admin only | For adding new books        |
| PUT    | `/api/books/:id` | Admin only | For updating existing books |
| DELETE | `/api/books/:id` | Admin only | For deleting existing books |
| GET    | `/api/books`     | All users  | For getting all books       |

Supports pagination & filters via query params:

```
/api/books?genre=Science&page=1&limit=5
```

---

### 🔄 Borrowing Routes

| Method | Endpoint       | Access | Description                   |
| ------ | -------------- | ------ | ----------------------------- |
| POST   | `/api/borrow`  | Member | For borrowing a book          |
| POST   | `/api/return`  | Member | For returning a book          |
| GET    | `/api/history` | Member | For getting borrowing history |

---

### 📊 Report Routes (Admin Only)

| Method | Endpoint                         | Access     | Description                         |
| ------ | -------------------------------- | ---------- | ----------------------------------- |
| GET    | `/api/reports/most-borrowed`     | Admin only | For getting top borrowed books      |
| GET    | `/api/reports/active-members`    | Admin only | For getting most active members     |
| GET    | `/api/reports/book-availability` | Admin only | For getting summary of availability |

---

## 🧪 Testing with Postman

You can test each endpoint using [Postman](https://postman.com) or [Thunder Client](https://www.thunderclient.com/).

Make sure to **login** first and add the token to the `Authorization` header for protected routes.

---

## 📂 Folder Structure

```
/controllers
/routes
/models
/middleware
/config
.env
server.js
README.md
```

---

## 🚀 Deployment (Optional)

- Deploy backend on AWS EC2 or Render
- Use MongoDB Atlas for production database
- Add domain & HTTPS for production-ready deployment

---

## 📌 Additional Notes

- Use Git for version control.
- Use GitHub for code hosting.
- Use meaningful commit messages in Git for clean version control.

---

## 👨‍💻 Author

**Developed by:** Liladhar (Backend Developer Task - Heumn Interactive Pvt. Ltd.)  
Feel free to contact me if you want to see the live demo, repo walkthrough, or extended features.

---
