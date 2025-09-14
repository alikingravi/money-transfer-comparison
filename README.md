# Money Comparison App

A modern Next.js project to quickly compare currency exchange rates and find the best value for your money.

[![Node.js](https://img.shields.io/badge/Node.js-23.9.0-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Production-000000?style=flat&logo=vercel)](https://vercel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-FF6EC7?style=flat)](https://ui.shadcn.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/React%20Query-5.87.4-FF4154?style=flat)](https://tanstack.com/query/latest)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-4.1.8-7D4CDB?style=flat&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR42mNk+M9Qz0AEYBxVSFIAAGoAAcVt6bIAAAAASUVORK5CYII=)](https://github.com/colinhacks/zod)

The app features:

- Dark/Light mode toggle
- Clean UI with TailwindCSS and Shadcn components
- Real-time currency comparison via Wise API
- Error handling and loading states using React Query
- Zod for form schema validation

---

## Live Demo

You can view the deployed app on [Vercel](https://money-transfer-comparison-sigma.vercel.app/).

---

## Getting Started Locally

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/alikingravi/money-transfer-comparison.git
cd money-comparison
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a .env file in the root of the project and add the following:

```bash
NEXT_PUBLIC_COMPARISON_API_URL=https://api.wise.com/v4
NEXT_PUBLIC_CURRENCY_API_URL=https://api.transferwise.com/v1
```

### 4. Run the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser to view the app.

## Notes

- Node.js >= 18 is recommended
- The app uses Next.js 15, React 19, TypeScript, TailwindCSS, Shadcn, Zod and React Query.
- API errors are handled gracefully via server-side wrappers.
- The choice of frontend testing is **Jest** and **React Testing Library**.  
  However, testing has been omitted for this demo to focus on the core functionality.
