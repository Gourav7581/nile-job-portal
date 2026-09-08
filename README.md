# NILE Hospitality Careers Portal

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-REST_API-5A29E4?logo=axios&logoColor=white)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)

A responsive, API-powered careers portal designed for **NILE Hospitality**. The application brings employer branding, live hotel vacancies, job discovery and résumé submission together in a polished single-page experience.

The project focuses on a real recruitment workflow—not just a static UI. Candidates can explore the organization, filter open roles by department and property, view career programs and submit an application from any device.

## Highlights

- Live vacancies retrieved from the NILE Careers REST API
- Department and hotel-location filters
- Paginated job listings with hotel branding
- Job-specific application navigation
- Résumé upload and multipart form submission
- Responsive off-canvas navigation for mobile devices
- Dedicated pages for company information, culture, awards and career advice
- Touch-friendly carousels for hotels, awards, employee stories and partner brands
- Fully responsive layouts for desktop, tablet and mobile
- Reusable navigation, footer, gallery, card and carousel components

## Application Flow

```text
Explore NILE
     │
     ▼
Browse and filter vacancies ──► Select a position
                                      │
                                      ▼
                              Complete application
                                      │
                                      ▼
                               Upload résumé
                                      │
                                      ▼
                            Submit to Careers API
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Careers landing page, hotel portfolio and employer value proposition |
| `/about` | NILE Hospitality story, values and culture |
| `/findjobs` | API-driven vacancy search, filters and pagination |
| `/applynow` | Candidate details and résumé submission form |
| `/uchotels` | Responsive showcase of upcoming hotel properties |
| `/careeradvice` | Leadership programs, internships and career paths |
| `/awards` | Awards, employee recognition and brand partnerships |
| `/lifeatnile` | Workplace culture and employee experiences |

## Tech Stack

### Frontend

- **React 19** — component-based user interface
- **React Router** — client-side navigation
- **JavaScript (ES6+)** — application logic and asynchronous workflows
- **Bootstrap / React Bootstrap** — responsive layout and off-canvas navigation
- **Custom CSS** — brand styling and device-specific responsive design

### Data and UI

- **Axios and Fetch API** — vacancy retrieval and form submission
- **Swiper** — touch-enabled hotel carousel
- **React Slick** — awards, stories and brand sliders
- **Font Awesome / React Icons** — interface and social icons

### Quality and Tooling

- **Create React App / React Scripts** — development and production builds
- **React Testing Library** — component smoke tests
- **Web Vitals** — performance measurement support

## API Integration

The vacancy experience is connected to the NILE Careers API hosted on Azure.

```text
Base URL
https://hotelopsmasterapi.azurewebsites.net/API/NileCareersAPI
```

| Endpoint | Usage |
| --- | --- |
| `/DepartmentList` | Retrieves available job departments |
| `/LocationList` | Retrieves hotel/property locations |
| `/OpenPositionList` | Retrieves current vacancies |
| `/PostResume` | Accepts candidate details and résumé files |

API configuration and request functions are separated into the `src/Service Api` directory so that data access stays independent from page components.

## Responsive Design

The portal is designed across three main experiences:

- **Desktop:** full navigation, multi-column cards and vertical supporting carousels
- **Tablet:** reduced grids, responsive typography and an off-canvas menu
- **Mobile:** single-column content, touch-friendly controls, horizontal sliders and stacked application forms

Special attention was given to long job titles, variable hotel logos, dropdown menus, image aspect ratios and content-heavy sections that commonly break on smaller screens.

## Project Structure

```text
nile-job-portal/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── component/          # Shared UI, forms, cards and carousels
│   ├── image/              # Local hotel and brand assets
│   ├── pages/              # Route-level page components
│   ├── router/             # Central route configuration
│   ├── Service Api/        # Axios client, endpoints and API functions
│   ├── App.css             # Global and responsive styling
│   ├── App.test.js         # Component smoke tests
│   └── index.js            # Application entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
git clone https://github.com/Gourav7581/nile-job-portal.git
cd nile-job-portal
npm install
```

### Run locally

```bash
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

### Run tests

```bash
npm test -- --watchAll=false
```

### Create a production build

```bash
npm run build
```

The optimized deployment bundle is generated in the `build` directory.

## Engineering Decisions

- **Service layer separation:** API URLs and request functions are kept outside UI components.
- **Reusable site shell:** navigation and footer components provide consistent behavior across routes.
- **Progressive responsive layouts:** content is reorganized—not simply scaled down—on smaller screens.
- **Local visual assets:** important brand imagery is bundled with the application to avoid fragile external dependencies.
- **Accessible controls:** navigation, carousel controls, social links and images include descriptive labels.
- **Production validation:** the project supports optimized builds and component-level smoke tests.

## Key Challenges Solved

1. Displaying logos with different dimensions without stretching or breaking job-card alignment.
2. Converting desktop-heavy recruitment content into readable mobile layouts.
3. Supporting vertical desktop carousels and swipe-friendly mobile carousels.
4. Managing multiple asynchronous data sources for departments, locations and positions.
5. Sending applicant data and résumé files using `multipart/form-data`.
6. Preserving consistent navigation across content-heavy pages and screen sizes.

## Future Improvements

- Add dedicated job-detail API integration before application submission
- Introduce loading skeletons and richer empty/error states
- Add form validation with file type and size checks
- Add end-to-end tests for job search and application flows
- Move API configuration to environment variables
- Add search-friendly metadata and structured job-posting data
- Introduce an administrator dashboard for vacancy management

## Author

Developed as a portfolio project demonstrating responsive frontend engineering, REST API integration, reusable React architecture and real-world recruitment workflows.

If this project helped you understand my work, consider giving the repository a ⭐.
