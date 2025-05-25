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

5. Open the .env file and add the following variable (replace with your actual secret key):
   ``` bash
   ACCESS_TOKEN_SECRET=your_access_token_secret_here

6. Start the backend application:
   ``` bash
   npm install
   
8. Start the backend server:
   ``` bash
   npm start
   
9. Return to the project root folder and go to the frontend folder:
    ``` bash
    cd ../frontend/notes-app
    
10. Install frontend dependencies:
    ``` bash
    npm install
    
11. Start the frontend application:
    ``` bash
    npm run dev
    
12. Once started, the app will run locally and be accessible via your browser
   
---

## 📘 How to Use
- Log in or sign up to access your notes.
- Click the + button to create a new note.
- Use the pencil icon to edit and trash icon to delete.
- Pin important notes using the pin icon.
- Search notes by title, content, or tags.

