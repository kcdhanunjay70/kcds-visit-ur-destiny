# KCDS Visit Ur Destiny

A polished flight-route discovery website inspired by modern travel search experiences. It showcases 50 international destinations with source city, destination city, estimated fares, airlines, trip length, and smart filters.

## Features

- 50 country route cards with realistic source, destination, and fare data
- Search by country, city, airline, region, or mood
- Filter by region and trip style
- Sort by best deal, lowest fare, rating, and flight duration
- Responsive "jigel jigel" UI with premium travel visuals
- Static deployment ready for Render and GitHub Pages

## Project Structure

```text
.
|-- .github/workflows/pages.yml
|-- app.js
|-- index.html
|-- package.json
|-- render.yaml
|-- server.js
|-- styles.css
`-- README.md
```

## Run Locally

Open `index.html` in a browser, or run the included Node static server:

```bash
npm start
```

## Deploy

### GitHub Actions

The included workflow validates the static site and uploads a deployable artifact on every push to `main`.

### GitHub Pages

GitHub Pages needs one manual repository setting before the official Pages deploy action can publish:

1. Open repository `Settings`
2. Go to `Pages`
3. Set source to `Deploy from a branch`
4. Choose branch `main` and folder `/root`

### Render

`render.yaml` configures this repository as a Render Node web service. The app serves static files through `server.js`, so Render's default `npm start` deployment works without extra packages.

## Data Note

Prices are sample estimates for portfolio/demo use. Connect a real flight API before using this for live booking or production pricing.
