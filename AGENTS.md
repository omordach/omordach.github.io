# AI Agent Context

## Project Overview

This repository (`omordach.github.io`) is a modern web application built using **React 19**, **TanStack Start**, and **Vite**.

## Technology Stack

- **Core Frameworks**: React 19, TanStack Start
- **Routing & Data Fetching**: TanStack Router, TanStack Query
- **Styling**: Tailwind CSS (v4)
- **UI Components**: Radix UI primitives, Lucide React (icons), Sonner (toast notifications), Embla Carousel
- **Forms & Validation**: React Hook Form, Zod
- **Build Tooling**: Vite with direct plugin composition: `@tanstack/react-start/plugin/vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`, and `nitro/vite` (build-only, `node-server` preset).
- **Language**: TypeScript (strict)

## Architecture & Development Guidelines

1. **Component Design**: Build modular, reusable functional components. Prioritize using Radix UI primitives for accessible component bases, styled with Tailwind CSS.
2. **State Management**: Prefer TanStack Query for server state management and data fetching. Use React Context or local state for UI state.
3. **Routing**: Adhere strictly to TanStack Router's file-based routing conventions.
4. **Build & Deploy**: The project uses Nitro to build a Node.js server (`node-server` preset). The Vite config at `vite.config.ts` wires up all plugins directly — you can add further Vite options there as needed.
