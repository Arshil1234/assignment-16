# SkyCast Weather App

A school assignment built with Next.js App Router, JavaScript, Tailwind CSS, Lucide React, and Open-Meteo.

## Features
- Four pages: Home, About, Services, and Contact
- Current temperature, conditions, local time, humidity, wind speed, and feels-like temperature
- City search through Open-Meteo geocoding
- 12-hour forecast with weather icons and rain probability when available
- Optional browser geolocation, refresh, loading states, and error handling
- Responsive layout and mobile navigation
- Contact form validation with a demo-only confirmation

## Run locally
```powershell
npm install
npm run dev
```
Then open http://localhost:3000.

Run `npm run build` to check a production build.
No API key is required for Open-Meteo's normal non-commercial use. The contact form does not send or store messages.
