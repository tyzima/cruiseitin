<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1LmugexA4vUXnqOggQguDwogcpfaMLSlb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set up environment variables:
   - Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
   - Set the `VITE_GOOGLE_WEATHER_API_KEY` in [.env.local](.env.local) to your Google Weather API key
     (Get your API key from: https://developers.google.com/maps/documentation/weather)
3. Run the app:
   `npm run dev`
