# ⚡ La Reebe — Frontend

Frontend application for La Reebe, a real-time electrical balance monitoring system that visualizes data from the Spanish Electrical Network (Red Eléctrica de España).

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Core Stack](#️-core-stack)
- [Functional Requirements](#-functional-requirements)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Authors](#-authors)
- [License](#-license)

---

## 📖 Overview

La Reebe provides an interactive interface to visualize Spain's electrical balance data in real-time. Users can explore generation, demand, imports/exports, and other electrical grid metrics through charts and data visualizations. The app consumes a REST API that aggregates historical and current data from REE (Red Eléctrica de España).

---

## ⚙️ Core Stack

- Vite for build tooling
- TypeScript for type safety
- React for building the UI
- React Query for data fetching and caching
- Chart.js / Recharts for data visualization
- Vitest and React Testing Library for testing

---

## 📌 Functional Requirements

- ✅ Visualize electrical balance data by date range
- ✅ Interactive charts showing generation, demand, and exchanges
- ✅ Real-time data updates from REE API
- ✅ Loading states and error handling
- ✅ Responsive design for desktop and mobile
- ✅ Date range selector for historical data
- ✅ Retry mechanism for failed API calls

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Setup

```bash
git clone https://github.com/ImperiAmic/rebe-front
cd rebe-front
npm install
cp .env.sample .env
# Configure your API base URL in the .env file
npm run dev
```

---

## 📜 Available Scripts

```bash
npm run dev            # Start the development server
npm run build          # Create production build
npm run preview        # Preview the production build
npm test               # Run tests
npm run test:dev       # Run tests in watch mode
npm run test:coverage  # Run tests with coverage
npm run lint           # Lint the code
```

---

## 📁 Project Structure

```bash
src/
│
├── components/          # Shared UI components
├── hooks/               # Custom hooks
├── pages/               # Application pages
├── services/            # API client and data fetching
├── types/               # TypeScript type definitions
├── utils/               # Helper functions and utilities
├── styles/              # Global styles
└── main.tsx             # App entry point
```

---

## 👥 Authors

This project was built with ⚡ by **Equipo Risa**:

- [Isabel Sáenz](https://github.com/IsaSaete)
- [Raimon Solà](https://github.com/ImperiAmic)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
