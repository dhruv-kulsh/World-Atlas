# World-Atlas

An App where you can discover all about the various countries. Available with Search and Sort features

Find the Deployed Website over here:- https://reactexplorecountryproject.netlify.app/

---

🌍 World Atlas – Personal Project

Key Features and Functionalities
Multi-Page Design using React Router DOM:

Implemented client-side routing to create seamless navigation between the homepage, country detail pages, and filtered lists (e.g., by continent).

Enabled deep linking (e.g., /country/India) so each country's page can be bookmarked or shared.

Live API Integration:

Fetched real-time country data from a public REST API (such as REST Countries API or similar).

Displayed dynamic data including population, area, currencies, flags, timezones, and capital cities.

Search Functionality:

Built a real-time search bar to help users quickly find a country by name.

Implemented case-insensitive matching and instant filtering while typing.

Sorting Options:

Allowed users to sort countries alphabetically, by population, or by area.

Sorting was implemented both ascending and descending, with clear UI indicators.

Continent-Level Filtering:

Provided filters to view countries based on their continent (e.g., Asia, Europe, Africa).

Used dropdowns or buttons to let users easily switch between region views.

Responsive UI:

Designed using CSS to ensure mobile-first responsiveness.

Flexbox and Grid layouts used for smooth adjustments across devices.

User Experience Enhancements:

Used loading indicators during API calls.

Displayed meaningful error messages if the API failed or data was not found.

Included animations or transitions for a polished feel.



## React + Vite Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
