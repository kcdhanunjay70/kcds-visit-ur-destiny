# KCDS Visit Ur Destiny — MongoDB

MongoDB-backed international travel route explorer built with Node.js, Express, HTML, CSS and JavaScript.

## Features

- 50 international routes automatically seeded into MongoDB
- Search, region/style filters and multiple sorting options
- `routes` collection for destination data
- `searches` collection for search activity
- Route creation API, MongoDB health check and responsive UI
- MongoDB Atlas and Render deployment configuration

## Run locally

1. Start MongoDB.
2. Install dependencies and start the app:

```bash
npm install
npm start
```

Open `http://localhost:3000`. The default database is `visit_ur_destiny`.

## Environment

| Variable | Default |
| --- | --- |
| `MONGO_URI` | `mongodb://localhost:27017` |
| `MONGO_DB_NAME` | `visit_ur_destiny` |
| `PORT` | `3000` |

For Render, set `MONGO_URI` to the MongoDB Atlas connection string.

## API

- `GET /api/health`
- `GET /api/routes`
- `POST /api/routes`
- `POST /api/searches`

## Verify

```bash
npm run check
npm test
```
