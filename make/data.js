// Shared by the flight log maker (index.html) and the page it previews (view.html).
//  AIRPORTS: IATA code -> [city, lat, lon, tz] (tz = standard-time hours behind UTC; east of UTC is negative)
//            a 5th value of 0 means the airport doesn't follow US daylight saving time
//  AIRLINES: name -> [IATA code, line color]
//  The maker keeps answers as { year, name, flights: [{ d, from, to, air, no, dep, arr }] } with times as "HH:MM".
(function () {
  const A = {
    // United States
    ATL: ["Atlanta", 33.64, -84.43, 5], BOS: ["Boston", 42.36, -71.01, 5], BWI: ["Baltimore", 39.18, -76.67, 5],
    CLT: ["Charlotte", 35.21, -80.94, 5], DCA: ["Washington DC (Reagan)", 38.85, -77.04, 5], IAD: ["Washington DC (Dulles)", 38.95, -77.46, 5],
    DTW: ["Detroit", 42.21, -83.35, 5], EWR: ["Newark", 40.69, -74.17, 5], FLL: ["Fort Lauderdale", 26.07, -80.15, 5],
    JFK: ["New York (JFK)", 40.64, -73.78, 5], LGA: ["New York (LaGuardia)", 40.78, -73.87, 5], MCO: ["Orlando", 28.43, -81.31, 5],
    MIA: ["Miami", 25.79, -80.29, 5], PHL: ["Philadelphia", 39.87, -75.24, 5], TPA: ["Tampa", 27.98, -82.53, 5],
    RDU: ["Raleigh–Durham", 35.88, -78.79, 5], CLE: ["Cleveland", 41.41, -81.85, 5], IND: ["Indianapolis", 39.72, -86.29, 5],
    PIT: ["Pittsburgh", 40.49, -80.23, 5], CMH: ["Columbus", 40.0, -82.89, 5], CVG: ["Cincinnati", 39.05, -84.66, 5],
    JAX: ["Jacksonville", 30.49, -81.69, 5], RSW: ["Fort Myers", 26.54, -81.76, 5], PBI: ["West Palm Beach", 26.68, -80.1, 5],
    SDF: ["Louisville", 38.17, -85.74, 5], BDL: ["Hartford", 41.94, -72.68, 5], PVD: ["Providence", 41.73, -71.43, 5],
    ORF: ["Norfolk", 36.89, -76.2, 5], RIC: ["Richmond", 37.51, -77.32, 5], CHS: ["Charleston", 32.9, -80.04, 5],
    SAV: ["Savannah", 32.13, -81.2, 5], BUF: ["Buffalo", 42.94, -78.73, 5], ALB: ["Albany", 42.75, -73.8, 5],
    SYR: ["Syracuse", 43.11, -76.11, 5],
    ORD: ["Chicago (O'Hare)", 41.98, -87.9, 6], MDW: ["Chicago (Midway)", 41.79, -87.75, 6], DFW: ["Dallas–Fort Worth", 32.899, -97.040, 6],
    DAL: ["Dallas (Love Field)", 32.85, -96.85, 6], IAH: ["Houston (Bush)", 29.98, -95.34, 6], HOU: ["Houston (Hobby)", 29.65, -95.28, 6],
    AUS: ["Austin", 30.19, -97.67, 6], SAT: ["San Antonio", 29.53, -98.47, 6], MSP: ["Minneapolis", 44.88, -93.22, 6],
    BNA: ["Nashville", 36.12, -86.68, 6], STL: ["St. Louis", 38.75, -90.37, 6], MSY: ["New Orleans", 29.99, -90.26, 6],
    MCI: ["Kansas City", 39.3, -94.71, 6], OKC: ["Oklahoma City", 35.39, -97.6, 6], OMA: ["Omaha", 41.3, -95.89, 6],
    MKE: ["Milwaukee", 42.95, -87.9, 6], MEM: ["Memphis", 35.04, -89.98, 6], BHM: ["Birmingham", 33.56, -86.75, 6],
    MSN: ["Madison", 43.14, -89.34, 6], DSM: ["Des Moines", 41.53, -93.66, 6], LIT: ["Little Rock", 34.73, -92.22, 6],
    TUL: ["Tulsa", 36.2, -95.89, 6],
    DEN: ["Denver", 39.86, -104.67, 7], SLC: ["Salt Lake City", 40.79, -111.98, 7], ABQ: ["Albuquerque", 35.04, -106.61, 7],
    BOI: ["Boise", 43.56, -116.22, 7], ELP: ["El Paso", 31.81, -106.38, 7],
    PHX: ["Phoenix", 33.43, -112.01, 7, 0], TUS: ["Tucson", 32.12, -110.94, 7, 0],
    LAX: ["Los Angeles", 33.94, -118.41, 8], SFO: ["San Francisco", 37.619, -122.375, 8], SJC: ["San José", 37.363, -121.929, 8],
    OAK: ["Oakland", 37.72, -122.22, 8], SEA: ["Seattle", 47.449, -122.309, 8], PDX: ["Portland", 45.59, -122.6, 8],
    LAS: ["Las Vegas", 36.08, -115.15, 8], SAN: ["San Diego", 32.73, -117.19, 8], SMF: ["Sacramento", 38.7, -121.59, 8],
    SNA: ["Orange County", 33.68, -117.87, 8], BUR: ["Burbank", 34.2, -118.36, 8], ONT: ["Ontario", 34.06, -117.6, 8],
    LGB: ["Long Beach", 33.82, -118.15, 8], RNO: ["Reno", 39.5, -119.77, 8], GEG: ["Spokane", 47.62, -117.53, 8],
    PSP: ["Palm Springs", 33.83, -116.51, 8], SBA: ["Santa Barbara", 34.43, -119.84, 8], FAT: ["Fresno", 36.78, -119.72, 8],
    ANC: ["Anchorage", 61.17, -149.99, 9],
    HNL: ["Honolulu", 21.32, -157.92, 10, 0], OGG: ["Maui", 20.9, -156.43, 10, 0], KOA: ["Kona", 19.74, -156.05, 10, 0],
    LIH: ["Kauai", 21.98, -159.34, 10, 0], SJU: ["San Juan", 18.44, -66.0, 4, 0],
    // Canada and Mexico
    YVR: ["Vancouver", 49.19, -123.18, 8], YYC: ["Calgary", 51.13, -114.01, 7], YYZ: ["Toronto", 43.68, -79.63, 5],
    YUL: ["Montréal", 45.47, -73.74, 5], MEX: ["Mexico City", 19.44, -99.07, 6, 0], CUN: ["Cancún", 21.04, -86.87, 5, 0],
    SJD: ["Los Cabos", 23.15, -109.72, 7, 0], PVR: ["Puerto Vallarta", 20.68, -105.25, 6, 0], GDL: ["Guadalajara", 20.52, -103.31, 6, 0],
    // Europe and the Middle East
    LHR: ["London", 51.47, -0.45, 0, 0], DUB: ["Dublin", 53.43, -6.25, 0, 0], CDG: ["Paris", 49.01, 2.55, -1, 0],
    AMS: ["Amsterdam", 52.31, 4.76, -1, 0], FRA: ["Frankfurt", 50.03, 8.56, -1, 0], MUC: ["Munich", 48.35, 11.79, -1, 0],
    MAD: ["Madrid", 40.47, -3.56, -1, 0], BCN: ["Barcelona", 41.3, 2.08, -1, 0], FCO: ["Rome", 41.8, 12.25, -1, 0],
    ZRH: ["Zurich", 47.46, 8.55, -1, 0], IST: ["Istanbul", 41.26, 28.74, -3, 0], DXB: ["Dubai", 25.25, 55.36, -4, 0],
    DOH: ["Doha", 25.27, 51.61, -3, 0],
    // Asia and Oceania
    TPE: ["Taipei (Taoyuan)", 25.08, 121.23, -8, 0], TSA: ["Taipei (Songshan)", 25.07, 121.55, -8, 0], KHH: ["Kaohsiung", 22.58, 120.35, -8, 0],
    HND: ["Tokyo (Haneda)", 35.55, 139.78, -9, 0], NRT: ["Tokyo (Narita)", 35.77, 140.39, -9, 0], KIX: ["Osaka", 34.43, 135.24, -9, 0],
    ICN: ["Seoul", 37.46, 126.44, -9, 0], HKG: ["Hong Kong", 22.31, 113.92, -8, 0], PVG: ["Shanghai", 31.14, 121.81, -8, 0],
    PEK: ["Beijing", 40.08, 116.58, -8, 0], SIN: ["Singapore", 1.36, 103.99, -8, 0], BKK: ["Bangkok", 13.69, 100.75, -7, 0],
    MNL: ["Manila", 14.51, 121.02, -8, 0], SYD: ["Sydney", -33.94, 151.18, -10, 0], MEL: ["Melbourne", -37.67, 144.84, -10, 0],
    AKL: ["Auckland", -37.01, 174.79, -12, 0],
    // South America
    GRU: ["São Paulo", -23.43, -46.47, 3, 0], LIM: ["Lima", -12.02, -77.11, 5, 0], BOG: ["Bogotá", 4.7, -74.15, 5, 0],
  };
  const L = {
    Alaska: ["AS", "#1FA0C0"], American: ["AA", "#0078D2"], Delta: ["DL", "#E3132C"], Frontier: ["F9", "#2E8B57"],
    Southwest: ["WN", "#F5A800"], United: ["UA", "#0B2A7A"], JetBlue: ["B6", "#0033A0"], Spirit: ["NK", "#b39200"],
    Hawaiian: ["HA", "#6a2c91"], Allegiant: ["G4", "#f7941d"], "Sun Country": ["SY", "#e2581b"], Breeze: ["MX", "#1d9bd7"],
    "Air Canada": ["AC", "#d22630"], WestJet: ["WS", "#00a4a6"], Aeroméxico: ["AM", "#0b2343"], Volaris: ["Y4", "#a12a8b"],
    "EVA Air": ["BR", "#00703c"], "China Airlines": ["CI", "#b5121b"], STARLUX: ["JX", "#a8874a"], "Japan Airlines": ["JL", "#c8102e"],
    ANA: ["NH", "#13448f"], "Korean Air": ["KE", "#1e88c9"], "Cathay Pacific": ["CX", "#006564"], "Singapore Airlines": ["SQ", "#e0901a"],
    Emirates: ["EK", "#d71a21"], "Qatar Airways": ["QR", "#5c0632"], "British Airways": ["BA", "#2a5caa"], Lufthansa: ["LH", "#05164d"],
    "Air France": ["AF", "#002157"], KLM: ["KL", "#00a1de"], "Turkish Airlines": ["TK", "#c70a0c"], Qantas: ["QF", "#e40000"],
  };
  window.FL_AIRPORTS = A;
  window.FL_AIRLINES = L;

  const t12 = s => { const [h, m] = s.split(":").map(Number); return `${(h % 12) || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`; };
  // answers -> the FLIGHT_LOG object the yearly page reads
  window.buildFlightLog = S => {
    const flights = (S.flights || []).filter(f => A[f.from] && A[f.to] && f.d);
    const airports = {}, airlines = {};
    flights.forEach(f => {
      [f.from, f.to].forEach(c => { const [city, lat, lon, tz, dst] = A[c]; airports[c] = { city, lat, lon, tz, ...(dst === 0 ? { dst: false } : {}) }; });
      if (L[f.air]) airlines[f.air] = { code: L[f.air][0], color: L[f.air][1] };
    });
    // a trip that crosses the Pacific: keep longitudes continuous so the map doesn't wrap the long way round
    // (only when that actually makes the map narrower; a round-the-world year keeps the usual view)
    const lons = Object.values(airports).map(a => a.lon), span = l => Math.max(...l) - Math.min(...l);
    if (lons.length && span(lons) > 180 && span(lons.map(l => l < 0 ? l + 360 : l)) < span(lons)) Object.values(airports).forEach(a => { if (a.lon < 0) a.lon += 360; });
    return {
      year: +S.year || new Date().getFullYear(), name: (S.name || "").trim(), airports, airlines,
      footer: "Made with the flight log maker. Distances are great-circle miles between airports.",
      flights: flights.map(f => {
        const o = { d: f.d, from: f.from, to: f.to, air: f.air || "Airline" };
        if (f.no) o.no = f.no;
        if (f.dep) o.t = t12(f.dep) + (f.arr ? " → " + t12(f.arr) : "");
        return o;
      }),
    };
  };
  // answers <-> the text after "#a=" in a shared link (UTF-8 safe base64)
  // Compact form ("1" + URL-safe base64 of arrays) keeps share links short; older links (plain base64 JSON) still open.
  const b64 = t => btoa(unescape(encodeURIComponent(t))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const unb64 = t => decodeURIComponent(escape(atob(t.replace(/-/g, "+").replace(/_/g, "/"))));
  window.flEncode = S => "1" + b64(JSON.stringify([+S.year || 0, S.name || "", S.style || "", (S.flights || []).map(f => [f.d, f.from, f.to, f.air || "", f.no || "", f.dep || "", f.arr || ""])]));
  window.flDecode = s => {
    if (s[0] !== "1") return JSON.parse(unb64(s));
    const [year, name, style, fl] = JSON.parse(unb64(s.slice(1)));
    return { year, name, style: style || "americana", flights: fl.map(([d, from, to, air, no, dep, arr]) => ({ d, from, to, air, no, dep, arr })) };
  };

  // Share buttons: Instagram (the picture, via the page's own download/share), Facebook, Threads, LINE and Email (a link to the log)
  window.flShareBar = (el, info, onInstagram) => {
    const go = kind => {
      const { url, text, subject } = info(), u = encodeURIComponent(url), t = encodeURIComponent(text);
      const href = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
        threads: `https://www.threads.net/intent/post?text=${encodeURIComponent(text + " " + url)}`,
        line: `https://social-plugins.line.me/lineit/share?url=${u}&text=${t}`,
        email: `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text + "\n\n" + url)}`,
      }[kind];
      if (kind === "email") location.href = href; else window.open(href, "_blank", "noopener,width=640,height=640");
    };
    el.innerHTML = [["instagram", "Instagram"], ["facebook", "Facebook"], ["threads", "Threads"], ["line", "LINE"], ["email", "Email"]]
      .map(([k, n]) => `<button type="button" class="sh sh-${k}" data-sh="${k}">${n}</button>`).join("")
      + (navigator.share ? `<button type="button" class="sh sh-more" data-sh="more">More…</button>` : "");
    el.addEventListener("click", async e => {
      const b = e.target.closest("[data-sh]"); if (!b) return;
      const k = b.dataset.sh;
      if (k === "instagram") onInstagram();
      else if (k === "more") { const { url, text, subject } = info(); try { await navigator.share({ title: subject, text, url }); } catch (err) {} }
      else go(k);
    });
  };
  window.FL_SHARE_CSS = `.share{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.share .sh{font:600 13px var(--body,system-ui);border:0;border-radius:999px;padding:8px 14px;cursor:pointer;color:#fff}
.sh-instagram{background:linear-gradient(45deg,#f9a03f,#e1306c 45%,#833ab4)}.sh-facebook{background:#1877f2}.sh-threads{background:#101010}
.sh-line{background:#06c755}.sh-email{background:#5d6b82}.sh-more{background:none;color:inherit!important;box-shadow:inset 0 0 0 1.5px currentColor}
.share .sh:focus-visible{outline:2px solid #e8a33a;outline-offset:2px}`;
})();
