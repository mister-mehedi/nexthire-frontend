# NextHire - Frontend

This is the frontend for the **NextHire** platform, built with **React** and **Vite**. It provides a clean, modern, and responsive user interface for candidates and company specialists to interact with the NextHire backend services.

---

## 📚 Table of Contents

- [About The Project](#about-the-project)  
- [Built With](#built-with)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Features](#features)  
- [Available Scripts](#available-scripts)  
- [Project Structure](#project-structure)  
- [Roadmap](#roadmap)

---

## 📌 About The Project

The **NextHire** frontend is a Single Page Application (SPA) designed for a seamless and fast user experience. It handles all client-side logic and presentation.

- 🎨 **Modern UI/UX**: Built with the beautiful and accessible Shadcn/UI component library and styled with Tailwind CSS.  
- ⚡ **Fast Development**: Powered by Vite for near-instant hot module replacement and an optimized build process.  
- 🌐 **Centralized API Logic**: Uses Axios with interceptors to cleanly manage API requests and JWT authentication.  
- 🔐 **State Management**: A global authentication context handles user state, ensuring a smooth and secure session.  
- 📱 **Responsive Design**: Fully responsive design for desktop, tablet, and mobile devices.

---

## 🛠️ Built With

- **React 18** – Core UI library  
- **Vite** – Next-generation frontend tooling  
- **Tailwind CSS** – Utility-first CSS framework  
- **Shadcn/UI** – Accessible, reusable headless components  
- **Sonner** – Elegant toast notifications  
- **React Router v6** – Declarative client-side routing  
- **Axios** – HTTP client for API communication  

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js v18+  
- npm  
- NextHire Backend server running

---
### 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nexthire-frontend
```
2. Install dependencies:
```
npm install
```

3. Configure Shadcn/UI (if not already done):
This project requires a jsconfig.json and an updated vite.config.js to handle path aliases like @/components. If you are setting up from scratch, create these files first.
  * jsconfig.json (in root)
  ```
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"]
  }
  ```

  * vite.config.js (in root)
  ```
  import path from "path";
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
  ```

    Then, initialize Shadcn and add components:
  ```
    npx shadcn@latest init
  npx shadcn@latest add button card input label select sonner
  ```
4. Run the development server:
  ```
  npm run dev
  ```
  The application will be available at http://localhost:5173 (or another port if 5173 is in use).

---
✨ Features
- User Registration – Form for role-based sign-up (Candidate/Company Specialist)
- User Login – Authenticated login workflow
- Protected Routes – Dashboard visibility based on user session
- Global Auth State – React Context for managing user authentication
- Toast Notifications – Feedback with Sonner toasts on actions and error

---
📜 Available Script

      In the project directory, you can run:
      ```
      npm run dev       # Start dev server
      npm run build     # Build for production
      npm run preview   # Preview production build
      ```

---
## 📁 Project Structure

The following directories define the core structure of the frontend application:


```text
src
├── components       # Reusable UI components (e.g., LoginForm)
│   └── ui           # Components added by Shadcn/UI
├── context          # Global state management (e.g., AuthContext)
├── lib              # Utility functions (e.g., cn from Shadcn)
├── pages            # Top-level page components (e.g., LoginPage)
├── router           # Routing logic (e.g., ProtectedRoute)
└── services         # API communication logic (e.g., auth.service.js)
```


---
🗺️ Roadmap
- [x] Phase 1: Core Authentication
- [ ] Phase 2: Profile & Question Management
- [ ] Phase 3: Mock Test Interface
- [ ] Phase 4: Live Interview Sessions

---
🛠️ Bootstrapped in Dhaka, Bangladesh on July 4, 2025





