// Flight log data. The yearly page (index.html in this folder) reads everything from here.
//  airports: IATA code -> city, lat, lon, tz (standard-time hours behind UTC: Pacific 8, Mountain 7,
//            Central 6, Eastern 5, Hawaii 10 with dst:false, Arizona 7 with dst:false; east of UTC = negative)
//  airlines: name -> code (2-letter IATA, used for the logo) and line color
//  flights:  d = departure date (YYYY-MM-DD, local), from/to = IATA codes, air = airline name,
//            no = flight number, t = "8:25 AM → 10:50 AM" (local times; arrival may be the next day),
//            note = optional short note. Never put confirmation codes, prices or card numbers here.
window.FLIGHT_LOG = {
  year: 2027,
  name: "Ting-yun Wu",
  airports: {
    SEA: { city: "Seattle", lat: 47.449, lon: -122.309, tz: 8 },
    SFO: { city: "San Francisco", lat: 37.619, lon: -122.375, tz: 8 },
    SJC: { city: "San José", lat: 37.363, lon: -121.929, tz: 8 },
    DFW: { city: "Dallas–Fort Worth", lat: 32.899, lon: -97.040, tz: 6 },
  },
  airlines: {
    Delta: { code: "DL", color: "#E3132C" },
    United: { code: "UA", color: "#0B2A7A" },
    Southwest: { code: "WN", color: "#F5A800" },
    Alaska: { code: "AS", color: "#1FA0C0" },
    Frontier: { code: "F9", color: "#2E8B57" },
    American: { code: "AA", color: "#0078D2" },
  },
  flights: [
    { d: "2027-01-04", from: "SEA", to: "SFO", air: "Delta", no: "DL 1412", t: "9:45 AM → 12:05 PM" },
  ],
};
