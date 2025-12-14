# Sala Site Project

This repository contains the multipurpose website for **Sala**, a company with two apps (Client and Driver). The website serves two main purposes:
1.  **Public-facing website**: To present the company, services, and app downloads.
2.  **Admin Dashboard**: A hidden internal management system for users, orders, and settings.

## Project Structure

This project is built with **Next.js (App Router)** and **Tailwind CSS**.

### Public Pages
- **Home**: Landing page with Hero, Services, How it works, Testimonials.
- **About**: Company mission/vision.
- **Services**: Detailed list of services.
- **Download Apps**: Links to Android/iOS apps for Clients and Drivers.
- **Contact**: Contact form and info.
- **Complaints**: Public submission form for complaints.
- **FAQ**: Frequently Asked Questions.
- **Legal**: Privacy Policy and Terms of Service.

### Admin Dashboard (Hidden)
- **Login**: Admin authentication.
- **Dashboard**: Overview and KPIs.
- **Management**: Users, Drivers, Orders, Products, Categories, Complaints.
- **Settings**: System configuration and roles.

## Component Structure

**IMPORTANT**: Each component must be in its own folder for better readability and structure.

### Structure Guidelines
```
components/
  ├── ComponentName/
  │   └── ComponentName.tsx
  ├── AnotherComponent/
  │   └── AnotherComponent.tsx
  └── ...
```

### Example
```
components/
  ├── Navbar/
  │   └── Navbar.tsx
  ├── Footer/
  │   └── Footer.tsx
  ├── Hero/
  │   └── Hero.tsx
  └── SocialMediaLinks/
      └── SocialMediaLinks.tsx
```

### Import Pattern
```tsx
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";
```

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Styling Guidelines
**IMPORTANT**: Do not hardcode colors in your components. Always use the CSS variables defined in `src/app/globals.css` (e.g., `var(--primary)`, `var(--background)`, `var(--foreground)`) to ensure consistency and theme support.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## Current Progress
- **Home Page**: Implementation in progress (Hero, Services, etc.).
