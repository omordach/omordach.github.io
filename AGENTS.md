# AI Agent Context

## Project Overview

This repository (`omordach.github.io`) is a modern web application built using **React 19**, **TanStack Start**, and **Vite**.

## Technology Stack

- **Core Frameworks**: React 19, TanStack Start
- **Routing & Data Fetching**: TanStack Router, TanStack Query
- **Styling**: Tailwind CSS (v4)
- **UI Components**: Radix UI primitives, Lucide React (icons), Sonner (toast notifications), Embla Carousel
- **Forms & Validation**: React Hook Form, Zod
- **Build Tooling**: Vite, configured via `@lovable.dev/vite-tanstack-config`. The application uses Nitro configured with the `node-server` preset for deployment compatibility.
- **Language**: TypeScript (strict)

## Architecture & Development Guidelines

1. **Component Design**: Build modular, reusable functional components. Prioritize using Radix UI primitives for accessible component bases, styled with Tailwind CSS.
2. **State Management**: Prefer TanStack Query for server state management and data fetching. Use React Context or local state for UI state.
3. **Routing**: Adhere strictly to TanStack Router's file-based routing conventions.
4. **Build & Deploy**: The project uses Nitro to build a Node.js server. Do NOT modify the core Vite setup provided by `@lovable.dev/vite-tanstack-config` as it manages essential plugins.

<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->
