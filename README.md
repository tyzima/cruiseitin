<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚢 Cruise Itinerary Viewer

A professional cruise itinerary viewer with interactive maps, weather forecasts, and detailed location information.

## 🌟 Features

- **Interactive Day Cards**: Accordion-style navigation through cruise days
- **Professional Weather Integration**: Real-time weather forecasts using Google Weather API
- **Interactive Maps**: OpenStreetMap integration with light theme and ship emoji markers
- **Location Details**: Comprehensive information about restaurants, attractions, and activities
- **Responsive Design**: Modern UI that works on all devices
- **TypeScript Support**: Fully typed codebase for better development experience

## 🚀 Live Demo

[View Live Application](https://tyzima.github.io/cruiseitin/)

## 🛠️ Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
   - Set the `VITE_GOOGLE_WEATHER_API_KEY` in `.env.local` to your Google Weather API key
     (Get your API key from: https://developers.google.com/maps/documentation/weather)

3. Run the app:
   ```bash
   npm run dev
   ```

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deployment

This app is automatically deployed to GitHub Pages via GitHub Actions. The deployment workflow:

1. Builds the app on every push to main branch
2. Deploys to GitHub Pages automatically
3. Available at: https://tyzima.github.io/cruiseitin/

## 🏗️ Project Structure

```
├── components/          # React components
│   ├── DayCard.tsx     # Individual day accordion card
│   ├── Map.tsx         # Interactive map component
│   ├── Weather.tsx     # Weather display component
│   └── ui/             # Reusable UI components
├── data/               # Static data files
├── services/           # API services
├── types.ts           # TypeScript type definitions
└── App.tsx            # Main application component
```

## 🔧 Technologies Used

- **React** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Leaflet** for map functionality
- **Google Weather API** for weather data
- **GitHub Pages** for deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
