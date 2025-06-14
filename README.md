
# Airbnb Application Clone - Project Setup

## Overview
This repository contains a Next.js application that sets up the foundation for an Airbnb clone. The project focuses on establishing a proper folder structure, implementing basic routing, creating reusable components, and enforcing TypeScript best practices.

## Project Structure
```
alx-project-0x00-setup/
├── alx-project-0x00/
│   ├── components/
│   │   ├── Button.tsx       # Custom button component with variants
│   │   ├── Card.tsx         # Property listing card component
│   │   └── Pill.tsx         # Tag component for property features
│   ├── interfaces/
│   │   └── index.ts         # TypeScript interfaces
│   ├── pages/
│   │   ├── about.tsx        # About page
│   │   ├── index.tsx        # Home page
│   │   └── landing.tsx      # Landing page with component examples
│   ├── public/
│   │   └── assets/
│   │       └── images/      # Image assets
│   │           ├── house.png
│   │           └── star.png
│   └── README.md            # Project documentation
└── README.md                # Main repository documentation
```

## Key Features

### 1. Component Architecture
- **Card Component**: Displays property listings with images, details, and pricing
- **Pill Component**: Shows property features as tags
- **Button Component**: Configurable button with size and shape variants

### 2. TypeScript Implementation
- Strongly typed components with React.FC
- Custom interfaces for component props
- Type-safe component usage

### 3. Routing System
- Pages router implementation
- Automatic route creation based on file structure:
  - `/` → Home page
  - `/landing` → Component showcase
  - `/about` → About page

### 4. Responsive Design
- Flexbox and Grid layout
- Responsive sizing and spacing
- Hover effects and interactive elements

## Installation & Usage

1. Clone the repository:
```bash
git clone https://github.com/cherireal7/alx-project-0x00-setup.git
```

2. Install dependencies:
```bash
cd alx-project-0x00-setup/alx-project-0x00
npm install
```

3. Start the development server:
```bash
npm run dev -- -p 3000
```

4. Access the application:
- Home Page: http://localhost:3000
- Landing Page: http://localhost:3000/landing
- About Page: http://localhost:3000/about

## Components Documentation

### Card Component
Displays property listings with:
- Property image
- Title and location
- Rating
- Amenities (bedrooms, bathrooms, guests)
- Pricing

### Pill Component
Reusable tag component that accepts:
- `title`: Text to display inside the pill

### Button Component
Configurable button with:
- `title`: Button text
- `className`: Custom styling classes
- Predefined variants:
  - Sizes: Small, Medium, Large
  - Shapes: Rounded-sm, Rounded-md, Rounded-full

## Technical Highlights
- Next.js framework for server-side rendering
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Proper separation of concerns
- TypeScript interfaces for props validation

## Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes with descriptive messages
4. Push to your fork
5. Submit a pull request

## License
This project is licensed under the MIT License. See the LICENSE file for details.
