# ContentForge 
AI-Powered Article Scraping, Enhancement & Publishing Platform

Author: Sanchit Tete

---

## Project Overview

ContentForge is a full-stack web application developed as part of an internship technical assignment.  
The project demonstrates an end-to-end automation pipeline for scraping blog articles, enhancing them using AI-driven logic, and publishing both original and updated versions through REST APIs, with a clean and responsive frontend.

---

## Objectives

- Scrape blog articles from BeyondChats
- Store articles in a database with full CRUD functionality
- Automate article enhancement using:
  - Google search simulation
  - Reference article scraping (simulated)
  - AI-based content rewriting (logic demonstration)
- Publish updated articles using APIs
- Display original and updated articles in a professional UI

---

## Tech Stack

Backend:
- Laravel 11
- PHP 8+
- MySQL
- REST APIs

Automation:
- Node.js
- Axios
- Simulated Google Search & AI Rewrite Logic

Frontend:
- React.js
- CSS (Responsive UI)

Tools:
- Git & GitHub
- npm

---

## System Architecture

React Frontend
      |
      v
Laravel REST APIs
      |
      v
MySQL Database
      ^
      |
Node.js Automation Script
(Scrape → Rewrite → Publish)

---

## Data Flow

1. Articles are scraped from BeyondChats and stored as original articles.
2. Node.js automation fetches original articles via APIs.
3. Article titles are searched (simulated Google search).
4. Reference articles are scraped (simulated).
5. AI rewrite logic generates enhanced articles.
6. Updated articles are saved back via APIs.
7. React frontend displays both original and updated articles.

---

## Project Structure

contentforge/
├── backend-laravel/
├── automation-node/
│   └── index.js
├── frontend-react/
│   └── frontend/
│       ├── src/
│       ├── public/
│       └── package.json
└── README.md

---

## Local Setup Instructions

1. Clone Repository

git clone https://github.com/Sanchiittt/contentforge.git
cd contentforge

2. Backend Setup (Laravel)

cd backend-laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

Backend URL:
http://127.0.0.1:8000

3. Automation Script Setup

cd automation-node
npm install
node index.js

4. Frontend Setup (React)

cd frontend-react/frontend
npm install
npm start

Frontend URL:
http://content-forge-indol.vercel.app


---

## UI Features

- Card-based article layout
- Original and Updated article badges
- Filter options
- Modal view for full article content
- Responsive design

---

## Notes

- Google Search and AI integrations are simulated to demonstrate workflow.
- The focus is on system design, automation logic, and clean architecture.
- The project can be extended with real AI APIs in production.

---

## Project Status

Phase 1: Scraping & CRUD APIs – Completed  
Phase 2: Automation & AI Rewrite Logic – Completed  
Phase 3: React Frontend – Completed  

---

## Author

Sanchit Tete  
Internship Assignment Submission

---

Thank you for reviewing this project.
