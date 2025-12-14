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

## Dynamic Popup System
**Importance**: Enhances user experience by providing immediate, visually appealing feedback (Success, Error, Warning, Info) without disrupting the user flow.

- **Global Access**: Managed via `PopupContext`, allowing any component to trigger notifications easily.
- **Design**: Glassmorphism style with smooth entrance/exit animations.
- **Usage**:
  ```tsx
  const { showPopup } = usePopup();
  showPopup({ 
    type: 'success', 
    title: 'Success!', 
    message: 'Operation completed.' 
  });
  ```

## Styling Guidelines
**IMPORTANT**: Do not hardcode colors in your components. Always use the CSS variables defined in `src/app/globals.css` (e.g., `var(--primary)`, `var(--background)`, `var(--foreground)`) to ensure consistency and theme support.

## API Route Structure

All API routes should be placed in `app/api`. This project uses standard Next.js Route Handlers.

### Guidelines
- **Path**: `app/api/[resource]/route.ts`
- **Response Format**: Always return JSON.
- **Error Handling**: Use consistent error status codes (400, 401, 403, 404, 500) and JSON error messages.

### Example
```ts
// app/api/example/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: "Success" });
}
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```bash
MONGODB_URI=your_mongodb_connection_string_here
```

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
