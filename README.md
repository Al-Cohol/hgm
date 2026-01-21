# iPermit Pro - Smart Permit Management System

A modern, responsive web application for managing plumbing permits and jobs built with React, TypeScript, and Tailwind CSS.

## Features

- **Dashboard**: Overview of jobs, analytics, and quick actions
- **Job Management**: Create, view, edit, and track permit jobs
- **Analytics**: Performance insights and revenue tracking
- **User Management**: Team member administration
- **Company Settings**: Business profile and preferences
- **Multi-step Job Creation**: Guided workflow for creating new permits
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── IPermitPro.tsx    # Main application component
├── App.tsx               # Root component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Dashboard
- Welcome section with user greeting
- Key metrics (Total Jobs, Pending, Completed, Revenue)
- Recent jobs table
- Quick action cards

### Job Management
- Complete job listing with search and filters
- Detailed job view with contact information and timeline
- Multi-step job creation workflow
- Status tracking and updates

### Analytics
- Revenue and performance metrics
- Job status distribution charts
- Top performing services
- Monthly trends and insights

### User Management
- Team member profiles
- Role-based access control
- User status management

### Company Settings
- Business information management
- Address and contact details
- Notification preferences

## Customization

The application uses Tailwind CSS for styling, making it easy to customize:

- Colors and themes can be modified in `tailwind.config.js`
- Component styles are utility-based for easy maintenance
- Responsive design breakpoints are built-in

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.