# Requirements Document

## Introduction

A complete rewrite of an existing web page into a professional single-page website targeting an experienced IT Manager / Technical Program Manager (TPM). The site is built as a single HTML file using Tailwind CSS (CDN) and Vanilla JavaScript. It must establish authority, showcase high-impact leadership experience, present consulting and training services, and provide a clear path for visitors to make contact or book a service.

## Glossary

- **Website**: The single HTML file that constitutes the complete single-page application.
- **Navigation_Bar**: The sticky top navigation component that links to all page sections.
- **Hero_Section**: The above-the-fold introductory section containing the headline, value proposition, and CTA buttons.
- **Achievements_Section**: The section displaying 3–4 highlight cards with measurable career outcomes.
- **Services_Section**: The section presenting the full grid of consulting and training service offerings.
- **Contact_Section**: The section containing the contact form and direct messaging links.
- **Contact_Form**: The HTML form within the Contact_Section collecting visitor inquiries.
- **Mobile_Menu**: The collapsible navigation menu rendered on small-screen viewports.
- **CTA_Button**: A call-to-action button element that directs the user to a target section or action.
- **Service_Card**: A grid card element within the Services_Section describing a single service offering.
- **Achievement_Card**: A highlight card within the Achievements_Section describing a measurable outcome.
- **Language_Switcher**: A UI control within the Navigation_Bar that allows the user to toggle the active display language.
- **Translation_Dictionary**: A Vanilla JavaScript object embedded in the single HTML file that maps string keys to their translated values for each supported language.
- **Active_Language**: The currently selected display language for the session, stored in a JavaScript variable or localStorage.

---

## Requirements

### Requirement 1: Sticky Navigation Bar

**User Story:** As a visitor, I want a persistent navigation bar, so that I can jump to any section of the page at any time without scrolling back to the top.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL remain fixed at the top of the viewport while the user scrolls.
2. THE Navigation_Bar SHALL contain anchor links to the Hero_Section, Achievements_Section, Services_Section, and Contact_Section.
3. WHEN a navigation anchor link is clicked, THE Website SHALL smoothly scroll to the corresponding section.
4. WHEN the viewport width is below 768px, THE Navigation_Bar SHALL hide the anchor links and display a hamburger menu icon instead.
5. WHEN the hamburger menu icon is clicked, THE Mobile_Menu SHALL toggle its visibility between open and closed states.
6. WHEN a link inside the Mobile_Menu is clicked, THE Mobile_Menu SHALL close automatically.

---

### Requirement 2: Hero Section

**User Story:** As a visitor, I want a compelling above-the-fold section, so that I immediately understand who this professional is and what value they offer.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a professional headline that positions the subject as an expert IT Manager and Technical Program Manager.
2. THE Hero_Section SHALL display a value proposition statement focused on delivery, leadership, and process optimization.
3. THE Hero_Section SHALL contain a CTA_Button labeled "View Services" that scrolls the page to the Services_Section.
4. THE Hero_Section SHALL contain a CTA_Button labeled "Get in Touch" that scrolls the page to the Contact_Section.
5. WHEN a CTA_Button is hovered, THE CTA_Button SHALL apply a visible style change to indicate interactivity.
6. THE Hero_Section SHALL be fully responsive and render correctly on viewports from 320px to 1920px wide.

---

### Requirement 3: Key Achievements Section

**User Story:** As a prospective client, I want to see concrete, measurable career achievements, so that I can assess the professional's track record before engaging their services.

#### Acceptance Criteria

1. THE Achievements_Section SHALL display between 3 and 4 Achievement_Cards.
2. EACH Achievement_Card SHALL contain a metric or quantified outcome (e.g., percentage improvement, team size, system scale).
3. EACH Achievement_Card SHALL contain a brief descriptive label contextualizing the metric.
4. WHEN an Achievement_Card is hovered, THE Achievement_Card SHALL apply a subtle elevation or border style change.
5. THE Achievements_Section SHALL use a responsive grid layout that renders as a single column on mobile and as a multi-column grid on desktop.

---

### Requirement 4: Services Section

**User Story:** As a prospective client or student, I want to browse all available services in a structured layout, so that I can quickly identify which offering fits my needs.

#### Acceptance Criteria

1. THE Services_Section SHALL display a Service_Card for each of the following offerings: Mentorship, Scrum Master Course, Product Owner Course, Project Management Course, Technical Skills for IT Managers (TPM/TPO) Course, Consultation, and Interview Preparation.
2. EACH Service_Card SHALL contain a title and a brief description of the service.
3. EACH Service_Card SHALL contain an icon or visual indicator that differentiates it from other cards.
4. WHEN a Service_Card is hovered, THE Service_Card SHALL apply a visible style change (e.g., shadow elevation or border highlight).
5. THE Services_Section SHALL use a responsive grid layout that renders as a single column on mobile, two columns on tablet, and three or more columns on desktop.

---

### Requirement 5: Contact and Booking Section

**User Story:** As a visitor ready to engage, I want a clear and easy way to send a message and find direct contact options, so that I can initiate a conversation without friction.

#### Acceptance Criteria

1. THE Contact_Section SHALL contain a Contact_Form with the following fields: Name (text), Email (email), Service of Interest (select or text), and Message (textarea).
2. WHEN the Contact_Form is submitted with any required field empty, THE Contact_Form SHALL display an inline validation message identifying the missing field.
3. WHEN the Contact_Form is submitted with all required fields populated, THE Contact_Form SHALL display a confirmation message to the user.
4. THE Contact_Section SHALL contain a button or link for WhatsApp that opens a WhatsApp conversation in a new browser tab.
5. THE Contact_Section SHALL contain a button or link for Signal that opens the Signal deep-link or displays the Signal contact handle.
6. WHEN a WhatsApp or Signal button is hovered, THE button SHALL apply a visible style change to indicate interactivity.

---

### Requirement 6: Visual Design and Aesthetic

**User Story:** As a visitor, I want the website to look polished and professional, so that I trust the credibility of the IT Manager/TPM it represents.

#### Acceptance Criteria

1. THE Website SHALL use a color palette consisting of deep slate or navy as the primary color, crisp white as the background, and cool-gray as the accent color.
2. THE Website SHALL use a sans-serif font family optimized for readability and scanning.
3. THE Website SHALL apply consistent spacing and whitespace between all sections and components.
4. THE Website SHALL use semantic HTML5 elements (e.g., `<header>`, `<nav>`, `<section>`, `<footer>`, `<main>`).
5. THE Website SHALL include inline code comments marking each major section and any JavaScript logic for ease of future updates.

---

### Requirement 8: Multilanguage Support

**User Story:** As a visitor, I want to switch the website language between English and Ukrainian, so that I can read all content in my preferred language.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL contain a Language_Switcher that allows the user to toggle between English and Ukrainian.
2. THE Language_Switcher SHALL be visible on desktop viewports and SHALL also appear inside the Mobile_Menu on viewports below 768px.
3. WHEN the Language_Switcher is activated, THE Website SHALL re-render all visible text content in the selected language without reloading the page.
4. THE Website SHALL render the following content areas in the Active_Language: Navigation_Bar anchor link labels, Hero_Section headline and value proposition, CTA_Button labels, Achievements_Section heading and Achievement_Card labels, Services_Section heading and Service_Card titles and descriptions, Contact_Section heading, Contact_Form field labels and placeholder text, Contact_Form inline validation messages, Contact_Form confirmation message, and WhatsApp and Signal button labels.
5. THE Website SHALL default to English as the Active_Language on initial page load.
6. WHEN a language is selected, THE Website SHALL persist the Active_Language for the duration of the session using a JavaScript variable or localStorage.
7. WHEN the page is reloaded and a persisted language value exists in localStorage, THE Website SHALL restore the Active_Language to the persisted value.
8. THE Translation_Dictionary SHALL be a Vanilla JavaScript object embedded directly in the single HTML file containing all translatable strings for both English and Ukrainian.
9. THE Website SHALL use no external internationalization library; all translation logic SHALL be implemented using Vanilla JavaScript and the Translation_Dictionary.

---

### Requirement 7: Responsiveness and Accessibility

**User Story:** As a visitor on any device, I want the website to render correctly and be usable, so that I have a consistent experience regardless of screen size.

#### Acceptance Criteria

1. THE Website SHALL be fully responsive across viewport widths from 320px to 1920px.
2. THE Website SHALL pass basic accessibility requirements: all images SHALL include descriptive `alt` attributes, all form fields SHALL include associated `<label>` elements, and color contrast SHALL meet WCAG AA minimum ratios.
3. THE Website SHALL be deliverable as a single self-contained HTML file with Tailwind CSS loaded via CDN and no external build step required.
4. WHEN JavaScript is used for interactivity, THE Website SHALL use only Vanilla JavaScript with no external JavaScript framework dependencies.
