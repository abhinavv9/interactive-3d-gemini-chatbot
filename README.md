# Gemini 3D Chatbot with React and Three.js

This project demonstrates how to build an interactive 3D chatbot experience using React, Vite, Three.js (via React Three Fiber), and the Gemini 3 API.

## Features

*   **3D Scene:** An immersive 3D environment powered by Three.js.
*   **Interactive Chatbot:** Real-time conversation with Gemini 3.
*   **Modern Frontend Stack:** Built with Vite, React, and TypeScript.
*   **Environment Variables:** Secure API key management.

## Prerequisites

*   Node.js and npm (or yarn)
*   A Gemini API Key from Google AI Studio.

## Setup Instructions

1.  **Clone the repository (or create files manually):**
    ```bash
    # If starting from scratch, create project structure and files based on the provided codeFiles.
    # Or, if you have a starter template, replace its contents.
    ```

2.  **Install Dependencies:**
    Navigate to the project directory in your terminal and run:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of the project directory and add your Gemini API key:
    ```plaintext
    # .env
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```
    Replace `YOUR_GEMINI_API_KEY` with your actual key.

4.  **Run the Development Server:**
    Start the application:
    ```bash
    npm run dev
    ```

    Open your browser to `http://localhost:5173` (or the port specified by Vite) to view the application.

## Project Structure

```
my-gemini-3d-app/
├── .env
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── ChatUI.css
│   │   ├── ChatUI.tsx
│   │   └── Cube.tsx
│   └── services/
│       └── geminiService.ts
└── README.md
```

## Contributing

This project is intended as a tutorial. Contributions are welcome for improvements to clarity, code quality, or additional features.
