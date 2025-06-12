# 📚 Nalanda Library Management System – Backend API

This is a backend system for managing a digital library named **Nalanda**, built as part of a backend developer assessment for **Heumn Interactive Pvt. Ltd.**  
It provides secure user authentication, role-based access control, book management, borrowing system, and detailed reporting using MongoDB aggregations.

---

## 🙏 Acknowledgements

- Built with ❤️ for Heumn Interactive Pvt. Ltd. assessment
- Special thanks to the open-source community for amazing tools and libraries and AI for the code walkthrough like ChatGPT and Windsurf AI Code Editor

---

## 🔧 Tech Stack

- Node.js (v18+)
- Express.js
- MongoDB + Mongoose
- GraphQL
- JWT Authentication
- Role-Based Access Control (Admin/Member)
- Postman (for API testing)

---

## ⚙️ Project Setup

### 📁 Clone the repo:

```bash
git clone https://github.com/Liladharithole/Nalanda-Library-Management-System.git
cd Nalanda-Library-Management-System
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

## 🧪 Testing with Postman

You can test each endpoint using [Postman](https://postman.com) or [Thunder Client](https://www.thunderclient.com/).

Make sure to **login** first and add the token to the `Authorization` header for protected routes.

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

## 🚀 GraphQL API

Nalanda Library Management System provides a powerful GraphQL API alongside the REST API. The GraphQL endpoint is available at `/graphql`.

### 📝 Available Queries

1. **Get All Books**

   ```graphql
   query {
     books {
       _id
       title
       author
       genre
       availableCopies
       totalCopies
     }
   }
   ```

2. **Get Book by ID**

   ```graphql
   query {
     book(id: "book_id_here") {
       title
       author
       description
       genre
       publishedYear
       isbn
     }
   }
   ```

3. **Get User's Borrowed Books**
   ```graphql
   query {
     myBorrowedBooks {
       book {
         title
         author
       }
       borrowedDate
       dueDate
       status
     }
   }
   ```

### 🧪 Testing with GraphQL Playground

You can test the GraphQL API using the built-in GraphQL Playground at `http://localhost:4000/graphql` when the server is running in development mode.

---

## 📂 Project Structure

```
Nalanda-Library-Management-System/
├── config/                    # Configuration files
│   └── db.js                 # Database connection configuration
│
├── controllers/             # Route controllers (MVC pattern)
│   ├── authController.js     # Authentication logic
│   ├── bookController.js     # Book-related operations
│   ├── borrowController.js   # Book borrowing/returning logic
│   └── reportController.js   # Reporting and analytics
│
├── graphql/                 # GraphQL implementation
│   └── schema.js            # GraphQL type definitions
│
├── middleware/              # Custom express middleware
│   └── authMiddleware.js     # Authentication & authorization middleware
│
├── models/                  # Mongoose models
│   ├── Book.js              # Book model
│   ├── User.js              # User model
│   └── BorrowRecord.js      # Book borrowing records
│
├── routes/                  # API route definitions
│   ├── authRoutes.js        # Authentication routes
│   ├── bookRoutes.js        # Book management routes
│   ├── borrowRoutes.js      # Book borrowing routes
│   └── reportRoutes.js      # Reporting routes
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── server.js               # Application entry point
```

---

---

## 📬 Postman Collection

All tested API endpoints are included in the Postman collection:

📁 [Download Nalanda-Library.postman_collection.json](./Nalanda-Library.postman_collection.json)

## Additional Notes

- Use Git for version control.
- Use GitHub for code hosting.
- Use meaningful commit messages in Git for clean version control.

---

## 👨‍💻 Author

**Developed by:** Liladhar (Backend Developer Task - Heumn Interactive Pvt. Ltd.)  
Feel free to contact me if you want to see the live demo, repo walkthrough, or extended features.

---
