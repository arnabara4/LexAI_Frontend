# ⚖️ LexAI: Frontend

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

This repository contains the complete frontend for LexAI, an AI-powered legal document analyzer. It's a modern, responsive React (Vite) application built with TailwindCSS.

It provides a secure, user-friendly interface for authentication, document analysis, and conversational chat, all powered by the [LexAI-Backend](https://github.com/arnabara4/LexAI_Backend) API.

### 📸 Application Interface

The UI is a clean, professional "slate" dark-mode theme that automatically switches between light and dark modes based on the user's local time. It includes:
* A collapsible sidebar for navigation.
* A file-drop and text-paste analysis page.
* A follow-up conversational chat interface.
* A user profile and settings page.

---

## ✨ Core Features

* **Secure Auth Flow:** A complete `useAuth` hook handles login, signup, and logout.
* **Automatic Token Refresh:** An `axios` interceptor automatically refreshes the user's session in the background using the secure `HttpOnly` refresh cookie, providing a seamless experience.
* **Protected Routes:** Uses a `ProtectedRoute` component to guard all dashboard pages from unauthenticated or unverified users.
* **Time-Based Dark Mode:** A `useTheme` context automatically switches the entire UI (built with TailwindCSS and CSS variables) between light and "slate" dark modes.
* **Hybrid Analysis UI:** A single "Analyze" page that accepts both drag-and-drop PDF uploads and raw text pasting.
* **Conversational Chat UI:** A stateful chat component that manages conversation history and provides a follow-up "chatbot" experience.
* **Notifications:** Uses `react-hot-toast` for clean, non-blocking user notifications.

---

## 🛠 Tech Stack

* **Framework:** React (Vite)
* **Styling:** TailwindCSS
* **Navigation:** React Router (`react-router-dom`)
* **API Client:** Axios (with interceptors)
* **Notifications:** `react-hot-toast`
* **Token Parsing:** `jwt-decode`
* **Icons:** `lucide-react`
* **Animation:** `framer-motion`

---

## 🚀 Getting Started

### 1. Prerequisites

* **Node.js** (v18 or newer)
* The **[LexAI-Backend](https://github.com/arnabara4/LexAI_Backend)** server *must* be running.

### 2. Installation

1.  **Clone the Repo:**
    ```bash
    git clone [your-frontend-repo-url]
    cd frontend
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```

### 3. Environment Variables

This app requires an API endpoint to function.

1.  Create a new file in the `frontend/` root folder named `.env.local`.
2.  Add the URL for your **local backend** server:

    ```ini
    # in frontend/.env.local
    VITE_API_BASE_URL=[http://127.0.0.1:5000](http://127.0.0.1:5000)
    ```
    *Note: This file is already in the `.gitignore` and will not be committed.*

### 4. Running the App

```bash
npm run dev