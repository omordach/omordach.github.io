# Implementation Plan: TPM Professional Website

## Overview

Build a single self-contained `index.html` file using Tailwind CSS (CDN) and Vanilla JavaScript. The file implements a professional single-page website for a TPM/IT Manager with sticky navigation, bilingual support (EN/UK), achievements, services, and a contact form.

## Tasks

- [x] 1. Project scaffold — base HTML file
  - Create `index.html` with `<!DOCTYPE html>`, `<html lang="en">`, `<head>` (charset, viewport, title), and Tailwind Play CDN `<script>` tag
  - Add semantic HTML5 skeleton: `<header>`, `<main>` containing four `<section>` elements (`#hero`, `#achievements`, `#services`, `#contact`), and `<footer>`
  - Set `scroll-behavior: smooth` on `<html>` via a Tailwind config or inline style
  - Add section-level HTML comments marking each major block
  - _Requirements: 6.4, 6.5, 7.3_

- [x] 2. Data layer — Translation_Dictionary and language state
  - [x] 2.1 Embed the Translation_Dictionary JS object inside a `<script>` tag at the bottom of `<body>`
    - Include all EN and UK keys listed in the design: nav, hero, achievements, services, contact, validation strings
    - _Requirements: 8.8, 8.9_
  - [x] 2.2 Add Active_Language initialization and `setLanguage()` / `applyTranslations()` functions
    - Read `localStorage.getItem('lang')` on load, fall back to `'en'`
    - `applyTranslations()` iterates `[data-i18n]` and `[data-i18n-placeholder]` elements
    - `setLanguage()` updates `Active_Language`, writes to `localStorage`, calls `applyTranslations()`, and updates switcher UI
    - _Requirements: 8.5, 8.6, 8.7, 8.9_

- [x] 3. Navigation Bar
  - [x] 3.1 Implement sticky `<header>` with logo/name text and desktop anchor links
    - Apply `sticky top-0 z-50` and a dark background matching the footer
    - Add `<nav>` with anchor links to `#hero`, `#achievements`, `#services`, `#contact` using `data-i18n` attributes
    - Hide links on mobile (`hidden md:flex`), show hamburger icon (`md:hidden`)
    - _Requirements: 1.1, 1.2, 1.4_
  - [x] 3.2 Implement hamburger toggle and Mobile_Menu
    - Add a `<div id="mobile-menu">` below the nav bar, initially `hidden`
    - Wire hamburger button click to toggle `hidden` on `#mobile-menu`
    - Wire each `<a>` inside `#mobile-menu` to add `hidden` back on click
    - _Requirements: 1.4, 1.5, 1.6_
  - [x] 3.3 Implement Language_Switcher in desktop nav and inside Mobile_Menu
    - Render `EN` and `UK` buttons in both locations
    - Active language button gets a distinct Tailwind style (e.g., `underline font-bold`)
    - Each button calls `setLanguage('en')` or `setLanguage('uk')` on click
    - `updateLanguageSwitcherUI()` syncs active style across both switcher instances
    - _Requirements: 8.1, 8.2, 8.3_
  - [x] 3.4 Wire smooth scroll for all anchor links
    - Confirm `scroll-behavior: smooth` is active or attach `scrollIntoView({ behavior: 'smooth' })` to each anchor
    - _Requirements: 1.3_

- [x] 4. Hero Section
  - [x] 4.1 Build Hero_Section HTML structure
    - `<section id="hero">` with `min-h-screen`, deep slate/navy background, white text, centered flex layout
    - `<h1 data-i18n="hero_headline">`, `<p data-i18n="hero_value_prop">`, two `<a>` CTA buttons
    - CTA "View Services" href `#services`, CTA "Get in Touch" href `#contact`, both with `data-i18n` keys
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  - [x] 4.2 Apply hover states and responsive layout to Hero
    - Add Tailwind `hover:` utilities on both CTA buttons (color inversion or shadow lift)
    - Verify layout renders correctly from 320px to 1920px (single column, centered)
    - _Requirements: 2.5, 2.6_

- [x] 5. Achievements Section
  - [x] 5.1 Build Achievements_Section HTML with 4 Achievement_Cards
    - `<section id="achievements">` with light background for contrast
    - Section heading `<h2 data-i18n="achievements_heading">`
    - Responsive grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
    - Each card: large metric `<span data-i18n="achievement_N_metric">` and label `<p data-i18n="achievement_N_label">`
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 5.2 Apply hover elevation to Achievement_Cards
    - Add `hover:shadow-lg hover:-translate-y-1 transition` to each card element
    - _Requirements: 3.4, 3.5_

- [x] 6. Services Section
  - [x] 6.1 Build Services_Section HTML with 7 Service_Cards
    - `<section id="services">` with section heading `<h2 data-i18n="services_heading">`
    - Responsive grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
    - Each card: SVG icon or emoji, `<h3 data-i18n="service_X_title">`, `<p data-i18n="service_X_desc">`
    - Cover all 7 services: Mentorship, Scrum Master Course, Product Owner Course, Project Management Course, Technical Skills for IT Managers (TPM/TPO), Consultation, Interview Preparation
    - _Requirements: 4.1, 4.2, 4.3_
  - [x] 6.2 Apply hover styles to Service_Cards
    - Add border highlight or shadow elevation via Tailwind `hover:` utilities
    - _Requirements: 4.4, 4.5_

- [x] 7. Contact Section
  - [x] 7.1 Build Contact_Section HTML with Contact_Form
    - `<section id="contact">` with heading `<h2 data-i18n="contact_heading">`
    - Four fields with `<label>` + input/select/textarea pairs, each with `data-i18n` on label and `data-i18n-placeholder` on input
    - Fields: Name (text), Email (email), Service of Interest (select with all 7 services as options), Message (textarea)
    - Each field followed by a `<span class="hidden" id="fieldId-error">` for inline errors
    - Submit button with `data-i18n="contact_submit"`
    - Hidden confirmation `<div id="contact-confirmation" data-i18n="contact_confirmation">`
    - _Requirements: 5.1, 7.2_
  - [x] 7.2 Implement Contact_Form validation and submission logic
    - On submit: `e.preventDefault()`, iterate required fields, show inline error spans for empty fields
    - Email field: additionally validate format with a regex check, show `validation_email` key if invalid
    - If all valid: hide form, show `#contact-confirmation`
    - Inline error messages use `Translation_Dictionary[Active_Language]` keys
    - _Requirements: 5.2, 5.3_
  - [x] 7.3 Add WhatsApp and Signal contact buttons
    - WhatsApp: `<a href="https://wa.me/PLACEHOLDER_NUMBER" target="_blank" data-i18n="contact_whatsapp">`
    - Signal: `<a href="https://signal.me/#p/PLACEHOLDER_HANDLE" target="_blank" data-i18n="contact_signal">`
    - Apply Tailwind `hover:` style change on both buttons
    - _Requirements: 5.4, 5.5, 5.6_

- [x] 8. Footer
  - Add `<footer>` with dark background matching the nav, centered copyright line
  - _Requirements: 6.1, 6.3_

- [x] 9. Checkpoint — verify core structure and translations
  - Ensure all `data-i18n` keys in the HTML match keys defined in Translation_Dictionary for both `en` and `uk`
  - Open the file in a browser and toggle EN/UK to confirm all visible text switches correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Visual polish
  - [x] 10.1 Apply consistent color palette across all sections
    - Deep slate/navy (`slate-800` or `slate-900`) for nav, hero background, footer
    - Crisp white (`white`) for section backgrounds and text on dark backgrounds
    - Cool-gray (`gray-100` / `gray-200`) for alternating section backgrounds and card surfaces
    - Accent color (e.g., `indigo-500` or `blue-600`) for metric numbers and interactive highlights
    - _Requirements: 6.1_
  - [x] 10.2 Apply typography and spacing
    - Use a sans-serif Tailwind font stack (`font-sans`) site-wide
    - Apply consistent vertical padding between sections (`py-16` or `py-20`)
    - Ensure heading hierarchy (h1 > h2 > h3) is visually distinct
    - _Requirements: 6.2, 6.3_

- [x] 11. Responsiveness verification
  - [x] 11.1 Verify layout at 320px viewport width
    - All sections render as single column, no horizontal overflow, text readable
    - Mobile_Menu opens and closes correctly
    - _Requirements: 7.1, 2.6_
  - [x] 11.2 Verify layout at 768px viewport width
    - Achievements grid switches to 2 columns, Services grid switches to 2 columns
    - Desktop nav links visible, hamburger hidden
    - _Requirements: 7.1, 3.5, 4.5_
  - [x] 11.3 Verify layout at 1920px viewport width
    - Content is max-width constrained (e.g., `max-w-7xl mx-auto`) and centered
    - Services grid shows 3 columns, Achievements grid shows 4 columns
    - _Requirements: 7.1, 3.5, 4.5_

- [x] 12. Accessibility
  - [x] 12.1 Add descriptive `alt` attributes to all images and icon elements
    - Any `<img>` tags get meaningful `alt` text; decorative SVGs get `aria-hidden="true"`
    - _Requirements: 7.2_
  - [x] 12.2 Verify all form fields have associated `<label>` elements
    - Confirm each `<label for="id">` matches its input's `id`
    - _Requirements: 7.2_
  - [x] 12.3 Check color contrast for text on dark and light backgrounds
    - Confirm white text on slate-800/900 meets WCAG AA (4.5:1 for normal text)
    - Confirm dark text on gray-100 meets WCAG AA
    - _Requirements: 7.2_

- [x] 13. Final review and delivery check
  - Confirm the file is fully self-contained: no local asset references, Tailwind loaded via CDN only
  - Review all placeholder data (WhatsApp number, Signal handle, name/title) and add clear `<!-- PLACEHOLDER -->` comments
  - Verify inline code comments mark each major section and all JS logic blocks
  - Confirm no external JS framework dependencies exist in the file
  - _Requirements: 6.5, 7.3, 7.4_

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- All translatable strings must have matching keys in both `en` and `uk` dictionaries before wiring `applyTranslations()`
- WhatsApp and Signal links use placeholder values — replace with real contact details before publishing
- Property tests are not applicable for this feature (pure HTML/CSS/JS with no algorithmic logic to property-test)
