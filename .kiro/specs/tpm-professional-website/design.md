# Design Document: TPM Professional Website

## Overview

A single self-contained HTML file that serves as a professional single-page website for an experienced IT Manager / Technical Program Manager (TPM). The site establishes authority, showcases measurable achievements, presents consulting and training services, and provides frictionless contact options.

**Technology constraints:**
- Single `.html` file — no build step, no bundler
- Tailwind CSS via CDN (Play CDN script tag)
- Vanilla JavaScript only — no frameworks, no i18n libraries
- All translation strings embedded in a `Translation_Dictionary` JS object
- `localStorage` for language persistence

**Supported languages:** English (default), Ukrainian

---

## Architecture

The entire application lives in one HTML file with three logical layers:

```
┌─────────────────────────────────────────────┐
│                  index.html                  │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  Presentation Layer (HTML + Tailwind) │   │
│  │  - Semantic HTML5 structure           │   │
│  │  - Tailwind utility classes           │   │
│  │  - data-i18n attributes on elements   │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  Interaction Layer (Vanilla JS)       │   │
│  │  - Mobile menu toggle                 │   │
│  │  - Smooth scroll                      │   │
│  │  - Contact form validation            │   │
│  │  - Language switcher                  │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  Data Layer (JS objects)              │   │
│  │  - Translation_Dictionary             │   │
│  │  - Active_Language variable           │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Page Section Flow

```
┌─────────────────────────────────┐
│  <header> Navigation_Bar        │  ← sticky, z-50
├─────────────────────────────────┤
│  <section> Hero_Section         │  ← full-viewport-height
├─────────────────────────────────┤
│  <section> Achievements_Section │
├─────────────────────────────────┤
│  <section> Services_Section     │
├─────────────────────────────────┤
│  <section> Contact_Section      │
├─────────────────────────────────┤
│  <footer>                       │
└─────────────────────────────────┘
```

---

## Components and Interfaces

### Navigation Bar (`<header>`)

- Fixed/sticky at top (`position: sticky; top: 0`) with a high z-index
- Contains: logo/name text, desktop anchor links, Language_Switcher, hamburger button
- Desktop (≥768px): anchor links visible, hamburger hidden
- Mobile (<768px): anchor links hidden, hamburger icon visible; Language_Switcher also appears inside Mobile_Menu
- Smooth scroll on anchor click via `scroll-behavior: smooth` on `<html>` or JS `scrollIntoView`
- Hamburger toggles `hidden` class on the Mobile_Menu `<div>`
- Clicking any Mobile_Menu link closes the menu

**Hamburger toggle logic:**
```js
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});
```

### Language Switcher

- Two buttons: `EN` | `UK` rendered in nav and duplicated inside Mobile_Menu
- Active language button gets a distinct style (e.g., underline or background highlight)
- On click: sets `Active_Language`, saves to `localStorage`, calls `applyTranslations()`
- On page load: reads `localStorage`, falls back to `'en'`

**Interface:**
```js
// Called on load and on every language switch
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = Translation_Dictionary[lang][key] ?? key;
  });
  // Handle placeholders separately via data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = Translation_Dictionary[lang][key] ?? key;
  });
}
```

### Hero Section (`<section id="hero">`)

- Full-viewport-height (`min-h-screen`) with centered content
- Deep slate/navy background, white text
- Elements: H1 headline, paragraph value proposition, two CTA_Buttons
- CTA "View Services" → `#services`, CTA "Get in Touch" → `#contact`
- Hover state on buttons: color inversion or shadow lift via Tailwind `hover:` utilities

### Achievements Section (`<section id="achievements">`)

- White or light-gray background for contrast with Hero
- 3–4 Achievement_Cards in a responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- Each card: large metric number (bold, accent color), descriptive label below
- Hover: subtle box-shadow lift (`hover:shadow-lg hover:-translate-y-1 transition`)

### Services Section (`<section id="services">`)

Seven Service_Cards:
1. Mentorship
2. Scrum Master Course
3. Product Owner Course
4. Project Management Course
5. Technical Skills for IT Managers (TPM/TPO) Course
6. Consultation
7. Interview Preparation

- Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Each card: SVG/emoji icon, title, short description
- Hover: border highlight or shadow elevation

### Contact Section (`<section id="contact">`)

**Contact_Form fields:**
- Name (text, required)
- Email (email, required)
- Service of Interest (select, required)
- Message (textarea, required)

**Validation logic:**
```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  fields.forEach(field => {
    if (!field.value.trim()) {
      showInlineError(field, Translation_Dictionary[lang]['validation_required']);
      valid = false;
    }
  });
  if (valid) showConfirmation();
});
```

- Inline error messages rendered as `<span>` elements adjacent to each field
- On successful submission: form hidden, confirmation `<div>` shown

**Direct contact buttons:**
- WhatsApp: `<a href="https://wa.me/{number}" target="_blank">`
- Signal: `<a href="https://signal.me/#p/{handle}" target="_blank">` or displays handle

### Footer (`<footer>`)

- Simple copyright line, dark background matching nav

---

## Data Models

### Translation_Dictionary

```js
const Translation_Dictionary = {
  en: {
    // Navigation
    nav_hero: "Home",
    nav_achievements: "Achievements",
    nav_services: "Services",
    nav_contact: "Contact",

    // Hero
    hero_headline: "Senior IT Manager & Technical Program Manager",
    hero_value_prop: "Driving delivery excellence, engineering leadership, and process optimization across complex programs.",
    hero_cta_services: "View Services",
    hero_cta_contact: "Get in Touch",

    // Achievements
    achievements_heading: "Key Achievements",
    achievement_1_metric: "40%",
    achievement_1_label: "Reduction in delivery cycle time across 3 product teams",
    achievement_2_metric: "120+",
    achievement_2_label: "Engineers led across distributed teams",
    achievement_3_metric: "5×",
    achievement_3_label: "Faster incident resolution after process overhaul",
    achievement_4_metric: "98%",
    achievement_4_label: "On-time delivery rate over 2 years",

    // Services
    services_heading: "Services",
    service_mentorship_title: "Mentorship",
    service_mentorship_desc: "1-on-1 guidance for engineers and managers navigating career growth.",
    service_scrum_title: "Scrum Master Course",
    service_scrum_desc: "Practical Scrum training to lead agile teams with confidence.",
    service_po_title: "Product Owner Course",
    service_po_desc: "Learn to define vision, manage backlogs, and deliver value.",
    service_pm_title: "Project Management Course",
    service_pm_desc: "End-to-end project management fundamentals and advanced techniques.",
    service_tpm_title: "Technical Skills for IT Managers (TPM/TPO)",
    service_tpm_desc: "Bridge the gap between engineering and management with hands-on technical skills.",
    service_consultation_title: "Consultation",
    service_consultation_desc: "Strategic advisory sessions for teams and organizations.",
    service_interview_title: "Interview Preparation",
    service_interview_desc: "Mock interviews and coaching for senior engineering and management roles.",

    // Contact
    contact_heading: "Get in Touch",
    contact_name_label: "Name",
    contact_name_placeholder: "Your name",
    contact_email_label: "Email",
    contact_email_placeholder: "your@email.com",
    contact_service_label: "Service of Interest",
    contact_message_label: "Message",
    contact_message_placeholder: "Tell me how I can help...",
    contact_submit: "Send Message",
    contact_whatsapp: "Chat on WhatsApp",
    contact_signal: "Message on Signal",
    contact_confirmation: "Thank you! Your message has been received. I'll be in touch shortly.",
    validation_required: "This field is required.",
    validation_email: "Please enter a valid email address.",
  },
  uk: {
    // Navigation
    nav_hero: "Головна",
    nav_achievements: "Досягнення",
    nav_services: "Послуги",
    nav_contact: "Контакт",

    // Hero
    hero_headline: "Старший IT-менеджер та технічний програмний менеджер",
    hero_value_prop: "Забезпечую досконалість доставки, технічне лідерство та оптимізацію процесів у складних програмах.",
    hero_cta_services: "Переглянути послуги",
    hero_cta_contact: "Зв'язатися",

    // Achievements
    achievements_heading: "Ключові досягнення",
    achievement_1_metric: "40%",
    achievement_1_label: "Скорочення циклу доставки в 3 продуктових командах",
    achievement_2_metric: "120+",
    achievement_2_label: "Інженерів під керівництвом у розподілених командах",
    achievement_3_metric: "5×",
    achievement_3_label: "Швидше вирішення інцидентів після оптимізації процесів",
    achievement_4_metric: "98%",
    achievement_4_label: "Вчасна доставка протягом 2 років",

    // Services
    services_heading: "Послуги",
    service_mentorship_title: "Менторство",
    service_mentorship_desc: "Індивідуальне керівництво для інженерів і менеджерів у розвитку кар'єри.",
    service_scrum_title: "Курс Scrum Master",
    service_scrum_desc: "Практичне навчання Scrum для впевненого керівництва agile-командами.",
    service_po_title: "Курс Product Owner",
    service_po_desc: "Навчіться визначати бачення, керувати беклогом і доставляти цінність.",
    service_pm_title: "Курс з управління проєктами",
    service_pm_desc: "Основи та поглиблені техніки управління проєктами від початку до кінця.",
    service_tpm_title: "Технічні навички для IT-менеджерів (TPM/TPO)",
    service_tpm_desc: "Подолайте розрив між інженерією та менеджментом за допомогою практичних технічних навичок.",
    service_consultation_title: "Консультація",
    service_consultation_desc: "Стратегічні консультаційні сесії для команд і організацій.",
    service_interview_title: "Підготовка до співбесіди",
    service_interview_desc: "Пробні співбесіди та коучинг для старших інженерних і управлінських ролей.",

    // Contact
    contact_heading: "Зв'язатися",
    contact_name_label: "Ім'я",
    contact_name_placeholder: "Ваше ім'я",
    contact_email_label: "Електронна пошта",
    contact_email_placeholder: "ваш@email.com",
    contact_service_label: "Послуга, що цікавить",
    contact_message_label: "Повідомлення",
    contact_message_placeholder: "Розкажіть, як я можу допомогти...",
    contact_submit: "Надіслати повідомлення",
    contact_whatsapp: "Написати у WhatsApp",
    contact_signal: "Написати у Signal",
    contact_confirmation: "Дякую! Ваше повідомлення отримано. Я зв'яжуся з вами найближчим часом.",
    validation_required: "Це поле є обов'язковим.",
    validation_email: "Будь ласка, введіть дійсну адресу електронної пошти.",
  }
};
```

### Active Language State

```js
// Initialized on page load
let Active_Language = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  Active_Language = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  updateLanguageSwitcherUI(lang);
}
```

### Form Field Model

Each form field is represented in the DOM with:
- `<label for="fieldId" data-i18n="label_key">`
- `<input id="fieldId" data-i18n-placeholder="placeholder_key">`
- `<span class="error-msg hidden" id="fieldId-error">`

---
