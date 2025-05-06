# World-Atlas

An App where you can discover all about the various countries. Available with Search and Sort features

Find the Deployed Website over here:- https://reactexplorecountryproject.netlify.app/

---

🌍 World Atlas – Personal Project

Key Features and Functionalities
## 🌍 World Atlas – Key Features

1. **Multi-Page Design using React Router DOM**
   - Implemented client-side routing for seamless navigation between the homepage, country detail pages, and filtered lists.
   - Enabled deep linking (e.g., `/country/India`) for bookmarking and sharing.

2. **Live API Integration**
   - Fetched real-time country data from a public REST API (e.g., [REST Countries API](https://restcountries.com/)).
   - Displayed population, area, currencies, flags, timezones, capital cities, and more.

3. **Search Functionality**
   - Integrated a real-time search bar for quick lookup by country name.
   - Implemented case-insensitive search with live filtering.

4. **Sorting Options**
   - Allowed sorting countries alphabetically, by population, or by area.
   - Supported both ascending and descending order with intuitive UI indicators.

5. **Continent-Level Filtering**
   - Enabled filtering of countries by continent (e.g., Asia, Europe, Africa).
   - Used dropdowns or buttons for smooth user interaction.

6. **Responsive UI**
   - Designed with mobile-first principles using CSS Flexbox and Grid.
   - Ensured optimal layout across all device sizes.

7. **User Experience Enhancements**
   - Included loading indicators during API calls.
   - Displayed meaningful error messages when data fetch fails.
   - Added transitions and animations for a polished look and feel.


## React + Vite Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
