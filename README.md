# Event Management App

Full-stack event management platform with a React frontend and Django REST backend.

## Structure

- `backend/` - Django + DRF + PostgreSQL API
- `frontend/` - React + Vite UI

## Backend

### Setup
```bash
cd backend
cp .env.example .env
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Environment variables
Configure PostgreSQL connection in `.env`:
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`

## Frontend

### Setup
```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` in `frontend/.env` to your backend URL.

## Features

- Dashboard with KPIs and recent activity
- Events list with search, filters, sorting, date range
- Create, edit, delete events
- Event details with attendees/registrations
- Calendar view
- Basic charts/statistics
- Validation, loading, empty, and error states

## API

The backend exposes REST endpoints under `/api/` for users, venues, attendees, events, registrations, dashboard stats, and calendar data.