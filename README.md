# KCDS Visit Ur Destiny

A polished flight-route discovery website inspired by modern travel search experiences. It showcases 50 international destinations with source city, destination city, estimated fares, airlines, trip length, and smart filters.

## Features

- 50 country route cards with realistic source, destination, and fare data
- Search by country, city, airline, region, or mood
- Filter by region and trip style
- Sort by best deal, lowest fare, rating, and flight duration
- Responsive "jigel jigel" UI with premium travel visuals
- Static deployment ready for GitHub Pages and Render

## Project Structure

```text
.
|-- .github/workflows/pages.yml
|-- app.js
|-- index.html
|-- render.yaml
|-- styles.css
`-- README.md
```

## Run Locally

Open `index.html` in a browser, or use any static server:

```bash
npx serve .
```

## Deploy

### GitHub Pages

The included GitHub Actions workflow publishes the static site from `main`.

### Render

`render.yaml` configures this repository as a Render static site.

## Data Note

Prices are sample estimates for portfolio/demo use. Connect a real flight API before using this for live booking or production pricing.
