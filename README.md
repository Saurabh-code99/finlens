# 💰 FinLens

### Smart Financial Insights for Better Money Decisions

FinLens is a web-based financial management platform designed to help users understand, track, and manage their finances through a simple and intuitive interface.

## 🚀 Live Demo

**Live Website:** https://finlens-9z5g.vercel.app/

## 📌 Problem Statement

Managing personal finances can be difficult when users do not have a clear view of their income, expenses, savings, and overall financial health.

Many people track their money manually or use complicated tools that can be difficult to understand.

## 💡 Our Solution

**FinLens** provides a simple platform where users can manage their financial information and get meaningful insights from their data.

The goal is to make financial tracking easier, more understandable, and accessible.

## ✨ Features

* 📊 Financial dashboard
* 💰 Income and expense tracking
* 📈 Financial insights
* 🔐 User authentication
* 💾 Persistent data storage
* 📱 Responsive user interface
* ⚡ Fast and modern web experience
* 🌐 Fully deployed web application

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas

### Tools & Deployment

* Git
* GitHub
* Vercel
* Render

## 🏗️ Project Architecture

```text
User
  │
  ▼
Frontend (React)
  │
  ▼
Backend API (Node.js + Express)
  │
  ▼
MongoDB Atlas
```

## ⚙️ How It Works

1. User opens the FinLens application.
2. User interacts with the financial dashboard.
3. Frontend sends requests to the backend API.
4. Backend processes the request.
5. Data is stored/retrieved from MongoDB Atlas.
6. The result is displayed on the frontend.

## 📂 Project Structure

```text
finlens/
│
├── frontend/
│   ├── src/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
|
└── README.md
```

## 🔐 Environment Variables

Create a `.env` file for sensitive configuration.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

**Never upload `.env` to GitHub.**

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd FinLens
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start frontend

```bash
npm run dev
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Configure environment variables

Create a `.env` file inside the backend folder and add your MongoDB connection string.

### 6. Start backend

```bash
npm start
```

## 🌐 Deployment

The application is deployed using:

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

## 🔮 Future Scope

Future versions of FinLens can include:

* 🤖 AI-powered financial recommendations
* 📊 Advanced spending analytics
* 📅 Monthly and yearly financial reports
* 🎯 Personalized saving goals
* 🔔 Smart financial alerts
* 📱 Progressive Web App support
* 📈 More advanced financial visualization

## 🎯 Hackathon Impact

FinLens aims to make financial management simpler and more accessible by transforming raw financial information into easy-to-understand insights.

The platform focuses on helping users make better financial decisions through technology and data-driven analysis.

## 👨‍💻 Team

Built with ❤️ for the hackathon.

---

⭐ If you find this project useful, consider giving it a star!
