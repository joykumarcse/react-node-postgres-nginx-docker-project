# React + Node + PostgreSQL + Nginx + Docker Project

project with React frontend, Node.js backend, PostgreSQL database, and Nginx as reverse proxy, all containerized using Docker and Docker Compose.

# Project Structure
react-node-postgres-nginx-docker-project/
├── backend/          # Node.js Express backend
│   ├── src/          # Source code (routes, controllers)
│   ├── package.json
│   └── Dockerfile
├── frontend/         # React frontend (Vite)
│   ├── src/          # React components
│   ├── index.html
│   ├── package.json
│   └── Dockerfile
├── db/               # PostgreSQL init scripts
│   └── init.sql
├── nginx/            # Nginx configuration
│   └── default.conf
├── docker-compose.yml
└── .env.example      # Environment variables template

How It Works

Database (PostgreSQL)

Initializes with db/init.sql creating the users table.

Credentials and database name configured via .env.

Backend (Node.js / Express)

Connects to PostgreSQL using DATABASE_URL.

Exposes API routes at /api/*.

Health endpoint at /health for container healthchecks.

Frontend (React / Vite)

Fetches data from backend /api/* endpoints.

Built and served via Nginx in production.

Nginx

Acts as reverse proxy.

Routes /api/ requests to backend and all other requests to frontend.

Docker & Docker Compose

Each service runs in its own container: frontend, backend, db, nginx.

docker-compose up --build spins up the full stack.

# Quick Start

1. Run: docker compose up --build -d
2. Visit http://localhost:8080

* Backend API: http://localhost:8080/api/users
* Health check: http://localhost:8080/health

# Frontend:
<img width="685" height="355" alt="image" src="https://github.com/user-attachments/assets/aa2633b2-8f5a-46f2-bcf6-0f73a64c22b6" />

# Backend:
<img width="615" height="299" alt="image" src="https://github.com/user-attachments/assets/83c482b9-e888-435f-9bea-723371722d21" />

# Check user from DB
<img width="905" height="414" alt="image" src="https://github.com/user-attachments/assets/66049db7-ea8f-47bd-a141-7d669875eb4b" />

# Backend healthpoint
<img width="650" height="241" alt="image" src="https://github.com/user-attachments/assets/5e6f530d-2185-40f4-bf10-422b68782577" />


