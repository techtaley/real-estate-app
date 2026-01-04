# Real Estate Listings & Analytics App (UI Phase)

A full-stack React + TypeScript application for browsing real estate listings, filtering properties, and exploring market insights. This repository currently contains the **UI phase**, built rapidly using Figma Make and converted to reusable React + Sass components.

---

## Overview

This project is a professional portfolio app designed to showcase:

- Browsing real estate listings
- Filtering by price, location, and bedrooms
- Viewing property details
- Responsive and reusable UI components
- Designed for easy integration with a backend API and analytics layer

**Goal:** Demonstrate strong UI/UX, component-based architecture, and readiness for full-stack integration.

---

## Tech Stack (UI Phase)

- **Frontend:** React, TypeScript, Sass, Vite  
- **Design / Prototyping:** Figma Make  
- **Version Control:** Git + GitHub  

**Planned Backend & Analytics:**

- Node.js API for real listings and filtering  
- Database (SQLite or MySQL/PostgreSQL)  
- Optional Python analytics for market trends and statistics  

---

## Features (Current Phase)

- Listing cards displaying property info (price, location, bedrooms)  
- Filters panel (price range, location, bedrooms)  
- Property detail pages  
- Responsive design for desktop and mobile  
- Component-based architecture for easy reuse in future projects  

---

## Project Structure

/real-estate-app
├─ client/ # React + TypeScript frontend
│ ├─ src/
│ │ ├─ components/ # Reusable UI components (cards, filters, buttons)
│ │ ├─ pages/ # ListingPage, PropertyDetailsPage, AnalyticsPage
│ │ ├─ data/ # Sample/mock data
│ │ ├─ styles/ # Sass styles
│ │ └─ App.tsx # Main app entry
│ ├─ public/ # Static assets
│ ├─ package.json
│ └─ vite.config.ts
├─ server/ # Backend folder (placeholder for Node.js API)
│ ├─ routes/
│ ├─ controllers/
│ ├─ models/ # Database schemas
│ ├─ db/ # Database connection files
│ ├─ server.js # Placeholder entry point
│ └─ package.json
├─ README.md
└─ .gitignore

> **Note:** The `server` folder is currently empty and will host the backend API as this project evolves.

---

## Features (UI Phase)

- Listing cards displaying property info (price, location, bedrooms)  
- Filters panel (price range, location, bedrooms)  
- Property detail pages  
- Responsive design for desktop and mobile  
- Component-based architecture for easy reuse in future full-stack development  

---

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/techtaley/real-estate-app.git

2. Navigate into the project folder:

cd real-estate-app

3. Install dependencies:

npm install

4. Run the development server:

npm run dev

5. Open the URL displayed in your browser to view the app.


Roadmap / Future Improvements
-Connect to a live database for real property listings
-Implement backend API with Node.js
-Add Python analytics layer for dynamic market insights
-Implement user authentication and profiles
-Integrate interactive map view for property locations
-Expand analytics page with charts for trends and averages

Screenshots / Demo

(Add screenshots or GIFs here of your listing cards, filters, analytics charts, etc.)


Attributions
-UI designed in Figma Make
-Built with React, TypeScript, Vite, Sass

Why This Project is Strong
-Real-world relatable domain for recruiters: real estate browsing and filtering
-Demonstrates polished, responsive UI and component reuse
-Lays foundation for full-stack and analytics integration
-Clear project structure for portfolio review

---

