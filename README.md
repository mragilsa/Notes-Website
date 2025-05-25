# 📝 Notes Web App

Notes Web App is a full-featured note-taking application that allows users to create, edit, delete, pin, and search notes. Each note can include a title, content, and tags. Pinned notes are shown at the top for quick access.

---

## 🔑 Key Features

- Add notes with title, content, and tags
- Edit and delete notes
- Pin notes to keep them at the top
- Search notes by title, content, or tag

---

## 💻 Tech Stack

- React, JavaScript
- Node.js, Express
- MongoDB

---

## ⚙️ Installation and Setup

1. Clone the repository:
   ``` bash
   git clone https://github.com/mragilsa/Notes-Website.git  

2. Navigate into the project directory:
   ``` bash
   cd Notes-Website  

3. Go to the backend folder:
   ``` bash
   cd backend

4. Create an environment variables file .env for backend configuration:
   ``` bash
   touch .env

5. Generate a secret token and save it to the .env file:
   ``` bash
   echo "ACCESS_TOKEN_SECRET=$(openssl rand -base64 32)" > .env

6. Start the backend application:
   ``` bash
   npm install
   
7. Start the backend server:
   ``` bash
   npm start
   
8. Open a new terminal tab/window, then navigate to the frontend folder:
    ``` bash
    cd ../frontend/notes-app
    
9. Install frontend dependencies:
    ``` bash
    npm install
    
10. Start the frontend application:
    ``` bash
    npm run dev
    
11. Once started, the app will run locally and be accessible via your browser
   
---

## 📘 How to Use
- Log in or sign up to access your notes
- Click the + button to create a new note
- Use the pencil icon to edit and trash icon to delete
- Pin important notes using the pin icon
- Search notes by title, content, or tags

---

## ℹ️ Additional
You can log in using the test account:
- Email: testuser@gmail.com
- Password: 123

Use this test account if you want to skip signing up.

