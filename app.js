const routes = [
  { country: "Thailand", flag: "🇹🇭", source: "Hyderabad", destination: "Bangkok", price: 11800, region: "Asia", style: "Beach", airline: "Thai Airways", duration: 4.2, rating: 4.8 },
  { country: "Malaysia", flag: "🇲🇾", source: "Chennai", destination: "Kuala Lumpur", price: 9800, region: "Asia", style: "City", airline: "AirAsia", duration: 4.0, rating: 4.6 },
  { country: "Singapore", flag: "🇸🇬", source: "Bengaluru", destination: "Singapore", price: 14200, region: "Asia", style: "Luxury", airline: "Singapore Airlines", duration: 4.6, rating: 4.9 },
  { country: "Indonesia", flag: "🇮🇩", source: "Kochi", destination: "Bali", price: 22400, region: "Asia", style: "Beach", airline: "IndiGo", duration: 8.8, rating: 4.5 },
  { country: "Vietnam", flag: "🇻🇳", source: "Kolkata", destination: "Hanoi", price: 16800, region: "Asia", style: "Culture", airline: "VietJet Air", duration: 5.4, rating: 4.4 },
  { country: "Japan", flag: "🇯🇵", source: "Delhi", destination: "Tokyo", price: 44600, region: "Asia", style: "Culture", airline: "ANA", duration: 8.1, rating: 4.9 },
  { country: "South Korea", flag: "🇰🇷", source: "Mumbai", destination: "Seoul", price: 38600, region: "Asia", style: "City", airline: "Korean Air", duration: 7.6, rating: 4.8 },
  { country: "United Arab Emirates", flag: "🇦🇪", source: "Hyderabad", destination: "Dubai", price: 13400, region: "Middle East", style: "Luxury", airline: "Emirates", duration: 3.7, rating: 4.8 },
  { country: "Qatar", flag: "🇶🇦", source: "Delhi", destination: "Doha", price: 18600, region: "Middle East", style: "Luxury", airline: "Qatar Airways", duration: 4.2, rating: 4.9 },
  { country: "Saudi Arabia", flag: "🇸🇦", source: "Mumbai", destination: "Riyadh", price: 17200, region: "Middle East", style: "Culture", airline: "Saudia", duration: 4.4, rating: 4.3 },
  { country: "Sri Lanka", flag: "🇱🇰", source: "Chennai", destination: "Colombo", price: 8400, region: "Asia", style: "Beach", airline: "SriLankan Airlines", duration: 1.4, rating: 4.5 },
  { country: "Nepal", flag: "🇳🇵", source: "Delhi", destination: "Kathmandu", price: 9200, region: "Asia", style: "Adventure", airline: "Vistara", duration: 1.8, rating: 4.4 },
  { country: "Maldives", flag: "🇲🇻", source: "Kochi", destination: "Male", price: 19600, region: "Asia", style: "Beach", airline: "Maldivian", duration: 2.0, rating: 4.7 },
  { country: "Australia", flag: "🇦🇺", source: "Delhi", destination: "Sydney", price: 64200, region: "Oceania", style: "Adventure", airline: "Qantas", duration: 12.3, rating: 4.7 },
  { country: "New Zealand", flag: "🇳🇿", source: "Mumbai", destination: "Auckland", price: 78200, region: "Oceania", style: "Adventure", airline: "Air New Zealand", duration: 16.2, rating: 4.8 },
  { country: "United Kingdom", flag: "🇬🇧", source: "Delhi", destination: "London", price: 52600, region: "Europe", style: "City", airline: "British Airways", duration: 9.6, rating: 4.5 },
  { country: "France", flag: "🇫🇷", source: "Mumbai", destination: "Paris", price: 54800, region: "Europe", style: "Romance", airline: "Air France", duration: 9.8, rating: 4.6 },
  { country: "Germany", flag: "🇩🇪", source: "Bengaluru", destination: "Frankfurt", price: 51400, region: "Europe", style: "City", airline: "Lufthansa", duration: 9.7, rating: 4.7 },
  { country: "Italy", flag: "🇮🇹", source: "Delhi", destination: "Rome", price: 49200, region: "Europe", style: "Culture", airline: "ITA Airways", duration: 10.2, rating: 4.4 },
  { country: "Spain", flag: "🇪🇸", source: "Mumbai", destination: "Barcelona", price: 57200, region: "Europe", style: "Beach", airline: "Etihad", duration: 11.6, rating: 4.5 },
  { country: "Netherlands", flag: "🇳🇱", source: "Delhi", destination: "Amsterdam", price: 53600, region: "Europe", style: "City", airline: "KLM", duration: 9.4, rating: 4.7 },
  { country: "Switzerland", flag: "🇨🇭", source: "Mumbai", destination: "Zurich", price: 58800, region: "Europe", style: "Luxury", airline: "Swiss", duration: 9.2, rating: 4.8 },
  { country: "Greece", flag: "🇬🇷", source: "Delhi", destination: "Athens", price: 46800, region: "Europe", style: "Beach", airline: "Gulf Air", duration: 10.8, rating: 4.4 },
  { country: "Turkey", flag: "🇹🇷", source: "Mumbai", destination: "Istanbul", price: 32600, region: "Europe", style: "Culture", airline: "Turkish Airlines", duration: 7.1, rating: 4.8 },
  { country: "Portugal", flag: "🇵🇹", source: "Delhi", destination: "Lisbon", price: 62600, region: "Europe", style: "Romance", airline: "Emirates", duration: 13.2, rating: 4.5 },
  { country: "Egypt", flag: "🇪🇬", source: "Mumbai", destination: "Cairo", price: 35400, region: "Africa", style: "Culture", airline: "Egyptair", duration: 6.9, rating: 4.2 },
  { country: "Kenya", flag: "🇰🇪", source: "Mumbai", destination: "Nairobi", price: 39800, region: "Africa", style: "Adventure", airline: "Kenya Airways", duration: 6.1, rating: 4.4 },
  { country: "South Africa", flag: "🇿🇦", source: "Mumbai", destination: "Cape Town", price: 57400, region: "Africa", style: "Adventure", airline: "Ethiopian", duration: 13.5, rating: 4.4 },
  { country: "Morocco", flag: "🇲🇦", source: "Delhi", destination: "Marrakech", price: 68400, region: "Africa", style: "Culture", airline: "Qatar Airways", duration: 14.0, rating: 4.5 },
  { country: "Mauritius", flag: "🇲🇺", source: "Mumbai", destination: "Port Louis", price: 45200, region: "Africa", style: "Beach", airline: "Air Mauritius", duration: 6.3, rating: 4.6 },
  { country: "Seychelles", flag: "🇸🇨", source: "Mumbai", destination: "Mahe", price: 48600, region: "Africa", style: "Beach", airline: "Air Seychelles", duration: 5.0, rating: 4.6 },
  { country: "United States", flag: "🇺🇸", source: "Delhi", destination: "New York", price: 78200, region: "North America", style: "City", airline: "Air India", duration: 15.2, rating: 4.5 },
  { country: "Canada", flag: "🇨🇦", source: "Delhi", destination: "Toronto", price: 82400, region: "North America", style: "City", airline: "Air Canada", duration: 15.8, rating: 4.6 },
  { country: "Mexico", flag: "🇲🇽", source: "Mumbai", destination: "Mexico City", price: 96800, region: "North America", style: "Culture", airline: "Lufthansa", duration: 22.4, rating: 4.3 },
  { country: "Brazil", flag: "🇧🇷", source: "Delhi", destination: "Rio de Janeiro", price: 108600, region: "South America", style: "Beach", airline: "Emirates", duration: 24.2, rating: 4.4 },
  { country: "Argentina", flag: "🇦🇷", source: "Delhi", destination: "Buenos Aires", price: 116400, region: "South America", style: "Culture", airline: "Qatar Airways", duration: 25.3, rating: 4.5 },
  { country: "Chile", flag: "🇨🇱", source: "Mumbai", destination: "Santiago", price: 122800, region: "South America", style: "Adventure", airline: "Air France", duration: 27.1, rating: 4.4 },
  { country: "Peru", flag: "🇵🇪", source: "Delhi", destination: "Lima", price: 118200, region: "South America", style: "Adventure", airline: "KLM", duration: 26.7, rating: 4.3 },
  { country: "Colombia", flag: "🇨🇴", source: "Mumbai", destination: "Bogota", price: 111600, region: "South America", style: "Culture", airline: "Turkish Airlines", duration: 24.8, rating: 4.3 },
  { country: "Israel", flag: "🇮🇱", source: "Delhi", destination: "Tel Aviv", price: 36400, region: "Middle East", style: "Culture", airline: "El Al", duration: 6.8, rating: 4.3 },
  { country: "Jordan", flag: "🇯🇴", source: "Mumbai", destination: "Amman", price: 33800, region: "Middle East", style: "Adventure", airline: "Royal Jordanian", duration: 6.6, rating: 4.2 },
  { country: "Oman", flag: "🇴🇲", source: "Hyderabad", destination: "Muscat", price: 12600, region: "Middle East", style: "Culture", airline: "Oman Air", duration: 3.2, rating: 4.5 },
  { country: "Bahrain", flag: "🇧🇭", source: "Kochi", destination: "Manama", price: 15400, region: "Middle East", style: "City", airline: "Gulf Air", duration: 4.0, rating: 4.4 },
  { country: "Philippines", flag: "🇵🇭", source: "Chennai", destination: "Manila", price: 28600, region: "Asia", style: "Beach", airline: "Malaysia Airlines", duration: 8.4, rating: 4.3 },
  { country: "Cambodia", flag: "🇰🇭", source: "Kolkata", destination: "Phnom Penh", price: 21400, region: "Asia", style: "Culture", airline: "Thai Airways", duration: 6.2, rating: 4.3 },
  { country: "Laos", flag: "🇱🇦", source: "Kolkata", destination: "Vientiane", price: 23800, region: "Asia", style: "Culture", airline: "Vietnam Airlines", duration: 6.8, rating: 4.2 },
  { country: "China", flag: "🇨🇳", source: "Delhi", destination: "Shanghai", price: 35200, region: "Asia", style: "City", airline: "Cathay Pacific", duration: 7.7, rating: 4.4 },
  { country: "Hong Kong", flag: "🇭🇰", source: "Delhi", destination: "Hong Kong", price: 31400, region: "Asia", style: "City", airline: "Cathay Pacific", duration: 5.5, rating: 4.7 },
  { country: "Finland", flag: "🇫🇮", source: "Delhi", destination: "Helsinki", price: 61200, region: "Europe", style: "Adventure", airline: "Finnair", duration: 9.1, rating: 4.6 },
  { country: "Norway", flag: "🇳🇴", source: "Mumbai", destination: "Oslo", price: 68600, region: "Europe", style: "Adventure", airline: "Qatar Airways", duration: 12.2, rating: 4.5 }
];

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const elements = {
  grid: document.querySelector("#routeGrid"),
  empty: document.querySelector("#emptyState"),
  source: document.querySelector("#sourceInput"),
  query: document.querySelector("#queryInput"),
  region: document.querySelector("#regionFilter"),
  style: document.querySelector("#styleFilter"),
  sort: document.querySelector("#sortFilter"),
  fare: document.querySelector("#fareRange"),
  fareValue: document.querySelector("#maxFareValue"),
  shownCount: document.querySelector("#shownCount"),
  bestFare: document.querySelector("#bestFare"),
  avgFare: document.querySelector("#avgFare"),
  topRegion: document.querySelector("#topRegion"),
  form: document.querySelector("#searchForm"),
  reset: document.querySelector("#resetButton")
};

function uniqueValues(key) {
  return [...new Set(routes.map((route) => route[key]))].sort();
}

function populateFilters() {
  uniqueValues("region").forEach((region) => {
    elements.region.append(new Option(region, region));
  });
  uniqueValues("style").forEach((style) => {
    elements.style.append(new Option(style, style));
  });
}

function dealScore(route) {
  return route.price / route.rating + route.duration * 800;
}

function getFilteredRoutes() {
  const query = elements.query.value.trim().toLowerCase();
  const source = elements.source.value.trim().toLowerCase();
  const region = elements.region.value;
  const style = elements.style.value;
  const maxFare = Number(elements.fare.value);

  return routes
    .filter((route) => {
      const haystack = `${route.country} ${route.source} ${route.destination} ${route.region} ${route.style} ${route.airline}`.toLowerCase();
      const sourceMatch = !source || route.source.toLowerCase().includes(source) || source === "india";
      const queryMatch = !query || haystack.includes(query);
      const regionMatch = region === "all" || route.region === region;
      const styleMatch = style === "all" || route.style === style;
      return sourceMatch && queryMatch && regionMatch && styleMatch && route.price <= maxFare;
    })
    .sort((a, b) => {
      if (elements.sort.value === "price") return a.price - b.price;
      if (elements.sort.value === "rating") return b.rating - a.rating;
      if (elements.sort.value === "duration") return a.duration - b.duration;
      return dealScore(a) - dealScore(b);
    });
}

function routeTemplate(route) {
  return `
    <article class="route-card">
      <div class="card-top">
        <span class="flag" aria-hidden="true">${route.flag}</span>
        <span class="tag">${route.style}</span>
      </div>
      <div>
        <h3>${route.country}: ${route.destination}</h3>
        <p class="route-line">${route.source} to ${route.destination} with ${route.airline}</p>
      </div>
      <div class="meta" aria-label="Route facts">
        <span><b>${route.region}</b>Region</span>
        <span><b>${route.duration}h</b>Flight</span>
        <span><b>${route.rating.toFixed(1)}</b>Rating</span>
      </div>
      <div class="price-row">
        <div>
          <small>Sample round trip from</small>
          <div class="price">${formatter.format(route.price)}</div>
        </div>
        <span class="tag">Book smart</span>
      </div>
    </article>
  `;
}

function updateStats(filteredRoutes) {
  const visible = filteredRoutes.length;
  const prices = filteredRoutes.map((route) => route.price);
  const best = prices.length ? Math.min(...prices) : 0;
  const avg = prices.length ? Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length) : 0;
  const regionCounts = filteredRoutes.reduce((counts, route) => {
    counts[route.region] = (counts[route.region] || 0) + 1;
    return counts;
  }, {});
  const topRegion = Object.entries(regionCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";

  elements.shownCount.textContent = visible;
  elements.bestFare.textContent = best ? formatter.format(best) : "NA";
  elements.avgFare.textContent = avg ? formatter.format(avg) : "NA";
  elements.topRegion.textContent = topRegion;
  elements.fareValue.textContent = formatter.format(Number(elements.fare.value));
}

function renderRoutes() {
  const filteredRoutes = getFilteredRoutes();
  elements.grid.innerHTML = filteredRoutes.map(routeTemplate).join("");
  elements.empty.hidden = filteredRoutes.length !== 0;
  updateStats(filteredRoutes);
}

function resetFilters() {
  elements.source.value = "India";
  elements.query.value = "";
  elements.region.value = "all";
  elements.style.value = "all";
  elements.sort.value = "deal";
  elements.fare.value = "190000";
  renderRoutes();
}

populateFilters();
renderRoutes();

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderRoutes();
  document.querySelector("#routes").scrollIntoView({ behavior: "smooth", block: "start" });
});

[elements.source, elements.query, elements.region, elements.style, elements.sort, elements.fare].forEach((element) => {
  element.addEventListener("input", renderRoutes);
});

elements.reset.addEventListener("click", resetFilters);
