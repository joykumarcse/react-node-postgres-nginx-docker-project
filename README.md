# React + Node + PostgreSQL + Nginx + Docker Project
project with **React frontend**, **Node.js backend**, **PostgreSQL database**, and **Nginx reverse proxy**, all containerized using **Docker** and **Docker Compose**.

---

## Project Structure



react-node-postgres-nginx-docker-project/
├── backend/ # Node.js Express backend
│ ├── src/ # Source code (routes, controllers)
│ ├── package.json # Backend dependencies
│ └── Dockerfile # Backend Dockerfile
├── frontend/ # React frontend (Vite)
│ ├── src/ # React components
│ ├── index.html # Frontend entry HTML
│ ├── package.json # Frontend dependencies
│ └── Dockerfile # Frontend Dockerfile
├── db/ # PostgreSQL initialization scripts
│ └── init.sql # Creates tables and initial data
├── nginx/ # Nginx configuration
│ └── default.conf # Reverse proxy rules
├── docker-compose.yml # Docker Compose setup
└── .env.example # Environment variables template 


---

## How It Works

1. **Database (PostgreSQL)**  
   - Initializes with `db/init.sql`.  
   - Credentials and database name are set via `.env`.  

2. **Backend (Node.js / Express)**  
   - Connects to PostgreSQL using `DATABASE_URL`.  
   - Provides API endpoints under `/api/`.  
   - Health check available at `/health`.

3. **Frontend (React / Vite)**  
   - Fetches data from backend `/api/*` endpoints.  
   - Built and served via Nginx in production.

4. **Nginx**  
   - Routes `/api/` requests to backend.  
   - Serves frontend static files for all other routes.

5. **Docker & Docker Compose**  
   - Each service (`frontend`, `backend`, `db`, `nginx`) runs in its own container.  
   - `docker-compose up --build` spins up the entire stack.

---

## Quick Start


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


