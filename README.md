# Analysis Dashboard (Frontend)

A sleek, premium, and highly interactive intelligence dashboard designed for real-time PR and sentiment analysis. This project is built as a Single Page Application (SPA) using React and Vite, featuring dynamic visualizations, responsive layouts, and a modern aesthetic.

## 🚀 Live Demo

**[View the Live Application on Vercel](https://frontend-swart-alpha-94.vercel.app)**

## 🌟 Key Features

* **Sentiment Breakdown:** A custom gradient-filled bar chart showing positive, neutral, and negative sentiment distribution.
* **Competitor Head-to-Head:** Side-by-side comparison mode with dynamic, deterministic mock data shifting to allow the design team to view distinct market data.
* **Intelligence Word Cloud:** A dense, block-style word cloud rendered using `react-wordcloud` with orthogonal orientations and a specialized color palette.
* **Top Companies & Publications:** Visually striking progress bars and horizontal charts showcasing the top 10 Indian brands and media outlets.
* **Responsive Layout:** fully optimized for both desktop and mobile viewing with advanced Tailwind CSS grid implementations.

## 🛠 Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Charts & Visualizations:** Recharts, React Wordcloud
* **Routing:** React Router DOM
* **Deployment:** Vercel

## ⚙️ Running Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The application will typically start on `http://localhost:4002`.*

3. **Build for Production:**
   ```bash
   npm run build
   ```

## 📝 Deployment Notes

This application uses client-side routing. It includes a `vercel.json` configuration file to properly redirect all traffic to `index.html`, preventing `404 NOT_FOUND` errors when directly accessing routes like `/login`.

---
*Maintained by satyam1289*
