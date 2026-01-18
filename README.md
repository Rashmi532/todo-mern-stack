# TODO MERN Stack App

A full-stack TODO application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage tasks easily with a simple user interface.

## 🔍 Features

- Create, read, update, and delete tasks
- Mark tasks as completed
- Data is stored in MongoDB
- Backend API with Express.js and Node.js
- Frontend UI built with React.js

> _If your app includes authentication or other features, I’ll add them here once you confirm._

## 🛠 Tech Stack

**Frontend**
- React.js
- (Optional: React Router / Redux if used)
- CSS / Tailwind / your UI library (specify)

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB (Mongoose ODM)

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js & npm
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Rashmi532/todo-mern-stack.git
    ```

2. Install backend dependencies:

    ```bash
    cd todo-mern-stack/backend
    npm install
    ```

3. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

### Configuration

Create a `.env` file in the **backend** folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
